---
hide:
  - navigation
---

# New-Tech Showcase 2

**Nov 10, 12:30 PM (in class) &middot; Gallery walk with live demos &middot; 50 points (5% of course grade)**

## Overview

Same format as [Showcase 1](showcase1.md), with a new tool. Each team picks a modern software engineering tool (from the [Showcase Tools](showcase-tools.md) list) that its project does not use yet, applies it to the project, and shows it to the class. The room becomes **six demo stations**, one per team. Small groups of classmates rotate from station to station, and at each one a team member gives an **8-minute live demo**. After each demo, visitors answer a **1-minute survey** (QR code on the big screens) before moving to the next station. There are no slides. Each team also submits a **tutorial video** and a short **handout**, so anyone can pick up the tool later.

Think of your demo as a **teaser**. In 8 minutes, convince your classmates that this tool is worth trying, in their own project or after the course.

!!! info "What's new in Round 2"
    Based on what we saw in Round 1 and on your survey feedback:

    - **Explain why this tool.** Visitors' most common question was "why is this better than what I already use (e.g., an AI assistant or a similar tool)?" Your demo must answer it.
    - **Be readable and audible.** The most common complaints were small screens and low voices. See the [presenter checklist](#presenter-checklist).
    - **Be prepared.** Know the tool well enough to demo it without reading from your phone or notes and to answer questions. See [what "prepared" means](#grading-50-points).
    - **Tight timeline:** claim your tool by **Friday noon**. The video and handout are due **after** the showcase, so focus your prep on the live demo.

---

## Timeline

| Date | What |
|---|---|
| **Fri, Nov 6, 12:00 PM (noon)** | Claim your tool in Zulip (**#showcases** channel, topic `tool_claims_R2`). Teams without a claim by noon will be assigned a tool by the instructor. |
| **Sat, Nov 7** | Request any GitHub App installs on the course org (topic `app_install_requests`). |
| **Tue, Nov 10, 12:30 PM** | Showcase in class. |
| **Thu, Nov 12, 11:59 PM** | Tutorial video and handout due (in your team repo; see below). |

---

## Choosing your tool

- Pick a tool from the [Showcase Tools](showcase-tools.md) list. That page has the selection rules, each tool's risks, and which teams each tool is not available to.
- The tool must be **new to your project**: not already set up in your repository, and not used by your team before (including your Round 1 tool).
- **Tools showcased in Round 1 are not available** to any team: StrykerJS, DBeaver, Figma, CodeRabbit, Dev Containers / GitHub Codespaces, and Semgrep.
- Tools are first come, first served, with one team per tool and one team per category. Off-list tools need instructor approval.
- Your demo and video must use **your team's project**, not a toy example.
- Questions about the showcase or your tool? Ask in the **#showcases** channel.

---

## The live demo (8 minutes)

!!! tip "What makes a great demo"
    - **Start with the problem, not the tool.** Open with a pain everyone recognizes (flaky tests, slow code reviews, "works on my machine"), then show how the tool addresses it.
    - **Show a real result on your project.** A bug caught, a vulnerability found, a slow render fixed. Visitors should see something they could get in their own project.
    - **Say why this tool.** How is it different from what you would do without it, for example asking an AI assistant, or using a similar tool?
    - **Make it easy to try.** End with how a visitor could start using it in 10 minutes: the install command, free plan, and first step.
    - **Be honest.** Say where the tool falls short. That tells visitors whether it fits their needs.

Suggested structure:

| Minutes | Part | What to address |
|---|---|---|
| ~1 | **The problem and the tool** | A software engineering problem your audience recognizes (testing, review, design, debugging, etc.), and what the tool is. |
| ~6 | **Live demo on your project** | The tool working on your codebase, with a concrete result: a real test, scan, review, diagram, or profile. Don't stop at the setup screen. Take questions as you go. |
| ~1 | **Why this tool, when to use it, and how to start** | How it compares to the alternatives (e.g., an AI assistant or a similar tool), where it works well and where it falls short (cost, free-plan limits, risks), and the first steps a visitor could take in their own project. |

**Every team member must be able to give the full demo, and every member presents in person at least once.**

### Presenter checklist

- **Zoom in:** 150&ndash;200%, large fonts in terminals and editors. Check from 2 meters away that you can read your screen.
- **Face your visitors,** with the screen turned toward them, not toward you.
- **Speak up.** The room is noisy; talk to the person at the back of your group.
- **Be prepared:** demo without reading from your phone or notes, and use the full 8 minutes.

---

## Deliverables

Both are due **Thu, Nov 12, 11:59 PM**, after the showcase.

### D1 &mdash; Tutorial video (YouTube)

The video is a **key deliverable**. The live demo sparks interest; the video shows people how to actually use the tool, so classmates can come back to it later in a sprint or after the course.

- **Up to 8 minutes**, narrated screen recording, following the same structure as the live demo (the problem and the tool, the demo, why this tool, when to use it and how to start).
- **Assume the tool is already set up** on your project, and focus on showing it produce a real result. Setup steps go in the handout.
- Clear audio and readable screen (zoom in, large fonts). Editing is welcome but not required.
- Upload to YouTube as **public or unlisted** (your choice) and put the link in your handout. If public, make sure no secrets, personal data, or private accounts appear on screen.

!!! tip "Extra credit: polished video (up to +3 points)"
    A polished video earns extra points: edited with no dead time, clear audio, callouts or zoom-ins on key moments, and captions or chapter markers. See [Grading](#grading-50-points).

### D2 &mdash; Handout (in your team repo)

A short page at `docs/showcase2/README.md` in your team repository. Include:

- Tool name, version, and link
- The problem it addresses (2&ndash;3 sentences)
- **Why this tool:** how it compares to the alternatives (e.g., an AI assistant or a similar tool)
- **Setup:** brief steps to install and configure the tool on a project like yours (the ones you used), plus the command or action that produces a first result
- When to use it, and when not (including cost and free-plan limits)
- **Link to your tutorial video**

Keep it to about **one phone screen or two**. Bullet points are fine.

!!! tip "Extra credit: brochure handout (up to +2 points)"
    Instead of the README, you may submit a designed, brochure-style **PDF** at `docs/showcase2/handout.pdf` (e.g., made in Canva, Figma, or Google Slides) with the same content and a **clickable video link**. See [Grading](#grading-50-points).

---

## In class on Nov 10

**Attendance matters.** The live session is the showcase. Individual points require presenting in person, and survey points are earned only by visiting stations during class.

**Schedule**

| Time | Activity |
|---|---|
| 12:30&ndash;12:40 | Setup at stations and instructions |
| 12:40&ndash;1:40 | 6 rotations &times; (8 min demo + 2 min to fill in the survey and move) |
| 1:40&ndash;1:50 | Wrap-up, then return every chair and table to its original position (another class follows) |

**Stations.** The six stations are at the ends of the table rows: at the front, along the right wall, and at the back. You may shift tables slightly and move chairs to make room for visitors. **At the end, everything goes back to its original position.**

| Station | Team |
|---|---|
| S1 | Actual Budget (The Budgeters) |
| S2 | Cal.diy (The Calendars) |
| S3 | Excalidraw (Team Sketch) |
| S4 | Gitea (GiCoffee) |
| S5 | Medusa (Team Perseus) |
| S6 | Outline (Out of Our Minds) |

**The big screens** show the survey QR code and the steps. They are not used for demos.

**Coordinating the rotations**

- **Presenters:** each team decides its presenter order for the six rotations, and every member presents at least once. If your team has fewer than six members present, some members present twice. Agree on the order before class.
- **Visitors:** when you are not presenting, visit **each of the other five stations once**, in any order. Stations should have similar group sizes: the instructor or TA may ask you to switch to a less crowded station.
- **Transitions:** when the timer ends, visitors scan the survey QR code on the big screens and answer a 1-minute survey, then move on. The next presenter takes over.

**Bring and prepare**

- A **fully charged laptop** and its charger. Outlets are limited, so plan to run on battery.
- **Readable screens:** see the [presenter checklist](#presenter-checklist). A portable external monitor is welcome.
- **Everything installed and signed in before class.** Pre-build containers, pre-download browsers and dependencies, and sign in to Docker Hub and your tool accounts.
- A **station sign**, printed or on a tablet or phone: your station number, team name, and tool name.
- Notifications muted, and other apps and tabs closed.

---

## Grading (50 points)

| Criterion | Points | Graded |
|---|---|---|
| **Live demo** (instructor/TA spot-checks): a clear problem, a real result on your project, why this tool and when to use it, readable and audible | 15 | Team |
| **Tutorial video (D1):** shows a real result on your project, clear and easy to follow, 8 minutes or less, follows the demo structure | 15 | Team |
| **Handout (D2):** complete and accurate (why this tool, setup steps, when to use it, video link), readable on a phone | 5 | Team |
| **Your presentation** (instructor/TA): full credit if you present live and prepared (see below), partial if not, 0 if absent | 10 | Individual |
| **Survey participation:** 1 point per other team's station you visited and rated in class, out of the stations you were free to visit | 5 | Individual |
| **Total** | **50** | |

**What "prepared" means.** As a presenter, you can:

- explain what the tool does and why someone would choose it over the alternatives
- run the demo without reading from your phone or notes
- answer visitors' questions about the tool
- use the full 8 minutes (no long silences or ending early)

**Extra credit (up to +5):**

- **Polished video (up to +3):** edited with no dead time, clear audio, callouts or zoom-ins on key moments, captions or chapter markers.
- **Brochure handout (up to +2):** a designed PDF instead of the README, visual and one page (screenshots, a diagram, clear sections), readable on a phone, with a clickable video link.

!!! warning "Attendance is required"
    The individual points (15 of 50: your presentation + survey participation) can only be earned in class on Nov 10. If you miss the showcase, you receive 0 for both. If you can't make it, contact the instructor as early as possible.

!!! info "Graduate students (CSCI 535)"
    Graduate students are expected to give an exceptional showcase: greater technical depth, a clear discussion of trade-offs and risks, and thoughtful answers to visitor questions.

---

## Tips

- **Rehearse the 8 minutes** at least once per presenter, end to end, on the same laptop and free plan you will use in class.
- **Prepare for "why not just use X?"** Try the alternative yourself (e.g., ask an AI assistant to do the same task) so you can show the difference.
- **Plan for failure.** Have screenshots or a short recording ready in case the live demo breaks.
