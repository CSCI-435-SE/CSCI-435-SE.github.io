---
hide:
  - navigation
---

# New-Tech Showcase 1

**Oct 13, 12:30 PM (in class) &middot; Gallery walk with live demos &middot; 50 points (5% of course grade)**

## Overview

Each team picks a modern software engineering tool (from the [Showcase Tools](showcase-tools.md) list) that its project does not use yet. The team learns the tool, applies it to the project, and shows it to the class. On showcase day the room becomes **six demo stations**, one per team. Small groups of classmates rotate from station to station, and at each one a team member gives an **8-minute live demo**. After each demo, visitors answer a **1-minute survey** (QR code will be provided in class) before moving to the next station. There are no slides. Each team also submits a **tutorial video** and a short **handout**, so anyone can pick up the tool later.

Think of your demo as a **teaser**. In 8 minutes, convince your classmates that this tool is worth trying, in their own project or after the course.

---

## Timeline

| Date | What |
|---|---|
| **Fri, Oct 2, 11:59 PM** | Claim your tool in Zulip (**#showcases** channel, topic `tool_claims_R1`). |
| **Wed, Oct 7** | Request any GitHub App installs on the course org (topic `app_install_requests`). |
| **Mon, Oct 12, 11:59 PM** | Tutorial video and handout due (in your team repo; see below). |
| **Tue, Oct 13, 12:30 PM** | Showcase in class. |

---

## Choosing your tool

- Pick a tool from the [Showcase Tools](showcase-tools.md) list. That page has the selection rules, each tool's risks, and which teams each tool is not available to.
- The tool must be **new to your project**: not already set up in your repository, and not used by your team in Sprints 0&ndash;1.
- Tools are first come, first served, with one team per tool and one team per category. Off-list tools need instructor approval.
- Your demo and video must use **your team's project**, not a toy example.
- Questions about the showcase or your tool? Ask in the **#showcases** channel.

---

## The live demo (8 minutes)

!!! tip "What makes a great demo"
    - **Start with the problem, not the tool.** Open with a pain everyone recognizes (flaky tests, slow code reviews, "works on my machine"), then show how the tool addresses it.
    - **Show a real result on your project.** A bug caught, a vulnerability found, a slow render fixed. Visitors should see something they could get in their own project.
    - **Make it easy to try.** End with how a visitor could start using it in 10 minutes: the install command, free plan, and first step.
    - **Be honest.** Say where the tool falls short. That tells visitors whether it fits their needs.

Suggested structure:

| Minutes | Part | What to address |
|---|---|---|
| ~1 | **The problem and the tool** | A software engineering problem your audience recognizes (testing, review, design, debugging, etc.), and what the tool is. |
| ~6 | **Live demo on your project** | The tool working on your codebase, with a concrete result: a real test, scan, review, diagram, or profile. Don't stop at the setup screen. Take questions as you go. |
| ~1 | **When to use it, and how to start** | Where it works well and where it falls short (cost, free-plan limits, risks), and the first steps a visitor could take in their own project. |

**Every team member must be able to give the full demo, and every member presents in person at least once.**

---

## Deliverables

### D1 &mdash; Tutorial video (YouTube)

The video is a **key deliverable**. The live demo sparks interest; the video shows people how to actually use the tool, so classmates can come back to it later in a sprint or after the course.

- **Up to 8 minutes**, narrated screen recording, following the same structure as the live demo (the problem and the tool, the demo, when to use it and how to start).
- **Assume the tool is already set up** on your project, and focus on showing it produce a real result. Setup steps go in the handout.
- Clear audio and readable screen (zoom in, large fonts). Editing is welcome but not required.
- Upload to YouTube as **public or unlisted** (your choice) and put the link in your handout. If public, make sure no secrets, personal data, or private accounts appear on screen.
- It also serves as your **backup**: download a copy onto each presenter's laptop. If the live demo fails (Wi-Fi, quota, crash), play the video at your station and narrate over it.

!!! tip "Extra credit: polished video (up to +3 points)"
    A polished video earns extra points: edited with no dead time, clear audio, callouts or zoom-ins on key moments, and captions or chapter markers. See [Grading](#grading-50-points).

### D2 &mdash; Handout (in your team repo)

A short page at `docs/showcase1/README.md` in your team repository. Visitors scan a QR code at your station to open it on their phones. Include:

- Tool name, version, and link
- The problem it addresses (2&ndash;3 sentences)
- **Setup:** brief steps to install and configure the tool on a project like yours (the ones you used), plus the command or action that produces a first result
- When to use it, and when not (including cost and free-plan limits)
- **Link to your tutorial video**

Keep it to about **one phone screen or two**. Bullet points are fine.

!!! tip "Extra credit: brochure handout (up to +2 points)"
    Instead of the README, you may submit a designed, brochure-style **PDF** at `docs/showcase1/handout.pdf` (e.g., made in Canva, Figma, or Google Slides) with the same content and a **clickable video link**. See [Grading](#grading-50-points).

---

## In class on Oct 13

**Attendance matters.** The live session is the showcase. Individual points require presenting in person, and survey points are earned only by visiting stations during class.

**Schedule**

| Time | Activity |
|---|---|
| 12:30&ndash;12:40 | Setup at stations and instructions |
| 12:40&ndash;1:40 | 6 rotations &times; (8 min demo + 2 min to fill in the survey and move) |
| 1:40&ndash;1:50 | Wrap-up, then return every chair and table to its original position (another class follows) |

**Stations.** The six stations are at the ends of the table rows: at the front, along the right wall, and at the back. You may shift tables slightly and move chairs to make room for visitors. The presenter stands next to the laptop at the end of a table, and visitors stand around it. **At the end, everything goes back to its original position.**

| Station | Team |
|---|---|
| S1 | Actual Budget (The Budgeters) |
| S2 | Cal.diy (The Calendars) |
| S3 | Excalidraw (Team Sketch) |
| S4 | Gitea (GiCoffee) |
| S5 | Medusa (Team Perseus) |
| S6 | Outline (Out of Our Minds) |

**The big screens** show a countdown timer, the current rotation, and the survey QR code. They are not used for demos.

**Coordinating the rotations**

- **Presenters:** each team decides its presenter order for the six rotations, and every member presents at least once. On five-member teams, one member presents twice. Agree on the order before class.
- **Visitors:** when you are not presenting, visit **each of the other five stations once**, in any order. If a station already has 6 or more visitors, pick another one and come back later.
- **Transitions:** when the timer ends, visitors scan the survey QR code on the big screens and answer a 1-minute survey (station, presenter's first name, how likely you are to try the tool, and a short comment), then move on. The next presenter takes over.

**Bring and prepare**

- A **fully charged laptop** and its charger. Outlets are limited, so plan to run on battery.
- **Readable screens:** zoom to 150&ndash;200%, use large fonts in terminals and editors, and tilt the screen back toward standing visitors. If you can, raise the laptop on a laptop stand, a sturdy box, or a stack of books. A portable external monitor is welcome.
- **Everything installed and signed in before class.** Pre-build containers, pre-download browsers and dependencies, and sign in to Docker Hub and your tool accounts.
- A **station sign**, printed or on a tablet or phone: your station number, team name, tool name, and a QR code to your handout. Test the QR code on a phone (some browsers download PDFs instead of showing them).
- Your **video downloaded locally** on each presenter's laptop.
- Notifications muted, and other apps and tabs closed.

---

## Grading (50 points)

| Criterion | Points | Graded |
|---|---|---|
| **Live demo** (instructor/TA spot-check): a clear problem, a concrete result on your project, and an honest view of when to use the tool | 15 | Team |
| **Tutorial video (D1):** shows a real result on your project, clear and easy to follow, 8 minutes or less, follows the demo structure | 15 | Team |
| **Handout (D2):** complete and accurate (setup steps, when to use it, video link), readable on a phone | 5 | Team |
| **Your presentation** (instructor/TA): full credit if you present live and prepared, partial if you cannot explain or run the tool, 0 if absent | 10 | Individual |
| **Survey participation:** 1 point per other team's station you visited and rated in class (5 stations) | 5 | Individual |
| **Total** | **50** | |

During the rotations, the instructor and TA visit stations and rate each team's live demo as **Exceeds (15) / Adequate (11) / Pass (7) / Missing (0)**.

**Extra credit (up to +5):**

- **Polished video (up to +3):** edited with no dead time, clear audio, callouts or zoom-ins on key moments, captions or chapter markers.
- **Brochure handout (up to +2):** a designed PDF instead of the README, visual and one page (screenshots, a diagram, clear sections), readable on a phone, with a clickable video link.

!!! warning "Attendance is required"
    The individual points (15 of 50: your presentation + survey participation) can only be earned in class on Oct 13. If you miss the showcase, you receive 0 for both. If you can't make it, contact the instructor as early as possible.

!!! info "Graduate students (CSCI 535)"
    Graduate students are expected to give an exceptional showcase: greater technical depth, a clear discussion of trade-offs and risks, and thoughtful answers to visitor questions.

---

## Tips

- **Rehearse the 8 minutes** at least once per presenter, end to end, on the same laptop and free plan you will use in class.
- **Plan for failure.** Decide in advance at what point you switch to the video.
- **Talk to your visitors, not to your laptop.** They are standing close to you.
