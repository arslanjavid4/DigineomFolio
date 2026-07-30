export interface SolutionGroup {
  title: string
  items: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  overview: string
  challenge: string
  solutions: SolutionGroup[]
  image: string
  gallery: string[]
  tags: string[]
  category: string
  link?: string
  client?: string
  role?: string
  year?: string
  services?: string
  industry?: string
  timeline?: string
  data?: {
    label: string
    value: string
  }[]
  nextProjectId?: string
}

export const allProjects: Project[] = [
  {
    id: 'permacash',
    title: 'PermaCash',
    description:
      'An innovative mobile app designed to make earning cryptocurrency easy and accessible for users of all ages and nationalities.',
    overview:
      'Permacash enables users to earn cryptocurrency effortlessly through engaging activities such as playing games, watching ads, and completing tasks. With a seamless withdrawal process via a secure crypto wallet and a rewarding referral program, Permacash removes traditional banking barriers, making crypto accessible to all.',
    challenge:
      'The core challenge was designing an experience that could onboard users unfamiliar with crypto while keeping engagement high through gamification — without sacrificing trust, clarity, or security around transactions and withdrawals.',
    solutions: [
      {
        title: 'User Acquisition & Retention',
        items: [
          'Intuitive onboarding to simplify user adoption.',
          'Gamified rewards and progress trackers for engagement.',
          'Consistent branding for trust and recognition.',
        ],
      },
      {
        title: 'Security & Transparency',
        items: [
          'Clear transaction flows with real-time confirmations.',
          'User-friendly privacy controls for data security.',
          'Subtle security prompts to reassure users.',
        ],
      },
    ],
    image: '/projects/permacash/1.jpg',
    gallery: [
      '/projects/permacash/1.jpg',
      '/projects/permacash/2.jpg',
      '/projects/permacash/3.jpg',
      '/projects/permacash/4.jpg',
    ],
    tags: ['Product Design', 'Mobile App', 'Crypto', 'UX/UI'],
    category: 'Product Design',
    client: 'PermaCash',
    role: 'Product Designer',
    year: '2024',
    services: 'Product Design, Web Design',
    industry: 'FinTech / Cryptocurrency',
    timeline: '2024',
    data: [
      { label: 'Focus', value: 'Earn-to-own' },
      { label: 'Platform', value: 'Mobile' },
      { label: 'Year', value: '2024' },
    ],
    nextProjectId: 'smoke-heaven',
  },
  {
    id: 'smoke-heaven',
    title: 'SmokHeaven',
    description:
      'A leading online retailer experience for vape pods, coils, and flavors in the USA — built for smooth shopping and regulatory compliance.',
    overview:
      "Smoke Heaven’s primary challenge was to design an e-commerce platform that offers a smooth and informative shopping experience for vape products while complying with stringent US regulations. The challenge extended to creating an admin panel that efficiently manages the platform’s complex inventory and user interactions.",
    challenge:
      'Design a seamless and user-friendly system for browsing, filtering, and purchasing vape pods, coils, and flavors. The platform must include advanced filtering, regulatory compliance, and an efficient admin panel while ensuring an engaging and secure shopping experience.',
    solutions: [
      {
        title: 'User-Friendly Shopping Experience',
        items: [
          'Intuitive navigation by brand, flavor, and nicotine strength with clear filtering.',
          'Detailed product pages with high-quality images, descriptions, and compatibility details.',
          'Smooth age verification at checkout that preserves regulatory compliance without disrupting flow.',
        ],
      },
      {
        title: 'Enhanced Product Discovery',
        items: [
          'AI-driven recommendations based on user behavior and past purchases.',
          'Optimized search with autocomplete and smarter suggested products.',
          'Interactive visuals including zoomable imagery for an immersive shopping experience.',
        ],
      },
      {
        title: 'Admin Panel Efficiency',
        items: [
          'Inventory management with easy categorization and bulk updates.',
          'Order management with real-time tracking, status updates, and customer tools.',
          'Analytics dashboard for sales insights, behavior tracking, and inventory reports.',
        ],
      },
      {
        title: 'Building Trust and Loyalty',
        items: [
          'Verified reviews and testimonials to support purchase decisions.',
          'Loyalty program with transparent point tracking and easy redemption.',
          'Secure checkout with trust badges, encryption, and clear payment methods.',
        ],
      },
      {
        title: 'Mobile Optimization',
        items: [
          'Responsive design across smartphones and tablets.',
          'Support for mobile payments including Apple Pay and Google Pay.',
          'Push notifications for orders, promotions, and recommendations.',
        ],
      },
    ],
    image: '/projects/smokheaven/1.jpg',
    gallery: [
      '/projects/smokheaven/1.jpg',
      '/projects/smokheaven/2.jpg',
      '/projects/smokheaven/3.jpg',
      '/projects/smokheaven/4.jpg',
      '/projects/smokheaven/5.jpg',
      '/projects/smokheaven/6.jpg',
    ],
    tags: ['UX/UI Design', 'E-Commerce', 'Admin Panel'],
    category: 'UX/UI Design',
    client: 'E-Commerce Platform',
    role: 'Lead Designer',
    year: '2022',
    services: 'UX/UI Design',
    industry: 'Retail & E-Commerce',
    timeline: '2022',
    data: [
      { label: 'Focus', value: 'E-Commerce' },
      { label: 'Market', value: 'USA' },
      { label: 'Year', value: '2022' },
    ],
    nextProjectId: 'atompad',
  },
  {
    id: 'atompad',
    title: 'Atompad',
    description:
      'A pioneering platform that integrates NFTs into a launchpad, allowing users to purchase limited NFT Tiers that grant lifetime allocations.',
    overview:
      'AtomPad is a next-generation DeFi launchpad designed to simplify multi-chain investments while integrating NFT-based lifetime access for users. By offering a seamless, intuitive interface, AtomPad enables effortless participation in blockchain projects across multiple networks. With tiered NFTs providing exclusive benefits, real-time transaction feedback, and guided multi-chain interactions, AtomPad ensures accessibility, security, and long-term user engagement in the evolving DeFi ecosystem.',
    challenge:
      'AtomPad needed to stand out in the highly competitive DeFi launchpad space. The main challenges included ensuring continuous user engagement, simplifying complex blockchain interactions, and integrating multi-chain functionality and NFT utilities without overwhelming users.',
    solutions: [
      {
        title: 'NFT Integration for Lifetime Value',
        items: [
          'Distinct, visually appealing NFT tiers that clearly showcase lifetime benefits.',
          'Interactive dashboard to track NFT holdings, allocation benefits, and upcoming projects.',
          'Feedback loops to improve NFT-related features based on user insights.',
        ],
      },
      {
        title: 'Multi-Chain Support',
        items: [
          'Clear, accessible interface for switching between multiple blockchains.',
          'Uniform design across supported chains for a frictionless experience.',
          'Step-by-step visual aids to guide multi-chain transactions.',
        ],
      },
      {
        title: 'Utility NFT Platform',
        items: [
          'Categorized utility NFTs with clear functions beyond collectibles.',
          'Educational UI elements including pop-ups and tooltips.',
          'Tools that empower users to create, manage, and utilize NFTs within the platform.',
        ],
      },
    ],
    image: '/projects/atompad/1.jpg',
    gallery: [
      '/projects/atompad/1.jpg',
      '/projects/atompad/2.jpg',
      '/projects/atompad/3.jpg',
      '/projects/atompad/4.jpg',
    ],
    tags: ['Web Design', 'DeFi', 'NFT', 'Multi-Chain'],
    category: 'Web Design',
    client: 'Atompad',
    role: 'Lead Designer',
    year: '2022',
    services: 'Web Design',
    industry: 'Blockchain / DeFi',
    timeline: '2022',
    data: [
      { label: 'Focus', value: 'Launchpad' },
      { label: 'Model', value: 'NFT Tiers' },
      { label: 'Year', value: '2022' },
    ],
    nextProjectId: 'permabull',
  },
  {
    id: 'permabull',
    title: 'Permabull',
    description:
      'A community-driven DeFi 4.0 ecosystem bridging digital advertising to the blockchain with the help of AI.',
    overview:
      'PermaBull is a revolutionary DeFi 4.0 ecosystem that seamlessly integrates digital advertising with blockchain technology, leveraging AI to enhance user engagement and crypto rewards. By providing an intuitive platform for earning and managing PMB tokens, PermaBull empowers users to participate in a transparent, AI-driven economy while benefiting from a seamless and gamified experience.',
    challenge:
      'Designing an AI-powered DeFi advertising ecosystem that feels approachable — making crypto earnings, token management, and AI-driven personalization clear enough for everyday users while still conveying the sophistication of a DeFi 4.0 platform.',
    solutions: [
      {
        title: 'Earning and Managing Crypto',
        items: [
          'Intuitive dashboard displaying earnings, balances, and rewards with real-time charts.',
          'Interactive tutorials and progress trackers to simplify onboarding.',
          'Real-time notifications so users stay informed about financial activity.',
        ],
      },
      {
        title: 'AI Integration for Enhanced Engagement',
        items: [
          'AI-powered recommendations that tailor ad interactions to user preferences.',
          'Real-time visual feedback showing how AI enhances earning potential.',
          'Clear explanations of AI-driven decisions to build user trust.',
        ],
      },
      {
        title: 'User-Centric PMB Token Management',
        items: [
          'Accessible interface explaining holding benefits, reflection rewards, and ad revenue shares.',
          'Real-time tracking for price, volume, and reward insights.',
          'Gamified learning modules to educate users on maximizing token benefits.',
        ],
      },
      {
        title: 'User Engagement and Retention',
        items: [
          'Streak rewards, leaderboards, and achievement badges to incentivize participation.',
          'Community spaces including forums, challenges, and user-generated content.',
          'Seamless responsive design across devices with consistent brand usability.',
        ],
      },
    ],
    image: '/projects/permabull/1.jpg',
    gallery: [
      '/projects/permabull/1.jpg',
      '/projects/permabull/2.jpg',
      '/projects/permabull/3.jpg',
      '/projects/permabull/4.jpg',
      '/projects/permabull/5.jpg',
      '/projects/permabull/6.jpg',
    ],
    tags: ['Platform Design', 'DeFi', 'AI', 'Web3'],
    category: 'Platform Design',
    client: 'Permabull',
    role: 'Lead Designer',
    year: '2024',
    services: 'Platform Design',
    industry: 'DeFi / Digital Advertising',
    timeline: '2024',
    data: [
      { label: 'Focus', value: 'DeFi 4.0' },
      { label: 'Stack', value: 'AI + Ads' },
      { label: 'Year', value: '2024' },
    ],
    nextProjectId: 'permacash',
  },
]

export function getProjectById(id: string): Project | undefined {
  return allProjects.find((project) => project.id === id)
}
