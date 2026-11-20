# Belief Check

Check what you believe about your idea before you build it.

A free research tool for founders and small teams. You bring a question or a frustration, such as "studios lose money on no-shows". Your AI assistant turns it into a few beliefs that could be proven wrong, researches each one online, and tells you plainly what the evidence says. Where only real people can answer, it gives you a short interview kit and makes sense of your notes when you bring them back.

It shows you what the evidence could mean. It doesn't choose for you.

You don't need any research background, and it's free. It runs in your own ChatGPT or Claude account, so it uses that account's normal allowance.

## How to use it

You don't need to install anything. You copy one page of instructions into an AI chat that can search the web, such as ChatGPT or Claude, and it guides you from there.

A run takes 20 to 40 minutes of the assistant's work. A run does a lot of searching, so a free plan may hit its daily limit partway through. If that happens, wait until the limit resets and type **continue** in the same chat.

### In ChatGPT or Claude (easiest)

1. Open the [Belief Check instructions](https://raw.githubusercontent.com/discovery-to-delivery-katmoo/belief-check/main/start/chat.md). A page of plain text opens.
2. Copy all of it: press **Ctrl+A**, then **Ctrl+C** (on a Mac, **Cmd+A**, then **Cmd+C**).
3. Open [chatgpt.com](https://chatgpt.com) or [claude.ai](https://claude.ai) and start a new chat.
4. Turn on web search:
   - **ChatGPT:** click the **+** next to the message box and choose **Web search**. Don't see it? Type **/** in the message box and choose **Web search** from the list.
   - **Claude:** click the **+** at the bottom left of the message box and choose **Web search**, so a tick appears. If there's no such option, Claude already searches on its own.
5. Click in the message box, paste (**Ctrl+V** or **Cmd+V**) and press **Enter**.

### If you already use Claude Code

Type each line into Claude Code and press **Enter** after each one:

```
/plugin marketplace add discovery-to-delivery-katmoo/belief-check
```

```
/plugin install belief-check@belief-check
```

```
/belief-check:run
```

The report and summary are saved in a `belief-check` folder in your project.

### What happens next

1. **A few questions.** The assistant asks about your idea one question at a time: the problem, who has it, what you'd build and how far along you are. Answer in your own words.
2. **Your beliefs.** It shows a short table of 3 to 7 beliefs about your idea, each with what would prove it wrong. It asks how sure you are of each one. Change anything that doesn't sound right, then say "looks right". Nothing is researched until you do.
3. **Research.** It searches the web. This is the long part: leave the chat open. If it stops after a belief and waits, type **continue**.
4. **Real people, if needed.** If a belief can only be checked by talking to people, it offers you a short interview kit: who to talk to, a few questions to check you've found the right people, and what to ask. Say yes or no. If you say yes, it pauses. Usually that means talking to 5 to 8 people, for 20 minutes or so each. Rough notes are fine. Come back to the same chat when you're done, even days later, and paste your notes with names and anything that could identify someone taken out.
5. **Your report.** You get a full report and a one-page summary in the chat. The top of the report, "At a glance", gives you the answer in a few lines.
6. **Save it.** Copy the report and the summary into a document of your own (Google Docs, Word, Notes). If the chat is long, ask: "Give me the summary again in one block I can copy."

If you ask the assistant which option to choose, it will help you think it through, but it won't choose for you.

If something seems wrong or it goes off track, tell it in plain words, for example "that source is about a different country" or "go back to the beliefs, I want to change B2".


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
  (verified, vendor's own claim, undated) [source 3].
- 4 of 6 owners already charge no-show fees in their current tool (your interviews, 4 of 6).
Extra checks: checked a second time with different searches, and for one-sided
evidence. This didn't change the verdict.
```

Every claim says three things:

- **How it was checked:** "verified" (the page was opened and really says this, which doesn't make it true), "secondary" (someone else reporting it) or "unverified" (couldn't be traced).
- **Who is saying it:** official, the vendor's own claim, independent data, one person's account, or your interviews.
- **When:** the date it was read, and the source's own date.

Each belief ends up Supported, Mixed, Not supported or Not enough evidence, by fixed rules, so it isn't a matter of mood.

## Privacy

**Your idea** is shared only with the chat tool you use. If you don't want it used to train that tool's AI:
- **ChatGPT:** Settings, then Data controls, then turn off **Improve the model for everyone**.
- **Claude:** Settings, then Privacy, then turn off **Help improve Claude**.

**Interviews:** if you do them, the kit includes two lines to share with each person first, saying notes will be analysed with an AI tool. Before you paste notes, remove names and anything that could identify someone, including people they mention. Belief Check never saves raw notes to a file, and the summary holds no quotes.

## What it doesn't do

- It doesn't decide for you. Choosing between options depends on your goals and what you'll trade off.
- It doesn't prove an idea will work. It shows what the evidence says today, and how strong that evidence is.
- It can't read pages behind a login or paywall. Those go in the limits.
- It isn't legal, health or financial advice. If your question touches those, the report says to check with an adviser.

## Licence

CC BY-NC 4.0. You can use it for free to test your own ideas, including for your business. What you can't do is sell it or offer it as a paid service. You can share and adapt it, with credit. See [LICENSE](LICENSE).
