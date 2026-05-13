export const flashcards = [
  // ── PEOPLE DOMAIN ──────────────────────────────────────────────────────────
  {
    id: 1, domain: 'people', category: 'Leadership',
    front: 'What is servant leadership in project management?',
    back: 'A leadership philosophy where the PM\'s primary role is to serve the team: remove obstacles, provide resources, coach growth, and protect from distractions. The team\'s needs come first. Core to agile and modern PM approaches.',
  },
  {
    id: 2, domain: 'people', category: 'Team Development',
    front: 'What are Tuckman\'s 5 stages of team development?',
    back: 'Forming → Storming → Norming → Performing → Adjourning.\n\nForming: team assembles, roles unclear.\nStorming: conflict as ideas clash.\nNorming: norms established, collaboration improves.\nPerforming: high effectiveness.\nAdjourning: team disbands.',
  },
  {
    id: 3, domain: 'people', category: 'Emotional Intelligence',
    front: 'What are the 5 components of emotional intelligence (EI)?',
    back: '1. Self-awareness – knowing your own emotions\n2. Self-regulation – managing your emotions\n3. Motivation – internal drive to achieve\n4. Empathy – understanding others\' emotions\n5. Social skills – managing relationships\n\nCritical for conflict resolution and team leadership.',
  },
  {
    id: 4, domain: 'people', category: 'Conflict Resolution',
    front: 'What are the 5 conflict resolution strategies and when is each used?',
    back: '1. Collaborate/Problem-solve – win-win; best long-term solution\n2. Compromise – each gives up something; quick solution\n3. Accommodate – yield to the other; relationship preservation\n4. Avoid/Withdraw – postpone; not worth addressing now\n5. Force/Direct – win-lose; urgent situations only\n\nBest: Collaborate. Worst (long-term): Force.',
  },
  {
    id: 5, domain: 'people', category: 'Team Safety',
    front: 'What is psychological safety and why does it matter?',
    back: 'An environment where team members feel safe to take risks, speak up, admit mistakes, and share ideas without fear of punishment or ridicule.\n\nWhy it matters: Psychological safety is the #1 factor in high-performing teams (Google Project Aristotle). It enables learning, innovation, and honest communication.',
  },
  {
    id: 6, domain: 'people', category: 'Roles',
    front: 'What does RACI stand for and what does each role mean?',
    back: 'R – Responsible: does the actual work\nA – Accountable: owns the outcome (only ONE per task; can approve)\nC – Consulted: provides input (two-way communication)\nI – Informed: kept up to date (one-way communication)\n\nKey rule: Only one A (Accountable) per task.',
  },
  {
    id: 7, domain: 'people', category: 'Leadership',
    front: 'What is the difference between coaching and mentoring?',
    back: 'Coaching: PM asks powerful questions to help the individual discover their own solutions. Short-term, skill/performance focused. Doesn\'t require domain expertise.\n\nMentoring: More experienced person shares knowledge and guides career development. Long-term, career focused. Requires relevant expertise.',
  },
  {
    id: 8, domain: 'people', category: 'Agile',
    front: 'What are the Scrum Master\'s responsibilities around impediments?',
    back: 'The SM identifies and eliminates obstacles blocking team progress, including:\n- Organizational dependencies\n- Resource issues\n- Technical blockers\n- Process problems\n\nSM escalates to appropriate levels as needed. Goal: resolve impediments quickly, not let them sit.',
  },
  {
    id: 9, domain: 'people', category: 'Communication',
    front: 'What is active listening and its key techniques?',
    back: 'Fully concentrating, understanding, responding to, and remembering what is being said.\n\nKey techniques:\n- Paraphrase to confirm understanding\n- Ask clarifying questions\n- Maintain appropriate eye contact\n- Avoid interrupting\n- Acknowledge emotions\n- Avoid formulating a response while listening',
  },
  {
    id: 10, domain: 'people', category: 'Agile',
    front: 'What is a working agreement (team charter) in agile?',
    back: 'A set of team-created rules governing how the team works together:\n- Communication norms\n- Meeting expectations\n- Definition of Done\n- Decision-making processes\n- Conflict resolution approach\n- Availability expectations\n\nCo-created by the team for maximum ownership and buy-in.',
  },
  {
    id: 11, domain: 'people', category: 'Conflict',
    front: 'When should a PM escalate a conflict?',
    back: 'Escalate when:\n- Parties cannot resolve it themselves after facilitation\n- Conflict threatens project success or safety\n- It involves ethical violations or legal risk\n- It violates organizational policies\n- Mediation has genuinely failed\n\nFirst: facilitate resolution. Escalate only when facilitation fails.',
  },
  {
    id: 12, domain: 'people', category: 'Team Development',
    front: 'What is situational leadership and its four styles?',
    back: 'Leadership style adapted to team member maturity:\n\n1. Directing – high task, low relationship (low competence/commitment)\n2. Coaching – high task, high relationship (some competence, low commitment)\n3. Supporting – low task, high relationship (high competence, variable commitment)\n4. Delegating – low task, low relationship (high competence/commitment)\n\nKey: adapt your style to the individual.',
  },
  {
    id: 13, domain: 'people', category: 'Environment',
    front: 'What is a VUCA environment?',
    back: 'V – Volatile: rapid, unpredictable change\nU – Uncertain: lack of information\nC – Complex: many interconnected factors\nA – Ambiguous: unclear cause-and-effect\n\nModern projects operate in VUCA environments requiring adaptive leadership, flexible planning, and continuous learning — not rigid processes.',
  },
  {
    id: 14, domain: 'people', category: 'Stakeholders',
    front: 'What are the key principles of stakeholder engagement?',
    back: '1. Identify all stakeholders early and continuously throughout the project\n2. Understand their interests, influence, and impact\n3. Plan engagement tailored to each stakeholder\n4. Monitor and adapt engagement levels\n5. Foster genuine participation, not just information broadcasting\n6. Address negative stakeholders proactively',
  },
  {
    id: 15, domain: 'people', category: 'Leadership',
    front: 'What is the PMI Talent Triangle (2022 update)?',
    back: '1. Ways of Working – technical skills, agile/hybrid methods, PM tools\n2. Power Skills – communication, leadership, problem-solving, collaboration, strategic thinking\n3. Business Acumen – stakeholder engagement, strategy, finance, benefits management\n\nAll three are essential for modern PMs. "Power Skills" replaced "Leadership."',
  },

  // ── PROCESS DOMAIN ──────────────────────────────────────────────────────────
  {
    id: 16, domain: 'process', category: 'EVM',
    front: 'What are the key Earned Value Management (EVM) formulas?',
    back: 'Three baselines:\nPV = Planned Value | EV = Earned Value | AC = Actual Cost\n\nVariances:\nSV = EV – PV (+ is good) | CV = EV – AC (+ is good)\n\nIndices:\nSPI = EV/PV (>1 is good) | CPI = EV/AC (>1 is good)\n\nForecasting:\nEAC = BAC/CPI | ETC = EAC – AC | TCPI = (BAC–EV)/(BAC–AC)',
  },
  {
    id: 17, domain: 'process', category: 'EVM',
    front: 'What does CPI = 0.85 mean for a project?',
    back: 'CPI < 1.0 means the project is OVER budget.\n\nCPI = 0.85 means for every $1.00 spent, only $0.85 worth of planned work is being delivered.\n\nPractical impact: If the original budget was $100K, the EAC = BAC/CPI = $100K/0.85 = $117,647 — a projected overrun of $17,647.',
  },
  {
    id: 18, domain: 'process', category: 'Schedule',
    front: 'What is the Critical Path Method (CPM)?',
    back: 'CPM identifies the longest sequence of dependent activities determining the project\'s minimum duration.\n\nKey concepts:\n- Critical path activities have zero total float\n- Delays on the critical path directly delay the project end date\n- Near-critical paths (low float) also need monitoring\n- Float = Late Start – Early Start',
  },
  {
    id: 19, domain: 'process', category: 'Schedule',
    front: 'What is the difference between fast-tracking and crashing?',
    back: 'Fast-tracking: Overlap activities normally done sequentially.\n- No direct cost increase\n- Increases RISK (rework, coordination)\n- Only works if activities can be parallelized\n\nCrashing: Add resources to critical path activities.\n- INCREASES COST\n- Reduces schedule\n- Works when resources can accelerate activities\n\nBoth are schedule compression techniques.',
  },
  {
    id: 20, domain: 'process', category: 'Risk',
    front: 'What are the 5 risk response strategies for threats (negative risks)?',
    back: '1. Avoid – eliminate the threat (change plan)\n2. Transfer – shift impact to third party (insurance, contracts)\n3. Mitigate – reduce probability or impact\n4. Accept (active) – create contingency plan\n5. Accept (passive) – acknowledge, do nothing\n6. Escalate – handle outside project authority\n\nFor Opportunities (positive risks): Exploit, Enhance, Share, Accept, Escalate.',
  },
  {
    id: 21, domain: 'process', category: 'Risk',
    front: 'What is a risk register and what does it contain?',
    back: 'A living document capturing identified risks:\n- Risk ID and description\n- Probability (P) and Impact (I)\n- Risk score (P × I)\n- Risk response strategy and owner\n- Trigger conditions\n- Contingency plan (if accepted)\n- Residual and secondary risks\n- Current status\n\nUpdated continuously throughout the project.',
  },
  {
    id: 22, domain: 'process', category: 'Agile',
    front: 'What are the 4 Agile Manifesto values?',
    back: 'Individuals and interactions OVER processes and tools\n\nWorking software OVER comprehensive documentation\n\nCustomer collaboration OVER contract negotiation\n\nResponding to change OVER following a plan\n\nNote: Right-side items have value, but left-side items are valued MORE.',
  },
  {
    id: 23, domain: 'process', category: 'Agile',
    front: 'What is the Definition of Done (DoD)?',
    back: 'A shared understanding of what "complete" means for a user story or increment.\n\nTypically includes:\n- Coding standards met\n- Unit tests written and passing\n- Peer code review completed\n- All acceptance criteria satisfied\n- Documentation updated\n- No known critical defects\n\nApplied consistently; owned by the team.',
  },
  {
    id: 24, domain: 'process', category: 'Agile',
    front: 'What is a sprint retrospective and what are its three key questions?',
    back: 'Scrum ceremony held at end of each sprint. Team reviews:\n\n1. What went WELL? (keep doing)\n2. What could be IMPROVED? (change)\n3. What will we COMMIT to improving next sprint? (action items)\n\nFocuses on process/team improvement, not product. Owned by the team; Scrum Master facilitates.',
  },
  {
    id: 25, domain: 'process', category: 'Agile',
    front: 'What is velocity in Scrum and how is it used?',
    back: 'The amount of work (story points) a team completes per sprint.\n\nUsed for:\n- Forecasting: How many sprints to complete the backlog?\n- Sprint planning: How much can we commit to?\n- Trend analysis: Is the team improving?\n\nOnly completed stories (meeting DoD) count. Based on history, not estimates.',
  },
  {
    id: 26, domain: 'process', category: 'Agile',
    front: 'What is Kanban and how does it differ from Scrum?',
    back: 'Kanban is a continuous-flow visual system with WIP limits.\n\nKey differences from Scrum:\n- No fixed sprints (continuous flow vs. timeboxed)\n- No roles (Scrum has SM, PO, Dev Team)\n- No ceremonies (Scrum has 5 ceremonies)\n- WIP limits instead of sprint commitments\n- Pull-based: work items pulled when capacity available\n\nBest for: ongoing operations, support teams.',
  },
  {
    id: 27, domain: 'process', category: 'Quality',
    front: 'What is the difference between Quality Assurance (QA) and Quality Control (QC)?',
    back: 'QA (Manage Quality):\n- PROACTIVE and process-focused\n- Prevents defects by improving processes\n- Activities: audits, process reviews, standards creation\n- "Are we doing things right?"\n\nQC (Control Quality):\n- REACTIVE and product-focused\n- Identifies defects in deliverables\n- Activities: testing, inspection, peer review\n- "Is the product right?"\n\nQA prevents; QC detects.',
  },
  {
    id: 28, domain: 'process', category: 'Scope',
    front: 'What is scope creep and how is it prevented?',
    back: 'Scope creep: Uncontrolled expansion of project scope without formal change control.\n\nCauses: informal stakeholder requests, unclear requirements, unrequested "gold plating"\n\nPrevention:\n- Clearly defined scope baseline\n- Formal change control process\n- Stakeholder education on change impacts\n- Regular scope verification\n- Strong requirements management',
  },
  {
    id: 29, domain: 'process', category: 'Planning',
    front: 'What is a WBS (Work Breakdown Structure) and the 100% rule?',
    back: 'WBS: Hierarchical decomposition of total project scope into manageable work packages.\n\n100% Rule: The WBS must capture 100% of project scope. Nothing should be done that\'s not in the WBS; everything in the WBS must be done.\n\nDeliverable-oriented (not activities). Foundation for schedule, cost, and resource planning.',
  },
  {
    id: 30, domain: 'process', category: 'Change Control',
    front: 'What is the purpose of a Change Control Board (CCB)?',
    back: 'Formally constituted group responsible for reviewing, evaluating, and approving/rejecting change requests.\n\nTypically includes: sponsor, PM, key stakeholders, technical experts\n\nEnsures:\n- Impact assessment before approval\n- Baseline changes are authorized\n- Changes align with project objectives\n- Impacts to schedule/cost/scope are understood',
  },
  {
    id: 31, domain: 'process', category: 'Value',
    front: 'What is the difference between outputs, outcomes, and benefits?',
    back: 'Outputs: What the project PRODUCES (deliverables, products, services, results)\n\nOutcomes: The CHANGES that result from using the outputs (behavioral, operational, organizational changes)\n\nBenefits: The VALUE realized from the outcomes (financial, strategic, social value)\n\nProjects deliver outputs → enable outcomes → realize benefits.',
  },
  {
    id: 32, domain: 'process', category: 'Agile',
    front: 'What are the 5 Scrum ceremonies and their purpose?',
    back: '1. Sprint Planning – plan the work for the sprint\n2. Daily Scrum (standup) – 15-min sync: done, plan, blockers\n3. Sprint Review – inspect the increment; get stakeholder feedback\n4. Sprint Retrospective – inspect process; identify improvements\n5. Backlog Refinement – groom/estimate upcoming backlog items\n\nTimeboxed and owned by the Scrum team.',
  },
  {
    id: 33, domain: 'process', category: 'Agile',
    front: 'What is technical debt and how should it be managed?',
    back: 'The future rework cost accumulated when quick/easy solutions are chosen over better approaches.\n\nLike financial debt: accrues "interest" as maintenance becomes harder.\n\nManagement:\n- Make it visible (track in backlog)\n- Allocate regular capacity (e.g., 20% per sprint)\n- Prioritize debt that blocks features\n- Include in Definition of Done quality checks\n- Never let it become unmanageable',
  },
  {
    id: 34, domain: 'process', category: 'Agile',
    front: 'What is a burndown chart and what does it show?',
    back: 'A graphical view of work remaining vs. time.\n\nAxes: Y = remaining work (story points/hours); X = time (days in sprint)\n\nIdeal line: straight diagonal from top-left to bottom-right\n\nInterpretation:\n- Line above ideal = falling behind\n- Line below ideal = ahead of schedule\n- Flat line = no progress (possible blocker)\n- Steep drop = stories completed or removed',
  },
  {
    id: 35, domain: 'process', category: 'Agile',
    front: 'What is Minimum Viable Product (MVP)?',
    back: 'The smallest product increment that:\n1. Delivers enough value for customers to use\n2. Provides feedback for further development\n\nPurpose: Validate assumptions early, reduce waste, learn from real usage.\n\nMVP ≠ low quality. It\'s the minimum NECESSARY to test the core value hypothesis.\n\nRelated: MBI (Minimum Business Increment) and MMF (Minimum Marketable Feature).',
  },
  {
    id: 36, domain: 'process', category: 'Risk',
    front: 'What is risk appetite vs. risk tolerance vs. risk threshold?',
    back: 'Risk appetite: Amount and TYPE of risk an org is willing to pursue. Strategic preference. ("We\'re willing to risk X to gain Y")\n\nRisk tolerance: The acceptable VARIATION in outcomes. Operational boundary. ("We can tolerate up to ±10% schedule variance")\n\nRisk threshold: The specific point at which risk becomes unacceptable and triggers action.',
  },
  {
    id: 37, domain: 'process', category: 'Agile',
    front: 'What is Weighted Shortest Job First (WSJF)?',
    back: 'Agile prioritization method from SAFe:\n\nWSJF = Cost of Delay ÷ Job Duration (size)\n\nCost of Delay = User/Business Value + Time Criticality + Risk Reduction/Opportunity Enablement\n\nPurpose: Maximize economic benefit by sequencing work. High value + short duration = highest WSJF = do first.\n\nAka "bang for the buck" prioritization.',
  },
  {
    id: 38, domain: 'process', category: 'Planning',
    front: 'What is the purpose of a project charter?',
    back: 'Formally authorizes the project and the PM\'s authority.\n\nKey contents:\n- Project purpose and objectives\n- High-level scope and deliverables\n- Success criteria and constraints\n- Key stakeholders\n- PM authority level\n- High-level milestone schedule\n- Budget summary\n- Sponsor signature\n\nSigned by the sponsor, not the PM.',
  },
  {
    id: 39, domain: 'process', category: 'Planning',
    front: 'What is progressive elaboration?',
    back: 'Continuously improving and detailing a plan as more information becomes available.\n\nIn predictive (waterfall): rolling wave planning — near-term work planned in detail, future work at high level.\n\nIn agile: backlog refinement — stories elaborated just-in-time before each sprint.\n\nKey principle: Plan to the level of detail needed NOW; elaborate as you learn more.',
  },
  {
    id: 40, domain: 'process', category: 'Procurement',
    front: 'What are the main contract types and their risk distribution?',
    back: 'Fixed Price (FP): Buyer has low cost risk; Seller has high risk\n- FFP: Firm Fixed Price (most common)\n- FPIF: Fixed Price Incentive Fee\n- FP-EPA: with Economic Price Adjustment\n\nCost Reimbursable: Buyer has high risk; Seller has low risk\n- CPFF, CPIF, CPAF\n\nTime & Materials (T&M): Shared risk; hybrid approach\n\nUse FP when scope is clear; use CR/T&M when scope is uncertain.',
  },
  {
    id: 41, domain: 'process', category: 'Agile',
    front: 'What is a product roadmap?',
    back: 'A high-level visual plan showing the sequence of product features/releases over time.\n\nPurpose:\n- Communicate product strategy and direction\n- Align stakeholders on priorities\n- Show long-term vision while allowing flexibility\n\nIn agile: the roadmap is regularly reviewed and updated based on new information. Not a fixed commitment — an adaptive plan.\n\nOwned by: Product Owner.',
  },
  {
    id: 42, domain: 'process', category: 'Communications',
    front: 'What is the communications channels formula?',
    back: 'Number of potential communication channels = n(n-1)/2\n\nWhere n = number of stakeholders\n\nExample:\n- 5 stakeholders: 5(4)/2 = 10 channels\n- 10 stakeholders: 10(9)/2 = 45 channels\n- 20 stakeholders: 20(19)/2 = 190 channels\n\nPractical implication: Adding team members increases communication complexity exponentially.',
  },
  {
    id: 43, domain: 'process', category: 'Scope',
    front: 'What is the difference between product scope and project scope?',
    back: 'Product scope: The features and functions that characterize a product or service. Measured against product requirements.\n\nProject scope: The WORK required to deliver the product, service, or result. Measured against the project management plan.\n\nBoth must be managed. Product scope drives project scope. Changes to product scope affect project scope.',
  },
  {
    id: 44, domain: 'process', category: 'Agile',
    front: 'What is the difference between a user story and an epic?',
    back: 'Epic: A large body of work that can be broken down into smaller user stories. Too large to complete in one sprint.\n\nUser Story: Small, independent piece of functionality from a user perspective. Should fit in one sprint.\n\nFormat: "As a [user], I want [feature], so that [benefit]"\n\nAcceptance Criteria: Conditions that must be met for the story to be accepted as done.',
  },
  {
    id: 45, domain: 'process', category: 'Quality',
    front: 'What is cost of quality (CoQ)?',
    back: 'Total cost of ensuring quality plus the cost of not having quality.\n\nCost of CONFORMANCE (prevention/appraisal):\n- Prevention: training, process improvement, planning\n- Appraisal: testing, inspection, audits\n\nCost of NON-CONFORMANCE (failure costs):\n- Internal failures: rework, scrap (caught before delivery)\n- External failures: warranties, recalls (caught by customer)\n\nBest investment: prevention costs.',
  },

  // ── BUSINESS ENVIRONMENT DOMAIN ─────────────────────────────────────────────
  {
    id: 46, domain: 'business', category: 'Strategy',
    front: 'What is a business case and who owns it?',
    back: 'A documented justification for undertaking a project.\n\nContents:\n- Problem or opportunity description\n- Recommended solution and alternatives\n- Expected benefits and costs\n- ROI and payback period\n- Risks and assumptions\n- Success criteria\n\nOwner: The PROJECT SPONSOR (not the PM).\nThe PM manages delivery; the sponsor owns the business case.',
  },
  {
    id: 47, domain: 'business', category: 'Benefits',
    front: 'What is benefits realization management?',
    back: 'The process of defining, planning, delivering, and measuring expected project benefits.\n\nKey artifacts:\n- Benefits register: identifies and tracks each benefit\n- Benefits realization plan: how/when benefits will be measured\n- Benefits owner: person accountable post-project\n\nTimeline: Benefits are often realized AFTER the project closes.\n\nPM responsibility: Enable benefits measurement; ensure transition plan.',
  },
  {
    id: 48, domain: 'business', category: 'Change Management',
    front: 'What is Organizational Change Management (OCM)?',
    back: 'Structured approach to transitioning individuals from current state to desired future state.\n\nKey activities:\n- Readiness assessment\n- Stakeholder communications plan\n- Training plan\n- Resistance management\n- Adoption metrics and measurement\n\nWhy it matters: 70% of change initiatives fail due to people factors, not technical ones. OCM is critical for project benefit realization.',
  },
  {
    id: 49, domain: 'business', category: 'Compliance',
    front: 'What is PESTLE analysis and when is it used?',
    back: 'Framework for analyzing the external environment:\n\nP – Political\nE – Economic\nS – Social\nT – Technological\nL – Legal\nE – Environmental\n\nUsed in: Project environmental analysis, risk identification, business case development.\n\nOutputs: External risk factors, regulatory requirements, market conditions affecting the project.',
  },
  {
    id: 50, domain: 'business', category: 'Governance',
    front: 'What is the difference between a portfolio, program, and project?',
    back: 'Project: Temporary endeavor to create a unique product, service, or result.\n\nProgram: Group of related projects managed in a coordinated way to obtain benefits impossible individually.\n\nPortfolio: Collection of projects/programs aligned to strategic objectives. May include unrelated work.\n\nHierarchy: Portfolio > Program > Project\n\nKey difference: Projects deliver outputs. Programs deliver outcomes. Portfolios deliver strategic value.',
  },

  // ── AGILE & HYBRID ───────────────────────────────────────────────────────────
  {
    id: 51, domain: 'process', category: 'Agile Frameworks',
    front: 'What is the Scaled Agile Framework (SAFe) and when is it used?',
    back: 'SAFe is a framework for scaling agile practices to large enterprises.\n\nKey levels:\n- Team level: standard Scrum/Kanban\n- Program level: Agile Release Train (ART) with PI Planning\n- Portfolio level: Strategic investment themes\n\nUsed when: Multiple agile teams need to coordinate delivery of a large system.\n\nKey ceremony: PI (Program Increment) Planning — 2-day event aligning all teams.',
  },
  {
    id: 52, domain: 'process', category: 'Agile',
    front: 'What is the Agile Release Train (ART) in SAFe?',
    back: 'A long-lived team of agile teams (50-125 people) that plans, commits, and executes together.\n\nKey features:\n- Fixed PI cadence (typically 5 sprints = 10 weeks)\n- Synchronized sprint boundaries across teams\n- Shared PI objectives\n- System demo at PI end\n\nART is the primary vehicle for delivering business value in SAFe.',
  },
  {
    id: 53, domain: 'process', category: 'Hybrid',
    front: 'When should you use predictive, agile, or hybrid approaches?',
    back: 'Predictive (Waterfall):\n- Well-defined, stable requirements\n- Low uncertainty\n- Fixed cost/time constraints\n- Regulated environments requiring upfront documentation\n\nAgile:\n- Unclear or evolving requirements\n- High complexity/uncertainty\n- Rapid delivery of value needed\n- Innovative products\n\nHybrid:\n- Mixed characteristics\n- Partial regulatory requirements\n- Different project components have different needs',
  },
  {
    id: 54, domain: 'process', category: 'Agile',
    front: 'What are the three Scrum roles and their responsibilities?',
    back: 'Product Owner:\n- Owns the product backlog\n- Prioritizes and defines acceptance criteria\n- Represents business/customer voice\n\nScrum Master:\n- Servant leader to the team\n- Removes impediments\n- Facilitates ceremonies\n- Coaches agile practices\n\nDevelopment Team:\n- Self-organizing, cross-functional\n- Estimates and commits to sprint work\n- Maintains DoD\n- 3-9 members',
  },
  {
    id: 55, domain: 'process', category: 'Agile',
    front: 'What is story point estimation and how does planning poker work?',
    back: 'Story points: Relative measure of complexity, effort, and uncertainty (not time).\n\nPlanning Poker:\n1. PO describes a user story\n2. Each team member silently selects a card (Fibonacci: 1,2,3,5,8,13,21...)\n3. All reveal simultaneously (prevents anchoring bias)\n4. Highest and lowest discuss their reasoning\n5. Re-vote until consensus\n\nBenefit: Surfaces different perspectives; builds shared understanding.',
  },
  {
    id: 56, domain: 'people', category: 'Leadership',
    front: 'What is the difference between a project manager\'s authority and a project sponsor\'s authority?',
    back: 'Project Sponsor:\n- Provides resources and funding\n- Owns the business case\n- Has strategic/organizational authority\n- Resolves organizational obstacles\n- Approves scope/schedule/cost baselines\n\nProject Manager:\n- Day-to-day project authority\n- Plans, executes, monitors, controls\n- Manages the team\n- Escalates to sponsor when needed\n- Accountable for delivery',
  },
  {
    id: 57, domain: 'process', category: 'Planning',
    front: 'What is the iron triangle (triple constraint) in project management?',
    back: 'Three competing project constraints:\n- Scope (what we deliver)\n- Schedule (when we deliver)\n- Cost (what we spend)\n\nQuality is often added as a fourth constraint or placed in the center.\n\nKey principle: Changing one constraint affects the others. The PM must explicitly manage trade-offs.\n\nSponsor/stakeholders decide which constraints are fixed; PM manages the others.',
  },
  {
    id: 58, domain: 'process', category: 'Agile',
    front: 'What is a Definition of Ready (DoR)?',
    back: 'Criteria that must be met before a user story can be pulled into a sprint.\n\nTypical DoR criteria:\n- Story written with clear acceptance criteria\n- Story sized/estimated by the team\n- Dependencies identified and resolved\n- UI/UX designs available if needed\n- Story fits in one sprint (not too large)\n\nPurpose: Prevents stories from blocking the sprint due to incomplete preparation.',
  },
  {
    id: 59, domain: 'business', category: 'Governance',
    front: 'What is OPM (Organizational Project Management)?',
    back: 'Framework aligning project, program, and portfolio management with organizational strategy.\n\nThree domains:\n1. Portfolio Management – strategic alignment and investment decisions\n2. Program Management – coordinating related projects for collective benefits\n3. Project Management – delivering specific outcomes\n\nOPM3 (maturity model) assesses organizational PM capability from initial (Level 1) to Optimizing (Level 5).',
  },
  {
    id: 60, domain: 'process', category: 'Closure',
    front: 'What is a post-project review (lessons learned) and when should it occur?',
    back: 'Captures what went well, what to improve, and recommendations for future projects.\n\nWhen: Should occur DURING the project (not just at end) and at phase gates.\n\nContents:\n- What went well (continue)\n- What didn\'t work (stop/change)\n- Recommendations for next time\n- Metrics and data\n\nStored in: Organizational Process Assets / Knowledge Base\n\nIn agile: retrospectives serve this purpose every sprint.',
  },
  // ── PMBOK 8 EDITION ──────────────────────────────────────────────────────────
  {
    id: 61, domain: 'process', category: 'PMBOK 8',
    front: 'What are the 12 Project Management Principles in PMBOK 8th Edition?',
    back: '1. Be a Diligent, Respectful, and Caring Steward\n2. Create a Collaborative Project Team Environment\n3. Effectively Engage with Stakeholders\n4. Focus on Value\n5. Recognize, Evaluate, and Respond to System Interactions\n6. Demonstrate Leadership Behaviors\n7. Tailor Based on Context\n8. Build Quality Into Processes and Deliverables\n9. Navigate Complexity\n10. Optimize Risk Responses\n11. Embrace Adaptability and Resiliency\n12. Enable Change to Achieve the Envisioned Future State\n\nKey: These are PRINCIPLES (guidance), not processes (steps).',
  },
  {
    id: 62, domain: 'process', category: 'PMBOK 8',
    front: 'What are the 8 Project Performance Domains in PMBOK 8th Edition?',
    back: '1. Stakeholders – engage, understand, collaborate\n2. Team – servant leadership, skills, trust, culture\n3. Development Approach & Life Cycle – predictive/adaptive/hybrid spectrum\n4. Planning – iterative, adaptive, just enough\n5. Project Work – coordinate, communicate, learn\n6. Delivery – scope, quality, requirements, value\n7. Measurement – metrics, KPIs, forecasts, health\n8. Uncertainty – risk, complexity, ambiguity, volatility\n\nKey difference from PMBOK 6: domains replace knowledge areas; principles replace processes.',
  },
  {
    id: 63, domain: 'process', category: 'PMBOK 8',
    front: 'How does PMBOK 8 approach tailoring?',
    back: 'PMBOK 8 Tailoring Process:\n1. Select – choose initial development approach based on context\n2. Tailor – adjust practices to fit the specific project\n3. Implement – apply the tailored approach\n4. Continuously Improve – refine through retrospectives and feedback\n\nContext factors: organizational culture, industry type, team experience, regulatory requirements, technology, complexity level.\n\nKey principle: No one-size-fits-all approach; always tailor.',
  },
  {
    id: 64, domain: 'process', category: 'PMBOK 8',
    front: 'What is the Cynefin Framework and how does it apply to project management?',
    back: 'A complexity framework with 5 domains:\n\nClear: cause-effect obvious → apply best practices, standardize\nComplicated: cause-effect requires analysis → engage experts, analyze\nComplex: cause-effect only in retrospect → experiment, probe, sense\nChaotic: no cause-effect → act immediately, stabilize\nConfused (center): unclear which domain → gather info to categorize\n\nPM Application: match your project approach to the domain:\n- Clear → predictive/waterfall\n- Complicated → predictive with expert review\n- Complex → agile/iterative\n- Chaotic → crisis management',
  },
  {
    id: 65, domain: 'process', category: 'PMBOK 8',
    front: 'What is the Value Delivery System in PMBOK 8?',
    back: 'The organizational framework through which projects deliver value:\n\nPortfolio → Programs → Projects → Operations\n\nKey concepts:\n- Projects create outputs → that enable outcomes → that deliver benefits → that realize strategic value\n- All projects exist within an organizational system\n- The PM must understand how their project contributes to the larger value chain\n- Success = delivering the intended outcomes, not just completing activities\n\nPMBOK 8 emphasis: project economy → every project should have a clear business rationale.',
  },
  {
    id: 66, domain: 'process', category: 'PMBOK 8',
    front: 'What is the Uncertainty Performance Domain in PMBOK 8?',
    back: 'Addresses conditions and events that may impact project outcomes.\n\nFour types of uncertainty:\n- Risk: known unknowns with probability and impact\n- Ambiguity: unclear aspects of the project or environment\n- Complexity: system interactions too complex to fully predict\n- Volatility: rapid, unpredictable change\n\nStrategies by type:\n- Risk → risk response strategies (avoid, mitigate, transfer, accept)\n- Ambiguity → progressive elaboration, prototyping\n- Complexity → systems thinking, agile approaches\n- Volatility → adaptability, frequent reassessment\n\nKey: Uncertainty is not all bad — opportunities are also uncertain.',
  },

  // ── RITA MULCAHY KEY CONCEPTS ─────────────────────────────────────────────
  {
    id: 67, domain: 'process', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's framework for answering 'What should the PM do FIRST?'",
    back: "Rita's decision hierarchy for 'FIRST' questions:\n\n1. Assess/Analyze the situation FIRST (gather information)\n2. Identify the root cause\n3. Evaluate impact on project constraints\n4. Select the most proactive, ethical response\n5. Communicate with appropriate stakeholders\n\nRita's rule: Never jump to action without understanding the situation.\n\nKey trap: 'Go directly to sponsor' is almost never the FIRST step. Assess first.\n\nRita's persona: the good PM is always proactive, planned, and process-following.",
  },
  {
    id: 68, domain: 'process', category: 'Rita Mulcahy',
    front: "What is 'gold plating' and why does Rita Mulcahy consider it a problem?",
    back: "Gold plating: Adding extra features, functionality, or quality beyond what was specified in scope — WITHOUT a change request.\n\nWhy it's a problem (Rita's view):\n- It's a SCOPE VIOLATION (adding what wasn't approved)\n- It wastes resources\n- Can introduce defects\n- Undermines change control processes\n- Sets wrong stakeholder expectations for future projects\n\nRita's rule: Deliver EXACTLY what was agreed. If you want to add value, submit a change request first.\n\nDifference: Gold plating = team adds extras. Scope creep = stakeholder adds extras informally.",
  },
  {
    id: 69, domain: 'process', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's PERT (Three-Point Estimating) formulas",
    back: "PERT Expected Duration:\nE = (O + 4M + P) / 6\n\nWhere: O = Optimistic, M = Most Likely, P = Pessimistic\n\nStandard Deviation:\nσ = (P - O) / 6\n\nVariance:\nσ² = ((P - O) / 6)²\n\nRange (68% confidence): E ± 1σ\nRange (95% confidence): E ± 2σ\nRange (99.7% confidence): E ± 3σ\n\nRita's tip: PERT gives a WEIGHTED average; the Most Likely (M) gets the most weight (4×).",
  },
  {
    id: 70, domain: 'process', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's 5 Project Management Process Groups",
    back: "Rita organizes PM work into 5 process groups (NOT phases):\n\n1. Initiating – authorize the project/phase; develop charter\n2. Planning – determine scope, schedule, cost, quality, risk, comms, procurement\n3. Executing – do the work; manage team and stakeholders\n4. Monitoring & Controlling – measure performance; manage changes\n5. Closing – close contracts, finalize lessons learned, release resources\n\nRita's key insight: M&C runs in PARALLEL with all other groups, not just at the end.\n\nProcess groups ≠ project phases. Multiple phases can have all 5 groups.",
  },
  {
    id: 71, domain: 'process', category: 'Rita Mulcahy',
    front: "What are Rita Mulcahy's 'Tricks of the Trade' for risk management?",
    back: "Rita's key risk tricks:\n\n1. Risk management STARTS in initiating (not planning) — identify risks early\n2. Risk register must exist BEFORE response planning begins\n3. Qualitative analysis ALWAYS precedes quantitative analysis\n4. Every risk needs an OWNER (not the PM — a team member)\n5. Contingency reserves = known unknowns; Management reserves = unknown unknowns\n6. Workarounds are for risks that weren't planned for (NOT planned responses)\n7. Secondary risks: new risks created by risk responses\n8. Residual risks: risk remaining AFTER response implementation\n9. Risks near the END of the project are low priority (less time to impact)\n10. The PM should NEVER accept high-impact risks without creating contingency plans",
  },
  {
    id: 72, domain: 'process', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's key EVM must-knows for the PMP exam",
    back: "Critical EVM formulas (Rita's emphasis):\n\nCV = EV - AC (negative = over budget)\nSV = EV - PV (negative = behind schedule)\nCPI = EV/AC (< 1 = over budget)\nSPI = EV/PV (< 1 = behind schedule)\n\nForecasting:\nEAC = BAC/CPI (when current efficiency continues)\nETC = EAC - AC (work remaining)\nVAC = BAC - EAC (variance at completion)\nTCPI = (BAC-EV)/(BAC-AC) (efficiency needed to finish on budget)\n\nRita's tip: If TCPI > 1.10, the project will NOT finish on budget without change.\nIf CPI and SPI are both < 1.0, the project is in serious trouble — escalate NOW.",
  },
  {
    id: 73, domain: 'process', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's PMO types and their differences",
    back: "Three PMO types (Rita's framework):\n\n1. Supportive PMO (Low control):\n   - Provides templates, training, lessons learned\n   - Advisory role only; PMs don't have to comply\n\n2. Controlling PMO (Moderate control):\n   - Requires compliance with frameworks and methodologies\n   - Reviews and audits projects\n   - Provides PM support and tools\n\n3. Directive PMO (High control):\n   - Directly manages projects\n   - Assigns PMs to projects\n   - PM reports to PMO, not to functional manager\n\nRita's tip: The PMO level of control determines the PM's autonomy.",
  },
  {
    id: 74, domain: 'process', category: 'Rita Mulcahy',
    front: "What is Rita Mulcahy's approach to quality management?",
    back: "Rita's key quality concepts:\n\nQuality vs. Grade:\n- Quality = meeting requirements (conformance)\n- Grade = level of features (low grade ≠ low quality)\n\nCost of Quality breakdown:\n- Prevention: training, process design ($)\n- Appraisal: testing, inspection ($$)\n- Internal failure: rework, scrap ($$$)\n- External failure: warranty, recalls ($$$$)\n\nRita's rule: Prevention costs LESS than fixing defects later.\n\nQuality is PLANNED, not inspected in at the end.\n\nKey tools: Cause-and-effect (fishbone/Ishikawa), Pareto chart (80/20 rule), Control charts, Histograms, Scatter diagrams, Flowcharts, Check sheets.",
  },
  {
    id: 75, domain: 'process', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's corrective vs. preventive vs. defect repair",
    back: "Three types of actions (Rita's distinctions):\n\nCorrective Action:\n- Realigns future performance with the plan\n- Addresses current deviation that already occurred\n- Example: Adding resources to recover schedule\n\nPreventive Action:\n- Prevents future deviations BEFORE they occur\n- Addresses identified risks proactively\n- Example: Adding quality gates to prevent defects\n\nDefect Repair:\n- Fixes a product or component that doesn't meet requirements\n- Requires inspection after repair\n- Example: Rewriting code that fails tests\n\nRita's tip: All three require formal change requests and updates to the project management plan.",
  },
  {
    id: 76, domain: 'people', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's approach to project constraints and the 'triple constraint'",
    back: "Rita's six project constraints (she expanded from 3 to 6):\n1. Scope\n2. Time (Schedule)\n3. Cost\n4. Quality\n5. Risk\n6. Resources\n\nKey insight: Changing ANY ONE constraint affects ALL others.\n\nRita's exam tip: When a question asks what happens if scope is added, the answer almost always involves a trade-off: schedule extends, cost increases, or quality decreases.\n\nRita's rule: The PM must identify which constraints are FIXED and which are FLEXIBLE at project initiation.",
  },
  {
    id: 77, domain: 'business', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's key concepts for project integration management",
    back: "Rita's integration must-knows:\n\n1. Project Charter authorizes the project AND the PM's authority — never start without one\n2. PM creates the Project Management Plan by integrating ALL subsidiary plans\n3. Develop PMP ≠ executing the work — it's the planning, not doing\n4. Integrated Change Control: ALL changes go through CCB; PM has no authority to approve changes unilaterally\n5. Direct and Manage Project Work: where the actual work happens\n6. Monitor and Control runs continuously, not just at the end\n7. Lessons Learned: Rita says these should be documented THROUGHOUT the project, not just at closure\n8. Close Project: get formal acceptance BEFORE releasing resources",
  },
  {
    id: 78, domain: 'process', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's 'Critical Chain Method' vs. Critical Path Method",
    back: "Critical Path Method (CPM):\n- Identifies the longest sequence of dependent activities\n- Based on activity durations (deterministic)\n- Float/slack shows schedule flexibility\n- Does NOT consider resource constraints\n\nCritical Chain Method (CCM):\n- Accounts for resource constraints and uncertainty\n- Removes safety from individual activities and adds 'buffers'\n- Project buffer protects end date\n- Feeding buffers protect critical chain from delays on non-critical paths\n- Based on Theory of Constraints (Goldratt)\n\nRita's tip: Critical chain recognizes that Parkinson's Law and student syndrome inflate estimates — buffers at the end are more efficient than padding each task.",
  },
  {
    id: 79, domain: 'process', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's procurement: contract types and when to use each",
    back: "Rita's contract selection guide:\n\nFirm Fixed Price (FFP):\n- Seller bears all cost risk\n- Use when: scope is well-defined and stable\n- Buyer risk: LOW\n\nFixed Price Incentive Fee (FPIF):\n- Shared risk; seller gets bonus for performance\n- Use when: scope is mostly defined but can be optimized\n\nCost Plus Fixed Fee (CPFF):\n- Buyer bears cost risk; seller gets fixed profit\n- Use when: scope is uncertain\n\nTime & Materials (T&M):\n- Shared risk; pay per hour + materials\n- Use when: scope evolves (agile work)\n- Risk: T&M has no ceiling unless capped\n\nRita's rule: Always include a 'not-to-exceed' clause with T&M contracts.",
  },
  {
    id: 80, domain: 'people', category: 'Rita Mulcahy',
    front: "Rita Mulcahy's key stakeholder management concepts",
    back: "Rita's stakeholder must-knows:\n\n1. Identify ALL stakeholders — including those who oppose the project\n2. More stakeholders = more communication channels = higher complexity\n3. Negative stakeholders must be ENGAGED, not ignored\n4. Stakeholder engagement levels: Unaware → Resistant → Neutral → Supportive → Leading\n5. Desired level for most stakeholders: Supportive or Leading\n6. PM's job: move stakeholders from current to desired engagement level\n7. Power/Interest grid determines how much attention each stakeholder gets\n\nRita's tip: 'Manage Stakeholder Engagement' is in the Executing process group — it's active, ongoing work, not just planning.",
  },
]

export const flashcardsByDomain = {
  people: flashcards.filter(f => f.domain === 'people'),
  process: flashcards.filter(f => f.domain === 'process'),
  business: flashcards.filter(f => f.domain === 'business'),
}
