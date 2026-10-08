// Amjora product ecosystem — source of truth for /products routes.
// Status distinguishes shipped engineering focus from future roadmap phases,
// per brand guidance: never present unreleased products as already launched.

export const products = [
  {
    slug: 'platform',
    name: 'Amjora Platform',
    short: 'Engineering foundation',
    status: 'In development',
    statusTone: 'active',
    summary:
      'The engineering foundation Amjora is built on — the shared standards, tooling and architecture that every product in the ecosystem is designed to sit on top of.',
    description:
      'Amjora Platform is the internal foundation of the company: the engineering practices, architecture patterns and shared infrastructure that let every later product move faster without sacrificing quality. It is where the Finder Principles become code review standards, deployment checklists and system design defaults.',
    focus: [
      'Engineering standards and architecture patterns',
      'Shared infrastructure for future products',
      'A foundation built for a 20-year time horizon, not a quarter',
    ],
    phase: 'Phase I — World-class software engineering studio',
  },
  {
    slug: 'payments',
    name: 'Amjora Payments',
    short: 'Payment gateway, wallets, APIs',
    status: 'Future roadmap',
    statusTone: 'future',
    summary:
      'Financial infrastructure designed for trust first: a payment gateway, digital wallets and developer APIs built to move money with clarity and control.',
    description:
      'Amjora Payments is the financial infrastructure layer of the Amjora ecosystem — payment gateway, wallet and API primitives designed for developers and businesses who need to move money reliably. It sits in Phase III of our long-term ambition and is being designed with the same trust-first standards that govern everything Amjora builds.',
    focus: [
      'Payment gateway and processing rails',
      'Digital wallets for individuals and businesses',
      'Developer-first APIs for integration',
    ],
    phase: 'Phase III — Payment infrastructure, APIs and financial rails',
  },
  {
    slug: 'ai',
    name: 'Amjora AI',
    short: 'Intelligent assistants and automation',
    status: 'Future roadmap',
    statusTone: 'future',
    summary:
      'Intelligent systems designed to remove friction from real work — assistants and automation built to augment people, not replace their judgment.',
    description:
      'Amjora AI is our long-term investment in intelligent assistants and automation that solve meaningful problems in healthcare, education, finance and productivity. It is a Phase IV ambition, and it will be held to the same standard as everything else we build: clarity over hype, trust over speed.',
    focus: [
      'Intelligent assistants for real workflows',
      'Automation that removes friction, not accountability',
      'AI products aimed at healthcare, education, finance and productivity',
    ],
    phase: 'Phase IV — AI products solving healthcare, education, finance and productivity',
  },
  {
    slug: 'cloud',
    name: 'Amjora Cloud',
    short: 'Developer infrastructure',
    status: 'Future roadmap',
    statusTone: 'future',
    summary:
      'Developer infrastructure built for teams who need dependable building blocks — designed with the same engineering discipline behind the rest of Amjora.',
    description:
      'Amjora Cloud will provide the developer infrastructure layer of the ecosystem — the building blocks teams need to ship dependable software. It extends the engineering foundation laid down by Amjora Platform into tools other developers can build on.',
    focus: [
      'Developer-facing infrastructure and tooling',
      'Built on the same standards as Amjora Platform',
      'Designed for reliability at scale',
    ],
    phase: 'Phase II — Developer products and SaaS platforms',
  },
  {
    slug: 'health',
    name: 'Amjora Health',
    short: 'Products such as MumWell',
    status: 'Future roadmap',
    statusTone: 'future',
    summary:
      'Technology in service of human wellbeing — starting with products like MumWell, designed to improve outcomes for the people who use them.',
    description:
      'Amjora Health is where Amjora applies its engineering discipline to human wellbeing, starting with products such as MumWell. It reflects the belief at the center of the company: that engineering is an act of service, and that meaningful problems deserve careful, trustworthy solutions.',
    focus: [
      'Health-focused digital products, including MumWell',
      'Built on trust, privacy and careful design',
      'Part of Amjora’s long-term AI-for-healthcare ambition',
    ],
    phase: 'Phase IV — AI products solving healthcare, education, finance and productivity',
  },
  {
    slug: 'labs',
    name: 'Amjora Labs',
    short: 'Research and experimentation',
    status: 'Ongoing',
    statusTone: 'active',
    summary:
      'The research arm of Amjora — where new ideas are explored, tested and either promoted into the product ecosystem or set aside with lessons learned.',
    description:
      'Amjora Labs is where the company stays curious. It is the space for research and experimentation that does not yet belong in a shipped product — early explorations that either graduate into Amjora Platform, Payments, AI, Cloud or Health, or teach us something valuable along the way.',
    focus: [
      'Early-stage research and prototypes',
      'A space to stay curious and keep learning',
      'The proving ground for future Amjora products',
    ],
    phase: 'Ongoing, across every phase',
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
