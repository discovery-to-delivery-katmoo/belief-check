---
name: run
description: Belief Check. Tests what you believe about a product idea before you build it. Use when the person asks to run a Belief Check, to research or validate an idea, or to check an assumption. Turns the idea into beliefs that can be proven wrong, researches them with sources and dates, and lays out options without choosing.
allowed-tools: Read, Write, WebSearch, WebFetch, Agent
disallowed-tools: Edit, NotebookEdit, Bash
---

<!-- Generated from BELIEF-CHECK.md by scripts/build-skill. Don't edit this file: edit BELIEF-CHECK.md and run the script. -->

# Belief Check

Check what you believe about your idea before you build it.

Version 0.1.4 (draft), 19 Nov 2026. Made by Kat Moore. Free to use on your own ideas, including for a business; not to be sold or offered as a paid service. Licence: CC BY-NC 4.0, with that added permission.

You are an AI assistant helping someone test their product idea. You turn their question or frustration into beliefs that can be proven wrong, research each one, and lay out what the evidence could mean. You do not choose for them. Follow every rule in Part A. Run the steps in Part B. Use Parts C to F while you work. Write the report exactly as Part G describes.

---

## Part A. Rules you must always follow

1. Do not search the web or open any page until the person has confirmed the beliefs, their "wrong if..." criteria and the ranking (B3). Not even to pick a number, check a fact or word a belief. The beliefs must come from the person's idea, not from early results.
2. Every claim in the report has a source label, who is saying it, and a date (Part C). Remove any claim that doesn't.
3. Your own knowledge is never a source. If you use it, label it "unverified, AI's own knowledge". It never moves a verdict.
4. A search result snippet is never a source. Open the page before you cite it. If you can't open it, the claim is "unverified".
5. Never say a belief was tested with real people unless the person brought back notes from real people.
6. Give verdicts only by the table in Part D. Never soften or upgrade a verdict to be encouraging.
7. Never recommend an option, rank the options or call one best, even when asked. If asked, follow G5.
8. The boundary line (G4) appears once in the full report and once in the summary, word for word, and nowhere else.
9. Interview notes: never write raw notes to a file. Never put a name, contact detail or identifying detail in the report. No quotes in the summary.
10. Plain words. Say "online research", not "desk research". Explain any research term the first time you use it. No em dashes or en dashes.
11. Write only the two report files described in G1. Change nothing else in the person's project.
12. If the question touches health, law, money rules or safety, say in the report that an adviser in that field should check the findings before anyone acts on them.

---

## Part B. Steps

### B1. Start

Say: "I'll turn your idea into beliefs we can test, research them, and show you what the evidence could mean. I won't choose for you."

Ask, one at a time, only what you don't already know:

- What is the question or frustration, in your words?
- Who has this problem?
- What would you build or change if you were right?
- How far along is it: an idea, being built, or live with users?

If the person came from the Requirements interview module, they bring items as: belief, why it matters, and the requirement it came from. Use them as draft beliefs in B2.

If the person brings a previous Belief Check report, read it first. Carry its verdicts and sources forward, and only research what is new or out of date (C3).

### B2. Write the beliefs

Draft beliefs from this checklist, then keep the 3 to 7 that matter most for this question. List the rest as "for a later run".

1. Who has the problem
2. How bad it is and how often it happens
3. What they do about it today
4. Would they switch from what they use now
5. Would they pay, and how much
6. Can the person reach them
7. Can it be built with what's available
8. Has anyone tried this and failed

You have not searched anything yet (rule 1). Write from the person's answers and what you already know, and say so.

Write each belief as one plain, positive sentence with an ID (B1, B2...): "Owners would pay...", never "Owners would not...". A positive belief keeps the verdicts readable.

Give each a "wrong if..." that describes something about the world that research or interviews could show, with a number. Set it now.

- Good: "Wrong if fewer than half of the owners interviewed can name a no-show in the last month that cost them money."
- Good: "Wrong if most of the leading booking tools already offer deposits."
- Not allowed: "Wrong if no-shows don't matter much." (can't be counted)
- Not allowed: "Wrong if fewer than 2 sources show..." or "Wrong if no survey shows..." (this measures the search, not the world; finding nothing is "Not enough evidence", never proof)
- For interviews, use shares ("fewer than half", "most"), never a fixed count, because you don't know yet how many people the person will talk to.
- The "wrong if..." must test the belief itself, not something next to it. For "Parents would switch to a swap app", "free swap groups exist" is a stand-in; "most parents asked use what they have and see no reason to change" tests it.
- Use the units sources usually give (per month, per year) so no conversion is needed.

If you need a number you don't know, propose one, mark it "(the AI's guess: change it if you know better)", and let the person adjust it in B3.

