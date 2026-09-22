---
hide:
  - navigation
---

# Sprint 1 — Project Development & Release

**Sep 22–Oct 8 · All deliverables due Oct 8, 11:59 PM · 100 points (10% of course grade)**

Sprint 1 is the first full development sprint. By the end, each team should have a working release with new feature and other changes that improve the project in a meaningful, demonstrable way. 

Each team will define the sprint backlog: prioritize, estimate, and select issues that will be solved in the sprint. Each team member will implement at least two medium-size issues (graduate students will implement at least an additional small issue) following the SE practices defined in sprint 0.

---

!!! tip "Unfamiliar with a term in these instructions?"
    Check the [Glossary](glossary.md) for definitions of acceptance criteria, sprint backlog, release, CI, and other concepts used throughout this page.

---

### Before you begin

Review your Sprint 0 deliverables before planning Sprint 1:

- Re-read your issue backlog (D2 from S0). Which issues are most impactful? Which are feasible in ~2.5 weeks?
- Re-read your standards document (D3 from S0). Conventions carry forward; update it if Sprint 0 revealed gaps.
- Check the Sprint 0 report's **"Sprint 1 ideas"** section — treat it as a starting point, not a final answer.
- Make sure all Sprint 0 PRs are merged and the repo is in a clean state before starting new work.
- Make sure all Sprint 0 issues are closed (or explicitly marked as deferred).
- Verify your AI log setup from Sprint 0 is working before starting new sessions.

---

### Deliverables

#### D1 — Sprint Backlog (GitHub Issues)

The team selects and prepares the issues it will implement in Sprint 1.

**Start this early.** Issues may turn out to be broader than expected, overlap with each other, or be invalid. Discovering this in week 2 leaves no time to recover.

**Step 1 — Refine the backlog.** Go through all open issues as a team. Add missing ones, close invalid or duplicate ones, and **decompose any large or XL issues into smaller sub-issues** that can be completed within the sprint. Record decisions in a team meeting (preferred) or Zulip thread.

**Step 2 — Estimate and select.** Use the prioritization and estimation techniques from the planning lecture (story points and planning poker) to size and rank your backlog. Use any units for the story points. Select a set of issues the full team can realistically complete in 2.5 weeks. Your sprint backlog must meet the following minimums:

| Role | Minimum issues selected |
|---|---|
| Each CSCI 435 member | at least 2 medium issues (or equivalent story points) |
| Each CSCI 535 (grad) member | at least 2 medium issues + 1 additional small issue (or equivalent story points) |

!!! info "Quality over quantity"
    One well-implemented, thoroughly tested feature is worth more than three half-finished ones. Plan conservatively, then expand if you're ahead of schedule.

