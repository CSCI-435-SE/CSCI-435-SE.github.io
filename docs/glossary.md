---
hide:
  - navigation
---

# Glossary

Terms, tools, and concepts used throughout the course. If something in a sprint page is unfamiliar, check here first.

---

## Git & GitHub

### Branch

A branch is an independent line of development inside a Git repository. You create a branch to work on a feature or fix without touching the shared `main` branch. When your work is ready, you open a pull request to merge it back. Every piece of work in this course happens on its own branch — one branch per issue.

→ [About branches (GitHub Docs)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)

### Branch protection

A GitHub setting that prevents anyone from pushing directly to a branch (typically `main`). With branch protection enabled, all changes must go through a pull request and be approved before they can be merged. In this course, `main` is branch-protected on every project repo — direct pushes will be rejected.

→ [About protected branches (GitHub Docs)](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)

### Commit message conventions

A standard format for writing Git commit messages so the history is readable and tooling can parse it. This course uses the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>: <short description> (#issue-number)
```

Common types: `feat` (new feature), `fix` (bug fix), `chore` (maintenance, no production change), `test`, `docs`, `refactor`. Example: `feat: add dark mode toggle (#17)`.

→ [Conventional Commits spec](https://www.conventionalcommits.org/en/v1.0.0/)

### CI — Continuous Integration

CI is an automated process that runs every time code is pushed or a pull request is opened. It typically runs the test suite, linters, and build checks to catch problems before code is merged. In GitHub, CI is usually powered by GitHub Actions and shows up as a green checkmark or red ✗ on a PR. If CI is configured in your project, your PRs must pass it before merging.

→ [About continuous integration (GitHub Docs)](https://docs.github.com/en/actions/about-github-actions/about-continuous-integration-with-github-actions)

### `Closes #N` syntax

When you write `Closes #17` (or `Fixes #17`, `Resolves #17`) in a PR description, GitHub automatically links the PR to issue #17 and closes the issue when the PR is merged. Always include this in your PR description so reviewers can see which issue you are addressing.

→ [Linking a PR to an issue (GitHub Docs)](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)

### Code review

The process of a teammate reading your pull request, asking questions, suggesting improvements, and ultimately approving or requesting changes. In this course, every PR must be reviewed by at least one teammate before merging. A good review checks correctness, test coverage, code clarity, and adherence to the project's standards — not just whether it runs.

→ [About pull request reviews (GitHub Docs)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)

### Fork

A personal copy of someone else's repository under your own GitHub account. Forking is the standard model for contributing to open-source projects where you don't have write access — you fork, make changes in your fork, then open a PR from your fork back to the original. **In this course, you have write access to your team's repo, so you do not fork.** You use branches instead. Forking is mentioned only to contrast with the branch-based workflow.

### Git tag / GitHub Release

A tag is a named pointer to a specific commit, used to mark a release. In this course, each sprint ends with a release tag (e.g., `v2.17.2-csci435-s0`) that marks the state of the codebase at sprint's end. You create the tag with `git tag`, push it with `git push origin <tag>`, then create a GitHub Release from it on the repository's Releases page.

→ [Managing releases (GitHub Docs)](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)

### GitHub Issue

A GitHub Issue is a structured record in a repository's issue tracker representing a task, feature request, or bug. In this course, your feature backlog (D2) lives entirely as GitHub Issues — not in a separate document. Issues have a title, description, labels, and can be linked to PRs via `Closes #N`.

### GitHub Organization

A shared GitHub account that groups repositories and members. All course project repositories live under the [CSCI-435-SE](https://github.com/CSCI-435-SE) organization. You must accept an invite to join the org before you can access or push to any repo.

### Pull Request (PR)

A pull request is a proposal to merge changes from one branch into another (typically into `main`). Opening a PR starts a conversation: reviewers can comment on specific lines, request changes, or approve. Once approved and CI passes, the PR is merged. In this course, all code changes go through PRs — no direct commits to `main`. Each Sprint 0 PR must be linked to an issue, include a description, have tests, and receive at least one teammate approval.

→ [About pull requests (GitHub Docs)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

---

## Agile & Sprint Process

### Definition of Done (DoD)

A shared checklist that defines when a piece of work is truly complete — not just "code written" but code reviewed, tests passing, CI green, and documentation updated. In D3, your team adopts the project's existing DoD (if one exists) and supplements it where the project is silent.

### Feature backlog

An ordered list of features and improvements a team wants to build. In this course, the backlog lives in your project's GitHub issue tracker (not a document). You create it in D2 and draw from it throughout the semester.

### Issue scope (Small / Medium / Large / XL)

A rough estimate of how much work an issue represents. Used to help plan what fits in a sprint and to set expectations for reviewers. There is no fixed definition — these are relative to the project and agreed on by the team. A Small issue might be a one-file change; an XL might take a full sprint for one person.

### Sprint

A fixed-length period of focused work with a defined goal and set of deliverables. This course has five sprints (0–4). Sprint 0 is the onboarding sprint; Sprints 1–4 are feature-development sprints. Each sprint ends with a release, a sprint report, and a retrospective.

### User story

A short description of a feature from the perspective of the person who benefits from it. Format: *"As a [role], I want [action] so that [outcome]."* Example: *"As a team admin, I want to export usage reports as CSV so that I can share them with stakeholders."* User stories keep the focus on value to a real person rather than technical implementation.

---

## AI Tooling

### Agentic AI tool

An AI tool that can take multi-step actions autonomously — reading files, running commands, editing code, and iterating — rather than just responding to a single prompt. Examples used in this course: Claude Code, GitHub Copilot (agent mode), Cursor, OpenAI Codex CLI, Gemini CLI. Contrast with *chat-based* tools (Claude.ai, ChatGPT) which respond to one prompt at a time without taking actions in your codebase.

### AI log / session log

A record of an agentic AI session — the prompts, the tool calls, the code generated, and the outcome. In this course, every agentic session must be logged and committed to `ai-logs/sprint#/<github-username>/`. See [AI Log Instructions](ai-logs.md) for the full process.

### SpecStory

A tool that wraps agentic CLI sessions (Claude Code, Gemini CLI, Codex CLI) and automatically saves a complete log of the session as a Markdown file. Run your agentic tool via `specstory run <tool>` instead of directly, and SpecStory handles the capture. See [AI Log Instructions](ai-logs.md) for setup.

→ [SpecStory documentation](https://specstory.com/)

---

## Codebase & Project Concepts

### `CONTRIBUTING.md`

A file at the root of many open-source repositories that explains how to contribute — coding style, commit conventions, PR format, review process, and the project's own Definition of Done. Reading this file is the first step in D3. Your standards document must be consistent with it.

### `AGENTS.md` / `CLAUDE.md`

Files that provide instructions to AI agents operating in the repository — what the codebase does, how to run tests, what conventions to follow, and any restrictions on AI-generated changes. Not all projects have them. If your project does, read them as part of D4 and decide as a team whether to use them as-is, adapt, or supplement.

### Linter / formatter

A linter is a tool that analyzes code for style and potential errors without running it (e.g., ESLint for JavaScript, RuboCop for Ruby). A formatter automatically reformats code to match a style guide (e.g., Prettier, `gofmt`). Most projects in this course have linting and formatting configured — check your project's `CONTRIBUTING.md` and config files (`.eslintrc`, `rubocop.yml`, etc.) and run these tools before opening a PR.

### Monorepo

A single Git repository that contains multiple related packages or applications. Actual Budget and Medusa use monorepo setups managed with Yarn workspaces and Turborepo. If your project is a monorepo, pay attention to which package you are working in when running commands — running `npm install` at the root vs. inside a package directory can have different effects.

### Test suite

The collection of automated tests for a project (unit tests, integration tests, end-to-end tests). In D1, you run the test suite to establish a passing baseline before making any changes. In D5, you write or update tests for every PR. "CI green" means the test suite (and other checks) pass on GitHub after your push.

---

## Communication Tools

### Zulip

The course communication platform, similar to Slack but organized into *streams* (like channels) and *topics* (threaded conversations within a stream). All course announcements, Q&A, and team coordination happen on Zulip. You must join before Sprint 0 begins — see [Before you begin](sprint0.md#before-you-begin) for the link.

→ [Zulip — getting started](https://zulip.com/help/getting-started-with-zulip)
