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
  { label: "What We Do", href: "/#services" },
  { label: "Selected Work", href: "/#selected-work" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Careers", href: "/careers" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
] as const;

export const clientLogos: ClientLogo[] = [
  { name: "Mojang", src: "/assets/customer/logo/mojang.svg", width: 96, height: 24 },
  { name: "DICE", src: "/assets/customer/logo/dice.svg", width: 96, height: 24 },
  { name: "Pricer", src: "/assets/customer/logo/pricer.svg", width: 96, height: 24 },
  { name: "PriceRunner", src: "/assets/customer/logo/pricerunner.svg", width: 110, height: 24 },
  { name: "TUI", src: "/assets/customer/logo/tui.svg", width: 70, height: 24 },
  { name: "NetEnt", src: "/assets/customer/logo/netent.svg", width: 96, height: 24 },
  { name: "Klarna", src: "/assets/customer/logo/klarna.png", width: 96, height: 28, className: "h-6" },
  { name: "SVT", src: "/assets/customer/logo/svt.svg", width: 70, height: 24 },
  { name: "ICA", src: "/assets/customer/logo/ica.svg", width: 70, height: 24 },
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
      "A wellness allowance of SEK 7,000 per year supports training and everyday wellbeing.",
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
      "SEK 7,000 per year in wellness allowance.",
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
