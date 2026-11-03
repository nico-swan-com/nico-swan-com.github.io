import { TrendingUp, Users, Shield, Award } from 'lucide-react'

export interface Experience {
  id: number
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
  excludeFromResume?: boolean
  resumeDescription?: string
  resumeAchievements?: string[]
  resumeTechnologies?: string[]
}

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'Node.js', 'SQL', 'HTML/CSS'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  backend: [
    'NestJS',
    'PostgreSQL',
    'Redis',
    'MinIO (S3)',
    'REST APIs',
    'Microservices'
  ],
  ops: ['Docker', 'Kubernetes', 'GCP', 'Azure', 'GitLab CI/CD', 'Terraform']
}

export const experienceSummary =
  'Software engineer in regulated fintech. At BCB Group I lead the architecture and core build of platform services that clients and support teams depend on: signed client API requests and key management, authorisation, four-eyes approvals and billing. My latest design, client API request signing, was released to production in 2026. I write the design down before I build, so other engineers can review, run and extend it without me. I work remotely from Johannesburg, South Africa, and my day overlaps UK and US Eastern hours.'

export const contactInfo = {
  email: 'hi@nicoswan.com',
  phone: '+27 82 098 2759',
  website: 'nicoswan.com',
  linkedin: 'linkedin.com/in/nicoswan',
  location: 'Johannesburg, South Africa (remote)'
}

