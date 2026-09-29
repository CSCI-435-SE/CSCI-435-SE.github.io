---
hide:
  - navigation
---

# New-Tech Showcase 1

**Oct 13, 12:30 PM (in class) &middot; Gallery walk with live demos &middot; 50 points (5% of course grade)**

## Overview

Each team picks a modern software engineering tool that its project does not use yet. The team learns the tool, applies it to the project, and shows it to the class. On showcase day the room becomes **six demo stations**, one per team. Small groups of classmates rotate from station to station, and at each one a team member gives an **8-minute live demo**. There are no slides. Each team also submits a **tutorial video** and a short **handout**, so anyone can pick up the tool later.

Think of your demo as a **teaser**. In 8 minutes, convince your classmates that this tool is worth trying, in their own project or after the course.

---

## Timeline

| Date | What |
|---|---|
| **Fri, Oct 2, 11:59 PM** | Claim your tool in Zulip (**#showcases** channel, topic `tool claims — round 1`). |
| **Wed, Oct 7** | Request any GitHub App installs on the course org (topic `app install requests`). |
| **Mon, Oct 12, 11:59 PM** | Tutorial video and handout due (links in your team repo; see below). |
| **Tue, Oct 13, 12:30 PM** | Showcase in class. |

---

## Choosing your tool

- Pick a tool from the [Showcase Tools](showcase-tools.md) list. That page has the selection rules, each tool's risks, and which teams each tool is not available to.
- The tool must be **new to your project**: not already set up in your repository, and not used by your team in Sprints 0&ndash;1.
- Tools are first come, first served, with one team per tool and one team per category. Off-list tools need instructor approval.
- Your demo and video must use **your team's project**, not a toy example.
- Ask setup questions in the **#showcases** channel, using one topic per tool (e.g., `Playwright setup`), so other teams can find the answers.

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
| ~1 | **The problem** | A software engineering problem your audience recognizes, and the SE task the tool supports (testing, review, design, debugging, etc.). |
| ~1 | **The tool** | What it is and how it addresses the problem. |
| ~4 | **Live demo on your project** | The tool working on your codebase, with a concrete result: a real test, scan, review, diagram, or profile. Don't stop at the setup screen. |
| ~1 | **When to use it, and when not** | Where it works well, where it falls short, cost and free-plan limits, and risks (security, privacy, learning curve). |
| ~1 | **How to get started + Q&A** | The first steps a visitor could take in their own project. Then answer questions. |

**Every team member must be able to give the full demo, and every member presents in person at least once.**

---

## Deliverables

### D1 &mdash; Tutorial video (YouTube, unlisted)

The video is a **key deliverable**. The live demo sparks interest; the video shows people how to actually use the tool, so classmates can follow it later in a sprint or after the course.

- **Up to 7 minutes**, narrated screen recording.
- Go **from setup to a first real result on your project**, covering the same parts as the live demo (problem, tool, result, when to use it, how to get started).
- Clear audio and readable screen (zoom in, large fonts). Editing is welcome but not required.
- Upload to YouTube as **unlisted** (only people with the link can watch it) and put the link in your handout.
- It also serves as your **backup**: download a copy onto each presenter's laptop. If the live demo fails (Wi-Fi, quota, crash), play the video at your station and narrate over it.
- Videos are shared with the class **after** the showcase. The live session is where you see the tools first.

### D2 &mdash; Handout (in your team repo)

A short page at `docs/showcase1/README.md` in your team repository. Visitors scan a QR code at your station to open it on their phones. Include:

- Tool name, version, and link
- The problem it addresses (2&ndash;3 sentences)
- **Quick start:** the steps to set it up and get a first result (the ones you used on your project)
- When to use it, and when not (including cost and free-plan limits)
- Link to your tutorial video

Keep it to about **one phone screen or two**. Bullet points are fine.

---

## In class on Oct 13

**Attendance matters.** The live session is the showcase. Individual points require presenting in person, and survey points are earned only by visiting stations during class.

**Schedule**

| Time | Activity |
|---|---|
| 12:30&ndash;12:42 | Setup at stations and instructions |
| 12:42&ndash;1:42 | 6 rotations &times; (8 min demo + 2 min to fill in the survey and move) |
| 1:42&ndash;1:50 | Wrap-up, then return every chair and table to its original position (another class follows) |

**Stations.** The six stations are at the ends of the table rows: at the front, along the right wall, and at the back. The furniture stays in place. The presenter stands next to the laptop at the end of a table, and visitors stand around it. Station numbers will be posted in the room.

**The big screens** show a countdown timer and the current rotation. They are not used for demos.

**Coordinating the rotations**

- **Presenters:** each team decides its presenter order for the six rotations, and every member presents at least once. On five-member teams, one member presents twice. Agree on the order before class.
- **Visitors:** when you are not presenting, visit **each of the other five stations once**, in any order. If a station already has 6 or more visitors, pick another one and come back later.
- **Transitions:** when the timer ends, visitors scan the survey QR code at the station, enter the presenter's name, rate the demo (under a minute), and move on. The next presenter takes over.

**Bring and prepare**

- A **fully charged laptop** and its charger. Outlets are limited, so plan to run on battery.
- **Readable screens:** zoom to 150&ndash;200%, use large fonts in terminals and editors, and raise the laptop to eye level (a bag or box works). A portable external monitor is welcome.
- **Everything installed and signed in before class.** The Wi-Fi is shared by the whole class. Pre-build containers, pre-download browsers and dependencies, and sign in to Docker Hub and your tool accounts.
- Your **video downloaded locally** on each presenter's laptop.
- Notifications muted, and other apps and tabs closed.

---

## Grading (50 points)

| Criterion | Points | Graded |
|---|---|---|
| **Live demo** (instructor/TA spot-check): a clear problem, a concrete result on your project, and an honest view of when to use the tool | 15 | Team |
| **Tutorial video (D1):** setup to a real result, clear and followable, 7 minutes or less | 15 | Team |
| **Handout (D2):** complete, accurate, works as a quick start, readable on a phone | 5 | Team |
| **Your presentation:** visitor survey ratings for the rotation(s) you presented, reviewed by the instructor | 10 | Individual |
| **Survey participation:** 1 point per station you visited and rated in class (5 stations) | 5 | Individual |
| **Total** | **50** | |

During the rotations, the instructor and TA visit stations and rate each team's live demo as **Exceeds (15) / Adequate (11) / Pass (7) / Missing (0)**.

!!! info "Graduate students (CSCI 535)"
    Graduate students are expected to give an exceptional showcase: greater technical depth, a clear discussion of trade-offs and risks, and thoughtful answers to visitor questions.

!!! tip "Bonus"
    An exceptional showcase may earn bonus credit (see the [Syllabus](syllabus.md#10-grading)).

---

## Tips

- **Rehearse the 8 minutes** at least once per presenter, end to end, on the same laptop and free plan you will use in class.
- **Plan for failure.** Decide in advance at what point you switch to the video.
- **Talk to your visitors, not to your laptop.** They are standing close to you.
