---
hide:
  - navigation
---

# Sprint 3: Project Development & Testing

**Nov 3 &ndash; Nov 19 &middot; All deliverables due Nov 19, 11:59 PM (mid-sprint check-in due Nov 12) &middot; 100 points (12% of course grade)**

Sprint 3 continues the development of your project and puts the focus on **testing**: how well your tests check what your code is supposed to do. The issue backlog, PR workflow, and general expectations carry forward; see [Sprint 1](sprint1.md) and [Sprint 2](sprint2.md) for anything not explicitly changed here. This page covers what is **new or different** in Sprint 3.

---

!!! abstract "Sprint 3 at a glance"
    **Key dates:** Nov 12: check-in + at least one code PR (open or merged) &middot; Nov 19: everything else

    **Important rules (they cost the most points):**

    - No merge without an approval on the latest commit.
    - Spec review on the issue, saying what was checked.
    - Every code PR links its issue.
    - Real AI logs.
    - Test Evidence table in every PR; expected values not copied from the code's output.
    - Mutation testing with a tool, before and after reports committed.
    - Your team introduces no new test failures; skipped tests and disabled checks need an issue.

!!! tip "Unfamiliar with a term?"
    Check the [Glossary](glossary.md) for definitions of terms used throughout this page.

---

### Before you begin

- **Check your AI log setup** against the [AI Log Instructions](ai-logs.md) before your first session.
- **Read "Things that must improve"** below. These issues were observed in Sprint 2 and will be graded strictly.
- **Record your baseline early** (see D8): the test results at your Sprint 2 release tag (`-csci435-s2`), from CI or by running the relevant test suites locally. It helps you find hardening issues and get the mutation tool running.
- **Try the mutation testing tool early** (see D6), on any existing file in the part of the code you work on. Do not wait until your PRs are ready.

---

### What is new in Sprint 3

- **Mutation testing** (D6): a new individual deliverable. It **replaces** the UML diagrams from Sprint 2.
- **Test evidence section** in every PR description (D4).
- **Hardening issues**: one of your issues may be a hardening issue (D1).
- **Suite health section** in the sprint report (D8).
- **Mid-sprint check-in requires an open PR** (D7), due Nov 12.

!!! info "Team feature for Sprints 3&ndash;4"
    Each team will be assigned a larger feature that spans Sprints 3 and 4. The instructor or TA will post it as an issue in your team's issue tracker and notify your team when it is posted. You will likely need to split it into sub-issues.

---

### Things that must improve from Sprint 2

These issues were observed in Sprint 2 and will be graded strictly in Sprint 3.

**1. Open PRs early.** In Sprint 2, most PRs were opened in the last two days, which left no time for review. In Sprint 3, you need a code PR by the mid-sprint check-in (see D7).

**2. Independent approval before merging.** A PR is merged only after a teammate approves its **latest commit**. Merging without an approval, or after pushing new commits since the approval, is not allowed. Once approved, the author may merge. To keep reviews moving, request the review on GitHub and notify your reviewer on Zulip; reviewers respond (approve or request changes) within 24 hours.

**3. Spec reviews must be visible and show what was checked.** Before coding starts, a teammate posts a review comment on the issue itself. The comment states what the reviewer checked: whether each acceptance criterion is clear and testable, which cases were considered (and whether they are covered), and whether the scope fits. If the reviewer finds problems, they list them and the author updates the spec. If the spec is good, the reviewer says so and approves, but "Looks good!" with nothing about what was checked is not acceptable.

**4. Link PRs and issues.** Every code PR must link the issue it addresses, so the PR can be checked against the spec. Use `Closes #<issue>` in the PR description so the issue closes automatically when the PR is merged, and attach issues and code PRs to the `Sprint 3` milestone.

**5. AI logs must be real logs.** A log shows your prompts and the AI's output (SpecStory format recommended; see the [AI Log Instructions](ai-logs.md)). The following are **not** logs and receive no full credit: summaries of a session, paraphrased prompts, a share link to a chat, or tool output without the prompts that produced it. File names must follow `YYYY-MM-DD_<tool>_<short-slug>.md`. Link the log from the issue or PR it documents.

**6. The sprint report must render.** Check that tables and links display correctly on GitHub (no escaped `\|` or `\[`). Use the Sprint 3 sections, not a copy of a previous report.

---

