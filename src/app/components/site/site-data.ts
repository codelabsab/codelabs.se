import type { AccentTone } from "@/app/components/site/design";

export type ServicePillar = {
  title: string;
  description: string;
  candidateFocus: string;
};

export type EnvironmentCard = {
  title: string;
  description: string;
  contexts: string[];
};

export type SelectedWorkItem = {
  eyebrow: string;
  title: string;
  context: string;
  challenge: string;
  contribution: string;
  candidateAngle: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type CareerArea = {
  title: string;
  description: string;
};

export type TeamMemberSummary = {
  name: string;
  role: string;
  summary: string;
  humanDetail?: string;
  imageUrl: string;
  profileUrl?: string;
};

export type WorkScenario = {
  title: string;
  summary: string;
  examples: string[];
};

export type BenefitTheme = {
  title: string;
  intro: string;
  items: string[];
};

export type TeamGroup = {
  title: string;
  description: string;
  members: Array<{
    name: string;
    role: string;
    summary: string;
    imageUrl: string;
  }>;
};

export type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
  className?: string;
};

export const contactEmail = "contact@codelabs.se";
export const contactHref = `mailto:${contactEmail}`;

export const primaryNavItems = [
  { label: "Missions", href: "/#services", node: "missions" },
  { label: "Case files", href: "/#selected-work", node: "cases" },
  { label: "Runbook", href: "/#how-we-work", node: "runbook" },
  { label: "Crew", href: "/team", node: "team" },
  { label: "Join", href: "/careers", node: "careers" },
  { label: "Newswire", href: "/blog", node: "blog" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/code-labs-ab/" },
  { label: "Instagram", href: "https://www.instagram.com/codelabsab/" },
  { label: "GitHub", href: "https://github.com/codelabsab/" },
] as const;

export const clientLogos: ClientLogo[] = [
  { name: "Mojang", src: "/assets/customer/logo/mojang.svg", width: 96, height: 24 },
  { name: "DICE", src: "/assets/customer/logo/dice.svg", width: 96, height: 24 },
  { name: "Pricer", src: "/assets/customer/logo/pricer.svg", width: 96, height: 24 },
  { name: "PriceRunner", src: "/assets/customer/logo/pricerunner.svg", width: 110, height: 24 },
  { name: "TUI", src: "/assets/customer/logo/tui.svg", width: 70, height: 24 },
  { name: "NetEnt", src: "/assets/customer/logo/netent.svg", width: 96, height: 24 },
  { name: "Klarna", src: "/assets/customer/logo/klarna.svg", width: 96, height: 24 },
  { name: "SVT", src: "/assets/customer/logo/svt.svg", width: 70, height: 24 },
  { name: "ICA", src: "/assets/customer/logo/ica.svg", width: 70, height: 24 },
  { name: "Kindred", src: "/assets/customer/logo/kindred.svg", width: 96, height: 24 },
  { name: "H&M", src: "/assets/customer/logo/hm.svg", width: 48, height: 24 },
  { name: "Zebware", src: "/assets/customer/logo/zebware.svg", width: 96, height: 24 },
];

export const servicePillars: ServicePillar[] = [
  {
    title: "Platform & Cloud",
    description:
      "We help teams build and improve the cloud foundations they rely on, across Azure, GCP, Kubernetes, infrastructure as code, and day-to-day platform work.",
    candidateFocus:
      "You might work with cloud migration, Kubernetes, delivery pipelines, observability, or the kind of platform work that makes life easier for other engineers.",
  },
  {
    title: "DevOps & Developer Experience",
    description:
      "A large part of our work sits close to build systems, CI/CD, automation, testing, code quality, and the tooling that helps engineering teams ship with less friction.",
    candidateFocus:
      "That can mean improving CI, maintaining build systems, helping developers in their daily flow, or creating better paths from code to production.",
  },
  {
    title: "Product, Tools & Integrations",
    description:
      "We are mainly platform and DevOps focused, but we also do product work, internal tools, workflow layers, APIs, and integrations when that is where the real value is.",
    candidateFocus:
      "That can include React, Next.js, Node.js, .NET, frontend architecture, internal tooling, APIs, and the glue work that makes teams move faster.",
  },
  {
    title: "AI Rollout & Agentic Workflows",
    description:
      "We also work with practical enterprise AI adoption, from rollout and governance to automation and agentic workflows that fit real operating environments.",
    candidateFocus:
      "This is not AI as theatre. It is about making new capabilities work in real teams, with real constraints.",
  },
];

export const consultingAdvantages: Principle[] = [
  {
    title: "Broader exposure builds better engineers",
    description:
      "At one product company, you can spend years in the same stack, architecture, and decision culture. Consulting gives you exposure to more teams, more tools, and more ways of working.",
  },
  {
    title: "Breadth makes you more adaptable",
    description:
      "Working across multiple domains helps you recognize patterns faster, adapt with less friction, and build a career that is stronger than any single internal context.",
  },
];

export const environments: EnvironmentCard[] = [
  {
    title: "Gaming and developer enablement",
    description:
      "Work in gaming environments has included build systems, tooling, CI/CD, and helping developers across the organization work more effectively day to day.",
    contexts: ["Mojang", "DICE", "Build systems", "Developer tooling"],
  },
  {
    title: "Retail, e-commerce, and SaaS platforms",
    description:
      "We have experience in environments where delivery speed, cloud operations, platform maturity, and reliable automation matter across busy product organizations.",
    contexts: ["Pricer", "Adlibris", "PriceRunner", "Topgolf"],
  },
  {
    title: "Enterprise platform engineering",
    description:
      "Some assignments sit deep in internal platform work: pipelines, worker node optimization, infrastructure as code, automation around testing and quality, and Azure-based delivery environments.",
    contexts: ["Tele2 / TDC", "NetEnt", "Azure", "Kubernetes"],
  },
  {
    title: "Media and larger public systems",
    description:
      "The team also brings experience from larger organizations and critical environments where reliability, observability, and modernization work need to hold up in practice.",
    contexts: ["SVT", "ICA", "Reliability", "Observability"],
  },
  {
    title: "Product and web contexts",
    description:
      "Alongside the main platform focus, we also have experience from product and full-stack environments where frontend architecture and implementation matter to the overall delivery.",
    contexts: ["Finflow", "Nordiska Galleriet", "Tupi", "React / Next.js"],
  },
];

export const workScenarios: WorkScenario[] = [
  {
    title: "Modernizing delivery in established organizations",
    summary:
      "Helping teams move from fragile manual flows to smoother, more repeatable delivery through CI/CD, automation, testing, code quality work, and better internal foundations.",
    examples: ["CI/CD", "Pipelines", "Testing automation"],
  },
  {
    title: "Platform and cloud engineering with real operational stakes",
    summary:
      "Building or improving the cloud and Kubernetes foundations that products, internal platforms, and developer teams rely on every day.",
    examples: ["Azure", "GCP", "Kubernetes"],
  },
  {
    title: "Developer tooling and internal tools that make teams faster",
    summary:
      "Working close to build systems, workflow tooling, APIs, integrations, and developer experience in places where engineering leverage really matters.",
    examples: ["Build systems", "Internal tools", "Integrations"],
  },
  {
    title: "Selective product, frontend, and AI-adjacent delivery",
    summary:
      "Contributing in modern web and product contexts, plus enterprise AI rollout and automation work where new capabilities have to fit into real teams.",
    examples: ["React / Next.js", "Full-stack", "AI rollout"],
  },
];

export const selectedWork: SelectedWorkItem[] = [
  {
    eyebrow: "Gaming",
    title: "Build systems, CI/CD, and developer support in gaming environments",
    context:
      "In gaming-related environments such as Mojang and DICE, the work has included maintaining build systems and tools while acting close to CI/CD stakeholders across the organization.",
    challenge:
      "These are environments where developer productivity and delivery reliability matter at scale, and where internal engineering work has direct impact on many teams.",
    contribution:
      "Code Labs contributed through build tooling, CI/CD thinking, and practical developer enablement rather than staying at the edge of the engineering work.",
    candidateAngle:
      "Future hires can recognize the kind of work that improves other engineers' everyday experience, not just the product in front of the user.",
  },
  {
    eyebrow: "Platform",
    title: "Cloud, Kubernetes, and automation in retail-tech and product-heavy companies",
    context:
      "Across companies such as Pricer, Adlibris, PriceRunner, TUI, NetEnt, and Topgolf, the team has worked in platform and DevOps-heavy delivery environments.",
    challenge:
      "The recurring challenge is to help teams move faster with better infrastructure foundations, clearer automation, and more dependable delivery pipelines.",
    contribution:
      "That includes cloud-native setups, infrastructure as code, Kubernetes, migration work, and the operational pieces that keep modern platforms healthy.",
    candidateAngle:
      "For future hires, this means exposure to real platform engineering rather than slideware or advisory work detached from implementation.",
  },
  {
    eyebrow: "Internal platforms",
    title: "Delivery acceleration inside internal engineering teams",
    context:
      "Some assignments sit inside internal platform teams working on CI/CD, pipelines, worker node optimization, Docker, Kubernetes, test automation, and code-quality tooling.",
    challenge:
      "The goal is usually to reduce friction for product teams, improve reliability, and create a more scalable delivery setup across the organization.",
    contribution:
      "Code Labs contributes hands-on engineering: building the tooling, tuning the workflows, and improving how engineering organizations ship software.",
    candidateAngle:
      "This is attractive for engineers who enjoy making whole organizations better, not only delivering isolated features.",
  },
  {
    eyebrow: "AI rollout",
    title: "Enterprise AI adoption grounded in real operations",
    context:
      "The team also works with AI rollout, automation, and agentic workflows inside larger organizations where new capabilities have to fit existing setups and delivery realities.",
    challenge:
      "The challenge is not only model capability, but governance, integration, developer workflows, and making AI useful inside real engineering environments.",
    contribution:
      "Code Labs brings a practical approach to rollout, tooling, and automation instead of treating AI as a disconnected innovation exercise.",
    candidateAngle:
      "For new hires, it is a chance to work on modern problems without losing the engineering discipline that production environments require.",
  },
  {
    eyebrow: "Internal initiative",
    title: "Hackathon-born ideas that turn into real projects",
    context:
      "Internal or semi-internal initiatives such as Mealplan / Finflow show that Code Labs also makes room for experimentation, hackathon energy, and building ideas beyond client work.",
    challenge:
      "These projects require the same fundamentals as client delivery: web and mobile thinking, auth, testing, and a willingness to explore new ideas quickly.",
    contribution:
      "They show that internal momentum is real, and that curiosity has a place alongside client work.",
    candidateAngle:
      "Future hires can expect room for certifications, upskilling, internal initiatives, and hands-on learning outside the narrowest interpretation of billable work.",
  },
];

export const howWeWorkPrinciples: Principle[] = [
  {
    title: "Hands-on",
    description:
      "Code Labs is for engineers who want to build, modernize, automate, and improve real things rather than stay at the PowerPoint layer.",
  },
  {
    title: "Small-company closeness",
    description:
      "The company is small enough to feel human. People know each other, support each other, and contribute to the company beyond a single assignment.",
  },
  {
    title: "Low-ego competence",
    description:
      "You can learn from senior colleagues, share problems early, and work in teams where practical competence matters more than performance.",
  },
  {
    title: "Growth with structure",
    description:
      "Onboarding, team introductions, career goals, assignment goals, education goals, internal projects, and meetups create a clearer path for development over time.",
  },
];

export const growthSupport: Principle[] = [
  {
    title: "Onboarding and team introductions",
    description:
      "People get context, support, and real introductions instead of being dropped into an assignment and left to figure everything out alone.",
  },
  {
    title: "Goals, learning, and certifications",
    description:
      "Growth is treated as something worth discussing explicitly: what you want to learn, what the assignment needs, and how that connects to certifications, focused learning, and practical experimentation.",
  },
  {
    title: "Internal projects and meetups",
    description:
      "Learning also happens between assignments through internal initiatives, demos, meetups, and shared problem solving.",
  },
];

export const lifeSignals: Principle[] = [
  {
    title: "Conference trips and meetups",
    description:
      "Recent team activity includes KubeCon Europe 2026 and ongoing meetup energy, which signals a company that stays active in the wider technical community.",
  },
  {
    title: "Recruiting lunches and employer-brand momentum",
    description:
      "The company invests time in recruiting, outreach, and building a place people actually want to join.",
  },
  {
    title: "Sports, dinners, and shared time together",
    description:
      "There is room for activities, meals, internal ideas, and sports support without pretending that culture is a substitute for good work.",
  },
];

export const benefits: Benefit[] = [
  {
    title: "Flexible compensation and benefits setup",
    description:
      "The package can be structured with some flexibility instead of forcing everyone into one rigid model.",
  },
  {
    title: "Pension and salary-switching options",
    description:
      "Code Labs offers pension setup together with the possibility to increase pension through salary switching.",
  },
  {
    title: "Tools that support the job",
    description:
      "There is budget for work tools such as computer and phone so people can build with equipment that fits the work.",
  },
  {
    title: "Wellness allowance",
    description:
      "A wellness allowance of SEK 5,000 per year supports training and everyday wellbeing.",
  },
  {
    title: "Food benefit",
    description:
      "Food benefit support is available through Edenred / Rikskuponger with employer subsidy.",
  },
  {
    title: "Healthcare and income protection",
    description:
      "Healthcare insurance and longer-term illness or income protection coverage are part of the offer.",
  },
  {
    title: "Parental pay support",
    description:
      "Parental pay support is included after the qualifying period.",
  },
  {
    title: "Support for sports and endurance events",
    description:
      "The company supports activities such as triathlon, marathon, Vasaloppet, and similar goals people care about outside work.",
  },
  {
    title: "Optional car / leasing setup",
    description:
      "Depending on arrangement, there can also be optional benefit car or leasing support.",
  },
  {
    title: "Upskilling and certifications",
    description:
      "Certifications, learning, and deliberate upskilling are actively encouraged rather than treated as extras.",
  },
];

export const benefitThemes: BenefitTheme[] = [
  {
    title: "Security and flexibility",
    intro:
      "The package is designed to feel sustainable over time, not optimized around one narrow compensation story.",
    items: [
      "Pension setup with the possibility to increase pension through salary switching.",
      "Healthcare insurance together with longer-term illness and income protection coverage.",
      "Parental pay support after the qualifying period.",
      "Optional benefit car or leasing setup depending on arrangement.",
    ],
  },
  {
    title: "Everyday support",
    intro:
      "The basics around work, wellbeing, and daily life are treated as part of the offer rather than afterthoughts.",
    items: [
      "Budget for work tools such as computer and phone.",
      "SEK 5,000 per year in wellness allowance.",
      "Food benefit support through Edenred / Rikskuponger with employer subsidy.",
      "Support for sports goals such as triathlon, marathon, Vasaloppet, and similar activities.",
    ],
  },
  {
    title: "Growth that keeps moving",
    intro:
      "Learning is part of the job here, not something people have to squeeze in around it.",
    items: [
      "Support for certifications and deliberate upskilling.",
      "Internal projects, demos, and shared initiatives that create room to build beyond client work.",
      "A flexible compensation and benefits setup that can be structured with some room for the individual.",
    ],
  },
];

export const careerReasons: Principle[] = [
  {
    title: "Grow through variety",
    description:
      "Work across different companies, stacks, domains, and engineering cultures instead of staying in one internal environment for years.",
  },
  {
    title: "Do work that matters",
    description:
      "The work is grounded in cloud infrastructure, platform engineering, CI/CD, observability, tooling, and modernization work that actually matters in production.",
  },
  {
    title: "Join a small but strong team",
    description:
      "Code Labs is small enough to feel close and practical, but broad enough to offer real variety, senior support, and a career that keeps opening up.",
  },
];

export const careerAreas: CareerArea[] = [
  {
    title: "Cloud platforms and Kubernetes",
    description:
      "Azure, GCP, cloud-native platforms, Kubernetes, migrations, and the operational pieces around them.",
  },
  {
    title: "CI/CD and delivery engineering",
    description:
      "Build systems, pipelines, release workflows, testing automation, and developer enablement.",
  },
  {
    title: "Internal tooling and integrations",
    description:
      "Workflow tooling, APIs, integration layers, platform glue, and automation that makes larger environments easier to work in.",
  },
  {
    title: "Reliability and observability",
    description:
      "Monitoring, dashboards, incident-focused thinking, and the work that makes production calmer and more transparent.",
  },
  {
    title: "Modernization and full-stack breadth",
    description:
      "Selective frontend and product delivery, .NET and web application work, and modernization across existing platforms.",
  },
  {
    title: "AI and agentic workflows",
    description:
      "Enterprise AI rollout, automation, and practical experimentation where new capabilities have to integrate with real delivery environments.",
  },
];

export const teamMembers: TeamMemberSummary[] = [
  {
    name: "Kami Gerami",
    role: "Platform, cloud, and AI enablement",
    summary:
      "Kami brings platform and DevOps leadership together with hands-on cloud, automation, internal tooling, training, and AI rollout experience.",
    humanDetail: "Open-source contributions and practical automation run through his work.",
    imageUrl: "/assets/team/kami.jpeg",
    profileUrl: "https://github.com/kamigerami",
  },
  {
    name: "Pär Berge",
    role: "Platform engineering and cloud migration",
    summary:
      "Pär works across AWS, Azure, GCP, Kubernetes, Terraform, Ansible, Argo, CI/CD, and the kind of platform work that helps teams move safely and faster.",
    humanDetail: "He also brings a long-running interest in open source and practical automation.",
    imageUrl: "/assets/team/paer.jpeg",
    profileUrl: "https://github.com/parberge",
  },
  {
    name: "Tommy Malmqvist",
    role: "Infrastructure, reliability, and modernization",
    summary:
      "Tommy represents the part of Code Labs that works close to operations, critical systems, automation, modernization, and AI rollout across larger organizations.",
    humanDetail: "His background includes enterprise environments where reliability has to work in practice.",
    imageUrl: "/assets/team/tommy.jpeg",
    profileUrl: "https://github.com/tommymalmqvist",
  },
  {
    name: "Love Kempe Lundin",
    role: "Full-stack delivery and product implementation",
    summary:
      "Love adds product and frontend breadth through React, Next.js, Node.js, .NET, and implementation from design to code in modern web environments.",
    humanDetail: "He also reflects the hackathon and internal-project energy that gives the team extra momentum.",
    imageUrl: "/assets/team/love.jpeg",
    profileUrl: "https://github.com/kempe-codelabs",
  },
  {
    name: "Max Povalinsky",
    role: "Senior SRE and observability",
    summary:
      "Max brings heavy SRE focus from observability-rich environments and helps turn production complexity into calmer, more reliable setups.",
    humanDetail: "He is strongest where automation, observability, and pragmatic incident response meet.",
    imageUrl: "/assets/team/max_povalinsky.jpg",
  },
  {
    name: "Angelica Törnros",
    role: "Recruitment and people",
    summary:
      "Angelica represents the part of Code Labs that makes growth, hiring, and the human side of the company feel intentional rather than accidental.",
    humanDetail: "She helps keep recruiting warm, structured, and grounded in what people are actually looking for.",
    imageUrl: "/assets/team/angelica.jpeg",
  },
  {
    name: "Mauricio Saez",
    role: "DevOps and collaborative delivery",
    summary:
      "Mauricio brings practical DevOps experience together with the kind of team energy that makes knowledge sharing and day-to-day collaboration easier.",
    humanDetail: "He is a good example of the low-ego, positive atmosphere Code Labs wants to protect.",
    imageUrl: "/assets/team/mauricio.jpeg",
    profileUrl: "https://github.com/marresgit",
  },
  {
    name: "Mimmi & Penny",
    role: "Office morale",
    summary:
      "The mascots are not the point of the company, but they say something true about it: Code Labs wants serious engineering without turning everyday work into something sterile.",
    humanDetail: "Good work and good company are both part of the offer.",
    imageUrl: "/assets/team/mimmi-penny.jpg",
  },
];

export const teamGroups: TeamGroup[] = [
  {
    title: "Platform, cloud, and modernization",
    description:
      "This is the part of Code Labs that lives close to platform foundations, infrastructure, migration work, automation, and the tooling that helps larger engineering organizations move faster with less friction.",
    members: [
      {
        name: "Kami Gerami",
        role: "Platform, cloud, and AI enablement",
        summary:
          "Hands-on leadership across platform engineering, cloud automation, internal tooling, training, and practical AI rollout.",
        imageUrl: "/assets/team/kami.jpeg",
      },
      {
        name: "Pär Berge",
        role: "Platform engineering and cloud migration",
        summary:
          "Deep experience across AWS, Azure, GCP, Kubernetes, Terraform, Ansible, Argo, and the platform work that helps teams ship safely.",
        imageUrl: "/assets/team/paer.jpeg",
      },
      {
        name: "Tommy Malmqvist",
        role: "Infrastructure, reliability, and modernization",
        summary:
          "Works close to operations, automation, critical systems, modernization, and enterprise environments where reliability has to hold up in practice.",
        imageUrl: "/assets/team/tommy.jpeg",
      },
    ],
  },
  {
    title: "Reliability, delivery, and calmer production systems",
    description:
      "Another important part of the company is the work that makes production less chaotic: observability, incident-minded engineering, collaboration, and the delivery habits that keep things dependable.",
    members: [
      {
        name: "Max Povalinsky",
        role: "Senior SRE and observability",
        summary:
          "Strong where automation, observability, incident response, and reliable production work meet.",
        imageUrl: "/assets/team/max_povalinsky.jpg",
      },
      {
        name: "Mauricio Saez",
        role: "DevOps and collaborative delivery",
        summary:
          "Brings practical DevOps experience together with the low-ego, collaborative energy that makes knowledge sharing easier.",
        imageUrl: "/assets/team/mauricio.jpeg",
      },
    ],
  },
  {
    title: "Product breadth and the human side of the company",
    description:
      "Code Labs is mainly platform and DevOps focused, but product delivery, recruiting, and the people side of the company are also part of what makes the whole place work.",
    members: [
      {
        name: "Love Kempe Lundin",
        role: "Full-stack delivery and product implementation",
        summary:
          "Adds product and frontend breadth through React, Next.js, Node.js, .NET, and implementation from design to code.",
        imageUrl: "/assets/team/love.jpeg",
      },
      {
        name: "Angelica Törnros",
        role: "Recruitment and people",
        summary:
          "Helps make growth, hiring, and the human side of Code Labs feel intentional, warm, and grounded.",
        imageUrl: "/assets/team/angelica.jpeg",
      },
    ],
  },
];

/* ==================================================================
   STOCKHOLM ON-CALL
   Game-layer content. Everything below re-voices the facts above;
   it does not add clients, numbers or claims. Stars, HUD values and
   severities are playful decoration and are labelled as such in the UI.
   ================================================================== */


export const assetBase = "/assets/stockholm-oncall";

export const tagline = "Keep the city running.";
export const motto = "This is not AI as theatre.";

/* ---------- Missions (services) ---------- */

export type Mission = {
  id: string;
  /** Plain, searchable service name. */
  title: string;
  /** Game-voice mission name. */
  missionTitle: string;
  /** Pager level, 1–5. Decorative difficulty, not a claim. */
  severity: 1 | 2 | 3 | 4 | 5;
  briefing: string;
  loadout: string[];
  objective: string;
  reward: string;
  missionImage: string;
  imageAlt: string;
  meta: string;
  tone: AccentTone;
  sideQuest?: boolean;
};

const [platformPillar, devopsPillar, productPillar, aiPillar] = servicePillars;

const reliabilityArea = careerAreas[3];
const reliabilityEnvironment = environments[3];

export const missions: Mission[] = [
  {
    id: "platform",
    title: platformPillar.title,
    missionTitle: "Build the City",
    severity: 3,
    briefing: platformPillar.description,
    loadout: ["Kubernetes", "Azure", "GCP", "Terraform / IaC", "GitOps"],
    objective: workScenarios[1].summary,
    reward: platformPillar.candidateFocus,
    missionImage: `${assetBase}/mission-platform.webp`,
    imageAlt:
      "Illustration of a harbor at dusk where cranes stack glowing containers into neat clusters.",
    meta: "kind: platform · scope: cloud-foundations",
    tone: "cyan",
  },
  {
    id: "devops",
    title: devopsPillar.title,
    missionTitle: "Ship Faster, Sleep Better",
    severity: 2,
    briefing: devopsPillar.description,
    loadout: ["CI/CD", "Build systems", "Test automation", "Code quality", "Developer flow"],
    objective: workScenarios[0].summary,
    reward: devopsPillar.candidateFocus,
    missionImage: `${assetBase}/mission-devops.webp`,
    imageAlt:
      "Illustration of a night-time highway interchange drawn as a delivery pipeline with green and red status lights.",
    meta: "kind: delivery · scope: code-to-production",
    tone: "orange",
  },
  {
    // Built only from existing facts: the reliability career area, the
    // media/public-systems environment and the SRE roles on the team.
    id: "sre",
    title: "SRE & Observability",
    missionTitle: "Keep the Lights On",
    severity: 5,
    briefing: `${reliabilityArea.description} ${reliabilityEnvironment.description}`,
    loadout: ["SLOs", "Alerting", "Observability", "Incident response", "Postmortems"],
    objective:
      "Turn production complexity into calmer, more reliable setups, with reliability that holds up in practice.",
    reward:
      "You work where automation, observability, and pragmatic incident response meet, alongside senior SRE colleagues.",
    missionImage: `${assetBase}/mission-sre.webp`,
    imageAlt:
      "Illustration of a lighthouse in the archipelago at night sweeping its beam over a dark sea of graphs.",
    meta: "kind: reliability · scope: production",
    tone: "pink",
  },
  {
    id: "ai",
    title: aiPillar.title,
    missionTitle: "Bring AI to the City, Safely",
    severity: 4,
    briefing: aiPillar.description,
    loadout: ["Rollout", "Governance", "Evals & guardrails", "Agentic workflows", "LLM observability & cost"],
    objective: selectedWork[3].challenge,
    reward: aiPillar.candidateFocus,
    missionImage: `${assetBase}/mission-ai.webp`,
    imageAlt:
      "Illustration of fireflies over the archipelago at dusk flowing through a glowing gate before reaching the city.",
    meta: "kind: ai-rollout · human-in-the-loop: true",
    tone: "violet",
  },
  {
    id: "tools",
    title: productPillar.title,
    missionTitle: "Side Quests That Matter",
    severity: 1,
    briefing: productPillar.description,
    loadout: ["React", "Next.js", "Node.js", ".NET", "APIs", "Internal tools"],
    objective: workScenarios[2].summary,
    reward: productPillar.candidateFocus,
    missionImage: `${assetBase}/mission-tools.webp`,
    imageAlt:
      "Illustration of a neon workshop where engineers assemble tools from glowing modular blocks.",
    meta: "kind: side-quest · scope: tools-and-integrations",
    tone: "cyan",
    sideQuest: true,
  },
];

/* ---------- The city (environments) ---------- */

export type District = EnvironmentCard & {
  district: string;
  /** Position on the 0–100 map canvas. */
  x: number;
  y: number;
  tone: AccentTone;
};

const districtMeta: Array<Pick<District, "district" | "x" | "y" | "tone">> = [
  { district: "Gaming District", x: 18, y: 62, tone: "pink" },
  { district: "Retail Strip", x: 38, y: 30, tone: "orange" },
  { district: "Enterprise Harbor", x: 57, y: 68, tone: "cyan" },
  { district: "Media Quarter", x: 74, y: 34, tone: "violet" },
  { district: "Product Row", x: 88, y: 64, tone: "orange" },
];

export const districts: District[] = environments.map((environment, index) => ({
  ...environment,
  ...districtMeta[index],
}));

/* ---------- Case files (selected work, postmortem format) ---------- */

export type CaseFile = SelectedWorkItem & {
  id: string;
  location: string;
  severity: 1 | 2 | 3 | 4 | 5;
};

const caseMeta: Array<Pick<CaseFile, "id" | "location" | "severity">> = [
  { id: "CF-001", location: "Gaming District", severity: 3 },
  { id: "CF-002", location: "Retail Strip", severity: 4 },
  { id: "CF-003", location: "Enterprise Harbor", severity: 3 },
  { id: "CF-004", location: "City-wide", severity: 4 },
  { id: "CF-005", location: "Crew HQ", severity: 1 },
];

export const caseFiles: CaseFile[] = selectedWork.map((item, index) => ({
  ...item,
  ...caseMeta[index],
}));

export const caseFileOutcomeNote =
  "Client confidential. We do not publish client numbers, so outcomes here stay qualitative.";

/* ---------- Runbook (how an engagement works) ---------- */

export type RunbookStage = {
  stage: string;
  summary: string;
};

export const runbook: RunbookStage[] = [
  {
    stage: "Recon",
    summary:
      "We start with the environment as it actually is: the stack, the delivery flow, the teams, and the constraints.",
  },
  {
    stage: "Briefing",
    summary:
      "Goals are made explicit: what the assignment needs, and how the work connects to the people doing it.",
  },
  {
    stage: "Deploy",
    summary:
      "Hands-on engineering inside your team: building the tooling, tuning the workflows, and improving how software ships.",
  },
  {
    stage: "Operate",
    summary:
      "The work has to hold up in practice, so reliability, observability, and automation are part of the job from the start.",
  },
  {
    stage: "Handover",
    summary:
      "Problems and knowledge are shared early, so your team owns what was built when we step back.",
  },
];

/* ---------- Crew ---------- */

export type CrewSkill = { name: string; stars: 1 | 2 | 3 | 4 | 5 };

export type CrewMember = TeamMemberSummary & {
  slug: string;
  /** Character class: the engineering role. */
  class: string;
  classSlug: string;
  /** `kind` in the kubectl-describe YAML view. */
  kind: string;
  faction: string;
  skills: CrewSkill[];
  focus: string[];
  specialAbility: string;
  onCall: boolean;
  portraitUrl: string;
  squareUrl: string;
  portraitAlt: string;
  tone: AccentTone;
  secret?: boolean;
};

export const factions = [
  { slug: "platform-cloud", title: "Platform & Cloud", description: teamGroups[0].description },
  { slug: "reliability-delivery", title: "Reliability & Delivery", description: teamGroups[1].description },
  { slug: "product-people", title: "Product & People", description: teamGroups[2].description },
] as const;

type CrewExtra = Omit<CrewMember, keyof TeamMemberSummary>;

const crewExtras: Record<string, CrewExtra> = {
  "Kami Gerami": {
    slug: "kami-gerami",
    class: "AI & Platform Engineer",
    classSlug: "ai-platform",
    kind: "Engineer",
    faction: "platform-cloud",
    skills: [
      { name: "AI rollout", stars: 5 },
      { name: "Platform & cloud", stars: 5 },
      { name: "Internal tooling", stars: 4 },
    ],
    focus: ["platform", "cloud-automation", "internal-tooling", "ai-rollout"],
    specialAbility: "Rollout Mode: takes AI from pilot to something real teams can run.",
    onCall: true,
    portraitUrl: `${assetBase}/crew-kami.webp`,
    squareUrl: `${assetBase}/crew-kami-square.webp`,
    portraitAlt:
      "Illustrated portrait of Kami Gerami, AI and platform engineer, on a rooftop over Södermalm at dusk.",
    tone: "violet",
  },
  "Pär Berge": {
    slug: "par-berge",
    class: "Platform Engineer",
    classSlug: "platform",
    kind: "Engineer",
    faction: "platform-cloud",
    skills: [
      { name: "Kubernetes", stars: 5 },
      { name: "Terraform & Ansible", stars: 5 },
      { name: "Cloud migration", stars: 5 },
    ],
    focus: ["kubernetes", "terraform", "argo", "ci-cd", "cloud-migration"],
    specialAbility: "Migration Day: keeps a cloud move boring, the way it should be.",
    onCall: true,
    portraitUrl: `${assetBase}/crew-paer.webp`,
    squareUrl: `${assetBase}/crew-paer-square.webp`,
    portraitAlt:
      "Illustrated portrait of Pär Berge, platform engineer, at Slussen with containers streaming toward a cloud.",
    tone: "cyan",
  },
  "Tommy Malmqvist": {
    slug: "tommy-malmqvist",
    class: "Infrastructure & Modernization Engineer",
    classSlug: "infrastructure",
    kind: "Engineer",
    faction: "platform-cloud",
    skills: [
      { name: "Infrastructure", stars: 5 },
      { name: "Modernization", stars: 5 },
      { name: "Automation", stars: 4 },
    ],
    focus: ["operations", "critical-systems", "automation", "modernization"],
    specialAbility: "Legacy Whisperer: modernizes critical systems while they keep running.",
    onCall: true,
    portraitUrl: `${assetBase}/crew-tommy.webp`,
    squareUrl: `${assetBase}/crew-tommy-square.webp`,
    portraitAlt:
      "Illustrated portrait of Tommy Malmqvist, infrastructure engineer, in a server aisle lit pink and cyan.",
    tone: "pink",
  },
  "Love Kempe Lundin": {
    slug: "love-kempe-lundin",
    class: "Full-Stack Engineer",
    classSlug: "full-stack",
    kind: "Engineer",
    faction: "product-people",
    skills: [
      { name: "React & Next.js", stars: 5 },
      { name: "Node.js & .NET", stars: 4 },
      { name: "Design to code", stars: 5 },
    ],
    focus: ["react", "nextjs", "nodejs", "dotnet"],
    specialAbility: "Design-to-Code: ships the interface the mockup promised.",
    onCall: false,
    portraitUrl: `${assetBase}/crew-love.webp`,
    squareUrl: `${assetBase}/crew-love-square.webp`,
    portraitAlt:
      "Illustrated portrait of Love Kempe Lundin, full-stack engineer, in a neon-lit Gamla Stan alley.",
    tone: "orange",
  },
  "Max Povalinsky": {
    slug: "max-povalinsky",
    class: "Site Reliability Engineer",
    classSlug: "sre",
    kind: "Engineer",
    faction: "reliability-delivery",
    skills: [
      { name: "Observability", stars: 5 },
      { name: "Incident response", stars: 5 },
      { name: "Automation", stars: 5 },
    ],
    focus: ["observability", "reliability", "incident-response"],
    specialAbility: "Calm Under Page: turns alert noise into signal.",
    onCall: true,
    portraitUrl: `${assetBase}/crew-max.webp`,
    squareUrl: `${assetBase}/crew-max-square.webp`,
    portraitAlt:
      "Illustrated portrait of Max Povalinsky, SRE, in a control room full of monitoring graphs.",
    tone: "pink",
  },
  "Angelica Törnros": {
    slug: "angelica-tornros",
    class: "People Lead",
    classSlug: "people",
    kind: "PeopleLead",
    faction: "product-people",
    skills: [
      { name: "Recruiting", stars: 5 },
      { name: "Crew assembly", stars: 5 },
      { name: "Structure & warmth", stars: 5 },
    ],
    focus: ["recruiting", "growth", "people"],
    specialAbility: "Crew Assembly: finds the people who actually fit.",
    onCall: false,
    portraitUrl: `${assetBase}/crew-angelica.webp`,
    squareUrl: `${assetBase}/crew-angelica-square.webp`,
    portraitAlt:
      "Illustrated portrait of Angelica Törnros, people lead, on an archipelago speedboat at golden hour.",
    tone: "orange",
  },
  "Mauricio Saez": {
    slug: "mauricio-saez",
    class: "DevOps Engineer",
    classSlug: "devops",
    kind: "Engineer",
    faction: "reliability-delivery",
    skills: [
      { name: "DevOps", stars: 5 },
      { name: "Collaboration", stars: 5 },
      { name: "Knowledge sharing", stars: 5 },
    ],
    focus: ["devops", "delivery", "knowledge-sharing"],
    specialAbility: "Green Pipeline: makes knowledge sharing part of the build.",
    onCall: true,
    portraitUrl: `${assetBase}/crew-mauricio.webp`,
    squareUrl: `${assetBase}/crew-mauricio-square.webp`,
    portraitAlt:
      "Illustrated portrait of Mauricio Saez, DevOps engineer, at the container harbor at sunset.",
    tone: "cyan",
  },
  "Mimmi & Penny": {
    slug: "mimmi-penny",
    class: "Morale Officers",
    classSlug: "morale",
    kind: "MoraleOfficer",
    faction: "product-people",
    skills: [
      { name: "Office morale", stars: 5 },
      { name: "Snack detection", stars: 5 },
      { name: "Code review", stars: 1 },
    ],
    focus: ["morale", "naps", "snacks"],
    specialAbility: "Morale Boost: lifts team spirit within petting range.",
    onCall: false,
    portraitUrl: `${assetBase}/crew-mimmi-penny.webp`,
    squareUrl: `${assetBase}/crew-mimmi-penny-square.webp`,
    portraitAlt:
      "Illustrated portrait of Mimmi and Penny, the office dogs, in tiny sunglasses on a server cabinet.",
    tone: "violet",
    secret: true,
  },
};

export const crew: CrewMember[] = teamMembers.map((member) => ({
  ...member,
  ...crewExtras[member.name],
}));

const yamlString = (value: string) => JSON.stringify(value);

/** The `kubectl describe`-style view of a crew member. Always valid YAML. */
export function crewYaml(member: CrewMember): string {
  return [
    "apiVersion: crew.codelabs.se/v1",
    `kind: ${member.kind}`,
    "metadata:",
    `  name: ${member.slug}`,
    "  labels:",
    `    class: ${member.classSlug}`,
    `    faction: ${member.faction}`,
    "    city: stockholm",
    "spec:",
    `  role: ${yamlString(member.role)}`,
    "  focus:",
    ...member.focus.map((item) => `    - ${item}`),
    `  onCall: ${member.onCall}`,
    `  specialAbility: ${yamlString(member.specialAbility)}`,
  ].join("\n");
}

export const crewClosingLine = "Serious engineering does not need to feel sterile.";

/* ---------- Careers: classes and skill trees ---------- */

export type CareerClass = CareerArea & {
  id: string;
  className: string;
  tone: AccentTone;
  /** Two branches of real tool progressions. Labels only, not certifications. */
  skillTree: [string[], string[]];
};

const classMeta: Array<Omit<CareerClass, keyof CareerArea>> = [
  {
    id: "platform",
    className: "Platform Engineer",
    tone: "cyan",
    skillTree: [
      ["Linux & networking", "Docker", "Kubernetes", "Operators & CRDs", "Multi-cluster"],
      ["Azure / GCP", "Terraform", "GitOps", "Policy as code", "Platform as a product"],
    ],
  },
  {
    id: "devops",
    className: "DevOps Engineer",
    tone: "orange",
    skillTree: [
      ["Git workflows", "CI pipelines", "Build caching", "Release automation", "Progressive delivery"],
      ["Unit tests", "Test automation", "Quality gates", "Supply-chain security", "Developer enablement"],
    ],
  },
  {
    id: "tooling",
    className: "Internal Tooling Engineer",
    tone: "violet",
    skillTree: [
      ["Scripting", "CLIs", "APIs", "Workflow tooling", "Internal platforms"],
      ["Webhooks", "Integrations", "Event-driven glue", "Automation", "Self-service"],
    ],
  },
  {
    id: "sre",
    className: "Site Reliability Engineer",
    tone: "pink",
    skillTree: [
      ["Monitoring", "SLOs & error budgets", "Incident command", "Chaos & resilience", "Capacity & cost"],
      ["Logs", "Metrics", "Traces", "Alert design", "Blameless postmortems"],
    ],
  },
  {
    id: "full-stack",
    className: "Full-Stack & Modernization Engineer",
    tone: "orange",
    skillTree: [
      ["TypeScript", "React", "Next.js", "Frontend architecture", "Design systems"],
      [".NET / Node.js", "APIs", "Auth", "Legacy modernization", "Cloud-native apps"],
    ],
  },
  {
    id: "ai",
    className: "AI Engineer",
    tone: "violet",
    skillTree: [
      ["LLM APIs", "RAG", "Evals & guardrails", "Agentic workflows", "AI governance & rollout"],
      ["Prompting", "Tool use", "LLM observability", "Cost & latency tuning", "Human-in-the-loop"],
    ],
  },
];

export const careerClasses: CareerClass[] = careerAreas.map((area, index) => ({
  ...area,
  ...classMeta[index],
}));

export type Perk = Benefit & { icon: string };

const perkIcons = ["sliders", "piggy", "laptop", "heart", "fork", "shield", "stroller", "medal", "car", "book"];

export const perks: Perk[] = benefits.map((benefit, index) => ({
  ...benefit,
  icon: perkIcons[index],
}));

/** Side quests link to real posts in src/_posts. */
export const sideQuests = [
  {
    title: "KubeCon Europe 2026",
    kind: "Conference",
    href: "/blog/code-labs-kubecon-amsterdam-2026",
    summary: lifeSignals[0].description,
  },
  {
    title: "Hackathon, VR & dinner",
    kind: "Hackathon",
    href: "/blog/hackaton-vr-middag",
    summary: selectedWork[4].contribution,
  },
  {
    title: "Workflow Manager",
    kind: "Internal project",
    href: "/blog/workflow-manager",
    summary: growthSupport[2].description,
  },
  {
    title: "Rust & OCPP, open sourced",
    kind: "Open source",
    href: "/blog/rust-ocpp",
    summary: "We open source our lib written in Rust for the OCPP standard.",
  },
] as const;

/* ---------- Newswire (blog) ---------- */

export const newswireFilters = ["all", "tech", "ai", "kubernetes", "devops", "crewlife"] as const;
export type NewswireTag = (typeof newswireFilters)[number];

/** Slug → tags for tech posts. Anything not listed is #crewlife. */
export const techPostTags: Record<string, string[]> = {
  "orchestrate-docker-containers-with-ansible": ["tech", "devops", "ansible", "docker"],
  "elixir-and-why-you-should-use-it": ["tech", "elixir"],
  "elixir-adding-support-in-app": ["tech", "elixir"],
  "rust-ocpp": ["tech", "rust"],
  "meal-planning-with-chatgpt": ["tech", "ai"],
  "workflow-manager": ["tech", "devops"],
  "code-labs-kubecon-amsterdam-2026": ["tech", "kubernetes"],
  "hackaton-vr-middag": ["crewlife", "hackathon"],
};

/* ---------- Loading-screen tips (real advice) ---------- */

export const loadingTips = [
  "Alert on symptoms, not causes.",
  "Your error budget is a feature. Spend it.",
  "Pin your base images.",
  "Evals before vibes. Measure your LLM pipeline.",
  "Runbooks are love letters to future you.",
  "If it isn't in Git, it doesn't exist.",
  "Rollbacks should be boring.",
  "Every page should be actionable. Delete the ones that aren't.",
  "Mitigate first. Root-cause after the bleeding stops.",
] as const;

export const loadingScreens = [1, 2, 3, 4, 5].map((n) => `${assetBase}/loading-${n}.webp`);

/* ---------- Decorative HUD + log stream ---------- */

/** Obviously playful, labelled `demo` wherever shown. Never a claimed result. */
export const hudChips = [
  { key: "coffee_level", value: "87%", tone: "ok" },
  { key: "pager_noise", value: "low", tone: "ok" },
  { key: "fika_slo", value: "met", tone: "info" },
  { key: "yaml_indent", value: "2 spaces", tone: "warn" },
] as const;

/** Decorative background log lines (logfmt). Not real telemetry. */
export const logRainLines = [
  'ts=03:14:07Z level=info msg="reconcile complete" controller=deployment namespace=city',
  'ts=03:14:09Z level=info msg="scaled up" hpa=newswire replicas=4 reason=cpu',
  'ts=03:14:12Z level=warn msg="certificate renews in 29d" issuer=letsencrypt-prod',
  'ts=03:14:15Z level=info msg="pipeline succeeded" stage=deploy env=production duration=4m12s',
  'ts=03:14:21Z level=info msg="eval suite passed" suite=regression cases=128',
  'ts=03:14:26Z level=info msg="probe ok" probe=readiness path=/healthz status=200',
  'ts=03:14:31Z level=warn msg="node pressure" node=harbor-3 condition=DiskPressure',
  'ts=03:14:33Z level=info msg="pod evicted and rescheduled" pod=ferry-7d9f node=harbor-4',
  'ts=03:14:40Z level=info msg="terraform plan" add=2 change=1 destroy=0',
  'ts=03:14:44Z level=info msg="sync ok" app=city-platform revision=HEAD status=Healthy',
  'ts=03:14:52Z level=info msg="alert resolved" alertname=HighLatencyP99 service=metro',
  'ts=03:14:58Z level=info msg="coffee refilled" office=stockholm demo=true',
] as const;

/* ---------- Terminal easter egg ---------- */

export const terminalHelp = [
  ["help", "show this list"],
  ["kubectl get crew", "list the team"],
  ["kubectl describe crew <name>", "one crew member as YAML"],
  ["kubectl get missions", "list what we do"],
  ["kubectl logs careers", "why people join"],
  ["sudo join", "open careers"],
  ["ping codelabs", "open contact"],
  ["uptime", "ask a silly question"],
  ["clear", "clear the screen"],
  ["exit", "close the console"],
] as const;

/* ---------- Incident mini-game ---------- */

export type IncidentRound = {
  alert: string;
  severity: "SEV-1" | "SEV-2" | "SEV-3";
  detail: string;
  options: string[];
  /** Index into `options`. */
  answer: number;
  why: string;
};

export const incidentRounds: IncidentRound[] = [
  {
    alert: "HighLatencyP99",
    severity: "SEV-2",
    detail: "p99 latency on checkout crossed the SLO threshold 10 minutes after a deploy.",
    options: [
      "Check what changed and roll back the deploy that lines up with the spike",
      "Restart every pod in the namespace",
      "Raise the latency threshold so the alert clears",
    ],
    answer: 0,
    why: "Most incidents follow a change. Correlate with recent deploys and mitigate with a rollback before digging into root cause.",
  },
  {
    alert: "PodOOMKilled",
    severity: "SEV-3",
    detail: "A container keeps getting OOMKilled and its restart count is climbing.",
    options: [
      "Remove the memory limit entirely",
      "Compare actual memory usage with the limit to tell a leak from a limit that is too low",
      "Delete the pod until it stays up",
    ],
    answer: 1,
    why: "OOMKilled means the container hit its limit. Look at usage over time first: a steady climb is a leak, a flat line near the limit is a sizing problem. Removing limits just moves the risk to the node.",
  },
  {
    alert: "CertExpiringSoon",
    severity: "SEV-3",
    detail: "The TLS certificate for the public API expires in 6 days. Auto-renewal should have run already.",
    options: [
      "Silence the alert for a week",
      "Wait for expiry to confirm the alert is real",
      "Renew it now, then find out why auto-renewal did not fire",
    ],
    answer: 2,
    why: "Fix the symptom while there is still margin, then fix the automation so it does not come back.",
  },
  {
    alert: "LLMTokenCostSpike",
    severity: "SEV-3",
    detail: "Token spend is at four times the usual hourly baseline.",
    options: [
      "Break spend down by caller to find the source, then rate-limit or cap that caller",
      "Move all traffic to a larger model",
      "Turn off usage logging to save overhead",
    ],
    answer: 0,
    why: "Treat LLM cost like any other resource: attribute it per caller, find the outlier (often a retry loop or runaway agent) and put a budget on it.",
  },
  {
    alert: "DiskPressure",
    severity: "SEV-2",
    detail: "A node reports DiskPressure and the kubelet has started evicting pods.",
    options: [
      "Force-delete the evicted pods and move on",
      "Find what is filling the disk (images, logs, emptyDir) and free space, or cordon and drain the node",
      "Disable eviction on the kubelet",
    ],
    answer: 1,
    why: "Eviction is the kubelet protecting the node. Find what is using the disk, and take the node out of rotation if you cannot fix it quickly.",
  },
  {
    alert: "ErrorBudgetFastBurn",
    severity: "SEV-1",
    detail: "The availability SLO is burning error budget far faster than the window allows.",
    options: [
      "Lower the SLO target",
      "Wait for the rolling window to reset",
      "Declare an incident and mitigate first: roll back or fail over",
    ],
    answer: 2,
    why: "A fast burn means users are hurting right now. Stop the bleeding first; the postmortem can find the root cause.",
  },
  {
    alert: "CrashLoopBackOff",
    severity: "SEV-2",
    detail: "A deployment went into CrashLoopBackOff right after a config change.",
    options: [
      "Read the logs of the crashed container with kubectl logs <pod> --previous",
      "Scale the deployment to more replicas",
      "Keep deleting the pod until it starts",
    ],
    answer: 0,
    why: "The previous container's logs usually say exactly why it exited. More replicas of a crashing pod just crash more.",
  },
  {
    alert: "PagerNoise",
    severity: "SEV-3",
    detail: "The same alert paged on-call repeatedly overnight and nobody could act on it.",
    options: [
      "Mute the pager at night",
      "Fix or delete the alert so every page is actionable",
      "Add a second person to share the pages",
    ],
    answer: 1,
    why: "Pages that need no action train people to ignore the pager. Alert on user-facing symptoms and remove the rest.",
  },
];
