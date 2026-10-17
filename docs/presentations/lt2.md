---
hide:
  - navigation
---

# Sprints 1–2 Lightning Talks — Oct 20

**Oct 20, 12:30 PM &middot; 10 minutes per team + 2 minutes Q&A &middot; 30 points (3% of course grade)**

Each team delivers a progress update covering Sprint 1 outcomes, technical decisions, SE process practices, and the Sprint 2 plan.

---

## Logistics

- **Date:** Tuesday, Oct 20, in class
- **Duration:** 10 minutes + 2 minutes Q&A
- **Submission:** PDF uploaded to Blackboard by 12:20 PM on Oct 20
- **Points:** 30 total (6 + 4 + 9 + 6 + 5 pts)
- **Format:** Team-level presentation — any team member may present any section. Every member should be prepared to speak to any part and answer Q&A questions on any section.

**Flexibility:** The per-section times shown in each heading below are suggestions only. Your team is free to organize and compose the presentation as you see fit (including section order and time per section) as long as all information requirements are covered and the total stays within 10 minutes.

---

## Section 1: Sprint 1 Outcomes (2.5 min)

**Intro:** Briefly remind the audience what your project is and what it does. Keep it short.

**Metrics:** Provide the metrics on the outcomes of the sprint. Include these at minimum:

- Total issues completed in Sprint 1
- Average issues completed per team member
- Total story points delivered
- Average story points per team member
- Percentage of the Sprint 1 backlog completed (issues and/or story points)

The key metric is the percentage of backlog completed. If below 100%, explain briefly what was not completed and **why**. If 100%, explain what was key to achieving that: this is equally valuable learning.

**Core features (3 features):** Briefly describe the 3 most interesting or significant features your team implemented in Sprint 1. For each one:

- What the feature does and why it matters
- Visual evidence: one or more screenshots of the running feature in the UI, or a short video clip

Visual evidence must be readable for someone sitting at the back of the room. If a screenshot is too small to read at arm's length, it is too small for the slide.

---

## Section 2: Architecture and Technical Decisions (1.5 min)

Present the **two most interesting or significant technical, design, or architectural decisions** your team made during Sprint 1. For each decision, cover:

1. **What was decided**: describe the decision clearly and concisely
2. **What alternatives were considered**: at least one real alternative
3. **What drove the choice**: the reasoning, constraints, or tradeoffs that made this option better
4. **Scope**: was this an architectural decision (affects the whole system or multiple components) or a localized one (contained to one module or file)?

For each decision, also address **who made it**. Sprint 1 work was often individually owned, so it is likely one person made the call alone. But if this was a team discussion — where multiple people weighed in before committing — say so and describe how. That collaborative case is worth highlighting.

A decision is something where there were real options and the team had to pick one: a library choice, an API design, a data model, an architectural pattern. If you used an agent to evaluate options or generate the design, explain how you validated its recommendation before committing to it.

**What this section is not:** a list of technologies used. Naming your stack is not a decision — explaining why you chose one approach over another is.

---

## Section 3: SE Process: One Issue's Full Lifecycle (2.5 min)

This section has two parts.

### Part A: Backlog Composition

Describe how your team built the Sprint 1 backlog. Cover:

1. **Estimation strategy**: how did you estimate issues? Story points, planning poker, or another method? Who participated in the estimation: the whole team, just the assignee, or a subset?
2. **Prioritization strategy**: what drove the order of issues in the backlog and what drove the selection of issues for the sprint?
3. **What you'd do differently**: what was hard or unclear in this process, and what 1–2 specific changes will you make to how you compose the Sprint 2 backlog?

Keep this part brief — the goal is to establish whether the team used a deliberate process, not to walk through every issue.

### Part B: One Illustrative Issue

Pick the **one issue** from Sprint 1 that best represents your team’s SE practices. Try to select one that was interesting and significant. Walk through its complete lifecycle:

**The issue itself**: show the issue, then describe briefly (do not read it verbatim):

- User story or scenario
- Key acceptance criteria
- Key open questions and out-of-scope points

**Estimation**: what was the estimated effort, and what was the actual effort roughly? Explain if the estimation was accurate and why it was or it was not accurate (e.g. what aspects or possible scenarios did you miss in your estimation?).

**Analysis and design**: how did you figure out where in the codebase to make the change (concept location)? What was the expected impact on other parts of the system (impact analysis)? Was this a small or large change? Briefly describe the design of your solution before implementation began. If an AI agent assisted, how did you verify its output?

**Implementation**: was there back-and-forth with the AI agent to get the implementation right? Why? Summarize the scope of the change: roughly how many files, what types of files, and how many lines were changed. Show the resulting feature through UI screenshots or a short video clip; no code screenshots.

**Quality checks**: how did you test this issue, and what did the code review surface? For testing: what tests were designed and written and how did you verify the tests were correct? For review: what was the strategy, were any problems found, and how were they resolved?

