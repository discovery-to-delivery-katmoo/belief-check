// Checks that BELIEF-CHECK.md still follows its own rules.
// Run: node tests/check-rules.mjs
import { readFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");
const src = read("BELIEF-CHECK.md");
const failures = [];
const check = (ok, message) => { if (!ok) failures.push(message); };

// Part A has exactly 12 numbered rules, 1 to 12 in order.
const partA = src.split("## Part A")[1]?.split("\n## Part B")[0] ?? "";
const rules = [...partA.matchAll(/^(\d+)\. /gm)].map((m) => Number(m[1]));
check(rules.length === 12 && rules.every((n, i) => n === i + 1),
  `Part A should have rules 1 to 12, found: ${rules.join(", ") || "none"}`);

// Steps B1 to B9 each a heading once.
for (let i = 1; i <= 9; i++) {
  const n = src.match(new RegExp(`^### B${i}\\. `, "gm"))?.length ?? 0;
  check(n === 1, `B${i} should appear once as a heading, found ${n}`);
}

// Labels, source types and verdicts, spelled exactly in their tables.
for (const label of ["verified", "secondary", "unverified"])
  check(new RegExp(`^\\| ${label} \\|`, "m").test(src), `Source label row missing: ${label}`);
for (const type of ["official", "vendor's own claim", "independent data", "one person's account", "your interviews"])
  check(new RegExp(`^\\| ${type} \\|`, "m").test(src), `Source type row missing: ${type}`);
for (const verdict of ["Supported", "Not supported", "Mixed", "Not enough evidence"])
  check(new RegExp(`^\\| ${verdict} \\|`, "m").test(src), `Verdict row missing: ${verdict}`);

// Report headings 1 to 7, in order.
const headings = ["The question", "Beliefs", "What we found", "Not tested with real people",
  "What this could mean", "Honest limits", "Sources"];
let at = src.indexOf("### G3");
headings.forEach((h, i) => {
  const pos = src.indexOf(`**${i + 1}. ${h}.**`, at);
  check(pos > at, `Report heading ${i + 1} "${h}" missing or out of order`);
  if (pos > at) at = pos;
});

// Readability rules and the "At a glance" block are present.
check(src.includes("### G2. Write it so anyone can read it"), "Readability rules (G2) missing");
check(src.includes("**At a glance.**"), "At a glance block missing from the report");

// The boundary line appears exactly once, as written.
const boundary = "Choosing between these is a judgement call about your product: your goals, your users and what you're willing to trade off. It's often worth talking it through with someone who has made calls like this before.";
check((src.split(boundary).length - 1) === 1, "The boundary line should appear exactly once in BELIEF-CHECK.md");

// Fixed sentences.
for (const s of [
  "I'll turn your idea into beliefs we can test, research them, and show you what the evidence could mean. I won't choose for you.",
  "To go deeper on one option, start a new Belief Check and give it this report.",
  "How to read this.",
  "Is this right? Change anything before I start.",
  "That one's yours to call.",
  "None found",
]) check(src.includes(s), `Fixed sentence missing: "${s}"`);

// Never ask what people would pay, and never recommend.
check(/never use what people say they would pay/i.test(src), "Willingness to pay rule missing");
check(!/\b(we|I) recommend\b/i.test(src), 'The instructions say "recommend" as their own advice');

// No em or en dashes in anything people read.
const peopleRead = ["BELIEF-CHECK.md", "README.md"];
for (const f of readdirSync(join(root, "start"))) peopleRead.push(`start/${f}`);
for (const rel of peopleRead)
  read(rel).split("\n").forEach((line, i) => {
    if (/[–—]/.test(line)) failures.push(`Dash in ${rel}, line ${i + 1}`);
  });

// Short enough to paste into a chat.
const words = src.split(/\s+/).filter(Boolean).length;
check(words < 5000, `BELIEF-CHECK.md has ${words} words; the limit is 5,000`);

try {
  execFileSync("node", [join(root, "scripts/build-skill"), "--check"], { stdio: "pipe" });
} catch (err) {
  failures.push(`build-skill --check failed: ${String(err.stderr || err.message).trim()}`);
}

// Words a directory policy check may misread, anywhere in the shipped plugin folder.
{
  const { readdirSync: rd, statSync: st } = await import("node:fs");
  const walk = (dir) => rd(join(root, dir)).flatMap((f) => {
    const rel = `${dir}/${f}`;
    return st(join(root, rel)).isDirectory() ? walk(rel) : [rel];
  });
  for (const rel of walk("plugins/belief-check")) {
    if (!/\.(md|json)$/.test(rel)) continue;
    if (/dangerously|skip-permissions|bypassPermissions/i.test(read(rel))) failures.push(`Policy-sensitive word in ${rel}`);
  }
}

if (failures.length) {
  console.error(`${failures.length} problem(s):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log(`All checks passed (${words} words).`);
