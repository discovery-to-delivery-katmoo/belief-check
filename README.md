# Belief Check

Check what you believe about your idea before you build it.

A free research tool for founders and small teams. You bring a question or a frustration, such as "studios lose money on no-shows". Your AI assistant turns it into a few beliefs that could be proven wrong, researches each one online, and tells you plainly what the evidence says. Where only real people can answer, it gives you a short interview kit and makes sense of your notes when you bring them back.

It shows you what the evidence could mean. It doesn't choose for you.

You don't need any research background.

## What you get back

A full report and a one-page summary you can share.

```markdown
### B1 Owners would switch booking tools to get deposits
Verdict: Not supported. Most owners interviewed already charge no-show fees
in the tool they use, and none would switch for that alone.
Evidence for:
- One owner switched tools last year to get card-on-file fees (your interviews, 1 of 6).
Evidence against:
- Two of the three biggest booking tools already offer no-show fees
  (verified, vendor's own claim, undated) [S3].
- 4 of 6 owners already charge no-show fees in their current tool (your interviews, 4 of 6).
Extra checks: checked a second time with different searches, and for one-sided
evidence. This didn't change the verdict.
```

Every claim says three things:

- **How it was checked:** "verified" (the page was opened and really says this, which doesn't make it true), "secondary" (someone else reporting it) or "unverified" (couldn't be traced).
- **Who is saying it:** official, the vendor's own claim, independent data, one person's account, or your interviews.
- **When:** the date it was read, and the source's own date.

Each belief ends up Supported, Mixed, Not supported or Not enough evidence, by fixed rules, so it isn't a matter of mood.

## How it works

1. **Your question.** A few short questions about the problem, who has it and what you'd build.
2. **Beliefs.** It writes 3 to 7 beliefs, each with a "wrong if..." you can count, set before any research. Example: "wrong if fewer than 3 of 5 owners can name a no-show last month that cost them money."
3. **Ranking.** You say how sure you are of each; it suggests how much each matters. You check the list before anything runs.
4. **Online research.** At least 3 sources per belief, and searches that look for evidence against it.
5. **Real people, if needed.** A screener, an interview guide about what people actually did, and help with your notes.
6. **Extra checks** on the two riskiest beliefs: a second, independent look and a check for one-sided thinking.
7. **Report.** Verdicts, two or three options with what each gains and costs, and honest limits.

## How to run it

| Tool | Then |
| --- | --- |
| Claude Code | Run `/plugin marketplace add discovery-to-delivery-katmoo/belief-check`, then `/plugin install belief-check@belief-check`, then `/belief-check:run` (or just ask Claude to run a Belief Check). The report is saved in a `belief-check` folder |
| Any AI chat with web search (Claude, ChatGPT and others) | Turn web search on. Copy all of [start/chat.md](start/chat.md) and paste it. The report comes back in the chat |

A run takes 15 to 40 minutes of the assistant's work, plus however long you spend talking to people if you choose to.

## Privacy

If you do interviews, the kit includes two lines to share with each person first, saying notes will be analysed with an AI tool. Before you paste notes, remove names and anything that could identify someone, including people they mention. Belief Check never saves raw notes to a file, and the summary holds no quotes.

## What it doesn't do

- It doesn't decide for you. Choosing between options depends on your goals and what you'll trade off.
- It doesn't prove an idea will work. It shows what the evidence says today, and how strong that evidence is.
- It can't read pages behind a login or paywall. Those go in the limits.
- It isn't legal, health or financial advice. If your question touches those, the report says to check with an adviser.

## Licence

CC BY-NC 4.0. You can use, share and adapt it for free, with credit, but not sell it. See [LICENSE](LICENSE).