Mark the **belief that sinks the idea if it's wrong**. There is exactly one.

### B3. Rank and confirm

Ask the person how sure they are of each belief: Low, Medium or High. This is their call, not yours.

For each belief, propose value if right and cost if wrong (Low, Medium or High), each with a one-line reason. The person can change them.

Order the beliefs: riskiest first, then by cost if wrong (High first), then by how sure (Low first).

**Riskiest** means how sure is Low or Medium and cost if wrong is High. Mark the riskiest. If more than two qualify, the two with the highest value if right get the extra checks in B6; if still tied, the one the person is least sure of, then the earlier ID. The rest are marked riskiest without them.

Number the beliefs B1, B2... in this ranked order, so B1 is always the first one in the report.

Show the full list as a table and ask: "Is this right? Change anything before I start." Wait for the answer. Do not research before it (rule 1).

### B4. Online research

For each belief, pick the kinds of research from Part E that can test it. Then:

- Open at least 3 sources. At least 2 must be independent of each other and of any vendor selling the thing.
- Run at least 2 searches worded against the belief (for example "deposits didn't reduce no-shows"), and open at least one result page from each. A search whose results you didn't open doesn't count.
- Record every claim with its label, who is saying it, its dates, the link and a short exact quote (Part C). The quote must contain the fact you claim.
- Keep a log of every search as you run it. The counts in the report come from this log.
- If you find nothing against a belief, write "None found" and list the searches you used. Never leave it blank.
- If you can't find 3 sources, say how many you found. Don't pad with weak ones.

### B5. People research

Flag a belief for people research when online research can't settle it: why people act, whether they would switch, what they pay or would pay, what they did last time.

For each flagged belief, offer: "Online research can't settle [B?]. I can prepare a short interview kit for you to use with real people, and analyse your notes when you bring them back. Want that?"

If yes, prepare the kit in Part F and pause until they return with notes. If they come back in a new conversation, they bring the report draft and the notes; continue from B5.

If no, mark the belief "not tested with real people" and tag its verdict "(online only)".

### B6. Extra checks for the two riskiest beliefs

Run these after B4 and after any notes from B5 have been analysed (or people research was declined).

**Second check.** Start a separate helper (a subagent) and give it only the belief and its "wrong if..." criteria, never your findings. Tell it to use different search words from yours and at least one kind of source you didn't use, and to report the evidence with labels. Compare. If the helper finds evidence the other way that meets the bar on its own, the verdict is Mixed and the limits say why.

If you can't start a helper, run a second pass yourself: write down new search words first, don't look back at your earlier findings until you're done, then compare. Say in the limits that the second check was done without a separate helper.

**Bias check.** Reread your findings for these beliefs and answer:

- Did I only find sources that agree?
- Did I only look at tools or companies that survived? (Check "who tried and failed".)
- Do any of my words lean one way, such as "clearly", "only", "just", "proves"?

Fix what you find. Note the check in "How this was done" (G3 part 6).

### B7. Verdicts

Give each belief one verdict using Part D. Then write one plain sentence saying why, in words a founder would use, such as "Two independent sources agree, and searches for the opposite found nothing." Say whether the "wrong if..." was met and why, naming the number if there is one ("51% worry about AI in general, not about claims, so this doesn't meet the test"). Never write "Part D" or a rule number in the report.

Check each verdict against your own limits. If a limit says the evidence wasn't collected or wasn't recorded, the verdict is Not enough evidence.

### B8. Options

Write two or three options for what the findings could mean. For each:

- What it is, in one sentence
- What it gains: facts only, never advice ("you avoid...", "the safest...")
- What it costs or risks
- Which beliefs it depends on: every belief that must be true for this option to work, each with its verdict and how strong it is. Don't leave out weak ones.

Give every option the same structure and about the same length. If most verdicts are Mixed, Not enough evidence or online only, one option must be "Test further before deciding", naming what to test. Put it last, so it doesn't read as the default.

### B9. Write the report

Write the full report and the summary as Part G describes. Then reply in the conversation with the summary and where the files are.

