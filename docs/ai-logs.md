---
hide:
  - navigation
---

# AI Log Instructions

You are free to use any AI tools to assist your work in this class, on the condition that you
**accurately and honestly report your use**. These instructions explain exactly what to log, how to
capture it, and where to submit it.

Questions? Contact your TA ([mhasan02@wm.edu](mailto:mhasan02@wm.edu)) or
Dr. Chaparro ([oscarch@wm.edu](mailto:oscarch@wm.edu)).

---

## What counts as a loggable session

Log every AI interaction that is **related to the course project**, including:

- Writing, debugging, or reviewing code
- Understanding the codebase, architecture, or an issue
- Drafting issue reports, PR descriptions, or documentation
- Discussing design decisions or tradeoffs

You do **not** need to log: purely academic questions ("explain what a tRPC router is"), general
research unrelated to your project, or assignment instructions you asked AI to clarify.

When in doubt, log it.

---

## Where logs go

All AI logs live in your team's GitHub repository under:

```
ai-logs/
  sprint0/
    <your-github-username>/
  sprint1/
    <your-github-username>/
  ...
```

Each sprint gets its own subfolder. Each team member gets their own subfolder named by their GitHub
username. **Do not put your logs in a teammate's folder.**

---

## File naming convention

Every log file follows this pattern:

```
YYYY-MM-DD_<tool>_<short-slug>.md
```

| Part | Format | Example |
|---|---|---|
| Date | `YYYY-MM-DD` — the date the session started | `2026-09-10` |
| Tool | lowercase, hyphenated (see table below) | `claude-code` |
| Slug | brief description, lowercase, hyphens, no spaces | `issue-42-auth-fix` |

**Tool identifiers:**

| Tool | Identifier |
|---|---|
| Claude Code (CLI) | `claude-code` |
| Claude.ai (web browser) | `claude-web` |
| Claude Desktop app | `claude-desktop` |
| Cursor (IDE or CLI) | `cursor` |
| Gemini CLI | `gemini-cli` |
| OpenAI Codex CLI | `codex-cli` |
| GitHub Copilot (VS Code) | `copilot` |
| ChatGPT (web) | `chatgpt` |
| Other | `other-<name>` |

**Examples:**

```
ai-logs/sprint0/jsmith/2026-09-08_claude-web_understanding-issue-42.md
ai-logs/sprint0/jsmith/2026-09-09_claude-code_issue-42-implementation.md
ai-logs/sprint0/jsmith/2026-09-10_cursor_refactor-validator.md
```

---

## Attachments

If you used files, images, screenshots, or PDFs as context in a session, save them alongside
the log in a **folder with the same name** as the log file (no `.md` extension):

```
ai-logs/sprint0/jsmith/2026-09-08_claude-web_understanding-issue-42.md
ai-logs/sprint0/jsmith/2026-09-08_claude-web_understanding-issue-42/
    architecture-screenshot.png
    relevant-code-snippet.txt
```

---

## Accepted log file formats

`.md` (preferred), `.txt`, `.json`

Do **not** submit `.docx`, `.pdf`, or `.html` log files. Attachments may be in any format.

---

## How to capture logs by tool

### Agentic / terminal tools &mdash; use SpecStory (automatic)

SpecStory automatically captures sessions for: **Claude Code, Gemini CLI, OpenAI Codex CLI,
Cursor CLI, GitHub Copilot (VS Code), and Cursor IDE chat**.

**Install:**

```bash
# macOS / Linux
brew tap specstoryai/tap
brew install specstory
```

