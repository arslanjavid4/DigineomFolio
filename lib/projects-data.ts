export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  link?: string
  github?: string
  client?: string
  industry?: string
  timeline?: string
  data?: {
    label: string
    value: string
  }[]
}

export const allProjects: Project[] = [
  {
    id: 'permabull',
    title: 'Permabull',
    description: 'A cutting-edge trading platform with real-time analytics and advanced charting capabilities.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Trading', 'WebSocket'],
    category: 'Web Development',
    link: '#',
    github: '#',
    client: 'FinTech Solutions Inc.',
    industry: 'Financial Technology',
    timeline: '6 months',
    data: [
      { label: 'Performance Increase', value: '71%' },
      { label: 'Average Load Time', value: '2.3s' },
      { label: 'User Satisfaction', value: '92%' },
    ],
  },
  {
    id: 'smoke-heaven',
    title: 'Smoke Heaven',
    description: 'Elegant e-commerce platform for premium products with seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'E-commerce', 'Stripe', 'CMS'],
    category: 'E-Commerce',
    link: '#',
    github: '#',
    client: 'Luxury Brands Group',
    industry: 'Retail & E-commerce',
    timeline: '4 months',
    data: [
      { label: 'Conversion Rate', value: '68%' },
      { label: 'Revenue Growth', value: '145%' },
      { label: 'Customer Retention', value: '88%' },
    ],
  },
  {
    id: 'atompad',
    title: 'AtomPad',
    description: 'Modern note-taking application with collaborative features and cloud synchronization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'Firebase', 'Real-time', 'PWA'],
    category: 'Productivity',
    link: '#',
    github: '#',
    client: 'Productivity Labs',
    industry: 'Software & Technology',
    timeline: '5 months',
    data: [
      { label: 'Active Users', value: '50K+' },
      { label: 'Sync Speed', value: '0.8s' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'harmony',
    title: 'Harmony',
    description: 'Music streaming platform with personalized recommendations and social features.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Node.js', 'Audio', 'ML'],
    category: 'Entertainment',
    link: '#',
    github: '#',
    client: 'SoundWave Media',
    industry: 'Entertainment & Media',
    timeline: '8 months',
    data: [
      { label: 'Streams per Month', value: '2.5M+' },
      { label: 'Playlist Creation', value: '85%' },
      { label: 'User Engagement', value: '94%' },
    ],
  },
  {
    id: 'synapticflow',
    title: 'SynapticFlow',
    description: 'AI-powered workflow automation tool that streamlines business processes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['AI/ML', 'Python', 'Automation', 'API'],
    category: 'SaaS',
    link: '#',
    github: '#',
    client: 'Enterprise Solutions Co.',
    industry: 'Enterprise Software',
    timeline: '7 months',
    data: [
      { label: 'Time Saved', value: '4.2 hours' },
      { label: 'Process Efficiency', value: '78%' },
      { label: 'Cost Reduction', value: '65%' },
    ],
  },
  {
    id: 'healthcare-portal',
    title: 'HealthCare Portal',
    description: 'Patient management system with appointment scheduling and telemedicine features.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'AWS', 'HIPAA'],
    category: 'Healthcare',
    link: '#',
    github: '#',
    client: 'MedCare Systems',
    industry: 'Healthcare',
    timeline: '9 months',
    data: [
      { label: 'Patient Satisfaction', value: '91%' },
      { label: 'Appointment Efficiency', value: '73%' },
      { label: 'System Uptime', value: '99.8%' },
    ],
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search filters and virtual tours.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Node.js', 'MongoDB', '3D'],
    category: 'Real Estate',
    link: '#',
    github: '#',
    client: 'PropertyHub Realty',
    industry: 'Real Estate',
    timeline: '6 months',
    data: [
      { label: 'Listings Growth', value: '156%' },
      { label: 'User Engagement', value: '82%' },
      { label: 'Virtual Tour Views', value: '3.2K+' },
    ],
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    description: 'Comprehensive fitness app with workout plans and progress tracking.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['Flutter', 'Firebase', 'GraphQL', 'Wearables'],
    category: 'Mobile',
    link: '#',
    github: '#',
    client: 'FitLife Technologies',
    industry: 'Health & Fitness',
    timeline: '5 months',
    data: [
      { label: 'Active Users', value: '120K+' },
      { label: 'Workout Completion', value: '76%' },
      { label: 'App Rating', value: '4.8/5' },
    ],
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    description: 'Modern analytics dashboard with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'D3.js', 'TypeScript', 'Microservices'],
    category: 'SaaS',
    link: '#',
    github: '#',
    client: 'DataViz Solutions',
    industry: 'Business Intelligence',
    timeline: '4 months',
    data: [
      { label: 'Data Processing', value: '1.2M rows' },
      { label: 'Dashboard Load', value: '1.5s' },
      { label: 'User Adoption', value: '89%' },
    ],
  },
]

export function getProjectById(id: string): Project | undefined {
  return allProjects.find(project => project.id === id)
}