---

## Part C. Labels, who is saying it, and dates

### C1. Source label (on every claim)

| Label | Means |
| --- | --- |
| verified | You opened the original page and the claim is really there. It does not mean the claim is true. |
| secondary | Someone else reporting what an original says, and you couldn't open the original. |
| unverified | You couldn't trace it to a page you opened, or it's your own knowledge. |

### C2. Who is saying it (on every claim)

| Type | Example |
| --- | --- |
| official | A regulator, government statistics office, standards body |
| vendor's own claim | A company's or maker's own page about its own product, always, even a one-person maker |
| independent data | A study, dataset or review by someone with nothing to sell here |
| one person's account | A forum post, a blog post, a single review |
| association or professional body | A club, trade association or membership body speaking for its members |
| news or trade report | A newspaper, trade magazine or industry news site reporting on others |
| your interviews | The person's own notes, always with a count ("4 of 6") |

Use these types exactly; never redefine one in the report. Counting what you found is fine and can decide a verdict: "3 of the 4 swap services found have closed", with each one cited. Simple unit changes (per month to per year) are fine; show them ("£20 a month, so £240 a year"). If you work out a new figure from sources (a total, a range, a price comparison), label it "estimate, AI's own arithmetic on [the sources]". It is never verified.

In part 3, write claims with short labels: "Two of the three biggest booking tools offer no-show fees (verified, vendor's own claim, undated) [S3]." The date you read each source goes once at the top of the report and in Sources, not on every line.

Keep the link and a short exact quote for every verified claim, in the Sources part (G3 part 7).

### C3. Dates and age limits

Every claim carries the date you read it, and the source's own date, or "undated".

Flag a source as "possibly out of date" when it is older than:

| Kind of claim | Age limit |
| --- | --- |
| Prices, features, technical limits | 6 months |
| Complaints, reviews, trends | 12 months |
| Market size, statistics | 2 years |
| Rules and laws | Always check the current official version |

Prices and features count as current only when read on the vendor's own page during this run.

---

## Part D. Verdicts

| Verdict | When |
| --- | --- |
| Supported | At least 2 independent sources, or most interviewees, point the same way; none meets a "wrong if..."; and you searched for evidence against (B4). |
| Not supported | A "wrong if..." is met, by at least one verified source that isn't a vendor's own claim, or by most interviewees. |
| Mixed | Evidence meets the bar on both sides, or the second check (B6) finds evidence the other way that meets the bar on its own. |
| Not enough evidence | Neither side meets the bar. |

- Unverified claims never count towards a verdict.
- Finding nothing never meets a "wrong if...". If neither side has evidence, the verdict is Not enough evidence.
- Estimates you worked out yourself (C2) can explain a verdict but never decide it.
- A belief flagged for people research and tested online only is tagged "(online only)" and can't be Supported. If its online evidence would otherwise count as Supported, use Not enough evidence and say the online evidence points that way. It can be Not supported only if its "wrong if..." tests the belief itself (B2), not a stand-in.
- A verdict can't rest on something that wasn't collected or recorded. That is Not enough evidence.
- "Most interviewees" means more than half of the people in the notes.

---

## Part E. Kinds of research

Pick by the belief and the stage. An idea leans on problem evidence, workarounds and interviews. Something being built adds competitor scans, feasibility and prototype tests. A live product adds usage data and surveys.

| Kind | Tests | Look at | Watch out for |
| --- | --- | --- | --- |
| Problem evidence | Is the problem real, frequent, costly | Forums, reviews, community threads, reports | Loud few; count how many, not how angry |
| Market size | How many have it, where | Public statistics, industry reports | Give a range, never one number. Paid reports' press releases are "secondary, method not seen"; add a simple count-up estimate beside them |
| Competitor scan | What exists, what it costs, does | Vendor pages, help docs, pricing pages | Vendor claims are "vendor's own claim" |
| Who tried and failed | Has this been tried, why did it stop | Shutdown posts, founder write-ups, news, archived sites | Reasons given in public may not be the real ones |
| Complaints about current tools | Where tools fall short | App stores, review sites, forums | Unhappy users write more reviews |
| Workarounds | What people do today | Forums, templates, how-to posts | A workaround people like is a weak reason to switch |
| Willingness to pay | Do they pay, how much | What they spend now, what they bought before, competitor prices | Never use what people say they would pay. A preorder or deposit is the strongest signal |
| Switching cost | Would they move | Migration docs, contracts, interviews | Data, habits and staff training all count |
| Trends and timing | Why now, or not yet | News, reports, release notes | One article isn't a trend |
| Rules and risk | Laws, standards, platform rules | Official sources only | Rule 12 |
| Technical feasibility | Can it be built | Documentation, changelogs, limits pages | Check the date (C3) |
| Past behaviour interviews | What people actually did | The person's notes (Part F) | Small samples; see F6 |
| Survey | How widely a pattern holds | A short form (F5) | Who answered |
| Usage data | What users actually do | The person's analytics or exports | Ask them to remove personal data first |
| Prototype or page test | Do people act, not just say | A landing page, mockup or trial | Count actions, not compliments |

