// Editorial content reflecting Amjora's engineering philosophy and brand voice.
// These are perspective pieces, not claims about company history, customers or metrics.

export const insights = [
  {
    slug: 'engineering-as-an-act-of-service',
    title: 'Engineering as an act of service',
    category: 'Philosophy',
    date: '2026-01-12',
    readTime: '5 min read',
    excerpt:
      'The world’s biggest problems are rarely solved by technology alone — they are solved by people who refuse to stop searching for better answers. Here’s what that means for how we build.',
    content: [
      {
        type: 'p',
        text: 'Every serious engineering culture has a belief buried underneath its standards — a reason the standards exist at all. At Amjora, that belief is simple: engineering is an act of service. A line of code that doesn’t remove friction, create opportunity or improve someone’s life is a line of code without a purpose.',
      },
      {
        type: 'p',
        text: 'That sounds obvious until you’ve sat in enough planning meetings to notice how easily it gets lost. Deadlines compress. Scope creeps. Somewhere in the middle of shipping, the question of who this is actually for gets quietly dropped from the conversation.',
      },
      {
        type: 'h2',
        text: 'Where clarity has to live',
      },
      {
        type: 'p',
        text: 'We think clarity has to live upstream of the code — in the questions a team asks before a single component gets built. What problem is this actually solving? For whom? What happens if we get it wrong? Those questions are slower than jumping straight to implementation, and they are also the difference between software that works and software that matters.',
      },
      {
        type: 'p',
        text: 'This is the thinking behind the Amjora philosophy: every problem has a way through. Not every problem has an easy way through, or an obvious one — but the discipline of continuing to look, past the point where it would be easier to stop, is what separates engineering as a craft from engineering as a job.',
      },
    ],
  },
  {
    slug: 'building-trust-into-financial-infrastructure',
    title: 'Building trust into financial infrastructure, before you build the infrastructure',
    category: 'Fintech',
    date: '2026-02-03',
    readTime: '6 min read',
    excerpt:
      'Trust in financial systems isn’t a feature you add later. It has to be a design constraint from the very first architectural decision.',
    content: [
      {
        type: 'p',
        text: 'Payment infrastructure is unforgiving in a way most software isn’t. A bug in a content feed is an inconvenience. A bug in a payment rail is somebody’s money — and money carries consequences that don’t stay contained to a support ticket.',
      },
      {
        type: 'p',
        text: 'That’s why, as we plan Amjora Payments, we’re treating trust as an architectural constraint rather than a marketing promise. It shapes decisions long before a single API endpoint is public: how state is reconciled, how failures are surfaced instead of hidden, how every design choice answers the question “what happens when this goes wrong?” before it answers “how fast can this ship?”',
      },
      {
        type: 'h2',
        text: 'Speed is not the enemy — sequence is',
      },
      {
        type: 'p',
        text: 'None of this is an argument against speed. It’s an argument for sequence. Trust-first doesn’t mean slow; it means the trust work happens first, so the speed that follows is speed you can stand behind. That’s the discipline the Founder Reminder in our brand blueprint captures directly: never sacrifice trust for speed.',
      },
    ],
  },
  {
    slug: 'what-it-means-to-be-a-finder',
    title: 'What it means to be a Finder',
    category: 'Culture',
    date: '2026-02-20',
    readTime: '4 min read',
    excerpt:
      'At Amjora, employees aren’t just workers — they’re Finders. Here’s what that word is actually asking of the people who carry it.',
    content: [
      {
        type: 'p',
        text: 'Titles are cheap. Anyone can print a job description that says “relentlessly curious” or “takes ownership.” The harder thing is building a culture where those words describe what actually happens on a Tuesday afternoon, under deadline pressure, when the easy path and the right path diverge.',
      },
      {
        type: 'p',
        text: 'A Finder is someone who treats “I don’t know yet” as a starting point rather than a stopping point. Someone who solves root problems instead of symptoms, even when the symptom fix would ship faster. Someone who leaves every system a little better than they found it — not because a process demands it, but because that’s the standard they hold themselves to.',
      },
      {
        type: 'h2',
        text: 'Ten principles, one habit',
      },
      {
        type: 'p',
        text: 'The Finder Principles — from “find ways, not excuses” to “leave a legacy” — aren’t a poster on a wall. They’re a description of one underlying habit: staying in the problem a little longer than is comfortable, because that’s usually where the better answer is hiding.',
      },
    ],
  },
  {
    slug: 'why-we-simplify-complexity',
    title: 'Why we simplify complexity instead of managing it',
    category: 'Engineering',
    date: '2026-03-10',
    readTime: '5 min read',
    excerpt:
      'Most engineering organizations get good at managing complexity. Fewer get good at removing it. The difference compounds over years.',
    content: [
      {
        type: 'p',
        text: 'There’s a version of engineering maturity that looks like sophistication: more services, more configuration, more layers of abstraction to handle every edge case anyone can imagine. It photographs well in an architecture diagram. It’s also, often, a slow-motion mistake.',
      },
      {
        type: 'p',
        text: 'Complexity has a way of feeling like progress while it accumulates and like a crisis once it’s load-bearing. Managing it — with more process, more tooling, more specialists to interpret it — treats the symptom. Simplifying it treats the cause.',
      },
      {
        type: 'h2',
        text: 'A bias toward fewer moving parts',
      },
      {
        type: 'p',
        text: 'This is why “simplify complexity” sits in our engineering standards, not just our brand language. Wherever people see complexity, we look for clarity — and that means being willing to delete a system, not just add one, when deletion is the better answer.',
      },
    ],
  },
  {
    slug: 'designing-for-a-twenty-year-horizon',
    title: 'Designing for a twenty-year horizon',
    category: 'Philosophy',
    date: '2026-04-01',
    readTime: '6 min read',
    excerpt:
      'Most product decisions are made on a quarterly clock. What changes when you make them on a twenty-year one instead?',
    content: [
      {
        type: 'p',
        text: 'It’s easy to build for the next release. It’s much harder to build for the version of your company that exists in fifteen years — one whose products, team and market you can only partially predict today.',
      },
      {
        type: 'p',
        text: 'Amjora’s long-term ambition is deliberately staged across decades: an engineering studio first, then developer products, then financial infrastructure, then AI systems aimed at problems like healthcare and education. Each phase is meant to earn the next one, not skip ahead of it.',
      },
      {
        type: 'h2',
        text: 'Patience as a competitive advantage',
      },
      {
        type: 'p',
        text: 'Building patiently isn’t the absence of ambition — it’s a different theory of how ambition compounds. Products built to still matter ten years from now tend to require a different kind of discipline than products built to matter this quarter. We think that discipline is worth the trade.',
      },
    ],
  },
]

export const getInsight = (slug) => insights.find((i) => i.slug === slug)