export const recentExperience: Experience[] = [
  {
    id: 1,
    role: 'Senior Full Stack Software Engineer',
    company: 'BCB Group',
    period: 'July 2021 – Present',
    description:
      'Platform team at a regulated crypto and payments group. I design and build the services that other teams and clients rely on.',
    achievements: [
      'Led architecture of client API request signing and self-service credential management for enterprise clients, released to production in 2026.',
      'Built a verification service for service accounts, signing keys and signature checks, with replay protection and audit logging.',
      'Client Console: clients create service accounts, upload public keys and revoke them through a self-service interface.',
      'Delivered a reverse API gateway for a new payments network integration, so the team could start end-to-end testing on time, then added GBP, USD and EUR on SEPA, CHAPS and SWIFT rails. The business recognised me for this delivery.',
      'Delivered the entitlements (authorisation) capability by its September 2022 target: attribute-based access control enforced across both client API gateways.',
      "Designed and delivered the four-eyes approval engine for data-changing user actions, then built the Admin Console controls that formed part of BCB's French EMI licence requirements.",
      "Led the Admin Console upgrade (Angular 8 to 18, Node 16 to 20, NestJS 9 to 11) through technical unknowns and stakeholder resistance. Delivered one of the company's main tech-debt KPIs.",
      'Improved a key Admin Console list from tenths of seconds to milliseconds; identified nearly 16,000 lines of deprecated code for removal.',
      'Designed the billing data model and validated it against current and anticipated requirements; core tables now in production, ending manual database fixes by Support.',
      'Used generative AI to greatly improve unit test coverage on a complex onboarding integration; asked by peers to champion AI adoption across engineering.',
      'Builds prototypes and PRDs that Product now requests because they speed up decisions. Writes RFCs and proposals for platform improvements, including AI-assisted support and operations.',
      'Ran a session at the company Tech Day. Mentors engineers beyond own team and interviews candidates.',
      'Ran the team while my manager was on leave and revived Tech Talk Fridays.'
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'NestJS',
      'Angular',
      'PostgreSQL',
      'gRPC',
      'Express',
      'GCP Pub/Sub',
      'Kubernetes',
      'Docker',
      'GitLab CI/CD'
    ]
  },
  {
    id: 3,
    role: 'Owner & Principal Engineer (part-time)',
    company: 'Aretsi SA CC, trading as Cygnus Labs',
    period: '2026 – Present',
    description:
      "Owner of Aretsi SA CC (previously my father's company) since 2026, trading as Cygnus Labs. Bespoke software development for small businesses, run part-time outside my full-time role.",
    achievements: [
      "Replacing a client's FileMaker system with a business-management platform on PostgreSQL, MinIO, NestJS and Next.js. I chose plain, well-known tools a small business can keep running.",
      'Built SARS VAT and FICA verification workflows into the platform.'
    ],
    technologies: [
      'TypeScript',
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'TypeORM',
      'MinIO (S3)',
      'Docker',
      'GitLab CI/CD',
      'SARS/FICA Compliance',
      'Redis'
    ],
    resumeDescription:
      "Owner of Aretsi SA CC (previously my father's company) since 2026, trading as Cygnus Labs. Bespoke software development for small businesses, run part-time outside my full-time role.",
    resumeAchievements: [
      "Replacing a client's FileMaker system with a business-management platform on PostgreSQL, MinIO, NestJS and Next.js. I chose plain, well-known tools a small business can keep running.",
      'Built SARS VAT and FICA verification workflows into the platform.'
    ],
    resumeTechnologies: [
      'TypeScript',
      'Next.js',
      'NestJS',
      'MinIO (S3)',
      'Docker',
      'PostgreSQL'
    ]
  },
  {
    id: 2,
    role: 'R&D Software Engineer, Senior Services Manager',
    company: 'NTT Ltd. (formerly Dimension Data)',
    period: 'August 2015 – June 2021',
    description:
      'Building customised capabilities into platforms such as ServiceNow and engineering microservices to integrate with various platforms within our architecture. Leading a team of 13 members across South Africa and Australia, managing three portfolios: Managed Networks, Managed Data Centres, and Communication and Collaboration.',
    achievements: [
      'Building customised capabilities into ServiceNow platform for one of the largest implementations',
      'Engineering microservices to integrate with various platforms within our architecture',
      'Leading team of 13 members consisting of Business Analysts, Technical Analysts, ITSM Application Developers and portfolio Team Leads',
      'Managing day-to-day operations following project management framework and ensuring successful transition into regions',
      'Dimension Data FY18 Quarterly winner for Professional Excellence',
      'Received 3 Dimension Data and NTT Ltd. recognition awards for Professional Excellence, Technical Excellence, and recognising others'
    ],
    technologies: [
      'ServiceNow',
      'JavaScript',
      'Node.js',
      'TypeScript',
      'Microservices',
      'ITIL',
      'Azure serverless functions',
      'Scaled Agile Framework',
      'Project Management'
    ],
    resumeDescription:
      'Led a team of 13 members managing three portfolios (Managed Networks, Data Centres, Communication) and built customised capabilities into platforms like ServiceNow.',
    resumeAchievements: [
      'Building customised capabilities into ServiceNow platform for one of the largest implementations',
      'Managing day-to-day operations following project management framework and ensuring successful transition into regions',
      'Received multiple awards for Professional Excellence, Technical Excellence, and recognising others (Dimension Data FY18 Winner)'
    ]
  },
  {
    id: 13,
    role: 'Technical Consultant / Product Developer',
    company: 'Aretsi SA CC',
    period: 'January 2014 – July 2015',
    description:
      'Contract role building the flagship product Incidentia, a business intelligence and analytics platform focused on human capital management, productivity, and process management. Remained on standby after initial development phase.',
    achievements: [
      "Architected and built Incidentia's UX v2, RESTful APIs, microservices architecture, and dashboard platforms",
      'Acted as Product Owner implementing AGILE and LEAN methodologies',
      'Established technical direction and product roadmap for the platform',
      'Provided system architecture and integration strategies between applications'
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'RESTful APIs',
      'Scala',
      'Adobe Action script',
      'Microservices',
      'PostgreSQL',
      'AGILE/LEAN',
      'System Architecture',
      'Product Management'
    ],
    resumeAchievements: [
      "Architected and built Incidentia's UX v2, RESTful APIs, microservices architecture, and dashboard platforms using AGILE/LEAN",
      'Established technical direction, product roadmap, and integration strategies for the flagship BI platform'
    ]
  },
  {
    id: 4,
    role: 'Technical Manager',
    company: 'TEOCO (formerly AIRCOM International)',
    period: 'June 2010 – December 2014',
    description:
      'Delivered customer technical support and consultancy in accordance with service level agreements by managing a team of 34 engineers and analysts across multiple countries and time zones. Performed frontline leadership functions including recruiting, onboarding, coaching, performance management, and team building.',
    achievements: [
      'Oversaw and managed $3 million in revenue on a $20 million project by providing support services',
      'Generated an additional $700,000 in revenue by providing professional services creating custom solutions',
      'Established a 24/7 Support department of 34 Engineers in the US and India',
      'Managed the Technical Support department for 3 years and successfully integrated the team into the regional support group',
      'Established and managed the Professional Services team for 1 year for AT&T',
      'Created executive and engineering reports, dashboards and provided technical tier three support',
      'Spearheaded and built custom solutions for enterprise clients',
      'Achieved operational excellence via strategic action plans, reporting and analysis, process development and implementation'
    ],
    technologies: [
      'ITIL',
      'Service Level Agreements',
      'Change Control Management',
      'Outage Management',
      'Data Quality Assurance',
      'Project Management',
      'Team Leadership',
      'Process Design'
    ],
    resumeDescription: '',
    resumeAchievements: [
      'Managed a 24/7 department of 34 Engineers across US/India; drove $3M revenue on a $20M project',
      'Generated $700k additional revenue by establishing a Professional Services team for AT&T',
      'Devised custom enterprise solutions achieving operational excellence via process development'
    ]
  }
]