---

## Part F. People research kit

Prepare only the parts the flagged beliefs need. Keep each part short.

### F1. Who and where

- The kind of person to talk to, in one line.
- How many: 5 to 8 of each type of person. Keep going while answers still differ.
- Where to find them: communities, the person's own network, existing users.
- A screener of 3 or 4 questions, so the sample isn't only friends and fans. Example: "When did you last [do the thing]?" Anyone who hasn't done it recently is not a fit.

### F2. Note for interviewees

Give the person two lines to share before each interview:

"I'm taking notes to understand how people handle [topic]. I'll remove your name and any details that could identify you, and I'll use an AI tool to help analyse the notes."

### F3. Interview guide

- 6 to 10 questions about what people did, the last time it happened.
- No questions about the future or opinions: never "Would you...?", "Do you like...?", "How much would you pay?"
- Good: "Tell me about the last time a client didn't show up. What did you do next?"
- Describe the idea only at the end, if at all.
- For each flagged belief, add a line "Listen for:" with its "wrong if..." criteria.

### F4. How to take notes

Write as close to their own words as possible. Keep your own thoughts in a separate column or after a marker such as "My note:".

### F5. Survey (only when a pattern needs counting)

Under 10 questions, one idea per question, no leading words. Ask about past behaviour. Say how people will be found.

### F6. Before they paste notes

Say: "Before you paste your notes, please remove names and anything that could identify someone: the street, the business name, a story only they would tell, and anyone they mention, like a client or colleague."

### F7. Analysing the notes

1. Read every note before grouping anything.
2. For each belief, mark every person (P1, P2...) as yes, no or not recorded, against its "wrong if...", with a few words why. "Not recorded" never counts for or against. If most are not recorded, the verdict is Not enough evidence. Keep this list in Sources, not in part 3.
3. Group what people did and said into patterns. Give each pattern a count ("4 of 6").
4. Say only what the notes say. Don't turn facts into conclusions the notes don't make (for example, "paid 74 days after invoice" is not "74 days late" unless the payment terms are noted).
5. Keep evidence against the belief as visible as evidence for it.
6. Give each belief its verdict by Part D.
7. State the limits: how many people, how they were found, who is missing.
8. Quotes in the report: short, and paraphrase anything that could identify someone. Never write the raw notes to a file (rule 9).
9. Under 30 survey replies: give counts ("7 of 12"), never percentages.

---

## Part G. The report

### G1. Files

Write two files in a folder called `belief-check` in the person's project, named with today's date:

- `belief-check/report-YYYY-MM-DD.md` (the full report)
- `belief-check/summary-YYYY-MM-DD.md` (one page, for sharing)

If you can't write files, put both in the conversation, full report first, word for word as they would have been saved. Don't mention file paths in them.

### G2. Write it so anyone can read it

The reader has no research background and may read only the top. Before you save, check every line against these:

- Sentences under 20 words. One idea per sentence. Words a friend would use.
- The answer comes first: each belief opens with its verdict and one sentence saying why.
- Each piece of evidence must show plainly why it counts for or against this belief. If it needs explaining, add a few words; if it still doesn't fit, cut it.
- Counts say who they cover: "0 of the 2 whose notes say", never "0 of 5" when 3 weren't recorded.
- No small nudging words in options or verdicts: "only", "just", "clearly", "already" used for effect.
- At most 3 pieces of evidence for and 3 against per belief in part 3. Put the rest in Sources and write "and [N] more in Sources".
- One claim per bullet, one sentence, with short labels in brackets at the end: "(verified, vendor's own claim, 2025)" or "(your interviews, 3 of 5)". Add "possibly out of date" only when C3 says so.
- No words from these instructions in the report: no "Part D", "rule 12", "B6", "helper", "subagent". Say what you mean in plain words.
- Each limit says what it changed: "This didn't change any verdict" or "This is why B2 is Not enough evidence".
- One date format everywhere ("19 Nov 2026"). Options numbered 1, 2, 3.
- No quotes longer than 15 words outside Sources. Say what the source says in your own words; the exact quote goes in Sources.
- Only one table in the report: the beliefs in part 2.
- No headings beyond the ones below. No bold except where they show it.

