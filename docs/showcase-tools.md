---
hide:
  - navigation
---

# Showcase Tools

Pick your team's new-tech showcase tool from this list. Requirements, dates, and grading are on the [Showcase 1](showcase1.md) page.

## Selection rules

1. **One tool per team per round.** Round 2 (Nov 5) must use a different tool from Round 1 (Oct 13).
2. **Not already used in your project.** You cannot pick a tool that is already set up in your project's repository or that your team used in Sprints 0&ndash;1. Each tool below lists the teams it is **not available to**.
3. **No repeats across rounds.** A tool showcased by any team in Round 1 cannot be picked in Round 2.
4. **One team per category per round**, so we don't get two near-identical demos on the same day.
5. **Demo on your own project.** The live demo and the tutorial video must use your team's project codebase.
6. **First come, first served.** Claim your tool in the Zulip **#showcases** channel, topic `tool claims — round 1`, by **Fri, Oct 2, 11:59 PM**. The instructor confirms each claim in the thread.
7. **Off-list tools** are welcome, but need instructor approval in the same Zulip topic before you start.

**Excluded tools:** Claude Code, GitHub Issues & Projects, and GitHub Actions (they are already part of the course workflow).

!!! warning "Risks that apply to every tool"
    - **Free plans have limits.** Quotas, seat caps, and rate limits can run out in the middle of a demo. Rehearse with the plan you will use, and keep your video ready as a backup.
    - **Apps on the course GitHub organization need approval.** Tools that install as a GitHub App on `CSCI-435-SE` (e.g., CodeRabbit, SonarQube Cloud, Snyk, Semgrep) must be approved by the instructor. Request it in the **#showcases** channel (topic `app install requests`) by **Wed, Oct 7**.
    - **Install and sign in before class.** The classroom Wi-Fi is shared by ~35 laptops. Download everything in advance, and sign in to Docker Hub (anonymous downloads are limited per network).
    - **Use your own accounts, not the project's real services.** Never paste secrets, API keys, or personal data into a tool, and only load-test or scan systems you run yourself.
    - **Pricing changes often.** The notes below were checked on **Sep 27, 2026**. If something changed, tell the instructor.

---

## AI coding assistants

