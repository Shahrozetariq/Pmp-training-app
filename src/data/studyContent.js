export const studyLessons = [
  // ── LESSON 1: Agile & Scrum ──────────────────────────────────────────────────
  {
    id: 'agile-scrum',
    domain: 'process',
    title: 'Agile & Scrum Fundamentals',
    subtitle: 'Agile Manifesto, Scrum framework, Kanban, velocity, and Definition of Done',
    estimatedMinutes: 35,
    relatedQuestionIds: [3, 4, 5, 37, 38, 52, 53, 54],
    sections: [
      {
        id: 'agile-manifesto',
        type: 'text',
        title: 'The Agile Manifesto: 4 Values',
        body: 'The Agile Manifesto (2001) establishes four core values that guide agile thinking. These values don\'t eliminate the right side — they simply prioritize the left. The four values are: (1) Individuals and interactions OVER processes and tools — the best processes in the world can\'t substitute for talented, communicating people. (2) Working software OVER comprehensive documentation — documentation that doesn\'t deliver working product adds limited value. (3) Customer collaboration OVER contract negotiation — rigid contracts create adversarial relationships; agile teams work with customers continuously. (4) Responding to change OVER following a plan — detailed long-term plans become obsolete; the ability to adapt is a competitive advantage. On the PMP exam, these values help answer questions about what to prioritize when facing trade-offs.',
      },
      {
        id: 'agile-principles',
        type: 'list',
        title: 'The 12 Agile Principles (Exam-Critical)',
        items: [
          { heading: 'Satisfy the customer through early and continuous delivery', body: 'The highest priority — deliver valuable software frequently, weeks rather than months.' },
          { heading: 'Welcome changing requirements, even late in development', body: 'Agile harnesses change for the customer\'s competitive advantage, even at late stages.' },
          { heading: 'Deliver working software frequently', body: 'Shorter timescales preferred (weeks). Working software is the primary measure of progress.' },
          { heading: 'Business and developers must work together daily', body: 'Collaboration throughout the project eliminates handoff failures.' },
          { heading: 'Build projects around motivated individuals', body: 'Give them the environment, support, and trust they need. Motivated teams outperform managed ones.' },
          { heading: 'Face-to-face conversation is the most efficient communication', body: 'Information radiators and co-location support this. Best information conveyance method.' },
          { heading: 'Working software is the primary measure of progress', body: 'Not documentation, not tasks completed — actual working functionality.' },
          { heading: 'Sustainable pace', body: 'Sponsors, developers, and users should be able to maintain a constant, indefinite pace. No crunch culture.' },
          { heading: 'Continuous attention to technical excellence', body: 'Good design enhances agility. Technical debt slows future delivery.' },
          { heading: 'Simplicity — the art of maximizing work not done', body: 'Do the minimum necessary to deliver value. Avoid gold plating in agile too.' },
          { heading: 'Self-organizing teams', body: 'The best architectures, requirements, and designs emerge from self-organizing teams.' },
          { heading: 'Regular reflection and adjustment', body: 'At regular intervals, the team reflects on how to become more effective and adjusts accordingly (retrospectives).' },
        ],
      },
      {
        id: 'scrum-framework',
        type: 'text',
        title: 'Scrum: Roles, Events, and Artifacts',
        body: 'Scrum is the most widely used agile framework. It organizes work into Sprints (typically 1-4 weeks, fixed timeboxes). The three Scrum roles are: Product Owner (PO) — owns the product vision, manages the Product Backlog, and prioritizes work by business value; Scrum Master (SM) — servant leader who facilitates Scrum events, removes impediments, and protects the team; Development Team — self-organizing, cross-functional group (3-9 people) that does the actual work. The five Scrum events are: Sprint Planning (team commits to sprint goal and selects backlog items), Daily Scrum/Standup (15-minute daily sync on what was done, what will be done, and impediments), Sprint Review (demo working increment to stakeholders, gather feedback), Sprint Retrospective (team inspects process and commits to improvements), and the Sprint itself. The three Scrum artifacts are: Product Backlog (ordered list of everything needed in the product), Sprint Backlog (items selected for current sprint plus plan), and Increment (the sum of all completed Product Backlog items).',
      },
      {
        id: 'dod-story-points',
        type: 'text',
        title: 'Definition of Done, Story Points, and Velocity',
        body: 'The Definition of Done (DoD) is a shared agreement of what "complete" means for any piece of work. Items must meet ALL criteria in the DoD to be considered done. A typical DoD includes: code written, code reviewed, unit tests written and passing, integration tests passing, code deployed to staging, documentation updated, acceptance criteria verified. Story Points are a relative measure of effort, complexity, and uncertainty — not time. Common scales: Fibonacci (1, 2, 3, 5, 8, 13, 21) or T-shirt sizes. Velocity is the average story points completed per sprint, calculated over the last 3-5 sprints. Velocity is used for sprint planning (how much can we realistically commit to?) and release forecasting (when will we finish the backlog?). A key exam trap: never promise to increase velocity on demand — teams need stable conditions and time to improve. Forcing velocity increases typically decreases quality.',
      },
      {
        id: 'kanban',
        type: 'text',
        title: 'Kanban: Flow-Based Agile',
        body: 'Kanban is a flow-based method that visualizes work and limits work-in-progress (WIP). Unlike Scrum, Kanban has no fixed iterations — work flows continuously. Key Kanban practices: (1) Visualize the workflow using a Kanban board with columns representing stages (e.g., To Do → In Progress → Review → Done). (2) Limit WIP — each column has a maximum number of items allowed, preventing overload. (3) Manage flow — monitor cycle time (time from start to completion) and lead time (time from request to delivery). (4) Make policies explicit — clear rules for when items move between stages. (5) Implement feedback loops — regular cadences to improve the system. Kanban is well-suited for operations, support, and maintenance work where requests arrive continuously rather than in planned batches. On the PMP exam, Kanban questions often test WIP limits and flow metrics.',
      },
      {
        id: 'sprint-retrospective',
        type: 'tip',
        title: 'Exam Tip: Sprint Retrospective vs. Sprint Review',
        body: 'Students frequently confuse these two events. Sprint REVIEW: external-facing, the team demonstrates working functionality to stakeholders and gets feedback on the product. Sprint RETROSPECTIVE: internal-facing, the team reflects on their process, relationships, and tools — what went well, what to improve, and what actions to commit to. The retrospective is about HOW the team works, not WHAT they built. In Scrum, the retrospective is held after the review and before the next sprint planning. This is also the key Scrum event that embodies the 12th agile principle: regular reflection and adjustment.',
      },
      {
        id: 'agile-warning',
        type: 'warning',
        title: 'Common Mistake: Extending Sprints',
        body: 'A very common exam trap: never extend a sprint because work is incomplete. Sprints have fixed timeboxes. If stories are not complete by the sprint end, they return to the Product Backlog for re-estimation and re-prioritization by the Product Owner. The only valid reason to end a sprint early is if the Sprint Goal becomes obsolete — then the Product Owner can cancel the sprint. Extending sprints creates scheduling unpredictability and undermines the team\'s planning capability.',
      },
    ],
    keyTerms: [
      { term: 'Sprint', definition: 'A fixed-length timebox (1-4 weeks) in Scrum during which a potentially releasable increment is created.' },
      { term: 'Velocity', definition: 'The average story points completed per sprint, used for capacity planning and forecasting.' },
      { term: 'Definition of Done (DoD)', definition: 'A shared checklist of criteria that must be met before any work item can be considered complete.' },
      { term: 'Product Backlog', definition: 'An ordered list of everything needed in the product, owned and prioritized by the Product Owner.' },
      { term: 'WIP Limit', definition: 'In Kanban, the maximum number of work items allowed in any given stage at one time, used to prevent bottlenecks.' },
      { term: 'Story Points', definition: 'Relative units of measure for estimating the effort, complexity, and uncertainty of user stories.' },
      { term: 'Increment', definition: 'The sum of all completed Product Backlog Items at the end of a sprint; must meet the DoD.' },
    ],
    examTips: [
      'Sprint retrospective = process improvement; Sprint review = product feedback from stakeholders',
      'Never extend a sprint — incomplete stories go back to the backlog',
      'Product Owner prioritizes the backlog; the team decides how to do the work',
      'Velocity is measured over 3-5 sprints; it cannot be mandated to increase',
      'Scrum Master is a servant leader, not a traditional project manager',
      'CPI and SPI below 1.0 always indicate problems (over budget / behind schedule)',
    ],
  },

  // ── LESSON 2: Conflict Management ───────────────────────────────────────────
  {
    id: 'conflict-management',
    domain: 'people',
    title: 'Conflict Management',
    subtitle: 'Thomas-Kilmann modes, conflict sources, escalation, and team conflict resolution',
    estimatedMinutes: 25,
    relatedQuestionIds: [1, 2, 3, 16],
    sections: [
      {
        id: 'conflict-overview',
        type: 'text',
        title: 'Conflict in Projects: Not Always Negative',
        body: 'Project managers must understand that conflict is a natural, often healthy part of team dynamics. Constructive conflict — disagreements about ideas, approaches, and priorities — can lead to better decisions and innovation. Destructive conflict — personal attacks, power struggles, and unresolved interpersonal issues — must be addressed promptly. The PMI exam tests whether you understand the difference and know how to manage both types effectively. The goal is NOT to eliminate all conflict but to channel it constructively. As a project manager, you are expected to address conflict directly and facilitate resolution rather than avoiding it or simply escalating to management.',
      },
      {
        id: 'thomas-kilmann',
        type: 'list',
        title: 'The 5 Thomas-Kilmann Conflict Modes',
        items: [
          { heading: 'Collaborate / Problem-Solve (BEST for most situations)', body: 'Both parties work together to find a solution that fully satisfies all concerns. Win-win. Time-intensive but produces the most durable agreements. Best when: the issue is important, relationships matter, and time permits.' },
          { heading: 'Compromise / Reconcile', body: 'Both parties give up something to reach an agreement. Lose-lose (neither fully satisfied). Best when: goals are moderately important, parties have equal power, temporary solutions are needed, or collaboration has failed.' },
          { heading: 'Accommodate / Smooth', body: 'One party yields to the other\'s position, often to preserve the relationship. Lose-win. Best when: the issue is unimportant to you but important to the other party, or maintaining harmony is the priority.' },
          { heading: 'Force / Compete / Direct (WORST for relationships)', body: 'One party imposes their position using authority or power. Win-lose. Best when: quick decisions are needed, an emergency exists, or unpopular but necessary decisions must be made. Never use for ongoing team relationships.' },
          { heading: 'Avoid / Withdraw', body: 'Neither party engages with the conflict — it is sidestepped or postponed. No-win. Best when: the issue is trivial, cooling-down time is needed, or gathering more information is necessary before engaging.' },
        ],
      },
      {
        id: 'conflict-sources',
        type: 'list',
        title: 'Top Sources of Project Conflict',
        items: [
          { heading: 'Schedule (most common)', body: 'Disagreements about timelines, deadlines, and priorities. Especially common when multiple projects compete for the same resources.' },
          { heading: 'Project priorities', body: 'Conflicts over which work gets done first, which features are most important.' },
          { heading: 'Resources', body: 'Competition for shared team members, equipment, or budget.' },
          { heading: 'Technical opinions', body: 'Disagreements about technical approaches, architecture, or implementation methods.' },
          { heading: 'Administrative procedures', body: 'How work should be done, what processes to follow, reporting structures.' },
          { heading: 'Cost', body: 'Budget allocation disputes, cost estimation disagreements.' },
          { heading: 'Personality', body: 'Personal clashes — the least common source but often the most difficult to resolve.' },
        ],
      },
      {
        id: 'escalation-path',
        type: 'text',
        title: 'Conflict Escalation Path',
        body: 'On the PMP exam, the expected sequence for handling conflict is: First, the parties involved should try to resolve it themselves. Second, if self-resolution fails, the project manager facilitates direct dialogue between the parties. Third, if facilitation fails, the PM may mediate (more actively guide the resolution). Fourth, if mediation fails, the conflict escalates to the project sponsor or higher authority. Fifth, as a last resort, formal HR processes may be involved. A critical exam rule: escalation should NOT be the first step. Jumping to the sponsor before attempting facilitation is always wrong in PMI\'s framework. The PM is expected to be capable of handling interpersonal conflict directly.',
      },
      {
        id: 'agile-conflict',
        type: 'text',
        title: 'Conflict in Agile Teams',
        body: 'In agile environments, conflict is particularly common in sprint planning (scope vs. capacity), backlog prioritization (competing stakeholder needs), and technical decisions (architecture debates). The Scrum Master\'s role in conflict is not to impose a solution but to facilitate the team\'s ability to resolve it themselves. Common agile conflict scenarios on the exam: (1) Product Owner vs. Development Team on sprint scope — the SM facilitates negotiation. (2) Team vs. stakeholders on velocity expectations — the SM educates and protects the team. (3) Team vs. PMO on documentation requirements — the SM advocates for minimal viable documentation. (4) Team members on technical approaches — encourage timeboxed spikes to resolve technically rather than politically.',
      },
      {
        id: 'conflict-tip',
        type: 'tip',
        title: 'Rita\'s Tip: Confronting is Optimal',
        body: 'Rita Mulcahy\'s framing: "Confronting (Problem-Solving/Collaborating) is the BEST conflict resolution technique on the exam." When asked what to do FIRST, always look for the answer that involves direct dialogue and collaborative problem-solving. Avoiding and accommodating are the weakest approaches. Forcing/directing is only appropriate in genuine emergencies. If a question asks about a conflict between two team members and gives you the option to facilitate a conversation — that is almost always the correct answer.',
      },
    ],
    keyTerms: [
      { term: 'Collaborate/Problem-Solve', definition: 'The most effective conflict resolution mode — both parties work together to find a win-win solution.' },
      { term: 'Force/Compete', definition: 'Using authority or power to impose a solution; win-lose; worst for long-term relationships.' },
      { term: 'Accommodation/Smoothing', definition: 'Yielding to the other party\'s position to preserve harmony; useful when the issue is unimportant to you.' },
      { term: 'Constructive Conflict', definition: 'Productive disagreement about ideas that leads to better outcomes.' },
      { term: 'Destructive Conflict', definition: 'Personal conflict that damages relationships and team performance.' },
    ],
    examTips: [
      'Collaborate/Problem-Solve is ALWAYS the best answer unless circumstances demand otherwise',
      'Never escalate conflict before attempting facilitation — that\'s always wrong on the exam',
      'Schedule conflicts are the most common source of project conflict',
      'Avoid/Withdraw is acceptable only as a temporary measure',
      'Force is appropriate only in genuine emergencies or when quick decisions are mandatory',
    ],
  },

  // ── LESSON 3: Servant Leadership & Team Building ─────────────────────────────
  {
    id: 'servant-leadership',
    domain: 'people',
    title: 'Servant Leadership & Team Building',
    subtitle: 'Tuckman stages, situational leadership, motivation theories, psychological safety',
    estimatedMinutes: 40,
    relatedQuestionIds: [4, 5, 6, 8, 9, 10, 19, 21, 24],
    sections: [
      {
        id: 'servant-leadership-text',
        type: 'text',
        title: 'Servant Leadership vs. Traditional Management',
        body: 'Servant leadership is the dominant leadership model in the PMI framework, especially for agile and hybrid environments. A servant leader\'s primary purpose is to serve the team — removing impediments, providing resources, enabling growth, and protecting the team\'s ability to deliver. Traditional (transactional) managers direct, control, and evaluate. Servant leaders coach, facilitate, and empower. The key differences: traditional managers exercise authority through position power; servant leaders influence through expertise, trust, and relationship power. On the exam, questions about how to lead a team almost always point toward servant leadership behaviors: asking questions rather than giving directives, facilitating retrospectives rather than issuing improvement orders, removing impediments rather than ignoring them, and protecting the team from organizational distractions.',
      },
      {
        id: 'tuckman-stages',
        type: 'list',
        title: 'Tuckman\'s 5 Stages of Team Development',
        items: [
          { heading: 'Forming', body: 'Team members meet, roles are unclear, people are polite and cautious. Low performance. PM should provide clear direction and structure. Teams need guidance here.' },
          { heading: 'Storming', body: 'Conflicts emerge as personalities clash and work styles diverge. Trust is low. Performance dips. PM facilitates conflict resolution and establishes working agreements.' },
          { heading: 'Norming', body: 'Team develops cohesion, establishes norms, and builds trust. Collaboration improves. PM shifts to coaching and supporting. Working agreements solidify.' },
          { heading: 'Performing', body: 'High-performance state. Team is self-directing, produces excellent results, and resolves its own conflicts. PM can delegate freely and focus on external issues.' },
          { heading: 'Adjourning (Mourning)', body: 'Team disbands at project end. Members may experience loss. PM should recognize contributions, capture lessons learned, and help members transition.' },
        ],
      },
      {
        id: 'situational-leadership',
        type: 'list',
        title: 'Situational Leadership: 4 Styles (Hersey & Blanchard)',
        items: [
          { heading: 'Directing (S1)', body: 'High task / Low relationship. Used with low competence, low commitment (novice, enthusiastic beginner). Give specific instructions, closely supervise. Best for forming stage.' },
          { heading: 'Coaching (S2)', body: 'High task / High relationship. Used with some competence, low commitment (disillusioned learner). Explain decisions, invite input, but still direct. Storming to norming stage.' },
          { heading: 'Supporting (S3)', body: 'Low task / High relationship. Used with high competence, variable commitment (capable but cautious). Share decision-making, encourage, listen. Norming to performing stage.' },
          { heading: 'Delegating (S4)', body: 'Low task / Low relationship. Used with high competence, high commitment (self-reliant achiever). Turn over responsibility, monitor but don\'t interfere. Performing stage.' },
        ],
      },
      {
        id: 'motivation-theories',
        type: 'text',
        title: 'Motivation Theories for the PMP Exam',
        body: 'Maslow\'s Hierarchy of Needs: Five levels from bottom to top — Physiological (food, shelter), Safety (job security), Social/Love (belonging, team), Esteem (recognition, achievement), Self-Actualization (growth, purpose). People must have lower-level needs met before higher-level motivators work. Application: a team member worried about job security (safety) won\'t be motivated by recognition awards (esteem). Herzberg\'s Two-Factor Theory: Hygiene Factors (job security, salary, working conditions, company policy) — their absence causes dissatisfaction but their presence does NOT motivate. Motivators (achievement, recognition, interesting work, responsibility, growth) — their presence DOES motivate. Application: raising salaries alone doesn\'t motivate; adding interesting work and recognition does. McGregor\'s Theory X and Y: Theory X managers believe workers are lazy and need to be controlled (micromanagement mindset). Theory Y managers believe workers are self-motivated and responsible (empowerment mindset). PMI strongly favors Theory Y behavior.',
      },
      {
        id: 'psychological-safety',
        type: 'text',
        title: 'Psychological Safety: The Foundation of High Performance',
        body: 'Psychological safety is the belief that one can speak up, take risks, and admit mistakes without fear of punishment or embarrassment. Research by Amy Edmondson and Google\'s Project Aristotle identified it as the single most important factor in team performance. Project managers create psychological safety by: (1) Responding to mistakes with curiosity rather than blame — "what happened?" not "whose fault is this?" (2) Modeling vulnerability — admitting their own mistakes and uncertainties. (3) Actively soliciting input from quieter team members. (4) Conducting blameless retrospectives focused on process improvement. (5) Celebrating learning from experiments, even failed ones. In agile contexts, psychological safety enables the experimentation and feedback loops that make teams adaptive. Without it, teams hide problems until they become crises.',
      },
      {
        id: 'team-tip',
        type: 'tip',
        title: 'Exam Tip: Which Leadership Style When?',
        body: 'The exam often presents a scenario and asks which leadership style to apply. The key question is: what is the team member\'s competence and commitment level? New employee = Directing. Experienced but discouraged = Coaching or Supporting. Highly skilled but new to the role = Supporting. High performer who knows the job cold = Delegating. Watch for Tuckman stage clues: "newly formed team" = Forming = Directing. "Team is performing excellently" = Performing = Delegating. Servant leadership applies across all stages but is most visible in the Supporting and Delegating styles.',
      },
      {
        id: 'team-warning',
        type: 'warning',
        title: 'Common Mistake: Theory X Behaviors on the Exam',
        body: 'PMI exams penalize Theory X behaviors. Answers that involve micromanaging, establishing surveillance, mandating attendance, or removing team member autonomy are almost always wrong. Even when a team is struggling, the preferred PMI approach is to understand root causes, provide support, and coach — not to increase control and oversight. Similarly, replacing underperforming team members should be a last resort, not a first response to performance issues.',
      },
    ],
    keyTerms: [
      { term: 'Servant Leadership', definition: 'A leadership philosophy in which the leader\'s primary role is to serve the team by removing impediments and enabling performance.' },
      { term: 'Tuckman Stages', definition: 'Forming → Storming → Norming → Performing → Adjourning — the five sequential stages of team development.' },
      { term: 'Hygiene Factors', definition: 'In Herzberg\'s theory, factors (salary, security) whose absence causes dissatisfaction but whose presence does not motivate.' },
      { term: 'Theory Y', definition: 'McGregor\'s view that workers are self-motivated, responsible, and capable — the PMI-preferred management philosophy.' },
      { term: 'Psychological Safety', definition: 'A team climate where members feel safe to speak up, take risks, and admit mistakes without fear of punishment.' },
      { term: 'Situational Leadership', definition: 'Hersey & Blanchard\'s model: adapt your leadership style (Directing/Coaching/Supporting/Delegating) to the team member\'s competence and commitment.' },
    ],
    examTips: [
      'PMI favors servant leadership, Theory Y, and empowerment — never choose micromanagement',
      'Maslow: lower needs must be met before higher motivators work',
      'Herzberg: salary is hygiene (not a motivator); interesting work and recognition DO motivate',
      'Tuckman Forming → Storming: expect conflict; this is normal, not a failure',
      'Psychological safety enables blameless retrospectives and honest communication',
      'Situational leadership: match style to team member\'s development level',
    ],
  },

  // ── LESSON 4: Stakeholder Engagement ─────────────────────────────────────────
  {
    id: 'stakeholder-engagement',
    domain: 'people',
    title: 'Stakeholder Engagement',
    subtitle: 'Identification, power/interest grid, engagement levels, managing resistance',
    estimatedMinutes: 30,
    relatedQuestionIds: [13, 14, 20, 23, 33, 34, 80],
    sections: [
      {
        id: 'stakeholder-identification',
        type: 'text',
        title: 'Stakeholder Identification: Ongoing, Not One-Time',
        body: 'A critical PMI principle: stakeholder identification is NOT a one-time activity done only at project initiation. New stakeholders can emerge at any point in the project lifecycle as scope evolves, organizational structures change, or previously unknown parties discover an interest in the project. The project manager is responsible for continuously scanning for new stakeholders. When a new stakeholder is discovered — regardless of project phase — they must be immediately added to the stakeholder register, assessed for power and interest, and engaged appropriately. Failing to identify stakeholders late in the project is never acceptable. The exam tests this with scenarios like "a powerful stakeholder was missed during planning" — the answer is always to add them now and develop an engagement strategy, never to continue without involving them.',
      },
      {
        id: 'power-interest-grid',
        type: 'text',
        title: 'Power/Interest Grid (Influence/Impact Matrix)',
        body: 'The power/interest grid plots stakeholders on two axes: power (authority, influence) and interest (degree of concern about project outcomes). The four quadrants produce different engagement strategies: High Power / High Interest (Manage Closely): These are your key stakeholders — executive sponsors, major customers, key decision-makers. Engage frequently, involve in decisions, provide detailed updates. High Power / Low Interest (Keep Satisfied): Executives with veto authority but low day-to-day interest. Keep them satisfied with high-level updates; do not overwhelm with details. Low Power / High Interest (Keep Informed): Subject matter experts, end users, affected departments. Provide regular updates, involve in requirements and testing, but don\'t let them overload your schedule. Low Power / Low Interest (Monitor): Peripheral stakeholders. Monitor but minimal engagement. Note: stakeholders move between quadrants as the project progresses — update the grid regularly.',
      },
      {
        id: 'engagement-levels',
        type: 'list',
        title: 'The 5 Stakeholder Engagement Levels',
        items: [
          { heading: 'Unaware', body: 'Stakeholder is not aware of the project or its potential impact. Action: inform them and move to a higher engagement level.' },
          { heading: 'Resistant', body: 'Stakeholder is aware but actively opposed to the project or its outcomes. Action: understand root causes of resistance, address concerns, involve them in decisions where possible.' },
          { heading: 'Neutral', body: 'Stakeholder is aware but neither supportive nor resistant. Action: provide information, identify what might motivate engagement or support.' },
          { heading: 'Supportive', body: 'Stakeholder is aware and supportive of project outcomes. Action: maintain engagement, leverage their support, use them to influence resistant stakeholders.' },
          { heading: 'Leading', body: 'Stakeholder is aware, supportive, and actively championing the project. Action: leverage them as change agents, involve in stakeholder engagement activities.' },
        ],
      },
      {
        id: 'managing-resistance',
        type: 'text',
        title: 'Managing Resistant Stakeholders',
        body: 'Resistant stakeholders are one of the most common sources of project failure. The PMI approach to resistance is engagement, not avoidance. Steps to manage resistant stakeholders: (1) Understand their concerns — schedule one-on-one conversations to discover what specifically they oppose. Often resistance stems from fear of change, past project failures, or legitimate concerns about risk. (2) Address legitimate concerns — if their concerns have merit, incorporate them into the project plan. (3) Involve them in relevant decisions — people resist what is done to them, not what they participate in creating. (4) Communicate benefits clearly and repeatedly — people need to hear why the change is good for them specifically. (5) Find allies — leverage Leading stakeholders to influence Resistant ones. (6) Escalate as a last resort — if a resistant stakeholder with significant authority is creating project-stopping problems despite all engagement efforts, escalation to the sponsor may be necessary.',
      },
      {
        id: 'communications-matrix',
        type: 'text',
        title: 'Stakeholder Register and Communications Matrix',
        body: 'The Stakeholder Register captures: stakeholder name, role, contact information, power/interest assessment, engagement level (current vs. desired), and engagement strategy. It is a living document updated throughout the project. The Communications Matrix maps stakeholders to their communication needs: What information they need, in what format, how frequently, through what channel (email, meeting, dashboard), from whom, and in what level of detail. Creating tailored communications based on stakeholder needs is more effective than sending the same status report to everyone. Information overload is as problematic as information gaps — executives typically need one-page summaries; technical team members may need detailed specifications.',
      },
      {
        id: 'agile-stakeholders',
        type: 'tip',
        title: 'Exam Tip: Agile vs. Predictive Stakeholder Engagement',
        body: 'In agile environments, stakeholder engagement is embedded in the process through Sprint Reviews (regular demos), direct product owner interaction, and information radiators (visible task boards). The product owner is a dedicated stakeholder engagement role. In predictive environments, engagement is more structured: formal stakeholder analysis, communications plan, regular status reports, and change control meetings. On the exam, hybrid scenarios often involve a stakeholder who is comfortable with formal reports (predictive approach) but is working with an agile team. The answer is usually to tailor communication to the stakeholder\'s preferences while maintaining agile processes — perhaps providing written summaries after sprint reviews.',
      },
    ],
    keyTerms: [
      { term: 'Stakeholder Register', definition: 'A project document that identifies all stakeholders, their interests, involvement, and potential impact on project success.' },
      { term: 'Power/Interest Grid', definition: 'A tool for categorizing stakeholders by their level of authority and interest in the project to determine engagement strategy.' },
      { term: 'Engagement Level', definition: 'Classification of a stakeholder\'s attitude toward the project: Unaware, Resistant, Neutral, Supportive, or Leading.' },
      { term: 'Communications Matrix', definition: 'A document mapping what information each stakeholder needs, in what format, frequency, and through what channel.' },
      { term: 'Information Radiator', definition: 'In agile, a highly visible display (e.g., Kanban board, burndown chart) that makes project information accessible without requiring someone to request it.' },
    ],
    examTips: [
      'Stakeholder identification is continuous — not just done at project start',
      'When a new stakeholder is found mid-project: add to register, assess, engage immediately',
      'Power/Interest grid: High Power / High Interest = Manage Closely (most attention)',
      'Resistant stakeholders need engagement, not avoidance — find the root cause of resistance',
      'In agile, the Product Owner is the primary stakeholder engagement mechanism',
      'Never exclude stakeholders because they are difficult — that makes problems worse',
    ],
  },

  // ── LESSON 5: Risk Management ─────────────────────────────────────────────────
  {
    id: 'risk-management',
    domain: 'process',
    title: 'Risk Management',
    subtitle: 'Risk process, probability/impact matrix, threat & opportunity responses, reserves',
    estimatedMinutes: 35,
    relatedQuestionIds: [29, 30, 31, 32, 52, 63, 71],
    sections: [
      {
        id: 'risk-process',
        type: 'list',
        title: 'The 6-Step Risk Management Process',
        items: [
          { heading: '1. Plan Risk Management', body: 'Establish how risk management will be conducted: methodology, roles, timing, risk categories (RBS), and thresholds. Creates the Risk Management Plan.' },
          { heading: '2. Identify Risks', body: 'Identify all possible risks using techniques like brainstorming, Delphi technique, SWOT analysis, interviews, checklists, and cause-effect diagrams. Output: Risk Register (initial).' },
          { heading: '3. Qualitative Risk Analysis', body: 'PRIORITIZE risks using probability and impact assessment. This creates the prioritized risk list. MUST be done before responses can be planned. Output: Updated Risk Register with priority rankings.' },
          { heading: '4. Quantitative Risk Analysis (optional)', body: 'Numerically analyze prioritized risks using techniques like Monte Carlo simulation and decision tree analysis. Provides probability distributions for cost and schedule outcomes. Not required for all projects.' },
          { heading: '5. Plan Risk Responses', body: 'Develop response strategies for prioritized risks (threats: avoid/transfer/mitigate/accept; opportunities: exploit/share/enhance/accept). Create contingency plans. Assign risk owners.' },
          { heading: '6. Implement & Monitor Risks', body: 'Execute risk responses, monitor for triggers, re-assess risks throughout the project, identify new risks, track contingency reserve usage. Ongoing throughout project lifecycle.' },
        ],
      },
      {
        id: 'threat-responses',
        type: 'list',
        title: 'Threat Response Strategies (5 Types)',
        items: [
          { heading: 'Escalate', body: 'Transfer ownership of the risk to a higher level in the organization when it is outside the project\'s scope or authority. The escalated risk is monitored but no longer the PM\'s primary responsibility.' },
          { heading: 'Avoid', body: 'Change the project plan to eliminate the threat entirely. Most aggressive response. Example: change technology, reduce scope, or extend schedule to avoid a risky dependency.' },
          { heading: 'Transfer', body: 'Shift the financial impact to a third party — insurance, contract clauses, warranties. Doesn\'t eliminate the risk; transfers financial consequences. Example: fixed-price contract for uncertain work.' },
          { heading: 'Mitigate', body: 'Reduce the probability and/or impact of the risk. Most common response. Example: prototype to reduce technical uncertainty; hire experienced developer to reduce schedule risk.' },
          { heading: 'Accept', body: 'Acknowledge the risk and take no proactive action. Active acceptance: create a contingency plan if the risk occurs. Passive acceptance: document and monitor only. Used for low-priority risks.' },
        ],
      },
      {
        id: 'opportunity-responses',
        type: 'list',
        title: 'Opportunity Response Strategies (5 Types)',
        items: [
          { heading: 'Escalate', body: 'Refer the opportunity to a higher level if it\'s beyond the project\'s scope to take advantage of it.' },
          { heading: 'Exploit', body: 'Ensure the opportunity definitely occurs. Most aggressive positive response. Assign best resources, eliminate conditions that prevent it.' },
          { heading: 'Share', body: 'Allocate some/all of the opportunity to a third party best positioned to capture the benefit. Joint ventures, partnerships.' },
          { heading: 'Enhance', body: 'Increase the probability and/or impact of the opportunity. Remove barriers, increase attention, add resources.' },
          { heading: 'Accept', body: 'Take advantage of the opportunity if it occurs but don\'t actively pursue it.' },
        ],
      },
      {
        id: 'reserves',
        type: 'text',
        title: 'Contingency vs. Management Reserves',
        body: 'Two types of reserves exist in project budgeting. Contingency Reserves are for KNOWN unknowns — risks that have been identified, analyzed, and assigned response plans. The amount is based on quantitative risk analysis (expected monetary value of identified risks). The PM controls this reserve and can access it when a planned risk trigger occurs — no additional approval needed. Management Reserves are for UNKNOWN unknowns — unforeseeable events not included in any risk plan. This is held by senior management or the sponsor. The PM must request permission to access management reserves, which typically requires a formal change request. The total budget (also called the Project Budget Baseline) includes the cost baseline plus management reserve. On the exam: PM can spend contingency reserve; must request management reserve.',
      },
      {
        id: 'secondary-residual-risks',
        type: 'text',
        title: 'Secondary and Residual Risks',
        body: 'Residual risks are risks that remain after a risk response has been implemented. Example: mitigation reduces a technical risk from 70% probability to 25% — the remaining 25% is the residual risk. Contingency plans address residual risks. Secondary risks are new risks that arise from implementing a risk response. Example: to avoid a vendor risk, you decide to build the component in-house (avoid strategy). This creates a secondary risk: your team may not have the required expertise. Both types must be documented in the risk register and analyzed. The fact that an exam question mentions a response plan exists is not the end of risk management — the PM must also plan for residual and secondary risks.',
      },
      {
        id: 'risk-tip',
        type: 'tip',
        title: 'Rita\'s Risk Rules',
        body: 'Rita Mulcahy\'s key rules: (1) Qualitative analysis ALWAYS comes before response planning — you must prioritize before you respond. (2) Risk identification should involve the WHOLE team, not just the PM. (3) Risks with potential positive impact are called OPPORTUNITIES — always manage them, not just threats. (4) A risk that has occurred is now an ISSUE — it leaves the risk register and enters the issue log. (5) Workarounds are unplanned responses to risks that were NOT in the risk register. (6) Risk owners are assigned to each risk — the PM is NOT the owner of every risk. (7) The residual risk is what\'s left after your response — plan for it with contingency.',
      },
      {
        id: 'risk-warning',
        type: 'warning',
        title: 'Common Mistake: Skipping Qualitative Analysis',
        body: 'The exam frequently tests whether you know that qualitative risk analysis MUST occur before risk response planning. A very common wrong answer is to jump from "identified risks" straight to "create responses." This is incorrect. Without prioritization through qualitative analysis, you risk spending resources on low-priority risks while high-priority ones go unaddressed. Another trap: many students think quantitative analysis is required — it is not. Qualitative is always done; quantitative is optional and done for high-priority risks when more numerical precision is needed.',
      },
    ],
    keyTerms: [
      { term: 'Risk Register', definition: 'A document containing identified risks, their probability, impact, priority, response plans, and owners.' },
      { term: 'Probability/Impact Matrix', definition: 'A grid used in qualitative risk analysis to rate risks by likelihood and potential impact to create a priority ranking.' },
      { term: 'Contingency Reserve', definition: 'Budget set aside for known-unknown risks identified in risk planning; controlled by the PM.' },
      { term: 'Management Reserve', definition: 'Budget for unknown-unknown events; controlled by senior management; requires formal approval to access.' },
      { term: 'Residual Risk', definition: 'Risk that remains after a risk response has been implemented.' },
      { term: 'Secondary Risk', definition: 'A new risk created as a direct result of implementing a risk response.' },
      { term: 'Workaround', definition: 'An unplanned response to a risk that was not on the risk register and has now occurred.' },
    ],
    examTips: [
      'Risk process order: Plan → Identify → Qualitative → (Quantitative optional) → Respond → Monitor',
      'Qualitative analysis MUST precede response planning — this is a frequent exam trap',
      'Threat: Escalate/Avoid/Transfer/Mitigate/Accept; Opportunity: Escalate/Exploit/Share/Enhance/Accept',
      'PM controls contingency reserve; management reserve requires sponsor approval',
      'A risk that occurs becomes an issue — it leaves the risk register',
      'Residual risk = what remains after response; secondary risk = created by the response',
    ],
  },

  // ── LESSON 6: Earned Value Management ────────────────────────────────────────
  {
    id: 'earned-value',
    domain: 'process',
    title: 'Earned Value Management (EVM)',
    subtitle: 'PV, EV, AC, all variances and indices, EAC, TCPI with worked examples',
    estimatedMinutes: 45,
    relatedQuestionIds: [34, 35, 54, 55, 62, 65, 69],
    sections: [
      {
        id: 'evm-foundation',
        type: 'text',
        title: 'EVM Foundation: Three Key Measurements',
        body: 'Earned Value Management integrates scope, schedule, and cost to provide an objective measure of project performance. The three core measurements are: Planned Value (PV) — also called BCWS (Budgeted Cost of Work Scheduled): the authorized budget for the work planned to be done by a given time. This is what you PLANNED to accomplish and spend. Earned Value (EV) — also called BCWP (Budgeted Cost of Work Performed): the authorized budget for the work ACTUALLY completed to date. This measures how much work you\'ve done in budget terms. Actual Cost (AC) — also called ACWP (Actual Cost of Work Performed): the total cost actually incurred to complete the work to date. This is what you ACTUALLY spent. All three values are measured at the same point in time to enable comparison. Example: Project is 40% complete with a $500,000 total budget. By now you should have spent $200,000 (PV). You\'ve actually completed work worth $180,000 (EV). You actually spent $210,000 (AC).',
      },
      {
        id: 'evm-formulas',
        type: 'formula',
        title: 'Core EVM Formulas',
        body: `PV = Planned Value (budgeted cost of planned work)
EV = Earned Value (budgeted cost of work performed)
AC = Actual Cost (actual cost of work performed)
BAC = Budget at Completion (total project budget)

VARIANCES (negative = bad):
CV (Cost Variance) = EV - AC         [negative = over budget]
SV (Schedule Variance) = EV - PV     [negative = behind schedule]

INDICES (< 1.0 = problem):
CPI (Cost Performance Index) = EV / AC      [< 1 = over budget per dollar]
SPI (Schedule Performance Index) = EV / PV  [< 1 = behind schedule]

FORECASTS:
EAC (Estimate at Completion) = BAC / CPI            [if current efficiency continues]
EAC (alt) = AC + ETC                                [if remaining work re-estimated]
EAC (alt2) = AC + (BAC - EV)                        [if future work goes as planned]
ETC (Estimate to Complete) = EAC - AC               [remaining work cost]
VAC (Variance at Completion) = BAC - EAC            [positive = under budget]
TCPI (To-Complete Performance Index) = (BAC - EV) / (BAC - AC)   [efficiency needed for remaining work]`,
      },
      {
        id: 'evm-interpretation',
        type: 'list',
        title: 'Interpreting EVM Results',
        items: [
          { heading: 'CPI > 1.0', body: 'Under budget. Delivering more value than the money spent. Good news.' },
          { heading: 'CPI < 1.0', body: 'Over budget. Getting less value than the money spent. Corrective action needed.' },
          { heading: 'SPI > 1.0', body: 'Ahead of schedule. Completing work faster than planned.' },
          { heading: 'SPI < 1.0', body: 'Behind schedule. Work is progressing slower than planned.' },
          { heading: 'CV negative (EV < AC)', body: 'You are spending MORE than the budgeted amount for the work you\'ve done. Over budget.' },
          { heading: 'SV negative (EV < PV)', body: 'The work you\'ve completed is worth LESS than what you planned to complete. Behind schedule.' },
          { heading: 'Both CPI and SPI < 1.0', body: 'Doubly troubled project — over budget AND behind schedule. Immediate escalation and corrective action required.' },
        ],
      },
      {
        id: 'evm-worked-example',
        type: 'text',
        title: 'Worked Example: Full EVM Calculation',
        body: 'Project data: BAC = $200,000. At the midpoint review: PV = $90,000, EV = $80,000, AC = $100,000. Step-by-step: CV = EV - AC = $80,000 - $100,000 = -$20,000 (over budget by $20K). SV = EV - PV = $80,000 - $90,000 = -$10,000 (behind schedule equivalent of $10K). CPI = EV/AC = $80,000/$100,000 = 0.80 (getting only $0.80 of value per dollar spent). SPI = EV/PV = $80,000/$90,000 = 0.89 (achieving only 89% of planned schedule progress). EAC = BAC/CPI = $200,000/0.80 = $250,000 (projected final cost if efficiency continues). VAC = BAC - EAC = $200,000 - $250,000 = -$50,000 (projected overrun of $50,000). ETC = EAC - AC = $250,000 - $100,000 = $150,000 (remaining work will cost $150K). TCPI = (BAC-EV)/(BAC-AC) = ($200K-$80K)/($200K-$100K) = $120K/$100K = 1.20 (must be 20% more efficient on remaining work — Rita says this is unrealistic).',
      },
      {
        id: 'eac-options',
        type: 'text',
        title: 'Three EAC Formulas: When to Use Each',
        body: 'The exam tests which EAC formula to use based on assumptions. (1) EAC = BAC/CPI: Use this when current cost efficiency is expected to continue for the rest of the project. This is the most pessimistic forecast for projects running over budget. Most commonly tested formula. (2) EAC = AC + ETC: Use this when the original estimate for remaining work is no longer valid and you have a new bottom-up estimate. This requires completely re-estimating the remaining work. (3) EAC = AC + (BAC-EV): Use this when future work will be done at the original planned rate (current variances are atypical/one-time). This assumes the current problems won\'t persist. The question will usually signal which assumption applies. "If variances are expected to continue" = BAC/CPI. "Bottom-up re-estimate performed" = AC+ETC.',
      },
      {
        id: 'tcpi-tip',
        type: 'tip',
        title: 'Rita\'s Rule: TCPI > 1.10 is Unrealistic',
        body: 'Rita Mulcahy\'s key TCPI rule: if TCPI (based on BAC) exceeds 1.10, the project\'s original budget target is unrealistic. A TCPI of 1.10 means the team must be 10% MORE efficient for ALL remaining work than they have been to date. This is very difficult to achieve. A TCPI of 1.20+ essentially makes the original budget unachievable. When TCPI > 1.10, the PM should present a revised EAC to management rather than pretending the original budget is still achievable. Note: there is also a TCPI based on EAC (when the project has a new authorized budget): TCPI = (BAC-EV)/(EAC-AC).',
      },
    ],
    keyTerms: [
      { term: 'PV (Planned Value)', definition: 'The authorized budget for planned work — what you should have spent by now.' },
      { term: 'EV (Earned Value)', definition: 'The authorized budget for work actually completed — the value of work done, in budget terms.' },
      { term: 'AC (Actual Cost)', definition: 'The actual cost incurred for work completed to date.' },
      { term: 'CPI (Cost Performance Index)', definition: 'EV/AC. Efficiency ratio for budget performance. Below 1.0 = over budget.' },
      { term: 'SPI (Schedule Performance Index)', definition: 'EV/PV. Efficiency ratio for schedule performance. Below 1.0 = behind schedule.' },
      { term: 'EAC (Estimate at Completion)', definition: 'Projected total cost at project completion. Most common formula: BAC/CPI.' },
      { term: 'TCPI', definition: 'The cost efficiency needed for remaining work to meet a budget target. > 1.10 is considered unrealistic by Rita Mulcahy.' },
    ],
    examTips: [
      'CV = EV - AC (negative = over budget); SV = EV - PV (negative = behind schedule)',
      'CPI = EV/AC; SPI = EV/PV — both < 1.0 means a troubled project',
      'EAC = BAC/CPI is the most tested EAC formula (assumes current efficiency continues)',
      'TCPI > 1.10 means the budget target is unrealistic per Rita Mulcahy',
      'VAC negative = projected cost overrun; VAC positive = projected savings',
      'ETC = EAC - AC (cost of remaining work)',
    ],
  },

  // ── LESSON 7: Schedule Management ─────────────────────────────────────────────
  {
    id: 'schedule-management',
    domain: 'process',
    title: 'Schedule Management',
    subtitle: 'CPM, float calculation, fast-tracking vs. crashing, PERT, resource leveling',
    estimatedMinutes: 35,
    relatedQuestionIds: [36, 37, 62],
    sections: [
      {
        id: 'cpm-overview',
        type: 'text',
        title: 'Critical Path Method (CPM)',
        body: 'The Critical Path Method identifies the longest sequence of dependent activities that determines the minimum project duration. Any delay on the critical path directly delays the project end date. The critical path has zero total float. Steps to find the critical path: (1) List all project activities with duration estimates. (2) Identify dependencies between activities. (3) Draw the network diagram (PDM — Precedence Diagramming Method). (4) Forward Pass: calculate Early Start (ES) and Early Finish (EF) for each activity, starting at the beginning. EF = ES + Duration - 1. (5) Backward Pass: calculate Late Start (LS) and Late Finish (LF) for each activity, starting from the end. LF from the last activity; LS = LF - Duration + 1. (6) Calculate float: Total Float = LS - ES = LF - EF. (7) The critical path is all activities with zero total float. Projects can have multiple critical paths — all must be monitored.',
      },
      {
        id: 'float-formula',
        type: 'formula',
        title: 'Float Calculation Formulas',
        body: `Forward Pass:
ES (Early Start) = Latest EF of all predecessors + 1
EF (Early Finish) = ES + Duration - 1

Backward Pass:
LF (Late Finish) = Earliest LS of all successors - 1
LS (Late Start) = LF - Duration + 1

Float:
Total Float = LS - ES = LF - EF
Critical Path = All activities with Total Float = 0
Free Float = ES of successor - EF of activity - 1
              (how long activity can slip without delaying successor)

PERT Three-Point Estimate:
Expected Duration (E) = (O + 4M + P) / 6
Standard Deviation (σ) = (P - O) / 6
Variance = σ²
Activity Range = E ± 3σ (99.73% confidence)`,
      },
      {
        id: 'schedule-compression',
        type: 'list',
        title: 'Schedule Compression: Crashing vs. Fast-Tracking',
        items: [
          { heading: 'Crashing', body: 'Adding resources (people, equipment, money) to critical path activities to shorten duration. Example: hiring additional developers, authorizing overtime. Trade-off: always INCREASES cost. May or may not work — some activities cannot be shortened by adding resources (e.g., "9 women cannot have a baby in 1 month"). Best crash: lowest cost per time unit saved on the critical path.' },
          { heading: 'Fast-Tracking', body: 'Performing activities in parallel that were originally planned sequentially. Example: beginning construction while final design is still being completed. Trade-off: INCREASES risk and often leads to rework. Does NOT increase cost directly. Best for activities that have some independence but were conservatively sequenced.' },
          { heading: 'Key distinction for the exam', body: 'Crashing = add cost to save time. Fast-tracking = add risk to save time. Crashing cannot always work. Fast-tracking should only be done on critical path activities. Both are schedule compression techniques.' },
        ],
      },
      {
        id: 'resource-leveling',
        type: 'text',
        title: 'Resource Leveling vs. Resource Smoothing',
        body: 'Resource Leveling is used when resources are over-allocated or have availability constraints. It may extend the project schedule to resolve these constraints. Example: a developer is assigned to two overlapping activities — resource leveling shifts one activity to resolve the conflict, potentially extending the duration. Resource Smoothing adjusts activities within their float to optimize resource usage without changing the project end date. Leveling may push activities off the critical path onto it, creating new critical paths. Always check the critical path after resource leveling. Key exam distinction: Resource Leveling can CHANGE the project end date. Resource Smoothing CANNOT change the project end date.',
      },
      {
        id: 'pert-example',
        type: 'text',
        title: 'PERT: Three-Point Estimating Example',
        body: 'PERT (Program Evaluation and Review Technique) uses three estimates to account for uncertainty: Optimistic (O), Most Likely (M), and Pessimistic (P). The weighted average formula is E = (O + 4M + P) / 6, where M is weighted 4x because it is the most probable. Example from the exam: O=4 days, M=7 days, P=16 days. E = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48/6 = 8 days. Standard deviation = (P-O)/6 = (16-4)/6 = 2 days. At 68% confidence, the activity will take 8 ± 2 days (6-10 days). At 95% confidence, 8 ± 4 days. At 99.73%, 8 ± 6 days. Beta Distribution (PERT) vs. Triangular: Triangular formula = (O+M+P)/3 (equal weighting). Beta gives more weight to M. On the exam, use PERT formula unless told to use triangular.',
      },
      {
        id: 'schedule-tip',
        type: 'tip',
        title: 'Exam Tip: Critical Path Questions',
        body: 'CPM questions are almost always calculation-based. Key patterns: (1) If adding a new dependency makes a previously non-critical path critical, check ALL paths again. (2) The critical path is the LONGEST path, not the shortest. (3) Negative float means the project is ALREADY behind — a milestone has been missed. (4) "What happens to the project end date if Activity X is delayed by N days?" — if X is on the critical path, the end date slips by N days; if X has float ≥ N, there is no impact. (5) Multiple critical paths increase project risk since more activities have zero float.',
      },
    ],
    keyTerms: [
      { term: 'Critical Path', definition: 'The longest path through the project network; determines minimum project duration; has zero total float.' },
      { term: 'Total Float', definition: 'The amount of time an activity can be delayed without delaying the project end date. Zero on critical path.' },
      { term: 'Free Float', definition: 'The amount of time an activity can be delayed without delaying the early start of its successor.' },
      { term: 'Crashing', definition: 'Adding resources to shorten critical path duration; always increases cost.' },
      { term: 'Fast-Tracking', definition: 'Performing sequential activities in parallel; increases risk but not direct cost.' },
      { term: 'Resource Leveling', definition: 'Adjusting the schedule to resolve resource over-allocation; may extend project duration.' },
      { term: 'PERT', definition: 'Three-point estimating formula: (O + 4M + P) / 6. Accounts for estimating uncertainty.' },
    ],
    examTips: [
      'Critical path = longest path = zero float activities',
      'Total Float = LS - ES (or LF - EF)',
      'Crashing adds cost; fast-tracking adds risk',
      'PERT formula: (O + 4M + P) / 6 — M is weighted 4x',
      'Resource leveling CAN change end date; smoothing CANNOT',
      'Negative float = project already behind schedule',
    ],
  },

  // ── LESSON 8: Scope Management ─────────────────────────────────────────────────
  {
    id: 'scope-management',
    domain: 'process',
    title: 'Scope Management',
    subtitle: 'Requirements collection, WBS, scope baseline, scope creep, validate vs. control',
    estimatedMinutes: 30,
    relatedQuestionIds: [40, 41, 61, 64],
    sections: [
      {
        id: 'requirements-collection',
        type: 'list',
        title: 'Requirements Collection Techniques',
        items: [
          { heading: 'Interviews', body: 'One-on-one or small group conversations to elicit detailed requirements from subject matter experts and key stakeholders. Best for complex, sensitive, or technical requirements.' },
          { heading: 'Focus Groups', body: 'Pre-qualified stakeholders and subject matter experts discuss expectations and attitudes about a product. More discussion-oriented than interviews.' },
          { heading: 'Facilitated Workshops (JAD/JRD)', body: 'Joint Application Design/Development sessions bring cross-functional stakeholders together to rapidly define requirements. Highly effective for resolving conflicting requirements.' },
          { heading: 'Surveys/Questionnaires', body: 'Written questions distributed to large groups. Efficient for large populations but less rich in information than interviews.' },
          { heading: 'Observation/Job Shadowing', body: 'Observe users in their environment to understand how they actually work (vs. how they say they work). Excellent for uncovering unstated requirements.' },
          { heading: 'Prototyping', body: 'Build early mock-ups to elicit and validate requirements through tangible feedback. Especially effective when stakeholders struggle to articulate abstract needs.' },
          { heading: 'Document Analysis', body: 'Review existing documentation (contracts, process flows, business plans) to identify requirements embedded in existing artifacts.' },
        ],
      },
      {
        id: 'wbs-100-rule',
        type: 'text',
        title: 'WBS: The 100% Rule',
        body: 'The Work Breakdown Structure (WBS) is a hierarchical decomposition of the total scope of work into smaller, manageable components called work packages. The 100% Rule states that the WBS must capture 100% of the project work — no more, no less. Each level of the WBS must account for 100% of the work in the level above it. Work packages are the lowest level of the WBS — they are small enough to be reliably estimated and assigned but large enough to be meaningful. The WBS does NOT show sequence or dependencies (that\'s the network diagram). The WBS represents WHAT will be done; the schedule represents WHEN. The WBS Dictionary provides detailed descriptions of each work package including scope statement, deliverables, acceptance criteria, and resource requirements.',
      },
      {
        id: 'scope-baseline',
        type: 'text',
        title: 'The Scope Baseline',
        body: 'The Scope Baseline consists of three documents that together define the approved project scope: (1) Project Scope Statement: describes in detail the project scope, major deliverables, assumptions, constraints, and acceptance criteria. (2) Work Breakdown Structure (WBS): hierarchical decomposition of work. (3) WBS Dictionary: detailed descriptions of each work package. All three documents together form the scope baseline. Changes to ANY of these documents require formal change control. The scope baseline is part of the larger Project Management Plan baseline (which also includes schedule baseline and cost baseline). "Scope creep" occurs when scope changes bypass the formal change control process.',
      },
      {
        id: 'scope-creep-gold-plating',
        type: 'list',
        title: 'Scope Creep vs. Gold Plating',
        items: [
          { heading: 'Scope Creep', body: 'Uncontrolled expansion of project scope without corresponding changes to time, cost, and resources — bypassing the change control process. Caused by stakeholders adding requirements informally, team members making assumptions, or poor requirements elicitation. Prevention: rigorous change control, clear scope statement, regular scope reviews.' },
          { heading: 'Gold Plating', body: 'Adding features, enhancements, or extra effort beyond what was agreed in the scope baseline — even with good intentions. Examples: a developer adds a feature they think the customer will love; a team member improves a deliverable beyond the acceptance criteria. Gold plating violates scope control even when the additions seem beneficial. Rita Mulcahy emphasizes: "Deliver exactly what was agreed to — no more, no less."' },
          { heading: 'The exam distinction', body: 'Scope creep is driven by external stakeholders; gold plating is driven by the team. Both are problems. Both require going through formal change control if the addition has value.' },
        ],
      },
      {
        id: 'validate-vs-control',
        type: 'text',
        title: 'Validate Scope vs. Control Quality',
        body: 'These two processes are frequently confused on the exam. Control Quality (QC): performed by the project team internally. Verifies that deliverables are CORRECT — that they meet the quality requirements and acceptance criteria. Quality control happens BEFORE scope validation. Validate Scope: performed WITH the customer/sponsor. Formally ACCEPTS completed deliverables. Even if quality is perfect, the customer must formally accept the deliverable. The sequence is: (1) Build the deliverable, (2) Perform QC (is it correct?), (3) Validate Scope (customer accepts it formally). If the customer rejects a deliverable during scope validation, it may go back for rework even if quality was fine — perhaps the requirements weren\'t correctly understood. Accepted deliverables are the output of Validate Scope.',
      },
      {
        id: 'agile-scope',
        type: 'tip',
        title: 'Exam Tip: Agile Scope Management',
        body: 'In agile environments, scope is managed through the Product Backlog rather than a traditional WBS. The backlog is continuously refined and reprioritized by the Product Owner. Requirements are expressed as User Stories (As a [user], I want [feature] so that [benefit]). Acceptance criteria for user stories are defined in the Definition of Ready (before sprint planning) and Definition of Done (to close a story). In agile, scope is expected to change — the backlog is deliberately flexible. Fixed budget with variable scope is the agile approach; predictive uses fixed scope with variable outcomes. On the exam, "managing scope changes" in agile = updating the backlog; in predictive = change control board approval.',
      },
    ],
    keyTerms: [
      { term: 'WBS (Work Breakdown Structure)', definition: 'A hierarchical decomposition of total project scope into work packages; follows the 100% rule.' },
      { term: 'Scope Baseline', definition: 'The approved Scope Statement + WBS + WBS Dictionary; changes require formal change control.' },
      { term: 'Scope Creep', definition: 'Uncontrolled addition of scope that bypasses formal change control.' },
      { term: 'Gold Plating', definition: 'Team-initiated additions beyond agreed scope; also a scope control violation.' },
      { term: 'Validate Scope', definition: 'The process of formally obtaining customer acceptance of completed deliverables.' },
      { term: 'Control Quality', definition: 'Internal verification that deliverables meet quality requirements; done before Validate Scope.' },
      { term: '100% Rule', definition: 'WBS must capture 100% of the project scope — nothing missing, nothing extra.' },
    ],
    examTips: [
      'WBS must contain 100% of project scope — the 100% rule',
      'Scope baseline = Scope Statement + WBS + WBS Dictionary',
      'Scope creep = external additions bypassing change control; gold plating = team-initiated extras',
      'Validate Scope = customer acceptance; Control Quality = internal quality check',
      'Control Quality ALWAYS happens before Validate Scope',
      'In agile, the Product Backlog IS the scope — it replaces the WBS',
    ],
  },

  // ── LESSON 9: Quality Management ──────────────────────────────────────────────
  {
    id: 'quality-management',
    domain: 'process',
    title: 'Quality Management',
    subtitle: 'Cost of quality, QA vs. QC, 7 quality tools, PDCA, shift-left testing',
    estimatedMinutes: 30,
    relatedQuestionIds: [38, 39, 66],
    sections: [
      {
        id: 'quality-basics',
        type: 'text',
        title: 'Quality vs. Grade: A Critical Distinction',
        body: 'Quality is the degree to which the project fulfills requirements — conformance to specified characteristics. Grade is a category for items with the same functional use but different characteristics (e.g., economy vs. luxury hotel). A project can have high quality (meets all requirements) but low grade (basic features). It can have low quality (doesn\'t meet requirements) but high grade (many features). Low QUALITY is always a problem — it means the deliverable fails to meet requirements. Low GRADE may be acceptable if the customer chose a budget option. On the exam: "customer gets what was specified but is unhappy" typically means there\'s a requirements problem or grade issue, not a quality defect. Prevention of defects is ALWAYS preferred over inspection/correction — PMI strongly holds this position.',
      },
      {
        id: 'cost-of-quality',
        type: 'list',
        title: 'Cost of Quality (CoQ): Four Categories',
        items: [
          { heading: 'Prevention Costs (do it right the first time)', body: 'Training, process design, quality planning, reviews, pair programming. Investment to prevent defects. PMI strongly favors this category — cheapest way to achieve quality.' },
          { heading: 'Appraisal/Inspection Costs (find defects before delivery)', body: 'Testing, inspections, audits, peer reviews, quality control activities. More expensive than prevention but cheaper than failures.' },
          { heading: 'Internal Failure Costs (defects found before delivery)', body: 'Rework, scrap, retesting, debugging. Cost of defects found internally — still cheaper than external failures.' },
          { heading: 'External Failure Costs (defects found after delivery)', body: 'Warranty claims, customer complaints, recalls, lost reputation, liability. MOST expensive category. PMI principle: detect defects early to minimize cost of quality.' },
        ],
      },
      {
        id: 'qa-vs-qc',
        type: 'text',
        title: 'Quality Assurance vs. Quality Control',
        body: 'Quality Assurance (QA): Proactive, process-oriented. Audits the processes and methods used to produce the work to ensure they will produce quality outcomes. QA asks: "Are we using the right processes?" It is preventive. QA results in process improvements. Quality Control (QC): Reactive, product-oriented. Inspects and verifies actual deliverables against quality requirements. QC asks: "Does the deliverable meet requirements?" It is detective. QC results in accepted deliverables or defect repairs. Think of it this way: QA is building quality IN (prevention); QC is checking quality OUT (inspection). A quality audit is a QA activity. Testing a software build is a QC activity. PMI prefers QA over QC — invest in better processes to prevent defects rather than relying on inspection to catch them.',
      },
      {
        id: 'seven-tools',
        type: 'list',
        title: 'The 7 Basic Quality Tools',
        items: [
          { heading: 'Cause-and-Effect Diagram (Fishbone/Ishikawa)', body: 'Identifies root causes of defects/problems. Categories: 6Ms (Machines, Methods, Materials, Measurement, Man/People, Mother Nature/Environment). Use when you need to identify WHY something is happening.' },
          { heading: 'Flowchart/Process Map', body: 'Visual representation of a process showing sequence and decision points. Use to understand and improve a process, identify bottlenecks or gaps.' },
          { heading: 'Check Sheet/Tally Sheet', body: 'Structured form for collecting and tabulating defect data. Simple data collection tool used during inspections.' },
          { heading: 'Pareto Chart', body: '80/20 rule: ranked bar chart showing causes from most to least frequent. Helps prioritize where to focus improvement efforts — address the vital few causes that generate 80% of defects.' },
          { heading: 'Histogram', body: 'Bar chart showing frequency distribution of a single variable. Shows patterns in data like distribution shape, central tendency, spread. Different from Pareto (which ranks by frequency across different categories).' },
          { heading: 'Control Chart', body: 'Tracks process performance over time against control limits (UCL/LCL = ±3 sigma). Rule of seven: 7 consecutive points on one side of the mean signals the process is out of control even if within limits.' },
          { heading: 'Scatter Diagram', body: 'Shows correlation between two variables. Positive, negative, or no correlation. Use to test whether two factors are related.' },
        ],
      },
      {
        id: 'pdca',
        type: 'text',
        title: 'Continuous Improvement: PDCA and Kaizen',
        body: 'The Plan-Do-Check-Act (PDCA) cycle, also called the Deming Cycle or Shewhart Cycle, is the foundation of continuous improvement. Plan: identify the problem, analyze root causes, develop a solution plan. Do: implement the solution on a small scale. Check/Study: evaluate results — did the change achieve the desired improvement? Act: if successful, standardize and deploy broadly; if not, go back to Plan with new learning. Kaizen (Japanese: "change for better") is the philosophy of continuous, incremental improvement involving everyone — not just management. In agile, retrospectives embody both PDCA and Kaizen. Six Sigma DMAIC (Define-Measure-Analyze-Improve-Control) is another improvement methodology tested on the exam, used for reducing process variation.',
      },
      {
        id: 'shift-left',
        type: 'tip',
        title: 'Exam Tip: Shift-Left Testing',
        body: 'Shift-left testing means moving quality activities earlier in the development cycle. Instead of testing only at the end (right side of a timeline), testing is integrated throughout — unit tests with code writing, integration tests during sprints, code reviews before merging. Benefits: defects found earlier are exponentially cheaper to fix. In agile, the Definition of Done typically includes testing criteria that must be met within the sprint. On the PMP exam, questions about "defects being found late causing rework" should lead to answers involving earlier quality gates, shift-left practices, or better definition-of-done criteria. The Pareto chart principle also applies: fixing the vital few early defect sources reduces most of the quality cost.',
      },
    ],
    keyTerms: [
      { term: 'Quality', definition: 'Conformance to requirements; meeting specified characteristics.' },
      { term: 'Grade', definition: 'A category assigned to deliverables with the same functional purpose but different technical characteristics.' },
      { term: 'Cost of Quality (CoQ)', definition: 'All costs associated with achieving or failing to achieve quality: prevention, appraisal, internal failure, external failure.' },
      { term: 'Quality Assurance (QA)', definition: 'Process-focused activities that ensure the right processes are in place to produce quality outputs.' },
      { term: 'Quality Control (QC)', definition: 'Product-focused activities that inspect deliverables against quality requirements.' },
      { term: 'Pareto Principle', definition: 'The 80/20 rule: approximately 80% of problems come from 20% of causes; used to prioritize improvement efforts.' },
      { term: 'Control Chart', definition: 'A time-series chart with control limits used to determine if a process is in statistical control.' },
      { term: 'PDCA', definition: 'Plan-Do-Check-Act: the continuous improvement cycle developed by Deming/Shewhart.' },
    ],
    examTips: [
      'Prevention costs are cheapest; external failure costs are most expensive',
      'QA = process-oriented (prevent defects); QC = product-oriented (find defects)',
      'Pareto chart = 80/20 rule — focus on vital few causes',
      'Control chart rule of seven: 7 consecutive points on one side = process out of control',
      'Low quality is always a problem; low grade may be acceptable',
      'PMI favors prevention over inspection — invest in doing it right the first time',
    ],
  },

  // ── LESSON 10: Communications Management ──────────────────────────────────────
  {
    id: 'communications-management',
    domain: 'process',
    title: 'Communications Management',
    subtitle: 'n(n-1)/2 formula, communication types, management plan, information radiators',
    estimatedMinutes: 25,
    relatedQuestionIds: [27, 28, 51],
    sections: [
      {
        id: 'comms-channels',
        type: 'text',
        title: 'Communication Channels Formula',
        body: 'The number of potential communication channels in a project grows geometrically as team size increases. The formula is n(n-1)/2, where n is the number of stakeholders. Example: 5 stakeholders = 5(4)/2 = 10 channels. 10 stakeholders = 10(9)/2 = 45 channels. 15 stakeholders = 15(14)/2 = 105 channels. This formula explains why communication complexity explodes as projects grow and why the project manager must actively manage communications rather than letting information flow ad hoc. Adding one stakeholder to a team of 10 increases channels from 45 to 55 (10 new channels). This formula also illustrates why large teams need formal communication structures.',
      },
      {
        id: 'comms-types',
        type: 'list',
        title: 'Communication Types: Dimensions You Must Know',
        items: [
          { heading: 'Interactive (most effective)', body: 'Two-way, real-time exchange. Examples: meetings, phone calls, video conferences. Most effective for complex messages requiring immediate clarification and feedback.' },
          { heading: 'Push (send and hope)', body: 'Sent to specific recipients but no guarantee of comprehension. Examples: emails, memos, reports, letters. Efficient for distributing information but cannot confirm understanding.' },
          { heading: 'Pull (recipient initiates)', body: 'Stored in repositories for recipients to retrieve when needed. Examples: intranets, project websites, document repositories. Efficient for large audiences or reference information.' },
          { heading: 'Formal Written', body: 'Project management plans, contracts, change requests, status reports, meeting minutes. Required for official communications and audit trails.' },
          { heading: 'Formal Verbal', body: 'Presentations, meetings with formal agendas. Structured and traceable.' },
          { heading: 'Informal Written', body: 'Emails, text messages, notes. Efficient but less traceable.' },
          { heading: 'Informal Verbal', body: 'Hallway conversations, quick chats. Most natural but least traceable — avoid for important decisions.' },
        ],
      },
      {
        id: 'comms-plan',
        type: 'text',
        title: 'Communications Management Plan',
        body: 'The Communications Management Plan documents: Who needs what information, When they need it, In what format, Through what channel, From whom, At what level of detail. Creating this plan prevents the two most common communication failures: information overload (stakeholders receive irrelevant details that bury important information) and information gaps (stakeholders don\'t receive information they need to make decisions). The plan should be developed with stakeholder input — ask them directly how they prefer to receive information. Update the plan when stakeholders change, when communication methods prove ineffective, or when the project phase changes. On the exam, stakeholder complaints about not being informed should trigger a plan update, not just a one-time fix.',
      },
      {
        id: 'information-radiators',
        type: 'text',
        title: 'Information Radiators in Agile',
        body: 'An information radiator is any large, visible display that makes project information accessible without requiring a formal request. Examples: Kanban boards showing work in progress, burndown charts showing sprint progress, task walls in team rooms, digital dashboards. The philosophy: make information PUSH rather than PULL by default. Team members and passing managers can see the current state at a glance without interrupting anyone. Information radiators reduce the administrative burden of reporting while maintaining transparency. They embody the agile value of "individuals and interactions over processes and tools" — they facilitate natural communication rather than formal reporting. On the exam, when a question mentions that stakeholders are "out of touch" or "need to attend meetings to get information," a likely solution involves creating information radiators.',
      },
      {
        id: 'comms-failure',
        type: 'text',
        title: 'Managing Communication Failures',
        body: 'When communication breaks down, the project manager should: (1) Identify the root cause — was the message not sent? Not received? Not understood? Not actionable? (2) Assess impact — was a decision delayed? Was a stakeholder uninformed about something critical? (3) Fix the specific failure — don\'t just add meetings or increase frequency across the board. (4) Prevent recurrence — update the communications plan with specific improvements. Common root causes of communication failure: wrong channel (email for complex topics), wrong frequency (updates too infrequent), wrong level of detail (too technical for executives, too high-level for technical team), no feedback loop (no way to confirm understanding), and language/cultural barriers for global teams.',
      },
      {
        id: 'comms-tip',
        type: 'tip',
        title: 'Exam Tip: Communication First Steps',
        body: 'On the PMP exam, when a stakeholder says they weren\'t informed about something, the first step is always to INVESTIGATE — not immediately add them to all distribution lists or update the plan. Was the communication sent? Did they receive it? Did they read it? Was it in a format they could use? Only after understanding the root cause can you fix the actual problem. Adding someone to all distribution lists when the real problem was they were on vacation and missed one email is an overreaction that will create future information overload. The exam rewards diagnostic thinking before solution implementation.',
      },
    ],
    keyTerms: [
      { term: 'Communication Channels', definition: 'n(n-1)/2 formula: the number of potential communication paths between n stakeholders.' },
      { term: 'Interactive Communication', definition: 'Real-time, two-way communication (meetings, calls); most effective for complex topics.' },
      { term: 'Push Communication', definition: 'Information sent to specific recipients (email, reports); no confirmation of understanding.' },
      { term: 'Pull Communication', definition: 'Information stored for recipients to retrieve as needed (document repositories, intranets).' },
      { term: 'Information Radiator', definition: 'A visible, prominent display of project information (Kanban board, burndown chart) that makes status visible without requiring a request.' },
      { term: 'Communications Management Plan', definition: 'Document mapping each stakeholder\'s communication needs, frequency, format, and channels.' },
    ],
    examTips: [
      'n(n-1)/2 = number of communication channels; adding stakeholders increases complexity exponentially',
      'Interactive > Push > Pull for critical information',
      'When comms fail: diagnose root cause FIRST before changing the plan',
      'Information radiators reduce reporting overhead while maintaining transparency',
      'Formal written communications required for contracts, changes, and official decisions',
      'Tailor communications to stakeholder preferences, not one-size-fits-all',
    ],
  },

  // ── LESSON 11: Change Management ──────────────────────────────────────────────
  {
    id: 'change-management',
    domain: 'process',
    title: 'Change Management',
    subtitle: 'Change control process, CCB, types of changes, configuration management, agile changes',
    estimatedMinutes: 25,
    relatedQuestionIds: [43, 44, 64, 68],
    sections: [
      {
        id: 'change-control-process',
        type: 'list',
        title: 'Change Control Process Steps',
        items: [
          { heading: '1. Identify the change', body: 'Anyone can identify a need for change — team members, stakeholders, the PM. Changes are also triggered by issue resolution, risk responses, and scope variance.' },
          { heading: '2. Document in a change request', body: 'Formally document the requested change in a change request form. This creates a paper trail and initiates the formal process.' },
          { heading: '3. Perform impact analysis', body: 'Assess the impact on scope, schedule, cost, quality, risk, and other project constraints. This is the PM\'s most important step — providing data for the decision-maker.' },
          { heading: '4. Review by Change Control Board (CCB)', body: 'The CCB (or sponsor for smaller changes) reviews the impact analysis and approves, rejects, or defers the change request.' },
          { heading: '5. Communicate the decision', body: 'Notify all stakeholders of the CCB decision — even if the change was rejected.' },
          { heading: '6. Implement approved changes', body: 'Update all affected project management plan components, baselines, and stakeholder communications. Only implement after formal approval.' },
          { heading: '7. Verify implementation', body: 'Confirm the change was implemented correctly and that expected outcomes were achieved.' },
        ],
      },
      {
        id: 'change-types',
        type: 'list',
        title: 'Types of Changes',
        items: [
          { heading: 'Corrective Actions', body: 'Actions taken to bring the project back into alignment with the project management plan. Example: adding resources to catch up after falling behind schedule.' },
          { heading: 'Preventive Actions', body: 'Proactive actions to reduce the probability of negative consequences. Example: adding risk mitigation activities to prevent a forecasted problem.' },
          { heading: 'Defect Repairs', body: 'Actions to repair a defective component that does not meet quality requirements. Identified through QC activities.' },
          { heading: 'Updates to Project Documents', body: 'Changes to project management plan components, baselines, or other project documents that do not directly affect project work.' },
        ],
      },
      {
        id: 'ccb-rita',
        type: 'text',
        title: 'Change Control Board (CCB) and Rita\'s Rules',
        body: 'The Change Control Board (CCB) is a formally chartered body responsible for reviewing, evaluating, approving, or rejecting change requests. The PM is often on the CCB but is NOT the final decision-maker for changes to project baselines — that authority belongs to the CCB or sponsor. Rita Mulcahy\'s key rules for change management: (1) ALL changes to the project management plan baselines must go through formal change control — even small ones, even beneficial ones. (2) The PM should perform impact analysis BEFORE presenting to the CCB — never bring a change without data. (3) Approved changes must be reflected in ALL affected project management plan components. (4) Verbal authorization is NOT enough — get it in writing. (5) Do not implement changes while they are under review.',
      },
      {
        id: 'configuration-management',
        type: 'text',
        title: 'Configuration Management',
        body: 'Configuration Management is the process of identifying, documenting, and controlling the functional and physical characteristics of project work. It answers: "What version is the approved deliverable? What does that version contain? Who can authorize changes to it?" The Configuration Management System includes: Configuration identification (labeling and documenting versions), Configuration status accounting (tracking changes and current status), Configuration verification and audit (ensuring deliverables meet requirements). In software projects, version control systems (Git, SVN) implement technical configuration management. For project documents, the configuration management system tracks which version of the project management plan is approved and what changes have been applied.',
      },
      {
        id: 'agile-change',
        type: 'text',
        title: 'Change Management in Agile',
        body: 'In agile, change is embraced as a competitive advantage — the Agile Manifesto explicitly states "Welcome changing requirements, even late in development." Changes in agile are managed through the Product Backlog: new requirements are added as backlog items, the Product Owner prioritizes them, and they are incorporated in future sprints. There is NO formal change control board for product-level changes. However, changes to the project\'s budget, resources, or timeline still require organizational-level change management. In hybrid projects, the distinction is important: changes to product features go through the backlog; changes to project constraints go through CCB. On the exam, "the customer wants to add a feature" in agile = add to backlog. "Scope change requires additional budget" = formal change request.',
      },
      {
        id: 'change-warning',
        type: 'warning',
        title: 'Common Mistake: Implementing Before Approval',
        body: 'A very common exam trap: a change is obviously good or urgent, so the PM implements it before formal approval. This is ALWAYS wrong on the exam. Even if the sponsor verbally approves, even if the change is clearly beneficial, even if the project would suffer without it — the formal change control process must be followed. The only exception is an emergency that presents an immediate safety or legal risk where waiting for approval would cause greater harm. Even then, document the emergency action and formalize it retroactively.',
      },
    ],
    keyTerms: [
      { term: 'Change Control Board (CCB)', definition: 'A formally chartered body with authority to approve or reject changes to project baselines.' },
      { term: 'Corrective Action', definition: 'Activity that realigns project performance with the project management plan.' },
      { term: 'Preventive Action', definition: 'Activity that ensures future project performance aligns with the plan by proactively addressing forecast variances.' },
      { term: 'Defect Repair', definition: 'Modification of a product that does not conform to requirements.' },
      { term: 'Configuration Management', definition: 'System for identifying, documenting, and controlling changes to deliverables and project documents.' },
      { term: 'Integrated Change Control', definition: 'The PMBOK process for reviewing all change requests and managing changes to baselines throughout the project.' },
    ],
    examTips: [
      'ALL baseline changes require formal change control — even beneficial ones',
      'Perform impact analysis BEFORE presenting to the CCB — never bring a change without data',
      'In agile, product feature changes go to the backlog; budget/resource changes still need formal approval',
      'Verbal approval is not enough — get written authorization for all changes',
      'Never implement a change while it\'s still under review',
      'The PM is on the CCB but is NOT the final decision-maker for baseline changes',
    ],
  },

  // ── LESSON 12: Procurement Management ─────────────────────────────────────────
  {
    id: 'procurement-management',
    domain: 'process',
    title: 'Procurement Management',
    subtitle: 'Contract types (FFP/FPIF/CPFF/CPIF/T&M), buyer/seller risk, RFP/RFQ/RFI',
    estimatedMinutes: 35,
    relatedQuestionIds: [45, 79],
    sections: [
      {
        id: 'contract-types-overview',
        type: 'text',
        title: 'Contract Types: Who Bears the Risk?',
        body: 'The most heavily tested procurement topic on the PMP exam is contract types and their risk allocation between buyer (project owner) and seller (vendor/contractor). The fundamental principle: risk and profit opportunity are inversely related. The more risk the seller assumes, the higher the price they will demand. The more risk the buyer assumes, the less they pay the seller upfront but the more they risk cost overruns. Two major families: Fixed-Price contracts (more risk to seller) and Cost-Reimbursable contracts (more risk to buyer). Time and Materials sits between them. Use fixed-price when scope is well-defined; use cost-reimbursable when scope is uncertain; use T&M for professional services with unpredictable duration.',
      },
      {
        id: 'contract-types-detail',
        type: 'list',
        title: 'Contract Types: Definitions and Risk',
        items: [
          { heading: 'FFP — Firm Fixed Price (most risk to seller)', body: 'Seller agrees to a fixed price regardless of actual costs. Buyer has maximum cost certainty. Seller absorbs all cost overruns. Best when: scope is completely defined. Risk to seller: very high. Risk to buyer: low. Most common contract type.' },
          { heading: 'FPIF — Fixed Price Incentive Fee', body: 'Fixed price with a bonus/penalty structure tied to performance (cost, schedule, or quality). Seller absorbs overruns but can earn fee for beating targets. Shares risk/reward. Good for long contracts with defined scope but performance uncertainty.' },
          { heading: 'FP-EPA — Fixed Price with Economic Price Adjustment', body: 'Fixed price with clause allowing for pre-defined inflation/price adjustments over multi-year contracts. Protects seller from commodity price changes. Used for long-duration contracts.' },
          { heading: 'CPFF — Cost Plus Fixed Fee (more risk to buyer)', body: 'Buyer pays all actual costs plus a fixed fee (profit). Seller has low risk — they will be paid costs plus fee regardless. Buyer has maximum cost exposure. Good for: research/development where scope can\'t be defined. Least incentive for seller efficiency.' },
          { heading: 'CPIF — Cost Plus Incentive Fee', body: 'Buyer pays all actual costs plus an incentive fee based on achieving targets. More aligned than CPFF — seller has incentive to control costs. Good for development projects where cost control matters.' },
          { heading: 'CPAF — Cost Plus Award Fee', body: 'Buyer pays costs plus a fee based on subjective performance criteria. Buyer retains most risk but has more control over fee award.' },
          { heading: 'T&M — Time and Materials', body: 'Buyer pays for actual time worked (at fixed rates) plus materials. Risk to buyer: project can overrun since seller bills actual time. Best for: small projects, professional services, agile engagements. Often includes a "not-to-exceed" cap for buyer protection.' },
        ],
      },
      {
        id: 'procurement-documents',
        type: 'list',
        title: 'Procurement Documents: RFI, RFQ, RFP',
        items: [
          { heading: 'RFI — Request for Information', body: 'Informal request to the market to gather information about vendor capabilities, pricing ranges, and available solutions. Used in early planning to understand what\'s available. No commitment from buyer or seller.' },
          { heading: 'RFQ — Request for Quotation', body: 'Requests specific price quotes for well-defined products or services. Used when specifications are complete and the selection criterion is primarily price. Best for commodity purchases.' },
          { heading: 'RFP — Request for Proposal', body: 'Requests complete proposals for solutions to a defined problem or opportunity. Used when the buyer needs the seller to propose an approach, not just a price. Selection considers technical approach, qualifications, management plan, AND price. Used for complex projects.' },
          { heading: 'IFB — Invitation for Bid', body: 'Similar to RFQ but more formal; often used in government contracting. Specifies all requirements; selection is based on price alone from technically compliant bids.' },
        ],
      },
      {
        id: 'vendor-selection',
        type: 'text',
        title: 'Vendor Selection and Contract Administration',
        body: 'Vendor selection typically involves: (1) Source selection criteria (weighting technical approach, experience, price, etc.), (2) Proposal evaluation (scoring against criteria), (3) Negotiation (reach mutual agreement on terms), (4) Contract award. Contract administration is ongoing throughout the procurement: monitor vendor performance against contract terms, manage changes through contract amendment (not verbal agreements), process invoices and payments, document issues and disputes, manage the relationship. Key principle: manage vendors proactively — don\'t wait for problems to surface. Regular vendor performance reviews, clear acceptance criteria, and documented deliverable acceptance are essential.',
      },
      {
        id: 'procurement-closure',
        type: 'text',
        title: 'Contract Closure',
        body: 'Contract closure must happen before project closure. Steps: (1) Verify all deliverables have been accepted. (2) Process final payments and cost reconciliation. (3) Document performance record for vendor. (4) Archive all contract documents. (5) Release vendor resources. (6) Capture lessons learned about the procurement process. On the exam, a vendor claiming payment for work not yet accepted is a common scenario. The answer: formal acceptance of deliverables is required before payment. Verbal "it looks good" is not formal acceptance. Rita Mulcahy tip: the project manager should document vendor performance — positive and negative — for use in future procurement decisions.',
      },
      {
        id: 'procurement-tip',
        type: 'tip',
        title: 'Rita\'s Tips: Contract Type Selection',
        body: 'Rita\'s contract selection rule of thumb: "The more uncertain the scope, the more risk the buyer should assume." Completely defined scope = FFP (seller risk). Partially defined = FPIF or T&M. Highly uncertain/R&D = CPFF or CPIF. For the exam: "Which contract type protects the buyer?" = Fixed-Price. "Which protects the seller?" = Cost-Reimbursable. "Which has the least incentive for seller efficiency?" = CPFF. "Which gives the most cost certainty to the buyer?" = FFP. Also: contracts are LEGAL documents — the PM should be very cautious about verbal changes. All contract modifications must be in writing and signed by both parties.',
      },
    ],
    keyTerms: [
      { term: 'FFP (Firm Fixed Price)', definition: 'Contract with a set price regardless of actual costs; most risk to seller, least to buyer.' },
      { term: 'CPFF (Cost Plus Fixed Fee)', definition: 'Buyer pays all actual costs plus a fixed fee; most risk to buyer, least to seller.' },
      { term: 'T&M (Time and Materials)', definition: 'Buyer pays actual time at fixed rates plus materials; moderate risk to buyer.' },
      { term: 'RFP (Request for Proposal)', definition: 'Procurement document requesting complete solution proposals for complex projects; selection based on approach, qualifications, and price.' },
      { term: 'Source Selection Criteria', definition: 'Weighted criteria used to evaluate and select among competing vendor proposals.' },
      { term: 'Contract Amendment', definition: 'Formal written modification to an existing contract; required for all changes to contract terms.' },
    ],
    examTips: [
      'Fixed-price: more risk to seller. Cost-reimbursable: more risk to buyer',
      'FFP: best when scope is completely defined; CPFF/CPIF: best for uncertain/R&D work',
      'T&M: good for professional services and agile; often needs not-to-exceed cap',
      'CPFF has the LEAST incentive for seller efficiency',
      'All contract changes must be in writing — verbal modifications are unenforceable',
      'Contract closure happens before project closure; formal written acceptance required',
    ],
  },

  // ── LESSON 13: PMBOK 8 Principles & Performance Domains ──────────────────────
  {
    id: 'pmbok8-principles',
    domain: 'process',
    title: 'PMBOK 8 Principles & Performance Domains',
    subtitle: 'All 12 principles, 8 performance domains, tailoring, value delivery, Cynefin',
    estimatedMinutes: 40,
    relatedQuestionIds: [71, 72],
    sections: [
      {
        id: 'pmbok8-shift',
        type: 'text',
        title: 'PMBOK 8\'s Paradigm Shift',
        body: 'PMBOK 8 (2025) represents a fundamental shift from previous editions. Earlier PMBOK guides were process-based, providing prescribed steps for project management. PMBOK 8 is principles-based: it describes what project management should accomplish without prescribing exactly how. This shift recognizes that no single process fits all project contexts. The guide is organized around: (1) 12 Project Management Principles — behaviors and mindsets that guide good project management. (2) 8 Performance Domains — groups of related activities that collectively produce project outcomes. (3) Tailoring — deliberate adaptation of approaches to the specific context. (4) Models, Methods, and Artifacts — a reference library of tools. PMBOK 8 is explicitly context-agnostic: it supports predictive, agile, and hybrid approaches equally.',
      },
      {
        id: 'twelve-principles',
        type: 'list',
        title: 'The 12 PMBOK 8 Principles',
        items: [
          { heading: '1. Stewardship', body: 'Be a diligent, respectful, and caring steward of the organization and its resources. Act with integrity and care for stakeholders, teams, and the environment.' },
          { heading: '2. Team', body: 'Build a culture of accountability, respect, and collaboration. Recognize and value diverse skills and perspectives. Create a trusting team environment.' },
          { heading: '3. Stakeholders', body: 'Effectively engage stakeholders to understand, address, and balance their interests. Engagement is continuous, not one-time.' },
          { heading: '4. Value', body: 'Continually evaluate and adjust to maximize value delivery. Business value is the ultimate measure of project success.' },
          { heading: '5. Systems Thinking', body: 'Recognize and respond to the dynamic forces within and outside the project. Projects operate within complex organizational and external systems.' },
          { heading: '6. Leadership', body: 'Demonstrate leadership behaviors in any role. Use appropriate style based on situation. Servant leadership and empowerment.' },
          { heading: '7. Tailoring', body: 'Deliberately tailor the project approach based on context. No single methodology fits all projects. Adapt processes, practices, and deliverables.' },
          { heading: '8. Quality', body: 'Build quality into processes and outcomes. Prevention over inspection. Quality is defined by meeting stakeholder requirements.' },
          { heading: '9. Complexity', body: 'Navigate complexity by using knowledge, experience, and learning to adapt approaches. Recognize that projects are often complex systems, not just complicated ones.' },
          { heading: '10. Risk', body: 'Continuously assess and address positive and negative risks to maximize project outcomes. Risk management is ongoing and proactive.' },
          { heading: '11. Adaptability and Resiliency', body: 'Build adaptability and resiliency into the organization\'s and team\'s approaches to handle changing conditions and bounce back from setbacks.' },
          { heading: '12. Change', body: 'Enable change to achieve the envisioned future state. Projects create change; help stakeholders navigate and embrace that change.' },
        ],
      },
      {
        id: 'performance-domains',
        type: 'list',
        title: 'The 8 Performance Domains and Their Outcomes',
        items: [
          { heading: 'Stakeholders Domain', body: 'Outcomes: productive working relationships; stakeholders satisfied by engagement; sharing relevant information for benefit; stakeholders support.' },
          { heading: 'Team Domain', body: 'Outcomes: shared ownership; high-performing team; applicable leadership styles demonstrated; team members trust each other.' },
          { heading: 'Development Approach & Life Cycle Domain', body: 'Outcomes: appropriate development approach; clarity on phases and checkpoints; alignment of delivery cadence, funding, and governance.' },
          { heading: 'Planning Domain', body: 'Outcomes: organized information; options for managing scope, schedule, cost, resources; plans that adapt as conditions change.' },
          { heading: 'Project Work Domain', body: 'Outcomes: efficient/effective work; team members focus on high-priority work; impediments removed; resilient and adaptive processes.' },
          { heading: 'Delivery Domain', body: 'Outcomes: deliverables that meet acceptance criteria; requirements satisfied; expected business value delivered.' },
          { heading: 'Measurement Domain', body: 'Outcomes: reliable understanding of project status; actionable data for decisions; timely response to changing conditions.' },
          { heading: 'Uncertainty Domain', body: 'Outcomes: awareness of environment and complexity; proactive risk responses; opportunities exploited; project resilience.' },
        ],
      },
      {
        id: 'cynefin',
        type: 'text',
        title: 'The Cynefin Framework for Approach Selection',
        body: 'Cynefin (pronounced "kuh-NEV-in," Welsh for "habitat") is a sense-making framework used in PMBOK 8 to match project approach to context. Five domains: (1) Clear (formerly Simple): cause-and-effect is obvious. Best practice applies. Use standardized, predictive approaches. Examples: routine construction, standard software configuration. (2) Complicated: cause-and-effect requires expert analysis. Good practice. Use experts to analyze and plan. Examples: engineering design, systems integration. (3) Complex: cause-and-effect can only be understood in retrospect. Emergent practice. Use probe-sense-respond (experiments, prototypes, iterations). Examples: new product development, organizational change. Most software is here. (4) Chaotic: no cause-and-effect perceivable. Novel practice. Act immediately to stabilize, then sense. Examples: crisis response. (5) Disorder: unknown which domain applies — gather more information. PMBOK 8 uses Cynefin to justify adaptive/agile approaches for complex environments.',
      },
      {
        id: 'tailoring',
        type: 'text',
        title: 'Tailoring: Adapting the Approach',
        body: 'Tailoring is the deliberate adaptation of project management approach, processes, and artifacts to fit the specific context, objectives, constraints, and stakeholder expectations. PMBOK 8 elevates tailoring from an afterthought to a core principle. The tailoring process involves: (1) Select initial development approach (predictive/agile/hybrid) based on project characteristics. (2) Tailor for the organization — incorporate governance, policies, regulatory requirements, and culture. (3) Tailor for the project — adapt to specific project complexity, team experience, stakeholder sophistication. (4) Implement ongoing improvements — continue tailoring as you learn more. Key tailoring considerations: project size and complexity, team experience, regulatory environment, organizational culture, customer expectations, and uncertainty level. On the exam, tailoring questions ask you to select the MOST appropriate approach for a given context.',
      },
      {
        id: 'pmbok8-tip',
        type: 'tip',
        title: 'Exam Tip: Principles vs. Knowledge Areas',
        body: 'The PMP 2025 exam tests PMBOK 8 principles, not the PMBOK 6 knowledge areas. When a question references "PMBOK principles," think about the 12 principles listed above, not old process groups (Initiating, Planning, Executing, M&C, Closing). The exam still tests project management processes, but they are framed through the lens of performance domains and principles rather than prescriptive process steps. If you studied PMBOK 6, understand the paradigm shift: PMBOK 8 asks "what outcomes should be achieved?" rather than "what process inputs and outputs are required?" The ECO (Exam Content Outline) is organized around tasks, not process groups — and is the most important guide for exam preparation.',
      },
    ],
    keyTerms: [
      { term: 'Performance Domain', definition: 'In PMBOK 8, a group of related activities that achieve project outcomes; 8 domains replace traditional knowledge areas.' },
      { term: 'Tailoring', definition: 'Deliberate adaptation of project management approach, processes, and artifacts to fit a specific project context.' },
      { term: 'Cynefin Framework', definition: 'A sense-making model with 5 domains (Clear, Complicated, Complex, Chaotic, Disorder) used to select appropriate project approaches.' },
      { term: 'Stewardship', definition: 'PMBOK 8 Principle 1: being a diligent, caring steward of organizational resources and stakeholder interests.' },
      { term: 'Value Delivery System', definition: 'The portfolio, program, and project structure through which an organization creates and delivers business value.' },
      { term: 'Probe-Sense-Respond', definition: 'The recommended approach for Cynefin\'s Complex domain: run small experiments, observe results, and adapt.' },
    ],
    examTips: [
      'PMBOK 8 is principles-based, not prescriptive — context determines the right approach',
      'Complex domain (Cynefin) = probe-sense-respond = agile/iterative approach',
      'Tailoring is a core PMBOK 8 principle, not an exception to the rules',
      '8 Performance Domains replace the 10 PMBOK 6 Knowledge Areas in framing',
      'The 12 principles are guides to behavior, not process steps',
      'Value delivery is the ultimate measure of project success in PMBOK 8',
    ],
  },

  // ── LESSON 14: Emotional Intelligence & Negotiation ───────────────────────────
  {
    id: 'emotional-intelligence',
    domain: 'people',
    title: 'Emotional Intelligence & Negotiation',
    subtitle: 'EI five components, active listening, BATNA, principled negotiation',
    estimatedMinutes: 30,
    relatedQuestionIds: [12, 18, 19, 67],
    sections: [
      {
        id: 'ei-five-components',
        type: 'list',
        title: 'The 5 Components of Emotional Intelligence (Goleman)',
        items: [
          { heading: 'Self-Awareness', body: 'The ability to recognize and understand your own emotions, strengths, weaknesses, drives, values, and their effect on others. Self-aware leaders know how their emotional states affect their decisions and team members. They seek feedback and don\'t react defensively.' },
          { heading: 'Self-Regulation', body: 'The ability to control or redirect disruptive impulses and moods. Self-regulated leaders think before acting, handle uncertainty calmly, and don\'t make decisions in emotional states. They create an environment of trust and fairness.' },
          { heading: 'Motivation', body: 'A passion for work that goes beyond money and status. Highly motivated leaders pursue goals with energy, maintain optimism even when facing setbacks, and are driven by achievement and growth, not just extrinsic rewards.' },
          { heading: 'Empathy', body: 'The ability to understand and share the emotional makeup of other people. Empathic leaders consider team members\' feelings in making decisions, are good at retaining talent, and excel at cross-cultural communication.' },
          { heading: 'Social Skills', body: 'Proficiency in managing relationships and building networks. Socially skilled leaders are excellent communicators, skilled at conflict resolution, and excel at building consensus and cooperation across teams and organizations.' },
        ],
      },
      {
        id: 'active-listening',
        type: 'text',
        title: 'Active Listening: More Than Hearing',
        body: 'Active listening is a core EI competency and PMI leadership skill. It involves: (1) Paying full attention — no distractions, maintain eye contact, open body language. (2) Withholding judgment — don\'t formulate your response while the other person is speaking. (3) Reflecting back — paraphrase what you heard to confirm understanding. ("What I\'m hearing is...") (4) Clarifying questions — ask open-ended questions to deepen understanding. (5) Summarizing — at the end, summarize key points to confirm shared understanding. (6) Reading non-verbal cues — tone, body language, facial expressions often convey more than words. On the exam, active listening is almost always a component of the best answer when dealing with team conflicts, stakeholder concerns, or difficult conversations. "Listen first, respond second" is the PMI principle.',
      },
      {
        id: 'negotiation-principles',
        type: 'text',
        title: 'Principled Negotiation (Fisher & Ury)',
        body: '"Getting to Yes" by Fisher and Ury (Harvard Negotiation Project) describes principled negotiation — negotiating on merits rather than positions. Four key principles: (1) Separate the people from the problem — don\'t make personal attacks; deal with the substantive issue while preserving the relationship. (2) Focus on interests, not positions — a "position" is what someone demands; an "interest" is WHY they want it. Finding common underlying interests enables creative solutions. (3) Invent options for mutual gain — generate multiple options before evaluating. Brainstorm creatively without judgment. (4) Insist on objective criteria — use market rates, expert opinion, precedent, or legal standards to evaluate options rather than power dynamics. This approach creates win-win outcomes and preserves relationships.',
      },
      {
        id: 'batna',
        type: 'text',
        title: 'BATNA: Best Alternative to Negotiated Agreement',
        body: 'BATNA is your "walk away" position — the best outcome you can achieve if the negotiation fails and no agreement is reached. Knowing your BATNA gives you negotiating power and clarity about when to accept a deal vs. walking away. The stronger your BATNA (the better your alternative), the more negotiating leverage you have. Before any significant negotiation: (1) Define your BATNA clearly. (2) Estimate the other party\'s BATNA. (3) Look for ways to strengthen your BATNA (find alternatives). (4) Find the ZOPA (Zone of Possible Agreement) — the range between both parties\' minimum acceptable positions. On the PMP exam, BATNA appears in vendor negotiations, contract negotiations, and resource negotiations. The party with the stronger BATNA has more leverage.',
      },
      {
        id: 'applying-ei-conflict',
        type: 'text',
        title: 'Applying EI in Difficult Situations',
        body: 'Practical EI application in project scenarios: When a team member emotionally challenges your decision in public: self-regulation (stay calm, don\'t respond with defensiveness), empathy (they may have valid concerns or be stressed), active listening (invite their input). When a stakeholder is angry about project delays: empathy (acknowledge the impact on them), self-awareness (are you minimizing the issue?), social skills (manage the relationship during difficulty). When giving critical feedback: separate performance from person, be specific, focus on observable behavior, allow response time. EI is particularly important in agile retrospectives — creating a safe space for honest discussion requires the PM/SM to model self-awareness and empathy. A facilitator who becomes defensive when the team critiques processes destroys psychological safety.',
      },
      {
        id: 'ei-tip',
        type: 'tip',
        title: 'Exam Tip: EI Behaviors in Scenarios',
        body: 'On the PMP exam, EI questions present scenarios where team members are emotional, conflict exists, or relationships are strained. The correct answer almost always involves: (1) Pause and acknowledge the emotion first before addressing the content. (2) Ask questions to understand perspective rather than immediately defending your position. (3) Address difficult conversations privately rather than publicly. (4) Create space for input before making final decisions. Common wrong answers in EI scenarios: immediately assert authority, defer entirely to avoid conflict, escalate to HR without attempting conversation, or ignore the emotional component entirely and focus only on the task.',
      },
    ],
    keyTerms: [
      { term: 'Emotional Intelligence (EI)', definition: 'The capacity to recognize, understand, manage, and effectively express one\'s own emotions, and to perceive and influence the emotions of others.' },
      { term: 'Self-Awareness', definition: 'Recognizing one\'s own emotions and their effect on thoughts and behavior.' },
      { term: 'Empathy', definition: 'The ability to understand and share the feelings of another person.' },
      { term: 'BATNA', definition: 'Best Alternative to a Negotiated Agreement — your best outcome if negotiations fail; determines negotiating leverage.' },
      { term: 'Principled Negotiation', definition: 'Fisher & Ury\'s approach: separate people from problem, focus on interests not positions, invent options, use objective criteria.' },
      { term: 'Active Listening', definition: 'Fully concentrating, understanding, responding, and remembering what is said; involves reflection, clarification, and non-verbal awareness.' },
    ],
    examTips: [
      'EI scenarios: pause, acknowledge emotion, listen actively BEFORE responding or deciding',
      'Principled negotiation: focus on INTERESTS (why), not positions (what)',
      'BATNA = your best alternative if no deal — stronger BATNA = more leverage',
      'Address emotional conflicts privately, not in group settings',
      'Self-regulation: manage your own emotions before managing others\' — don\'t react in the moment',
      'Empathy is a leadership strength, not a weakness — it enables trust and retention',
    ],
  },

  // ── LESSON 15: Hybrid Project Management ──────────────────────────────────────
  {
    id: 'hybrid-pm',
    domain: 'process',
    title: 'Hybrid Project Management',
    subtitle: 'When to use predictive/agile/hybrid, Stacey matrix, PMO integration, compliance',
    estimatedMinutes: 35,
    relatedQuestionIds: [46, 53, 72],
    sections: [
      {
        id: 'hybrid-overview',
        type: 'text',
        title: 'What is Hybrid Project Management?',
        body: 'Hybrid project management combines elements of predictive (waterfall) and agile approaches to leverage the strengths of both. There is no single hybrid methodology — it is context-driven adaptation. Hybrid is appropriate when: different parts of the project have different levels of uncertainty (some requirements are stable, others evolving), organizational governance requires predictive reporting but teams work better with agile methods, regulatory compliance requires documentation artifacts that agile teams don\'t naturally produce, or an organization is transitioning from predictive to agile and needs a bridge. Hybrid is NOT about doing both poorly — it requires deliberate tailoring to get the best of each approach. On the PMP exam, hybrid scenarios are very common because the real world rarely uses pure agile or pure waterfall.',
      },
      {
        id: 'decision-factors',
        type: 'list',
        title: 'Choosing the Right Approach: Decision Factors',
        items: [
          { heading: 'Requirement clarity and stability', body: 'High clarity + stable = predictive. Low clarity + volatile = agile. Mixed = hybrid. Use agile for the uncertain portions, predictive for the stable ones.' },
          { heading: 'Technology uncertainty', body: 'New/untested technology = agile (experiments, spikes). Proven technology = predictive (reliable estimation). Cynefin: Complicated domain = predictive experts. Complex domain = agile experimentation.' },
          { heading: 'Regulatory and compliance requirements', body: 'Heavy documentation requirements don\'t prevent agile — they can be integrated into the iteration process. However, compliance gates and audit requirements may drive hybrid approaches.' },
          { heading: 'Team experience and capability', body: 'Experienced agile team with self-organizing capability = full agile. New team needing structure = more predictive or hybrid with coaching.' },
          { heading: 'Stakeholder preferences', body: 'Stakeholders requiring Gantt charts and milestone reports = hybrid (produce those artifacts even with agile delivery). Collaborative stakeholders comfortable with demos = pure agile possible.' },
          { heading: 'Organizational governance', body: 'PMO requiring formal plans, change requests, and status reports = hybrid (maintain those artifacts). Agile-friendly organization = less overhead.' },
        ],
      },
      {
        id: 'stacey-matrix',
        type: 'text',
        title: 'The Stacey Matrix',
        body: 'The Stacey Matrix plots projects on two axes: Agreement (how much stakeholders agree on requirements/goals) and Certainty (how certain the technology/approach is). Four zones: Simple/Clear (high agreement, high certainty): predictive approaches work well, best practices apply. Complicated (moderate uncertainty): experts needed, analytical approaches, predictive with extensive planning. Complex (low agreement and/or low certainty): agile/iterative/emergent approaches needed, experiment and learn. Chaos (very low agreement AND certainty): immediate action to stabilize, novel approaches. The Stacey Matrix is related to Cynefin but is more specifically focused on project approach selection. Most software and innovation projects fall in the Complex zone — this justifies agile. Most construction and manufacturing projects fall in Simple or Complicated — justifying predictive approaches.',
      },
      {
        id: 'pmo-agile',
        type: 'text',
        title: 'Integrating PMO Governance with Agile Teams',
        body: 'One of the most common hybrid challenges is when organizational PMOs require traditional governance while teams want to work agile. The solution is NOT to abandon either — it is to create lightweight bridge artifacts. Strategies for PMO-agile integration: (1) Map agile artifacts to PMO requirements — a product backlog can substitute for a WBS; a release plan can substitute for a milestone schedule; a burndown chart can serve as a progress report. (2) Use a hybrid project charter — authorize the project and agile team but acknowledge the iterative delivery model. (3) Create rolling wave plans — provide detailed plans for the current quarter with high-level plans for future quarters. (4) Provide executive summaries — translate sprint velocity and backlog metrics into budget and schedule language executives understand. (5) Maintain compliance artifacts within iterations — include regulatory documentation as acceptance criteria in the Definition of Done.',
      },
      {
        id: 'compliance-agile',
        type: 'text',
        title: 'Compliance in Agile Environments',
        body: 'Regulated industries (healthcare, finance, pharma, government) can adopt agile without abandoning compliance. The key insight: compliance requires specific documentation and validation evidence — it does not require any specific development lifecycle. Integrating compliance into agile: (1) Add compliance criteria to the Definition of Done — every user story must meet regulatory requirements to be "done." (2) Create compliance user stories — treat regulatory requirements as first-class backlog items. (3) Include a regulatory expert in sprint reviews. (4) Automate compliance testing (test evidence generation, audit trails) alongside functional testing. (5) Use continuous documentation — maintain required documents throughout the project in sprints rather than creating them all at the end. On the exam, "Can agile work in a regulated environment?" is always yes — with appropriate tailoring.',
      },
      {
        id: 'hybrid-tip',
        type: 'tip',
        title: 'Exam Tip: Hybrid Scenario Recognition',
        body: 'Hybrid exam scenarios typically include signals like: "The organization requires formal reporting but the team is using Scrum," or "Some requirements are stable (technical infrastructure) while others are evolving (user interface features)," or "A regulated environment wants faster delivery." The correct answer in these scenarios almost always involves finding a middle ground — not abandoning one approach for the other. Key hybrid patterns: Use agile for product development + predictive reporting for governance. Use predictive for procurement + agile for delivery. Use iterative development within a predictive project phase structure. The PMP exam heavily tests hybrid scenarios because the ECO (Exam Content Outline) explicitly requires knowledge of hybrid approaches.',
      },
      {
        id: 'hybrid-warning',
        type: 'warning',
        title: 'Common Mistake: Wrong Approach for Context',
        body: 'On the exam, avoid selecting "use full agile" when the scenario describes compliance requirements, stable requirements, large teams, or contractual fixed-price commitments — these all pull toward predictive or hybrid. Equally, avoid selecting "use full waterfall/predictive" when the scenario describes high uncertainty, evolving requirements, need for early feedback, or complex innovation work — these pull toward agile or hybrid. The exam will always provide context clues. The best answer acknowledges the context and selects the approach that fits — not the approach you personally prefer or have used most.',
      },
    ],
    keyTerms: [
      { term: 'Hybrid Approach', definition: 'Project management combining predictive and agile methods, tailored to project context.' },
      { term: 'Stacey Matrix', definition: 'A framework plotting projects by requirement agreement and technology certainty to guide approach selection.' },
      { term: 'Rolling Wave Planning', definition: 'Planning in detail only for near-term work while planning future work at a high level; bridges predictive and agile.' },
      { term: 'Information Radiator', definition: 'Visible displays of project status (burndown, Kanban) that provide governance transparency without formal reports.' },
      { term: 'Compliance by Design', definition: 'Integrating regulatory requirements into the development process rather than adding them at the end.' },
      { term: 'Bridge Artifact', definition: 'A document created in a hybrid project that satisfies governance requirements while supporting agile delivery (e.g., release plan as milestone schedule).' },
    ],
    examTips: [
      'Hybrid = best of both approaches tailored to context — not a compromise',
      'Stacey Matrix: Complex zone = agile; Simple/Complicated zone = predictive',
      'Regulated industries CAN use agile — integrate compliance into the Definition of Done',
      'PMO governance and agile can coexist with lightweight bridge artifacts',
      'Rolling wave planning: detailed near-term + high-level future = hybrid planning',
      'Context clues determine the right approach — there is no one-size-fits-all answer',
    ],
  },
]