export const earlyCareerExperience: Experience[] = [
  {
    id: 5,
    role: 'Multiple Engineering Roles',
    company: 'AIRCOM International',
    period: 'September 2007 – June 2010',
    description:
      'Various engineering roles across US, UK, and South Africa, contributing to telecommunications solutions and enterprise systems.',
    achievements: [
      'Worked across multiple international locations (US, UK, South Africa)',
      'Delivered telecommunications technology solutions',
      'Gained extensive experience in cross-cultural team collaboration'
    ],
    technologies: [
      'Telecommunications',
      'LTE',
      'UMTS',
      'E-GPRS',
      'GPRS',
      'GSM',
      'Oracle',
      'Informix',
      'UNIX'
    ]
  },
  {
    id: 6,
    role: 'Technical Consultant III',
    company: 'IBM (Vallent Software Systems)',
    period: 'February 2004 – September 2007',
    description:
      'Implemented Metrica software solutions. Transformed existing products into solutions via customisation, integration, and developing interfaces to telecommunications network equipment. Managed the entire product cycle at various client sites across Europe and the Middle East.',
    achievements: [
      'Deployed Metrica software solutions for telecommunications clients',
      'Transformed existing products into solutions via customisation, integration, and developing interfaces to telecommunications network equipment',
      'Acted as administrator for various UNIX environments, creating shell, C, and PERL scripts',
      'Performed Informix database administration on client sites locally and via VPN',
      'Managed the entire product cycle at various client sites across Europe and the Middle East, from functional specification through customization, installation, commissioning, and acceptance',
      'Provided user training and support to clients',
      'Promoted Vallent corporate culture by establishing inter-company processes'
    ],
    technologies: [
      'Metrica',
      'UNIX',
      'Shell Scripting',
      'C',
      'PERL',
      'Informix',
      'Database Administration',
      'Telecommunications',
      'VPN',
      'Product Lifecycle Management'
    ]
  },
  {
    id: 7,
    role: 'Earlier Engineering & Systems Roles',
    company: 'Various (South Africa)',
    period: '1996 – 2003',
    description:
      'Earlier roles: developer, analyst and systems administration in South Africa.',
    achievements: [
      'Earlier roles: developer, analyst and systems administration in South Africa'
    ],
    technologies: [
      'Software Development',
      'System Analysis',
      'UNIX',
      'Database Design',
      'System Administration'
    ]
  }
]

// Determine which list to use for the main experience page or combine them
export const experienceData = [...recentExperience, ...earlyCareerExperience]

export const impactMetrics = [
  {
    icon: Shield,
    value: '2026',
    label: 'Client API signing released to production'
  },
  {
    icon: Award,
    value: 'Angular 8 → 18',
    label: 'Legacy admin console upgraded'
  },
  {
    icon: Users,
    value: '34',
    label: 'Engineers managed, US and India'
  },
  {
    icon: TrendingUp,
    value: '$3.7M',
    label: 'Revenue at TEOCO'
  }
]
