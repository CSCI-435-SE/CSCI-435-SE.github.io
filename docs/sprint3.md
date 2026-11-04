---
hide:
  - navigation
---

# Sprint 3: Project Development & Testing

**Nov 3 &ndash; Nov 19 &middot; All deliverables due Nov 19, 11:59 PM (mid-sprint check-in due Nov 12) &middot; 100 points (12% of course grade)**

Sprint 3 continues the development of your project and puts the focus on **testing**: how well your tests check what your code is supposed to do. The issue backlog, PR workflow, and general expectations carry forward; see [Sprint 1](sprint1.md) and [Sprint 2](sprint2.md) for anything not explicitly changed here. This page covers what is **new or different** in Sprint 3.

---

!!! tip "Unfamiliar with a term?"
    Check the [Glossary](glossary.md) for definitions of terms used throughout this page.

---

### Before you begin

- **Read "Things that must improve"** below. These issues were observed in Sprint 2 and will be graded strictly.
- **Run your team's test suites and CI on `main`** in the first days of the sprint and record the results (see D8). This is your baseline.
- **Set up the mutation testing tool early** (see D6). Do not wait until your PRs are merged.

---

### What is new in Sprint 3

- **Mutation testing** (D6): a new individual deliverable. It **replaces** the UML diagrams from Sprint 2; there are no diagrams this sprint.
- **Test evidence section** in every PR description (D4).
- **Hardening issues**: one of your issues may be a hardening issue (D1).
- **Suite health section** in the sprint report (D8).
- **Mid-sprint check-in requires an open PR** (D7), due Nov 12.

!!! info "Team feature for Sprints 3&ndash;4"
    Each team will be assigned a larger feature that spans Sprints 3 and 4. The instructor or TA will post it as an issue in your team's issue tracker and notify your team when it is posted.

---

### Things that must improve from Sprint 2

These issues were observed in Sprint 2 and will be graded strictly in Sprint 3.

**1. No self-merges.** The author of a PR cannot merge it, even after it is approved. The reviewer (or another teammate) merges.

**2. Spec reviews must be visible and show what was checked.** Before coding starts, a teammate posts a review comment on the issue itself. The comment states what the reviewer checked: whether each acceptance criterion is clear and testable, which cases were considered (and whether they are covered), and whether the scope fits. If the reviewer finds problems, they list them and the author updates the spec. If the spec is good, the reviewer says so and approves, but "Looks good!" with nothing about what was checked is not a spec review.

**3. Traceability.** Every PR description includes `Closes #<issue>`. Issues are closed by their PR, not manually. Do not close an issue that has no merged PR unless you explain why on the issue. Every issue and PR in the sprint is attached to the `Sprint 3` milestone.

**4. AI logs must be real logs.** A log shows your prompts and the AI's output (SpecStory format recommended). The following are **not** logs and receive no credit: summaries of a session, paraphrased prompts, a share link to a chat, or tool output without the prompts that produced it. File names must follow `YYYY-MM-DD_<tool>_<short-slug>.md`. Link the log from the issue or PR it documents.

**5. Open PRs early.** In Sprint 2, most PRs were opened and merged in the last two days, which left no time for review. In Sprint 3, you must have at least one code PR open by the mid-sprint check-in (see D7).

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

**Hardening issues.** One of your issues may be a *hardening issue*: work that makes the existing system more reliable rather than adding a feature. Good sources:

- **Your baseline run** (see D8): failing tests, flaky tests, or broken CI checks on `main`.
- **Tech debt your team recorded** in the "Introduced" and "Encountered" fields of your Sprint 1 and Sprint 2 PRs.
- **Known bugs** found in reviews, after merging, or by teammates.
- **The upstream issue tracker**, for bugs in the parts of the system your team works on.

A hardening issue is scoped like any other issue (see the scope justification above). It must also include evidence that the problem is fixed:

- **Bug fix:** a test that fails before the fix and passes after.
- **Flaky test:** the root cause, and repeated runs before and after the fix (for example, 30 runs each).
- **Broken or missing CI check:** links to CI runs before and after the fix.
- **Failing tests in the baseline:** pass/fail counts before and after, and the cause of each failure.

Regenerating snapshots, reformatting code, or silencing a check without fixing its cause counts as small at most.

Create a `Sprint 3` milestone in GitHub and attach all selected issues to it.

**What to provide in D8 (Sprint report):** link to the Sprint 3 milestone; rationale for backlog decisions; carryovers and skips; which issues are hardening issues.

---

#### D2 - Requirements Specification

