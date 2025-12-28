import { TrendingUp, Users, Shield, Award } from 'lucide-react'

export interface Experience {
  id: number
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: 'Senior Full Stack Software Engineer',
    company: 'BCB Group',
    period: 'July 2021 – Present',
    description:
      'Senior Full Stack Engineer within the financial industry, placing strong emphasis on regulatory compliance and security throughout the entire development lifecycle. Developing and maintaining microservices and internal UI consoles essential for delivering business banking services to clients.',
    achievements: [
      'Settlements Console Ownership: Took full ownership of the settlements console, used internally to manage client payments and deposits. Streamlined and standardised UI components, resulting in a more maintainable codebase. Enhanced user experience by applying UX principles, improving overall usability',
      'Entitlements Capability Development: As a member of the platform team, developed the Entitlements capability to enable attribute-based policy-driven security for authorisation across the stack. This capability met regulatory compliance which contributed to BCB securing a French EMI licence',
      'Approval Flow Capability: Designed and implemented an approval workflow that requires a four-eye process for any user actions that change data, safeguarding against internal fraud. This contributed to obtaining the French EMI licence',
      'Billing Capability: Developed a comprehensive billing capability spanning multiple functions, ensuring reliable and flexible invoicing for clients through the integration of best practices',
      'Maintained focus on regulatory compliance and security throughout the entire development lifecycle'
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'React',
      'PostgreSQL',
      'Microservices',
      'REST APIs',
      'Docker',
      'Google Cloud Platform',
      'ABAC/RBAC',
      'Event-Driven Architecture'
    ]
  },
  {
    id: 2,
    role: 'R&D Software Engineer, Senior Services Manager',
    company: 'NTT Ltd. (formerly Dimension Data)',
    period: 'August 2015 – July 2021',
    description:
      'Building customised capabilities into platforms such as Service-Now and developing microservices to integrate with various platforms within our architecture. Leading a team of 13 members across South-Africa and Australia, managing three portfolios: Managed Networks, Managed Data Centres, and Communication and Collaboration.',
    achievements: [
      'Building customised capabilities into Service-Now platform for one of the largest implementations',
      'Developing microservices to integrate with various platforms within our architecture',
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
      'Azure',
      'Scaled Agile Framework',
      'Project Management'
    ]
  },
  {
    id: 3,
    role: 'Principal Architect & Lead Developer',
    company: 'Artesi SA CC',
    period: '2025',
    description:
      'Architected and delivered the flagship "Enterprise Business Management Platform", a comprehensive system replacing a legacy FileMaker application. Leading full-stack development of this enterprise system featuring SARS VAT compliance, FICA verification, order management, production workflows, and secure file handling.',
    achievements: [
      'Architecting full-stack solution: Next.js frontend, NestJS backend, PostgreSQL, MinIO (S3)',
      'Implementing South African regulatory compliance (SARS VAT, FICA customer verification)',
      'Designing role-based workflows for intake, production, and management staff',
      'Building secure client file upload portal replacing third-party file transfer services',
      'Managing complete project lifecycle: requirements, architecture, development, and deployment'
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
    ]
  },
  {
    id: 13,
    role: 'Technical Consultant / Product Developer',
    company: 'Artesi SA CC',
    period: 'January 2014 – 2024',
    description:
      'Contract role building the flagship product Incidentia—a business intelligence and analytics platform focused on human capital management, productivity, and process management. Remained on standby after initial development phase.',
    achievements: [
      "Architected and developed Incidentia's UX v2, RESTful APIs, microservices architecture, and dashboard platforms",
      'Acted as Product Owner implementing AGILE and LEAN methodologies',
      'Established technical direction and product roadmap for the platform',
      'Provided system architecture and integration strategies between applications'
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'RESTful APIs',
      'Microservices',
      'PostgreSQL',
      'AGILE/LEAN',
      'System Architecture',
      'Product Management'
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
      'Contributed and managed $3 million in revenue on a $20 million project by providing support services',
      'Generated an additional $700,000 in revenue by providing professional services creating custom solutions',
      'Established a 24/7 Support department of 34 Engineers in the US and India',
      'Managed the Technical Support department for 3 years and successfully integrated the team into the regional support group',
      'Established and managed the Professional Services team for 1 year for AT&T',
      'Created executive and engineering reports, dashboards and provided technical tier three support',
      'Designed and built custom solutions for enterprise clients',
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
    ]
  },
  {
    id: 5,
    role: 'Multiple Engineering Roles',
    company: 'AIRCOM International',
    period: 'September 2007 – June 2010',
    description:
      'Various engineering roles across US, UK, and South Africa, contributing to telecommunications solutions and enterprise systems.',
    achievements: [
      'Worked across multiple international locations (US, UK, South Africa)',
      'Contributed to telecommunications technology solutions',
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
      'Implemented Metrica software solutions. Transformed existing products into solutions via customization, integration, and developing interfaces to telecommunications network equipment. Managed the entire product cycle at various client sites across Europe and the Middle East.',
    achievements: [
      'Implemented Metrica software solutions for telecommunications clients',
      'Transformed existing products into solutions via customization, integration, and developing interfaces to telecommunications network equipment',
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
    role: 'Contractor, Analyst / Software Developer',
    company: 'Venditor Auctioneers Ltd.',
    period: 'November 2002 – August 2003',
    description:
      'Contract role providing software development and analysis services for auction systems and business applications.',
    achievements: [
      'Developed and maintained software solutions for auction management systems',
      'Performed system analysis and requirements gathering',
      'Delivered custom software solutions to meet business needs'
    ],
    technologies: [
      'Software Development',
      'System Analysis',
      'Database Design',
      'Business Applications'
    ]
  },
  {
    id: 8,
    role: 'Analyst / Software Developer',
    company: 'I.T. for Africa Ltd.',
    period: 'May 2002 – June 2003',
    description:
      'Software development and system analysis role focusing on business applications and IT solutions for African markets.',
    achievements: [
      'Developed software solutions for business applications',
      'Performed system analysis and requirements gathering',
      'Contributed to IT solutions tailored for African markets'
    ],
    technologies: [
      'Software Development',
      'System Analysis',
      'Business Applications',
      'Database Design'
    ]
  },
  {
    id: 9,
    role: 'Senior Analyst / Software Developer',
    company: 'Manasa (PTY) Ltd',
    period: 'February 2001 – March 2002',
    description:
      'Senior role in software development and system analysis, leading development initiatives and providing technical expertise.',
    achievements: [
      'Led software development projects and initiatives',
      'Provided senior-level technical expertise and guidance',
      'Developed and maintained enterprise software solutions',
      'Mentored junior developers and analysts'
    ],
    technologies: [
      'Software Development',
      'System Analysis',
      'Enterprise Applications',
      'Database Administration',
      'Team Leadership'
    ]
  },
  {
    id: 10,
    role: 'Contractor, Analyst / Software Developer',
    company: 'University of Pretoria',
    period: 'January 2001 – March 2001',
    description:
      'Contract role providing software development and analysis services for university systems and academic applications.',
    achievements: [
      'Developed software solutions for university systems',
      'Performed system analysis for academic applications',
      'Delivered custom solutions to meet institutional needs'
    ],
    technologies: [
      'Software Development',
      'System Analysis',
      'Academic Systems',
      'Database Design'
    ]
  },
  {
    id: 11,
    role: 'Operator / Support Engineer',
    company: 'Allianz Insurance',
    period: 'February 2000 – December 2000',
    description:
      'Provided technical support and system operations for insurance systems, ensuring reliable operation of critical business applications.',
    achievements: [
      'Maintained and supported insurance systems and applications',
      'Provided technical support to end users',
      'Ensured reliable operation of critical business systems',
      'Troubleshot and resolved system issues'
    ],
    technologies: [
      'System Operations',
      'Technical Support',
      'Insurance Systems',
      'Troubleshooting',
      'System Administration'
    ]
  },
  {
    id: 12,
    role: 'Assistant System Administrator',
    company: 'Contract Lease Management',
    period: 'January 1996 – December 1999',
    description:
      'Early career role providing system administration support and IT services for lease management systems.',
    achievements: [
      'Assisted with system administration tasks',
      'Maintained and supported IT infrastructure',
      'Provided technical support for lease management systems',
      'Gained foundational experience in IT operations and support'
    ],
    technologies: [
      'System Administration',
      'IT Support',
      'Network Administration',
      'Database Management'
    ]
  }
]

export const impactMetrics = [
  {
    icon: TrendingUp,
    value: '$3.7M+',
    label: 'Revenue Generated'
  },
  {
    icon: Users,
    value: '34+',
    label: 'Engineers Led'
  },
  {
    icon: Shield,
    value: 'EMI Licence',
    label: 'Regulatory Compliance'
  },
  {
    icon: Award,
    value: '25+ Years',
    label: 'Industry Experience'
  }
]

export const experienceSummary =
  'Over 25 years transforming business challenges into purpose-driven solutions across multiple industries and countries. I help organisations overcome barriers by focusing on their "why"—delivering measurable ROI through technical excellence, strategic leadership, and scalable architecture. Currently building secure, regulatory-compliant financial systems at BCB Group, where I developed capabilities that secured a French EMI licence.'
