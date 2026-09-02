---
hide:
  - navigation
---

# Sprint 0 &mdash; Project Onboarding

**Sep 1&ndash;17 &middot; All deliverables due Sep 17, 11:59 PM &middot; 100 points (9% of course grade)**

Sprint 0 is the onboarding sprint. Its purpose is to get every team member up and running with the project, develop a shared picture of what the system does and how it is built, establish the team's working standards, and complete a small but real software engineering workflow from beginning to end. The skills and habits you establish in Sprint 0 carry through the rest of the semester, yet these can change in later sprints.

---

!!! tip "Unfamiliar with a term in these instructions?"
    Check the [Glossary](glossary.md) for definitions of pull requests (PRs), continuous integration (CI), sprints, agentic AI tools, and other concepts used throughout this page.


### Before you begin

Complete these two steps before working on any deliverable. They are prerequisites: you cannot clone the repo or submit anything without them.

#### 1. Join Zulip

Zulip is the course communication platform. All announcements, Q&A, and team coordination happen there.

**The Zulip invite link is posted on Blackboard and in the course Zulip — do not share it publicly.**

Once you join, introduce yourself in the `#general` stream and find your team's stream.

#### 2. Join the GitHub organization

All project repositories live in the [CSCI-435-SE](https://github.com/CSCI-435-SE) GitHub organization. You must be a member to clone, push branches, and open PRs.

**The GitHub organization invite link is posted on Blackboard and in the course Zulip — do not share it publicly.** Click the link, sign in with your GitHub account, and accept the invitation.

You will be able to see the organization at `github.com/CSCI-435-SE` immediately after accepting. Accept it before Sprint 0 begins.

!!! warning "Accept the invite promptly"
    GitHub organization invites expire after **7 days**. If yours expires, post in Zulip and the TA will re-send it.

---

### Deliverables

#### D1 &mdash; Project Setup

Every team member must run the project locally in order to complete the changes for Sprint 0 (see )

**What to do:**

1. Clone your team's repository from the [CSCI-435-SE](https://github.com/CSCI-435-SE) GitHub organization. You have write access; no fork needed.
2. Follow the `STUDENTS.md` guide at the root of the repo to install dependencies, run the app, and verify it works. If something is not clear in this guide, consult the official project documentation (there are links to it in the guide) or ask the TA/instructor on Zulip (use your team's stream). 
3. Run the project's test suite and confirm the baseline passes (see `STUDENTS.md` for the expected baseline output).
4. Read the project's architecture documentation and explore the codebase enough to answer these questions:
    - What does the system do? Who are its users? What are its main features?
    - What are the main components and how do they interact?
    - What are the major technologies, frameworks, and external services?
    - How is the code organized (directory structure, key packages/modules)?
    - How do developers typically contribute? What is the PR and code review workflow? What are the standards for issue reporting, triage, and management?

**Where to find architecture documentation** (per project):

| Project | Architecture / developer docs |
|---|---|
| Actual Budget | [actualbudget.org/docs/contributing/](https://actualbudget.org/docs/contributing/) |
| Cal.diy | [docs.cal.com](https://docs.cal.com) |
| Chatwoot | [chatwoot.com/docs/contributing](https://www.chatwoot.com/docs/contributing/chatwoot-contributing-guide) |
| Discourse | [meta.discourse.org &mdash; developer docs](https://meta.discourse.org/c/documentation/dev/56) |
| Excalidraw | [`dev-docs/docs/codebase/`](https://docs.excalidraw.com/docs/codebase) in the repo |
| Gitea | [`docs/development.md`](https://github.com/CSCI-435-SE/gitea/blob/main/docs/development.md) in the repo |
| Medusa | [docs.medusajs.com/learn](https://docs.medusajs.com/learn) |
| Outline | [`docs/ARCHITECTURE.md`](https://github.com/CSCI-435-SE/outline/blob/main/docs/ARCHITECTURE.md) in the repo |

**Provide the following evidence in your Sprint Report (see D6 below):**

- Screenshot(s) of the app running locally.
- Screenshot(s) of the test suite passing.
- Brief written answers to the questions above (included in D6).

---

#### D2 &mdash; Feature Backlog (GitHub Issues)

Each team member proposes **at least 4 feature ideas** for the project as **GitHub Issues** in your team's repository. More than 4 is encouraged.

!!! info "Issues, not a document"
    The feature backlog lives in the project's GitHub issue tracker — not in a separate file. Create each proposed feature as a GitHub Issue with appropriate labels (see below). The sprint report links to these issues.

**Issue composition per member (minimum 4):**

- **2 small or medium** features — concrete, well-scoped changes a single developer could complete in 1&ndash;2 weeks. These are the issues you will pull into Sprints 1&ndash;2.
- **2 ambitious** features — larger improvements or new capabilities that would take a Sprint or more. Think about what real users of this project actually want. If your team will implement them in later sprints (to be decided), they will probably need to be broken down into more manageable tasks.

There is no upper limit. If you have more ideas, open more issues. Remember that you team will have to analyze the existing backlog of issues, decompose them, prioritize them, assign them, etc. within a given sprint so that the work reasonably fits three weeks. Therefore, it is okay to have many ideas/issues in Sprint 0.

**What makes a good issue:**
A feature is a user-visible or developer-visible change that makes the product better: a new capability, a significant improvement to an existing one, or a meaningful non-functional improvement (performance, accessibility, security). Each issue must include:

| Field | Description |
|---|---|
| **Title** | Short, descriptive, action-oriented (e.g., "Add keyboard shortcut to dismiss notification toasts") |
| **Summary** | what the feature is, why it matters, who benefits |
| **User story** | "As a [role], I want [action] so that [outcome]" or a short scenario of what user needs to do and how the system should respond |
| **Rough scope** | Small / Medium / Large / XL — one sentence justifying the estimate |
| **Source** | Where the idea came from (project issue tracker, personal use, docs gap, community request, etc.) |

Do not propose features already on the project's official roadmap or in open PRs — check the upstream issue tracker first.

**Issue labels to apply** (use the project's existing labels where available; create these if they don't exist):

| Label | Meaning |
|---|---|
| `scope: small` / `scope: medium` / `scope: large` / `scope: xl` | Size estimate |
| `type: feature` | This is a new capability |
| `type: improvement` | Improving an existing capability |
| `type: bug` | This is a bug |

The instructor will triage your issues after the sprint, assigning priority and milestone labels.

!!! info "Aim high on the ambitious ones"
    Sprint 0 is the time to think big. Some of these features will be scoped, decomposed, or merged during Sprint 1 requirements analysis; that is expected. Propose features you would actually want to use or build.

---

#### D3 &mdash; Standards & Guidelines Document

Each team writes an initial **standards and guidelines document** for how the team will work throughout the semester. This is a living document: you will refine it as you learn more, but you must commit to a first version in Sprint 0.

**Step 1 &mdash; Map existing conventions.** Before writing anything, read the project's own contribution files:

- `CONTRIBUTING.md` &mdash; coding style, PR format, commit conventions, review process
- `AGENTS.md` / `CLAUDE.md` &mdash; AI usage policy and agent instructions (if present)
- Any linter/formatter configs (`.eslintrc`, `rubocop.yml`, `gofmt` settings, etc.)
- The existing "Definition of Done": the activities required to solve an issue (look in CONTRIBUTING.md, official documentation, PR templates, or issue tracking/triage guidelines)

Summarize what the project already requires. This becomes the baseline your standards document adopts.

**Step 2 &mdash; Adopt, adapt, supplement.** For each area below, either adopt the project's existing standard, note any team-specific adaptations, or fill the gap where the project is silent:

| Section | What to cover |
|---|---|
| **Coding conventions** | Language/framework style guide; linting/formatting tools; conventions specific to this codebase |
| **Branching and commit conventions** | Branch naming (e.g., `feature/`, `fix/`); commit message format; when to squash |
| **Pull request process** | PR restrictions; required reviewers; how to write a PR description; merge criteria |
| **Testing expectations** | Which types of tests to write for which changes; minimum expectations; test naming conventions |
| **AI tool use** | Which tools the team uses; what must be logged; review responsibilities for AI-generated code; how to flag AI-assisted work in PR descriptions |
| **Definition of Done** | Adopt the project's existing DoD if one exists; supplement where it is silent. At minimum: code reviewed, tests passing, CI green, documentation updated |

The document must be consistent with the project's existing contribution guidelines. Where the project's guidelines are more specific, follow the project's guidelines. Where they are silent, your document fills the gap.

**Submission:** `docs/sprint0/standards.md` in the team's GitHub repository (or equivalent &mdash; see formats below).

---

#### D4 &mdash; AI Tooling Setup

AI tools are required in this course. Sprint 0 establishes your team's AI workflow.

**What to do:**

**1. Review the project's AI files.** Read `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md` (AI policy section), and any similar files in your repo. Decide as a team whether to use them as-is, adapt them, or supplement them. Document your decision in D3 (Standards doc, AI tool use section).

**2. Choose your tools.** Each team member should have at least one agentic AI tool set up for code-level work:

| Tool | Type | Notes |
|---|---|---|
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) | Agentic CLI | **Recommended. Course Claude Team plan available — see below**. |
| [GitHub Copilot](https://github.com/features/copilot) | IDE / agentic | VS Code, JetBrains, Cursor |
| [Cursor](https://www.cursor.com/) | Agentic IDE | Built-in agent mode |
| [OpenAI Codex CLI](https://github.com/openai/codex) | Agentic CLI | |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Agentic CLI | |

You may additionally use chat-based tools (Claude, ChatGPT, Gemini, etc.) for non-agentic tasks such as understanding code, drafting, or research.

!!! warning "AI accounts and credentials"
    Use your own accounts. **Do not share API keys, login credentials, or account access** with teammates or anyone else. Sharing credentials violates the terms of service of every AI provider listed above, and the course Claude Team plan in particular.

**Course Claude Team plan:** The instructor will distribute seats on a Claude Team plan for the class. This gives each team member access to Claude without the free tier's rate limits. Details and instructions will be posted on Zulip and/or Blackboard. If you cannot access the Team plan, let the instructor and TA know.

**3. Set up AI log capture.** Full instructions are on the **[AI Log Instructions](ai-logs.md)** page. In brief:

- **Agentic CLI tools** (Claude CLI, Gemini CLI, Codex CLI): use [SpecStory](https://specstory.com/) — `specstory run claude` wraps your session automatically.
- **Cursor / GitHub Copilot in VS Code**: install the [SpecStory VS Code extension](https://marketplace.visualstudio.com/items?itemName=SpecStory.specstory-vscode).
- **Web chat** (Claude, ChatGPT, Gemini): use the browser exporter extensions listed on the [AI Log Instructions](ai-logs.md) page.
- **Claude Desktop**: not supported by SpecStory — switch to Claude Code CLI for project work or manually collect logs (see the [AI Log Instructions](ai-logs.md)).

Logs should be stored in `ai-logs/sprint0/<your-github-username>/` in the team repo. See [AI Log Instructions](ai-logs.md) for naming conventions and the issue comment format.

**4. Start logging from day one.** Log every agentic session starting from the moment you begin Sprint 0 work. Include a summary in D6.

**Submission:** No separate deliverable. but we recommend doing a quick test by using Claude with SpecStory, collect the logs, and push them to your repository. Evidence of log setup and a usage summary are included in D6 (Sprint Report).

---

#### D5 &mdash; Pull Requests

The core hands-on activity of Sprint 0 is making real changes to the codebase and going through the full contribution workflow. Every team member should open **exactly 2 pull requests** in Sprint 0 (i.e., they need to work on two issues).

**How the work is assigned:**

The instructor will post **2&ndash;3 issues** in your project's issue tracker during the first week of Sprint 0. These are small, clearly scoped changes: worked examples of the contribution workflow on your specific codebase.

- 2&ndash;3 team members (coordinate as a team) will implement the instructor-assigned issues.
- Every other team member picks 2 issues from the team's feature backlog (D2) or the project's existing issue tracker: issues at small or medium scope.

**The critical rule: implement issues you did not write.** Each team member works on 2 issues that were opened by someone else on the team. No two team members implement the same issue. This forces you to communicate, read each other's specifications, and treat issues as real software requirements.

Coordinate early: decide who implements which issues before anyone starts coding.

**Before you write any code:**

1. **Read the issue carefully.** What exactly is being asked? Ask the author on the issue if anything is unclear.
2. **Find the relevant code yourself first**, without AI. Read the directory structure, search the codebase, follow the call stack. Take notes on what you find. This is essentially performing "Concept location" from the incremental change process covered in class.
3. **Then confirm with AI.** Once you have a hypothesis about where to make the change, ask an agentic tool to validate or extend your understanding. Let AI help you move faster, not substitute for your own reading.

This order matters: as a first experience, we want you to locate and understand code independently so that you understand the effort concept location takes and to force you learn on your own.

**How to create your branch and PR:**

All team members have write access to the team repo, so you use a **branch-based workflow**: one branch per issue and a PR within the same repo. (See `STUDENTS.md` for full background on why this is the standard professional approach rather than forking.)

```bash
# One-time setup: clone the team repo (if you haven't already from D1)
git clone https://github.com/CSCI-435-SE/<your-project>.git
cd <your-project>

# Before starting each issue: sync with main
git checkout main
git pull origin main

# Create a branch named for the issue (the names are examples)
git checkout -b feat/issue-17-dark-mode    # new feature
git checkout -b fix/issue-42-toast-dismiss  # bug fix

# ... after you have made your changes, run tests ...
git add <the files you changed>
git commit -m "feat: add dark mode toggle (#17)"
git push origin feat/issue-17-dark-mode
```

After pushing, GitHub will show a **"Compare & pull request"** banner at the top of the repo page: click it to open the PR form. Select `main` as the base branch, write your description, and submit.

!!! warning "main is branch-protected"
    Direct pushes to `main` are blocked. If you accidentally commit to `main` locally, move the work to a branch before pushing:
    ```bash
    git checkout -b feat/issue-17-dark-mode   # creates branch from your current state
    git push origin feat/issue-17-dark-mode   # push the branch
    git checkout main && git reset --hard origin/main  # restore main locally
    ```

After your PR is merged, clean up:
```bash
git checkout main  # go to main
git pull origin main  # pull changes in main
git branch -d feat/issue-17-dark-mode  # delete the branch if already merged
```

**Requirements for each PR:**

- The PR must be linked to a GitHub issue (reference it in the description with `Closes #<number>`).
- The PR description must clearly explain *what* changed and *why*, in your own words.
- Tests must be written or updated for any code changed.
- The PR must be reviewed by at least one other team member before merging (leave a review comment, not just approval).
- The PR must pass CI if CI is configured in the project. If CI is not yet configured, note this in the PR description. **We don't require CI configuration for Sprint 0.**

!!! warning "You must be able to explain every line"
    You may use AI tools to help write code. However, you are responsible for understanding every line in your PR. Reviewers and the instructor may ask you to explain any part of your change at any time, including after the sprint. If you cannot explain code in your own PR, you will received points off.

**Submission:** All PRs in the project's GitHub repository. Links to merged (or reviewed) PRs go in D6.

---

#### D6 &mdash; Sprint Report

Each team submits one sprint report summarizing Sprint 0.

**Accepted formats:** Markdown pushed to the repository, PDF, or Word document.

**If submitting to the repo:** push to `docs/sprint0/report.md` (or `report.pdf`, `report.docx`).

**Required sections:**

| Section | What to include |
|---|---|
| **Team** | Team name (choose a cool name!); member names and GitHub usernames; project name and repository link |
| **Project overview** | What the system does; key users; main components and technologies; codebase organization. Answer the  questions from D1.  |
| **Feature backlog summary** | How many issues were created; themes or categories; top 3&ndash;5 features the team is most interested in pursuing during the semester. Link to the issues. |
| **Standards document summary** | Key conventions adopted; any deviations from the project's existing guidelines and why. Link to `standards.md`. |
| **Completed PRs** | Table: PR title, issue link, author, reviewer(s), status (merged / open), brief description of the change |
| **AI tool usage** | Per team member: tools used, types of tasks, total sessions, link to `ai-logs/sprint0/<username>/` folder. Notable observations about what worked or didn't. |
| **Release** | Tag name and link to the Sprint 0 release on GitHub (see D7). |
| **Risks and challenges** | Brief description of what was harder than expected; open questions; anything that could slow Sprint 1 |
| **Sprint 1 ideas** | Brief ideas on the features the team intends to tackle; any setup still needed |

**Length:** No minimum or maximum. Be specific and concrete: vague bullet-point lists are not useful evidence.

**Deadline:** Sep 17, 11:59 PM.

---

#### D7 &mdash; Sprint Release

At the end of Sprint 0, the team creates a release tag in GitHub to mark the sprint's end state.

**What to do:**

1. Ensure all Sprint 0 PRs are merged (or in a final reviewed state) before tagging.
2. Check the project's existing release history and CHANGELOG to understand the versioning scheme in use (e.g., `v1.2.3`, calendar-based versions like `2025.11.0`).
3. Create a Git tag and a GitHub release following that scheme. If the project has no prior releases, use `v0.1.0-csci435-s0`. If it has a scheme, append `-csci435-s0` to the current version (e.g., `v2.17.2-csci435-s0`).
4. Write a brief release description: what was changed in the project.

```bash
git tag v<version>-csci435-s0
git push origin v<version>-csci435-s0
```

Then create the GitHub release from the tag on the repository's Releases page.

**Submission:** Link to the GitHub release in D6 (Sprint Report). The tag must be pushed by Sep 17, 11:59 PM.

---

#### D8 &mdash; Reflection Survey (Individual)

Each team member should complete the Sprint 0 reflection survey individually, which aims to engage the student into reflecting on the process followed in Sprint 0, including their AI usage. The link will be distributed via Blackboard and Zulip.

**Deadline:** Sep 17, 11:59 PM.

---

### Grading

Sprint 0 is worth **100 points** (9% of the course grade). Points are awarded to the team (shared grade) except for D5 individual PRs and D8 reflection survey, which are graded individually.

| Deliverable | Points | Notes |
|---|---|---|
| D1 &mdash; Project Setup | 10 | Evidence: screenshots + written anwers to questions about the project in sprint report |
| D2 &mdash; Feature Backlog | 20 | Quality, specificity, and ambition of GitHub issues; completeness of required fields; appropriate labels |
| D3 &mdash; Standards Document | 10 | Coverage of required sections; grounded in existing project conventions; coherent DoD |
| D4 &mdash; AI Tooling Setup | 5 | Evidence of log capture and usage summary in sprint report |
| D5 &mdash; Pull Requests | 30 | Per member: 15 pts each PR ( 2 PRs total). Criteria: code quality, test coverage, PR description, code review, CI passing (optional) |
| D6 &mdash; Sprint Report | 10 | Completeness, specificity, and quality of evidence |
| D7 &mdash; Sprint Release | 10 | Release tag created, follows project's versioning scheme, includes release description |
| D8 &mdash; Reflection Survey | 5 | Individual; required for completion |
| **Total** | **100** | |

!!! info "Extra credit"
    Teams whose feature backlog (D2) demonstrates exceptional depth may earn up to **5 extra credit points** on D2, at the instructor's discretion.

**D5 &mdash; PR grading detail (15 points per PR):**

| Criterion | Points |
|---|---|
| Change is correctly implemented and does not break existing tests | 5 |
| Tests are written or updated appropriately | 4 |
| PR description clearly explains what changed and why | 3 |
| Code was reviewed by a teammate (review comment evidence required) | 3 |

!!! warning "Minimum bar"
    A team that does not get the app running (D1), does not submit a sprint report (D6), or has no merged PRs (D5) receives a **0 for Sprint 0** regardless of other deliverables.

---

### Submission checklist

Push the following to your team's GitHub repository **by Sep 17, 11:59 PM**:

- GitHub issues created for all proposed features (D2) — labeled and linked from sprint report
- `docs/sprint0/standards.md` (or equivalent format) — standards and guidelines document (D3)
- `docs/sprint0/report.md` (or `.pdf` or `.docx`) — sprint report (D6)
- All PRs linked in the sprint report — merged or in reviewed state (D5)
- AI logs committed to `ai-logs/sprint0/<github-username>/` (D4)
- Sprint 0 release tag pushed and GitHub release created (D7)
- D8 reflection survey submitted individually by **Sep 17, 11:59 PM**


---

### Lightning Talk &mdash; Sep 22 (in class)

!!! info "Requirements will be posted separately"
    Each team will deliver a lightning talk on Sep 22. Detailed requirements will be posted before that date on Zulip and the course website. The lightning talk is **not part of the Sprint 0 rubric**; it is a separate deliverable graded independently.