Same format and requirements as Sprint 1 ([D2](sprint1.md#d2--requirements-specification)). Specs must be written and reviewed before coding begins; see item 2 in "Things that must improve" for what counts as a review.

Hardening issues use the bug format (OB/EB/S2R) when they fix a defect, or the user-story format otherwise.

---

#### D3 - Design Decisions

Same as Sprint 2 ([D3](sprint2.md#d3-design-decisions)): each decision names at least two concrete alternatives and explains the choice.

---

#### D4 - Code Changes and Pull Requests

Same workflow as Sprint 2 ([D4](sprint2.md#d4-code-changes-and-pull-requests)), including the Tech Debt section. Sprint 3 adds a **Test Evidence** section to every PR description:

```markdown
## Test Evidence

| Acceptance criterion | Test(s) (file › test name) | Level (unit / integration / E2E / manual) | Where the expected value comes from |
|---|---|---|---|
| AC1: ... | ... | ... | ... |

**Not tested automatically, and why:** [...]

**AI-written tests:** [Which tests were written or modified by AI, and how you
checked that their expected values are correct. If none, write "None."]
```

Every acceptance criterion from D2 appears in the table. "Where the expected value comes from" means the source of the expected result in your assertions: the acceptance criterion, the issue discussion, documentation, an upstream behavior, and so on. **The current output of your own code is not a valid source**; a test whose expected value was copied from what the code returns cannot detect that the code is wrong.

**Reviewers** add one line to the code review rubric ([Sprint 1, D4](sprint1.md#d4--code-changes-and-pull-requests)):

| Criterion | Score (1–10) | Notes |
|---|---|---|
| Test evidence — does every AC have a test? Are the expected values justified? Which tests did you run locally? | | |

---

#### D5 - AI Logs

Same requirements as Sprint 1 ([D5](sprint1.md#d5--ai-logs)), with the enforcement described in item 4 of "Things that must improve."

**Log storage:** `ai-logs/sprint3/<your-github-username>/`

---

#### D6 - Mutation Testing *(new)*

This is a new individual deliverable. It replaces the Sprint 2 UML diagrams.

**What it is.** A mutation testing tool makes small changes to your code (*mutants*), such as flipping a condition or changing a boundary, and runs your tests against each one. If a test fails, the mutant is *killed*. If all tests pass, the mutant *survived*: your tests did not notice that the code changed. Survivors point to weak or missing tests.

**What to do.** For **one of your medium issues** (CSCI 535: **two** medium issues):

1. Run a mutation testing tool on the **source files changed by your PR(s)** for that issue. Do not mutate the whole project.
2. Using the tool's report, analyze every surviving mutant: is it *equivalent* (it behaves exactly like the original code, so no test can kill it), or does it reveal a gap in your tests? If there are more than 10 surviving mutants, analyze at least 10, starting with those in lines your PR added or changed.
3. Add or strengthen **at least one test that kills a surviving mutant** that revealed a gap. Re-run the tool to confirm it is killed.
4. Answer the questions in the template below.

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
    If you cannot get the tool to run, first ask your teammates: someone may already have a working setup. If you are still stuck, tell the TA **by Nov 10**, with the errors you got and the AI log of what you tried. The TA will help you debug it. If it still cannot be made to work, the TA may approve running the tool on a different issue or a different part of your code instead. Reporting it late will not be accepted as a reason for a missing D6.

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
2. Which of your tests' expected values come from the acceptance criteria, and which (if any) were taken from the code's own output?
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

**Required link:** at least one **code PR you authored**, open and ready for review (or already merged) by Nov 12.

---

#### D8 - Sprint Report

Same format as Sprint 1 ([D6 in Sprint 1](sprint1.md#d6--sprint-report)), with these additions:

- **Suite health** (new section):
    - **Baseline table** for the test suites relevant to your team (the packages or areas you work on, not necessarily the whole repository): suite, command or CI workflow, and the number of passing, failing, and skipped tests at the **start** of the sprint and at the **end**.
    - **Failures grouped by cause** (for example: environment-specific, already broken upstream, flaky, caused by our changes). One issue per cause is enough; list the affected tests in it.
    - **No failures introduced by your team.** Any test your team's changes broke must be fixed by the end of the sprint. Pre-existing failures only need to be recorded and grouped; fixing them is optional (and can be a hardening issue).
    - **Skipped tests and disabled CI checks.** Skipping a test or disabling a CI check requires a linked issue and a reason, both in the report and in a code comment.
- **Mutation testing summary:** one row per D6 submission (member, issue, mutants, killed, survived, score, link).
- **Hardening issues:** which issues they are and where they came from.
- Carryovers from Sprint 2 and what changed.

**Submit to:** `docs/sprint3/report.md` (or `.pdf`, `.docx`). If you submit Markdown, check that it renders on GitHub.

---

#### D9 - Sprint Release

Same as Sprint 1 ([D7 in Sprint 1](sprint1.md#d7--sprint-release)). Tag with the `-csci435-s3` suffix.

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
| D7 - Mid-Sprint Check-in | 5 | Individual. On time, substantive, and an open code PR linked = 5; late, thin, or no PR = 3; missing = 0 |
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
| PR description explains what changed and why; Tech Debt section present; `Closes #N` present | 3 |
| CI passes (or manual verification documented) | 3 |
| Code reviewed using the rubric (including the test evidence line); reviewer comment posted; PR merged by someone other than the author | 2 |
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
    - A **bug report filed in the upstream project** that comes from your own testing work and is **confirmed by the maintainers** earns up to **1 bonus point** per report, at the instructor's discretion.

---

### Submission checklist

Push the following to your team's GitHub repository **by Nov 19, 11:59 PM**:

- Sprint 3 milestone with all selected issues attached, assigned, and scoped with justification (D1)
- Issue bodies with user stories or bug reports, acceptance criteria, and design decisions with alternatives; spec review comments on each issue (D2, D3)
- All PRs merged by someone other than the author; each PR description includes `Closes #N`, the Tech Debt section, and the Test Evidence section; code review rubric posted on each PR (D4)
- AI logs in `ai-logs/sprint3/<github-username>/`, named `YYYY-MM-DD_<tool>_<short-slug>.md`, linked from the issue or PR (D5)
- `docs/sprint3/mutation/<issue#>-<username>.md` and the before/after reports in `docs/sprint3/mutation/reports/` (two of each for CSCI 535) (D6)
- **`docs/sprint3/checkin/<username>.md` with a link to an open code PR -- due Nov 12, 11:59 PM** (D7)
- `docs/sprint3/report.md` (or `.pdf` or `.docx`), including the suite health section (D8)
- Sprint 3 release tag pushed and GitHub release created after the last merge (D9)
- D10 reflection survey submitted individually by **Nov 19, 11:59 PM**

---

[Back to Sprints overview](sprints.md)