### Deliverables

#### D1 - Sprint Backlog

Same process as Sprint 2 ([D1](sprint2.md#d1-sprint-backlog)), including the priority on carryovers: unfinished Sprint 2 issues go into your Sprint 3 backlog first, or you document on the issue why they are dropped.

**Scope minimums for Sprint 3** (same as Sprint 2):

| Role | Minimum issues |
|---|---|
| Each CSCI 435 member | at least 2 medium issues (or equivalent story points) |
| Each CSCI 535 (grad) member | at least 2 medium issues + 1 additional small issue (or equivalent story points) |

**Scope must be justified.** Each issue states its scope (small or medium) and one or two sentences on why: which components it touches and how much change you expect. The instructor or TA may reclassify an issue whose scope is clearly overstated.

**Hardening issues (optional).** One of your issues may be a *hardening issue*: work that makes the existing system more reliable rather than adding a feature. Good sources:

- **Your baseline run** (see D8): failing tests, flaky tests, or broken CI checks on `main`.
- **Tech debt your team recorded** in the "Introduced" and "Encountered" fields of your Sprint 1 and Sprint 2 PRs.
- **Known bugs** found in reviews, after merging, or by teammates.
- **The upstream issue tracker**, for bugs in the parts of the system your team works on.

A hardening issue is scoped like any other issue (see the scope justification above). It must also include evidence that the problem is fixed:

- **Bug fix:** a test that fails before the fix and passes after.
- **Flaky test:** the root cause, and enough repeated runs of that test before and after the fix to show the change (for example, 20 runs for a unit test or 10 for an E2E test).
- **Broken or missing CI check:** links to CI runs before and after the fix.
- **Failing tests in the baseline:** pass/fail counts before and after, and the cause of each group of failures.

Regenerating snapshots, reformatting code, or silencing a check without fixing its cause counts as small at most.

**Team feature.** When the team feature issue is posted (see the box under "What is new in Sprint 3"), split it into sub-issues, each with its own owner, spec (D2), and scope. Link each sub-issue to the feature issue. Sub-issues count toward your scope minimum like any other issue. When the feature is posted, add its sub-issues to your Sprint 3 milestone and adjust your backlog as needed.

Create a `Sprint 3` milestone in GitHub and attach all selected issues to it.

**What to provide in D8 (Sprint report):** link to the Sprint 3 milestone and the rationale for your backlog decisions.

---

#### D2 - Requirements Specification

Same format and requirements as Sprint 1 ([D2](sprint1.md#d2-requirements-specification)). Specs must be written and reviewed before coding begins; see item 3 in "Things that must improve" for what counts as a review.

Hardening issues use a bug format (include the observed and expected behaviors, the steps to reproduct the issue, and other details about the issue) when they fix a defect. Otherwise, use a short task format: the problem, the goal, acceptance criteria, and other necessary details.

---

#### D3 - Design Decisions

Same as Sprint 2 ([D3](sprint2.md#d3-design-decisions)): each decision names at least two concrete alternatives and explains the choice.

---

#### D4 - Code Changes and Pull Requests

Same workflow as Sprint 2 ([D4](sprint2.md#d4-code-changes-and-pull-requests)), including **the Tech Debt section**. Sprint 3 adds a **Test Evidence** section to every PR description. It replaces the "how it was tested" part of the description, so you don't write it twice.

```markdown
## Test Evidence

| Acceptance criterion | Test(s) | Level | Source of expected value |
|---|---|---|---|
| AC1: ... | ... | ... | ... |

**Not tested automatically, and why:** [...]

**AI-written tests:** [Which tests were written or modified by AI, and how you
checked that their expected values are correct. If none, write "None."]
```

How to fill it in:

- **One row per acceptance criterion** from D2. For bug reports, use the Expected Behavior instead. For PRs that change no product behavior (for example, CI changes), write "N/A" and explain why.
- **Test(s):** the test name (and file, if not obvious). If you checked the AC manually, write `Manual:` followed by the steps and what you saw. If an AC is tested both automatically and manually, list both in the same row.
- **Level:** `unit`, `integration`, `E2E`, or `manual`.
- **Source of expected value:** where the expected result in your test comes from. Use one of: `AC`, `issue discussion`, `docs`, `upstream behavior`, or `other` (explain). **The current output of your own code is not a valid source**; a test whose expected value was copied from what the code returns cannot detect that the code is wrong.
- **Not tested automatically, and why:** only for ACs checked manually only.
- You may use AI to draft this section, but you are responsible for checking that it is accurate.

Example:

| Acceptance criterion | Test(s) | Level | Source of expected value |
|---|---|---|---|
| AC1: An end date before the start date is rejected with an error | `outOfOffice.schema.test.ts` › rejects end before start | unit | AC |
| AC2: The away badge appears on the booking page during the out-of-office window | `booking-ooo.e2e.ts` › shows away badge in window | E2E | AC |
| AC3: The badge text is readable in dark mode | Manual: enabled dark mode, opened the booking page during the window → badge text is readable | manual | issue discussion |

**Not tested automatically, and why:** AC3 depends on visual contrast, which our test setup does not check.

**If your fork has no CI** that runs your tests, include in the PR description the command(s) you ran and a summary of the results (passed, failed, skipped).

**Reviewers** add one line to the code review rubric ([Sprint 1, D4](sprint1.md#d4-code-changes-and-pull-requests)):

| Criterion | Score (1–10) | Notes |
|---|---|---|
| Test evidence — does every AC have a test? Are the expected values justified? Which tests did you run locally? | | |

---

#### D5 - AI Logs

Same requirements as Sprint 1 ([D5](sprint1.md#d5-ai-logs)) and the [AI Log Instructions](ai-logs.md), with the enforcement described in item 5 of "Things that must improve."

**Log storage:** `ai-logs/sprint3/<your-github-username>/`

---

#### D6 - Mutation Testing *(new)*

This is a new individual deliverable.

**What it is.** A mutation testing tool makes small changes to your code (*mutants*), such as flipping a condition or changing a boundary value, and runs your tests against each one. If a test fails, the mutant is *killed*. If all tests pass, the mutant *survived*: your tests did not notice that the code changed. Survivors point to weak or missing tests.

**What to do.** For **one of your issues whose PR changes source code and tests** (CSCI 535: **two** such issues; your small issue may be one of them):

1. Run a mutation testing tool on the **source files changed by your PR(s)** for that issue. Do not run it on the whole project.
2. Using the tool's report, analyze every surviving mutant: is it *equivalent* (it behaves exactly like the original code, so no test can kill it), or does it reveal a gap in your tests? If there are more than 10 surviving mutants, analyze at least 10, starting with those in lines your PR added or changed.
3. Add or strengthen **at least one test that kills a surviving mutant** that revealed a gap. Re-run the tool to confirm it is killed. If no surviving mutant reveals a gap (all are killed or equivalent), say so and justify it in the surviving-mutants table; that completes this step.
4. **Answer the questions in the template below**.

**Evidence.** Configure the tool to write a machine-readable report (StrykerJS: add `"json"` to `reporters`; Gremlins: `--output=<file>.json`; go-mutesting: save the terminal output to a text file). Commit the report from your first run and from your re-run as `docs/sprint3/mutation/reports/<issue#>-<username>-before.json` and `-after.json` (`.txt` for go-mutesting). The mutation scores you list must match the reports, and the mutant your new test kills must show as killed in the "after" report.

**A tool is required.** Manual mutation does not count.

| Stack | Tool |
|---|---|
| TypeScript/JavaScript with Vitest (Actual Budget, Cal.diy, Excalidraw, Outline, Gitea frontend) | [StrykerJS](https://stryker-mutator.io/) with the [Vitest runner](https://stryker-mutator.io/docs/stryker-js/vitest-runner/) |
| TypeScript/JavaScript with Jest (Medusa) | [StrykerJS](https://stryker-mutator.io/) with the [Jest runner](https://stryker-mutator.io/docs/stryker-js/jest-runner/) |
| Go (Gitea backend) | [Gremlins](https://gremlins.dev/) or [go-mutesting](https://github.com/avito-tech/go-mutesting) |

**Set it up early.** Getting the tool to work on a large codebase is real work: builds, services, and choosing which tests run. Each student configures and runs the tool for their own files and commits the configuration they used. You may reuse a teammate's setup (and are encouraged to), as long as you run the tool yourself and credit the teammate in your report.

**Common problems** to watch for:

- **The tool stops before mutating.** Tools first run your tests on the unchanged code. If any of the selected tests fail, the run stops. Fix or exclude failing tests first (this is where your baseline run helps).
- **Tests run against built code.** If your tests run against compiled output (for example, a `dist` folder) instead of the source, mutants in the source are never seen by the tests. Configure the tool to rebuild before testing, or choose tests that run on source.
- **Tests need services.** Some test suites need a database or another service running. Start them before running the tool.
- **False survivors.** If you limit which tests run (for example, with Vitest's `dir` option), make sure the tests that cover the mutated files are included. Otherwise, mutants that some test would catch are reported as survived or not covered. Before writing a new test for a survivor, check that the relevant tests actually ran.
- **Long runs.** Mutating only the files changed by your PR keeps run time manageable.

!!! warning "If you are blocked"
    If you cannot get the tool to run, first ask your teammates: someone may already have a working setup. If you are still stuck, tell the TA **as early as possible**, with the errors you got and the AI log of what you tried. The TA will help you debug it. If it still cannot be made to work, the TA may approve running the tool on a different issue or a different part of your code instead. Problems reported at the end of the sprint will not excuse a missing D6.

**Submission:** `docs/sprint3/mutation/<issue#>-<username>.md`, using this template:

```markdown
# Mutation testing: Issue #<N> -- <issue title>

**PR(s):** #...  **Tool:** ...  **Config:** [link; credit the teammate if you reused their setup]  **Command:** `...`
**Reports:** [before](reports/<issue#>-<username>-before.json) · [after](reports/<issue#>-<username>-after.json)
**Mutation score:** before ...% → after ...%

## Surviving mutants

| Location (file:line) | Mutation | Equivalent or test gap? | Why |
|---|---|---|---|
| | | | |

## New or strengthened test

Commit: [link] · Test: [file › test name] · Kills: [mutant location]

## Questions

1. What did the surviving mutants reveal about your tests?
2. Did any surviving mutant point to an assertion whose expected value was not based on the requirements? Explain.
3. If you used AI to configure the tool, analyze survivors, or write tests, what did it produce and what did you verify or correct? If AI was not used, write "N/A."
```

---

#### D7 - Mid-Sprint Check-in

**Due: Nov 12, 11:59 PM.**

**Submission:** `docs/sprint3/checkin/<username>.md`

**Format:** ~100 words per question, plus a link.

1. What have you implemented so far, and what remains?
2. What is one thing you learned about testing in your project?
3. What is one risk to finishing your work by Nov 19, and what will you do about it?

**Required link:** at least one **code PR you authored**, open and ready for review, or merged, by Nov 12.

---

#### D8 - Sprint Report

Same format as Sprint 1 ([D6 in Sprint 1](sprint1.md#d6-sprint-report)), with these additions:

- **Suite health** (new section). Keep it short:
    - **Baseline table** for the test suites relevant to your team (the packages or areas you work on, not the whole repository). For each suite: the command or CI workflow, and the test runner's summary line (passed, failed, skipped) at your **Sprint 2 release tag** (`-csci435-s2`) and at the **end** of the sprint. Use CI results where available; if you run tests locally, run only the packages you change.
    - **Failures grouped by cause** (for example: environment-specific, already broken upstream, flaky, caused by our changes), with a link to one issue per cause that lists the affected tests.
    - **No failures introduced by your team.** Any test your team's changes broke must be fixed by the end of the sprint. Pre-existing failures only need to be recorded and grouped; fixing them is optional (and can be a hardening issue).
    - **Skipped tests and disabled CI checks.** Skipping a test or disabling a CI check requires a linked issue and a reason in a code comment.
- **Mutation testing:** links to each member's D6 file.
- **Hardening issues:** which issues they are and where they came from.
- Carryovers from Sprint 2 and what changed.

**Submit to:** `docs/sprint3/report.md` (or `.pdf`, `.docx`). If you submit Markdown, check that it renders on GitHub.

---

#### D9 - Sprint Release

Same as Sprint 1 ([D7 in Sprint 1](sprint1.md#d7-sprint-release)). Tag with the `-csci435-s3` suffix.

Create the release **after the last Sprint 3 merge**, so it matches the final state of `main`. The release description summarizes the sprint's changes (features, fixes, hardening work), not just the tag name.

---

#### D10 - Reflection Survey (Individual)

Each team member must complete the Sprint 3 reflection survey individually. The link will be distributed via Blackboard and Zulip toward the end of the sprint.

**Deadline:** Nov 19, 11:59 PM.

---

### Grading

Sprint 3 is worth **100 points** (12% of the course grade). D1, D8, and D9 are graded as a team; all other deliverables are graded individually.

| Deliverable | Points | Notes |
|---|---|---|
| D1 - Sprint Backlog | 10 | Team. Issues selected, scoped with justification, assigned, milestone created; carryover decisions documented |
| D2 - Requirements Specification | 20 | Individual. User story format, INVEST criteria, acceptance criteria quality; spec review on the issue before coding, showing what was checked |
| D3 - Design Decisions | 5 | Individual. At least one non-trivial decision per issue, with alternatives |
| D4 - Pull Requests | 20 | Individual. See detail below |
| D5 - AI Logs | 5 | Individual. Real logs, correctly named, linked from the issue or PR |
| D6 - Mutation Testing | 15 | Individual. See rubric below |
| D7 - Mid-Sprint Check-in | 5 | Individual. On time, substantive, and an open or merged code PR linked = 5; late, thin, or no PR = 3; missing = 0 |
| D8 - Sprint Report | 10 | Team. Completeness, specificity, quality of evidence; suite health section |
| D9 - Sprint Release | 2 | Team. Tag follows convention; created after the last merge; release description summarizes changes |
| D10 - Reflection Survey | 8 | Individual. Required for completion |
| **Total** | **100** | |

**D4 - PR grading detail:**

The D4 score is the aggregate across all your PRs, normalized to 20 points.

| Criterion | Points per PR |
|---|---|
| Change correctly implements the acceptance criteria from D2 | 6 |
| Tests written or updated appropriately; Test Evidence section complete, with every AC covered and expected values justified | 6 |
| PR description explains what changed and why; Tech Debt section present; issue linked | 3 |
| CI passes (or manual verification documented) | 3 |
| Code reviewed using the rubric (including the test evidence line); reviewer comment posted; PR merged only after an approval on the latest commit | 2 |
| **Total per PR** | **20** |

**D6 - Mutation testing rubric:**

| Criterion | Points |
|---|---|
| Tool run on the files changed by the PR; configuration, command, results, and reports committed | 4 |
| Surviving mutants analyzed correctly (equivalent vs. test gap, with explanation) | 4 |
| At least one new or strengthened test kills a surviving mutant; re-run confirms it | 4 |
| Answers to the questions show understanding, not just description | 3 |
| **Total** | **15** |

CSCI 535: the D6 score is the average of the two submissions.

!!! warning "Minimum bar"
    A team with no merged PRs (D4), no sprint report (D8), or no release (D9) receives a **0 for Sprint 3** regardless of other deliverables.

!!! info "Extra credit"
    - A PR submitted to the **real upstream project** and accepted or under active review earns up to **3 bonus points** per PR, at the instructor's discretion.
    - A **bug report filed in the upstream project** that comes from your own testing work and is **confirmed by the maintainers** (by the time Sprint 4 is graded) earns up to **2 bonus points** per report, at the instructor's discretion.

---

### Submission checklist

Push the following to your team's GitHub repository **by Nov 19, 11:59 PM**:

- Sprint 3 milestone with all selected issues attached, assigned, and scoped with justification (D1)
- Issue bodies with user stories or bug reports, acceptance criteria, and design decisions with alternatives; spec review comments on each issue (D2, D3)
- All PRs merged after an approval on the latest commit; each PR description links its issue and includes the Tech Debt and Test Evidence sections; code review rubric posted on each PR (D4)
- AI logs in `ai-logs/sprint3/<github-username>/`, named `YYYY-MM-DD_<tool>_<short-slug>.md`, linked from the issue or PR (D5)
- `docs/sprint3/mutation/<issue#>-<username>.md` and the before/after reports in `docs/sprint3/mutation/reports/` (two of each for CSCI 535) (D6)
- **`docs/sprint3/checkin/<username>.md` with a link to an open or merged code PR -- due Nov 12, 11:59 PM** (D7)
- `docs/sprint3/report.md` (or `.pdf` or `.docx`), including the suite health section (D8)
- Sprint 3 release tag pushed and GitHub release created after the last merge (D9)
- D10 reflection survey submitted individually by **Nov 19, 11:59 PM**

---

[Back to Sprints overview](sprints.md)