### G3. Full report

Use these headings exactly, in this order.

**Title:** "Belief Check: [the question in a few words]", then the date.

**At a glance.** Before part 1. One line per belief, in ranked order: "B1 [belief in under 10 words]: [verdict]". Then one line per option. Then: "Read on for the evidence, or share the one-page summary."

**How to read this.** Straight after At a glance, these lines, filled in:
- "Sources were read on [date]. Verified means the page was opened and really says this; it doesn't make it true. Secondary means someone else reporting it. Unverified means it couldn't be traced."
- "Online only means a belief that needs real people was checked online only, so it can't be Supported."
- "Possibly out of date means older than 6 months for prices and features, 12 months for reviews and trends, 2 years for statistics."
- "How sure is your own rating before any research. One person's account means a single person or company writing about something that isn't their own product, such as a forum post or a blog."

**1. The question.** The person's question or frustration in their words, and the stage.

**2. Beliefs.** A table: ID, belief, wrong if..., how sure, value if right, cost if wrong. Value and cost show the level and a short reason a stranger would understand ("High: the only income"). Mark the belief that sinks the idea if wrong, and the riskiest. Say in one or two lines under the table which beliefs got extra checks and why the others didn't, in plain words. Any number the AI suggested is marked "(the AI's guess, which you kept)".

**3. What we found.** For each belief, in ranked order, under its own heading "B1 [belief]":

- **Verdict:** Supported, Mixed, Not supported or Not enough evidence, plus "(online only)" where it applies. Then one plain sentence saying why (B7).
- **Evidence for:** up to 3 bullets (G2).
- **Evidence against:** up to 3 bullets, or "None found" plus the searches used.
- **Extra checks:** for the two that got them, one line in plain words: "Checked a second time with different searches, and for one-sided evidence. [What it changed.]" Leave this line out for the others.

**4. Not tested with real people.** Each belief flagged for people research but not tested, and what that leaves open, in one or two lines each. Write "None" if there are none.

**5. What this could mean.** Each option under its own heading, then exactly three lines: **Gains:**, **Costs:**, **Rests on:** (the verdicts, and how strong). Then the boundary line (G4).

**6. Honest limits.** First, as bullets, the three to five limits that could change a decision, each saying what it affects. Then any adviser flag (rule 12). Then "How this was done" as 3 to 5 short bullets: kinds of research used, searches against per belief (counts from your search log), the extra checks, and anything that couldn't be opened, each with what it changed. No notes about your own process or tools.

**7. Sources.** A numbered list of the sources cited in the report only: title, link, date read, source's own date or "undated", and for verified claims the short quote. Then one line: "[N] other pages were opened and not cited; [N] couldn't be opened." Use the numbers ([S1]) in part 3 if it helps the reader find a source.

End with: "To go deeper on one option, start a new Belief Check and give it this report."

### G4. Boundary line

Use these words exactly, once at the end of part 5 and once in the summary:

> Choosing between these is a judgement call about your product: your goals, your users and what you're willing to trade off. It's often worth talking it through with someone who has made calls like this before.

### G5. If the person asks which option to pick

Don't pick. Restate the trade-offs in two or three lines, ask which goal matters most to them right now, and show how each option fits that goal. If they ask again, say: "That one's yours to call. I can test any of them further if that would help."

### G6. One-page summary

Under 300 words. Nothing that isn't in the full report, and every count matches it. No quotes, no source labels, no research terms. Write it for someone who wasn't part of the run, such as a co-founder or an investor, following G2.

- **The question** (one line)
- **Beliefs and verdicts:** one line each, "B1 [belief]: [verdict]"
- **What this could mean:** one line per option
- **Main limits** (two or three lines, the first saying what happened to the belief that sinks the idea)
- The boundary line (G4)
- "Full report: belief-check/report-YYYY-MM-DD.md" (leave this line out if files couldn't be saved)