Windows: download `SpecStoryCLI_Windows_x86_64.zip` from the
[SpecStory releases page](https://github.com/specstoryai/getspecstory/releases), extract to
a permanent folder, and add it to your `PATH`. Verify with `specstory version`.

**For Cursor / GitHub Copilot in VS Code:** install the
[SpecStory VS Code extension](https://marketplace.visualstudio.com/items?itemName=SpecStory.specstory-vscode).

**Usage:**

```bash
specstory run claude    # instead of: claude
specstory run gemini    # instead of: gemini
specstory run codex     # instead of: codex
specstory run cursor    # Cursor CLI
```

**If you forgot to use `specstory run`:**

```bash
specstory sync
```

This converts whatever the tool has already logged locally. Run it again at any time to pick up
new turns.

**At the end of each sprint:** run `specstory sync` one final time, then copy the relevant files
from `.specstory/history/` into `ai-logs/sprint#/<your-github-username>/`, renaming them to
follow the naming convention above.

---

### Web chat tools &mdash; use the browser exporter extensions

For **Claude.ai, ChatGPT, Gemini, Grok, and DeepSeek** in the browser, install the
corresponding Chrome extension and export at the end of each session:

| Tool | Chrome Extension |
|---|---|
| Claude.ai | [Claude Exporter](https://chromewebstore.google.com/detail/claude-exporter-save-clau/elhmfakncmnghlnabnolalcjkdpfjnin) |
| ChatGPT | [ChatGPT Exporter](https://chromewebstore.google.com/detail/chatgpt-exporter-chatgpt/ilmdofdhpnhffldihboadndccenlnfll) |
| Gemini | [Gemini Exporter](https://chromewebstore.google.com/detail/gemini-exporter-save-gemi/jfepajhaapfonhhfjmamediilplchakk) |
| Grok | [Grok Exporter](https://chromewebstore.google.com/detail/grok-exporter-grok-to-pdf/gjoigaflapfgapfebiajiolclnpfneao) |
| DeepSeek | [DeepSeek Exporter](https://chromewebstore.google.com/detail/deepseek-exporter-extract/ccidioajndoplgongndfmljpcaejlnlc) |

Export each session as **Markdown** immediately after finishing. Rename the exported file to match
the naming convention and place it in your folder.

!!! warning "A sharing link is not a log"
    Conversation share links expire, can omit branches, and cannot be analyzed. Submit an exported
    file. A link may accompany your log, but cannot replace it.

---

### Claude Desktop app

SpecStory does not currently capture Claude Desktop sessions automatically.

- **Recommended:** switch to **Claude Code (CLI)** for project-related agentic work — SpecStory
  captures it automatically and produces a richer log including file diffs and commands run.
- **If you must use Desktop:** manually copy the conversation into a `.md` file following the
  naming convention. Note in the log that it was captured manually from Claude Desktop.

---

## Linking logs to issues and PRs

When you complete work on an issue (as implementer, reviewer, or tester), post **one comment** on
the issue with your AI usage. Use this format:

```markdown
### AI Assistance — @your-github-username

**Role in this issue:** Implementation / Code review / Testing / Other

| # | Date | Tool | Log | What AI helped with |
|---|---|---|---|---|
| 1 | 2026-09-08 | claude-web | [link](../../ai-logs/sprint0/jsmith/2026-09-08_claude-web_understanding-issue-42.md) | Understanding the issue, locating relevant code |
| 2 | 2026-09-09 | claude-code | [link](../../ai-logs/sprint0/jsmith/2026-09-09_claude-code_issue-42-implementation.md) | Implementing the fix and writing tests |

**Attachments:** [2026-09-08_claude-web_understanding-issue-42/](../../ai-logs/sprint0/jsmith/2026-09-08_claude-web_understanding-issue-42/)
```

- Post this comment when your work on the issue is complete.
- If you had no AI sessions related to this issue, post the comment and note "No AI used."
- **Each contributor posts their own comment.** Three people on an issue = three comments.
- If you add sessions after posting, edit your comment to add rows to the table.

---

## End-of-sprint checklist

Before the sprint deadline:

1. Run `specstory sync` to capture any recent agentic sessions.
2. Export any web chat sessions not yet exported.
3. Rename all files to follow the naming convention.
4. Move all logs and attachment folders into `ai-logs/sprint#/<your-github-username>/`.
5. Confirm every issue/PR you worked on has your AI Assistance comment with accurate links.
6. Push the `ai-logs/` folder to the team repository.

---

## What a log must contain

A valid log includes:

- The AI model/tool used (e.g., "Claude Sonnet 4.5 via Claude Code")
- The full prompt and response history for the session
- For agentic tools: all file edits and commands run (SpecStory captures these automatically)
- For web chat: any files or text you pasted as context (inline or in the attachments folder)

A log containing only your prompts (no AI responses), or that is clearly incomplete, does not
satisfy the requirement.