!!! tip "GitHub Projects"
    Consider using [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects) to organize your backlog, track progress, and visualize point burndown. It integrates directly with your issues and milestone. See the [GitHub for Beginners tutorial](https://github.blog/developer-skills/github/github-for-beginners-getting-started-with-github-issues-and-projects/) — the [Projects section starts at 02:59](https://www.youtube.com/watch?v=c67GaAkf1BE&t=179s) in the accompanying video. Try the **Team planning** or **Kanban** templates; Team planning supports custom fields such as estimated story points.

**Step 3 — Assign ownership.** Every selected issue must have a single owner (assigned in GitHub). One issue per member at minimum; members may own more than one. No issue should be assigned to more than one person.

**Step 4 — Create the Sprint 1 milestone.** Create a [GitHub Milestone](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones) named `Sprint 1` and attach all selected issues to it.

!!! info "Instructor and TA involvement"
    The instructor or TA may add new issues or flag specific issues as high priority during the sprint. Treat this as the customer expressing urgency — acknowledge it and adjust your plan accordingly.

!!! info "Suggested pacing"
    Aim to have D2 specs written and peer-reviewed by **Sep 27**. That leaves a bit more than 1.5 weeks for implementation with clear targets in hand. If specs are still being drafted next week, you are likely behind.

**What to provide in D6 (Sprint report):** Link to the Sprint 1 milestone; brief rationale for how you scoped the sprint.

---

#### D2 — Requirements Specification

For each issue in your Sprint 1 backlog, the **owner** must write or significantly refine the specification **before writing any code**.

**Format:** If your project already uses an issue template, adapt it to include the fields below. If your project has no feature request template, create one. Otherwise, use the following structure as a guide.

**For features and enhancements**, write the issue as a **user story** that satisfies the [INVEST criteria](https://xp123.com/invest-in-good-stories-and-smart-tasks/) -- see also the slides on Project management:

```markdown
## User Story
As a [type of user], I want [goal] so that [benefit].

## User Scenario
[A concrete walkthrough of how a user encounters and uses this feature.]

## Acceptance Criteria
1. ...
2. ...
3. ...

## Out of Scope
- ...

## Open Questions
- ...
```

Each acceptance criterion must be **testable** — observable behavior, not vague intent. Minimum 3 per issue.

!!! tip "What makes a criterion testable?"
    A testable criterion has a clear pass/fail outcome: *"The export button is disabled when no items are selected"* is testable. *"The UI should feel responsive"* is not. If you cannot write a test or manual step that definitively passes or fails it, rewrite it.

**For bug reports**, include at minimum:

```markdown
## Observed Behavior (OB)
[What currently happens.]

## Expected Behavior (EB)
[What should happen instead.]

## Steps to Reproduce (S2R)
1. ...
2. ...

## Additional Information
[Screenshots, stack traces, error logs — recommended.]
```

**Before finalizing your spec**, have at least one teammate read it and leave a comment on the issue confirming it is clear enough to implement. This is a lightweight requirements review.

**Submission:** All issue specs updated in GitHub. Links included in D6.

---

#### D3 — Design Decisions

For each issue in your Sprint 1 backlog, the owner must document at least one non-trivial design decision before or during implementation.

**What to document:**

| Field | Description |
|---|---|
| **Decision** | One sentence stating what you decided |
| **Alternatives considered** | At least two concrete options you evaluated |
| **Rationale** | Why you chose this option over the others |
| **Consequences** | What this decision makes easier and what it makes harder |

**Where to put it:** Add a `## Design` section to the GitHub issue body, in an issue comment, or include it in the PR description. For decisions that affect multiple issues or the overall architecture, add a team-level note to `docs/sprint1/design.md`.

!!! tip "Don't overthink the scope"
    "Should I add this field to the existing component or create a new one?" with a clear rationale is a perfectly good design decision. The goal is to make your reasoning visible — one sentence per field is enough. This is not a design document.

**Submission:** Design decisions documented in GitHub issues, PR descriptions, or `docs/sprint1/design.md`. Links in D6.

---

#### D4 — Code Changes and Pull Requests

This is the core development activity of Sprint 1. Each team member implements their assigned issue(s) through the full PR workflow.

At least one PR per issue must be created, merged, and closed. In most cases, one issue maps to one PR; if an issue truly requires multiple PRs, split it into sub-issues first.

**Requirements for each PR:**

- Linked to a GitHub issue (`Closes #<number>` in the description).
- Description clearly explains *what* changed, *why*, and *how* it was tested.
- New or updated tests for every behavioral change; test strategy explained in the PR.
- CI should pass if it is configured for your project. If CI is not yet working, document manual verification in the PR description instead — CI setup is encouraged but not required for all projects.
- Reviewed by at least one teammate (not yourself) using the **code review rubric** below — same process as Sprint 0.
- Merged before the sprint deadline.
- Delete the branch after the PR is merged (same as Sprint 0).

**Code review rubric:**

When a PR is ready for review, the reviewer must evaluate it on the criteria below and **post the filled-in rubric as a comment on the PR**. Fill in the rubric during your **initial review pass** — before the author makes any revisions in response to your comments. Scoring it after all back-and-forth fixes defeats the purpose. If you review a follow-up revision, you may add a brief update to your comment noting what changed.

The **Notes** column should include a brief explanation (one to two sentences) of your score. Reviewers may also make specific comments on individual lines of code via GitHub's code review interface.

| Criterion | Score (1–10) | Notes |
|---|---|---|
| Correctness — does the change do what the issue asked? | | |
| Test coverage — are tests present and meaningful? | | |
| Code quality — consistent style, clear naming, no unnecessary duplication | | |
| Documentation — inline comments and PR description are clear | | |
| AI transparency — if AI was used, is there evidence of human verification? | | |
| Overall — would you merge this as-is? | | |

Each student must conduct at least one code review per sprint. Over the course of the semester, each student must review code from every teammate at least once.

**Before you write any code:**

1. **Read the issue and spec.** Understand the acceptance criteria before touching any code.
2. **Consider using AI.** If you find an agentic tool helpful, use it to validate, extend, or accelerate your understanding — but you must be able to explain every line in your PR.

!!! warning "You must be able to explain every line"
    Reviewers and the instructor may ask you to explain any part of your change at any time. If you cannot, you will receive points off.

!!! tip "Using AI more intentionally"
    Before accepting a proposed change, ask the agent to explain what it changed and why, and what could go wrong. This keeps you engaged with the change before it lands in your branch — and gives you something concrete to say during code review.

**Branch and PR workflow** (same as Sprint 0):

```bash
# Sync with main before starting
git checkout main
git pull origin main

# Create a branch for your issue
git checkout -b feat/issue-42-export-pdf   # new feature
git checkout -b fix/issue-17-date-overflow  # bug fix

# After making changes and running tests:
git add <changed files>
git commit -m "feat: add PDF export for reports (#42)"
git push origin feat/issue-42-export-pdf
```

After pushing, open the PR via GitHub's **"Compare & pull request"** banner. Select `main` as the base branch.

After your PR is merged, clean up:

```bash
git checkout main           # switch back to main
git pull origin main        # pull the merged changes
git branch -d feat/issue-42-export-pdf  # delete local branch (safe: only works if merged)
```

Also delete the remote branch from GitHub: on the merged PR page, click **"Delete branch"**.

**Submission:** All PRs merged. Links and a summary table in D6.

---

#### D5 — AI Logs

Continue the logging practice from Sprint 0. Every agentic session related to Sprint 1 work must be logged. **The requirements below are stricter than Sprint 0 — review them carefully before submitting.**

**Where to store logs:** `ai-logs/sprint1/<your-github-username>/`

**Naming convention:** `YYYY-MM-DD_<tool>_<short-slug>.md` — e.g., `2026-09-25_claude-code_issue-42-pdf-export.md`. Follow the same convention described in [AI Log Instructions](ai-logs.md).

**Format requirements:**

- Logs must capture full session metadata: timestamps, prompts, and AI responses. Use SpecStory or a browser export extension when available (see [AI Log Instructions](ai-logs.md)). If no export tool exists for your tool, manually transcribe the session with every message labeled `[User]` or `[AI]` and include timestamps. Do not submit raw, unstructured copy-pastes. Accepted formats: **`.md`** (preferred), `.txt`, `.json`.
- Do not summarize or reconstruct your AI usage after the fact. Logs must be captured during the session.
- Do not submit `.html`, `.docx`, or `.pdf` log files, or links to private chats. These will not receive credit.

**Linking:** Reference your log files in a **comment on the corresponding GitHub issue** — do not add AI log references to the PR description. Use the format and template described in [AI Log Instructions](ai-logs.md). Logs not linked to an issue comment will not receive credit. Broken links will not receive credit.

!!! warning "Log references go in issue comments only"
    Logs may be committed to the repo via a PR, but the reference must still appear in an **issue comment** — not in the PR description or in a PR comment. **Each contributor (implementor, code reviewer, estimator) posts their own comment on the issue** — if three people worked on an issue, there should be three separate AI Assistance comments.

**If you did not use AI for an issue**, post a brief note in an issue comment stating this. No log file is needed for that issue, but your log folder must still exist.

**What to include in D6:** Per member: tools used, number of sessions logged, link to `ai-logs/sprint1/<username>/`, and 2–3 sentences on what worked well or what you'd do differently.

**Submission:** Logs pushed to the repo. Summary in D6.

---

#### D6 — Sprint Report

Each team submits one sprint report summarizing Sprint 1.

**Accepted formats:** Markdown pushed to the repository, PDF, or Word document.

**If submitting to the repo:** push to `docs/sprint1/report.md` (or `report.pdf`, `report.docx`).

**Required sections:**

| Section | What to include |
|---|---|
| **Team** | Team name; member names and GitHub usernames; project name and repository link |
| **Sprint overview** | Brief narrative: what the team set out to do and what was actually delivered. Be honest about scope changes |
| **Sprint backlog** | Link to the Sprint 1 GitHub Milestone; table of issues (title, owner, estimated points, scope, status) |
| **Requirements & design** | Were specs complete before coding started? Any surprises? Key design decisions and brief rationale |
| **Completed issues** | Table: issue title, issue owner, all associated PRs (PR link, author, reviewer(s), status), brief description of changes |
| **Test strategy** | What kinds of tests were written? Were there changes you couldn't test automatically? Why? |
| **AI tool usage** | Per member: tools used, sessions logged, link to AI log folder. Notable patterns vs. Sprint 0 |
| **Release** | Tag name and link to the Sprint 1 release on GitHub |
| **Risks and retrospective** | What went well? What slowed you down? What would you do differently in Sprint 2? |
| **Sprint 2 plan** | Initial ideas for Sprint 2; any Sprint 1 issues to carry over |

**Length:** No minimum or maximum. Be specific — vague summaries do not earn points.

**Deadline:** Oct 8, 11:59 PM.

---

#### D7 — Sprint Release

At the end of Sprint 1, create a release tag to mark the sprint's end state.

1. Ensure all Sprint 1 PRs are merged before tagging.
2. Use the same base version from Sprint 0 (no version bump).
3. Tag with the `-csci435-s1` suffix. Example: if Sprint 0 was `v2.17.2-csci435-s0`, tag Sprint 1 as `v2.17.2-csci435-s1`.
4. Write a release description listing features added, bugs fixed, or improvements made this sprint.

```bash
git tag v<version>-csci435-s1
git push origin v<version>-csci435-s1
```

Create the GitHub release from the tag on the repository's Releases page.

**Submission:** Link to the GitHub release in D6. Tag pushed by Oct 8, 11:59 PM.

---

#### D8 — Reflection Survey (Individual)

Each team member must complete the Sprint 1 reflection survey individually. The link will be distributed via Blackboard and Zulip.

**Deadline:** Oct 8, 11:59 PM.

---

### Grading

Sprint 1 is worth **100 points** (10% of the course grade). D2, D3, D4, D5, and D8 are graded individually; D1, D6, and D7 are graded as a team.

| Deliverable | Points | Notes |
|---|---|---|
| D1 — Sprint Backlog | 10 | Issues selected, estimated, assigned, and attached to milestone; rationale in sprint report |
| D2 — Requirements Specification | 20 | Individual. User story format, INVEST criteria, acceptance criteria quality; peer review evidence on issues |
| D3 — Design Decisions | 7 | Individual. At least one non-trivial decision documented per issue; rationale is clear |
| D4 — Pull Requests | 36 | Individual. Per member: see detail below. |
| D5 — AI Logs | 7 | Individual. Logs present, correctly formatted, named, and linked to issues; summary in report |
| D6 — Sprint Report | 10 | Completeness, specificity, and quality of evidence |
| D7 — Sprint Release | 2 | Tag follows convention; description summarizes sprint changes |
| D8 — Reflection Survey | 8 | Individual. Required for completion. |
| **Total** | **100** | |

**D4 — PR grading detail:**

All PRs associated with each issue are graded on the criteria below. The D4 score is the aggregate across all issues, normalized to 36 points.

| Criterion | Points per PR |
|---|---|
| Change correctly implements the acceptance criteria from D2 | 6 |
| Tests written or updated appropriately; test strategy explained in PR | 5 |
| PR description clearly explains what changed, why, and how it was tested | 4 |
| CI passes (or manual verification documented) | 3 |
| Code reviewed using the rubric; reviewer comment posted on PR | 2 |
| **Total per PR** | **20** |

!!! warning "Minimum bar"
    A team with no merged PRs (D4), no sprint report (D6), or no release (D7) receives a **0 for Sprint 1** regardless of other deliverables.

!!! info "Extra credit"
    A PR submitted to the **real upstream project** and accepted or under active review earns up to **3 bonus points** per PR, at the instructor's discretion.

---

### Submission checklist

Push the following to your team's GitHub repository **by Oct 8, 11:59 PM**:

- Sprint 1 milestone created with all selected issues attached and assigned (D1)
- GitHub issue bodies updated with user stories, acceptance criteria, and design decisions (D2, D3)
- All PRs merged; code review rubric posted as a comment on each PR (D4)
- AI logs committed to `ai-logs/sprint1/<github-username>/`, named `YYYY-MM-DD_<tool>_<short-slug>.md`, referenced in an issue comment (not PR description or comments) (D5)
- `docs/sprint1/report.md` (or `.pdf` or `.docx`) — sprint report (D6)
- Sprint 1 release tag pushed and GitHub release created (D7)
- D8 reflection survey submitted individually by **Oct 8, 11:59 PM**

---

### Lightning Talk — Oct 20 (in class)

The Sprint 1–2 Lightning Talk covers **both** Sprints 1 and 2. Full requirements will be posted on the **[Presentations](presentations.md)** page.

← [Back to Sprints overview](sprints.md)