**Reflection:** Did the team apply this level of rigor to all Sprint 1 issues? If not, what was skipped and why? This is expected — teams make tradeoffs. The reflection shows you understand where you cut corners, the cost, and how to improve your process.

---

## Section 4: Sprint 2 Outlook (3 min)

**Current status (as of Oct 20):** What has your team already started or completed in Sprint 2? Describe the state of your work and your team's confidence level for completing the sprint by Oct 29.

Looking back at the risks you identified for Sprint 1: Did they materialize? How did you handle them? Do any carry over into Sprint 2?

**Risks:** Identify 2–3 significant risks for Sprint 2 (technical or non-technical). A significant risk has meaningful consequences if it materializes and is specific to your team's situation. Trivial or generic risks do not count. Examples of real risks:

- "We don't yet understand how module X integrates with module Y, and two Sprint 2 issues depend on that"
- "Only one team member has a working local build; two others are still blocked on setup"
- "The API we planned to extend is undocumented and may require significant reverse-engineering"

**Showcase tools:** Are there any tools from the Oct 13 showcase that your team plans to use or experiment with in Sprint 2? If so, which ones and for what purpose?

**AI usage:** Based on your Sprint 1 experience, what will your team do differently with AI tools in Sprint 2? Be specific — not "we'll verify output more carefully" but how: for example, running generated code against your test suite before committing, prompting for alternative approaches before accepting the first suggestion, or designating someone to review AI-written code as part of your PR process.

---

## Rubric (30 pts)

| Criterion | What earns full credit |
|---|---|
| **1. Sprint 1 outcomes (6 pts)** | Metrics are accurate and shown on a dedicated slide with large text. Three features are presented with readable visual evidence. If completion is below 100%, the shortfall is explained honestly. |
| **2. Technical decisions (4 pts)** | Two real decisions are explained with alternatives considered and rationale given. Architectural vs. localized scope is identified. The section goes beyond listing technologies. |
| **3. SE process — issue lifecycle (9 pts)** | Backlog composition is explained with estimation and prioritization strategies. One illustrative issue is walked through all lifecycle steps with concrete evidence at each stage. The reflection is honest about where rigor was inconsistent. |
| **4. Sprint 2 outlook (6 pts)** | The team reflects on whether Sprint 1 risks materialized and any that carry over. Sprint 2 risks are significant (technical or non-technical) and specific to this team's situation. Showcase tool plans and a specific AI usage change are addressed. |
| **5. Delivery (5 pts)** | Presented on time. Slides support the talk — they do not replace it. Any team member can speak to any section. Each section includes a brief, honest reflection on what the team would improve. |

---

## Slide Guidance and Discouraged Behaviors

### What good slides look like

- **One message per slide.** If a slide takes more than 5 seconds to read, it has too much on it. Reduce content (e.g., only have a few bullet points) and break the slide into multiple ones.
- **Slides support the talk — they don't replace it.** The presenter adds the meaning and communicates the messages; the slide carries the evidence and supports your speech.
- **Favor visuals over text when evidence is visual.** A screenshot, diagram, or terminal output communicates more than a paragraph describing the same thing. Focused text sentences work well for key messages or takeaways. Try to avoid too much text in your slides.
- **Screenshots must be readable from the back of the room.** If you can't read it easily at arm's length, it's too small. Increase the font size, resolution, or level of zoom. Consider taking screenshots of specific parts of the screen/system, rather than screesshots of the entire computer screen.
- **Consistent fonts, colors, and layouts across the whole deck.** Pick a visual theme and stick to it.
- **No dedicated member listing slide.** Your team name and project are on the title slide. Briefly introduce yourselves verbally at the start.

### What works — positive examples

- Terminal output screenshots showing build or test results (instead of saying "our tests pass")
- Architecture diagrams showing how components connect (instead of listing component names)
- Technology logos with role labels: visual and scannable
- 3-column outcome layouts that group accomplishments into themes
- Before/after screenshots showing what changed in the UI
- A screenshot of a well-formed issue with acceptance criteria visible

### What doesn't work — patterns to avoid

- Directory tree listings as slides: code structure belongs in the talk, not on a slide
- Listing 10+ issues by name and number: synthesize into themes or show the one that matters
- Vague descriptions: "it was challenging but we got it working": name the specific obstacle and what resolved it
- Architecture slides with no diagram: if describing a structure, draw it
- Dense bullet points describing decisions that could be shown in a single diagram
- Generic risks: "schedule conflicts" or "other coursework" are not real risks

### Discouraged behaviors

Try to avoid the following behavior:

1. **Reading from a piece of paper verbatim.** Help cards and brief notes are fine. Reading every word you planned to say is not.
2. **Reading the slides verbatim while presenting.** The slide is the anchor; the presenter adds to it.
3. **Listing issues or tasks one by one** without synthesis or reflection.