- **Cursor** &mdash; [cursor.com](https://cursor.com): AI-first code editor with an agent that plans and makes multi-file changes.
    - **Heads-up:** only the free Hobby plan is available (the student Pro offer closed in June 2026), and its agent requests are limited.
    - **Not available to:** **Actual Budget, Cal.diy**

- **Windsurf (now Devin Desktop)** &mdash; [devin.ai](https://devin.ai/pricing): AI-first code editor with an agent and inline completions.
    - **Heads-up:** renamed in June 2026, so older Windsurf/Cascade tutorials are outdated. The free plan has a small agent quota, and there is no student offer.

- **OpenCode** &mdash; [opencode.ai](https://opencode.ai): Open-source terminal coding agent that works with many model providers.
    - **Heads-up:** its free models change without notice, and some log prompts &mdash; use them only on public code.
    - **Not available to:** **Cal.diy**

- **JetBrains IDEs (WebStorm, GoLand) + AI Assistant** &mdash; [jetbrains.com](https://www.jetbrains.com): Professional IDEs with built-in refactoring, inspections, debugging, and AI features.
    - **Heads-up:** the IDEs are free with a student license, but students get only 3 AI credits every 30 days. Showcase the IDE's engineering features, with AI as a small part.

## Code review & security

- **CodeRabbit** &mdash; [coderabbit.ai](https://www.coderabbit.ai): AI bot that reviews pull requests with inline comments and summaries.
    - **Heads-up:** free on public repos but rate-limited (a new repo may get about one review per hour). Needs instructor approval to install on the org.
    - **Not available to:** **Actual Budget**

- **Snyk** &mdash; [snyk.io](https://snyk.io): Finds known vulnerabilities in dependencies and code, and suggests fixes.
    - **Heads-up:** the free plan allows 5 projects and 100 code tests per month. Create your own team account.

- **Semgrep** &mdash; [semgrep.dev](https://semgrep.dev): Fast static analysis with readable rules; you can write rules for your own project's conventions.
    - **Heads-up:** the free platform plan allows 10 contributors and 10 repos; secrets scanning is not included. The command-line tool is free with no limits.

## Code quality

- **SonarQube Cloud** &mdash; [sonarsource.com](https://www.sonarsource.com/products/sonarcloud): Dashboard for code quality, code smells, coverage, and security hotspots.
    - **Heads-up:** free for public repos, but needs instructor approval to connect the org, and a LICENSE file in the repo.

## Testing

- **Playwright** &mdash; [playwright.dev](https://playwright.dev): End-to-end browser testing with a visual UI mode, test recorder, and trace viewer.
    - **Heads-up:** the first install downloads about 1 GB of browsers &mdash; do it before class.
    - **Not available to:** **Actual Budget, Cal.diy, Gitea**

- **Cypress** &mdash; [cypress.io](https://www.cypress.io): End-to-end testing with an interactive runner that shows each step in the browser.
    - **Heads-up:** the optional Cypress Cloud free plan allows 500 test results per month &mdash; run tests locally for the demo.

- **Storybook** &mdash; [storybook.js.org](https://storybook.js.org): Build, document, and test UI components in isolation.
    - **Heads-up:** setting it up in a large monorepo can take time &mdash; start with one component.
    - **Not available to:** **Actual Budget, Medusa**

- **StrykerJS (mutation testing)** &mdash; [stryker-mutator.io](https://stryker-mutator.io): Changes your code on purpose to check whether your tests notice &mdash; a measure of test quality.
    - **Heads-up:** runs are slow, so demo it on one small module.
    - **Not a good fit for:** **Gitea** (Go backend)

- **axe DevTools + Lighthouse** &mdash; [deque.com/axe](https://www.deque.com/axe/devtools/): Browser audits for accessibility (axe) and performance/best practices (Lighthouse).
    - **Heads-up:** use the free features only; axe DevTools Pro is paid.

- **k6 (load testing)** &mdash; [k6.io](https://k6.io): Scriptable load tests that show how your system behaves under many users.
    - **Heads-up:** only load-test your own local instance &mdash; never public or shared servers.
    - **Not available to:** **Cal.diy** &middot; **Not a good fit for:** **Excalidraw, Actual Budget**

## Dev environment

- **Dev Containers / GitHub Codespaces** &mdash; [containers.dev](https://containers.dev) &middot; [Codespaces](https://github.com/features/codespaces): A reproducible development environment defined in `devcontainer.json`, run locally (Docker + VS Code) or in the cloud (Codespaces). These count as **one tool**.
    - **Heads-up:** the first build is slow &mdash; build it before class. Codespaces uses your personal free hours (a 2-core machine uses 2 core-hours per hour).
    - **Not available to:** **Actual Budget, Gitea**

- **Docker Compose** &mdash; [docs.docker.com/compose](https://docs.docker.com/compose): Runs the whole stack (app, database, cache) locally from one file.
    - **Heads-up:** sign in to Docker Hub before class to avoid download limits.
    - **Not available to:** **Actual Budget, Cal.diy, Excalidraw, Outline**

## Design

- **Figma** &mdash; [figma.com](https://figma.com): Collaborative UI design with Dev Mode for handing designs to developers.
    - **Heads-up:** each teammate must verify Figma for Education with a W&M email &mdash; do it now, since approval can take time.

## Database

- **DBeaver** &mdash; [dbeaver.io](https://dbeaver.io): Database client for browsing schemas, running queries, and viewing ER diagrams.
    - **Heads-up:** the free Community Edition is enough; Redis and other NoSQL databases need the paid version.
    - **Not a good fit for:** **Excalidraw** (no server database)

## Observability & debugging

- **Sentry** &mdash; [sentry.io](https://sentry.io): Error tracking: see crashes with stack traces, context, and the release that caused them.
    - **Heads-up:** the free plan allows only 1 user, so one teammate owns the account. Don't send real user data.
    - **Not available to:** **Cal.diy, Excalidraw, Outline**

- **React / Vue DevTools profilers** &mdash; [React DevTools](https://react.dev/learn/react-developer-tools) &middot; [Vue DevTools](https://devtools.vuejs.org): Browser extensions to inspect component state and find slow renders.
    - **Heads-up:** none significant &mdash; make sure you profile a realistic interaction.

## Diagrams

- **Mermaid** &mdash; [mermaid.js.org](https://mermaid.js.org): Diagrams written as text (flowcharts, sequence diagrams) that render in Markdown on GitHub.
    - **Heads-up:** quick to demo &mdash; go beyond a basic flowchart (e.g., a sequence diagram of a real request in your system).
    - **Not available to:** **Gitea, Medusa, Outline** (already render Mermaid)

## Project management

- **ClickUp** &mdash; [clickup.com](https://clickup.com): Project management with tasks, docs, sprints, and dashboards.
    - **Heads-up:** the free plan has 60 MB of storage, and sprint points and dashboards are trial-only. GitHub Issues remains the required tracker for the course.
