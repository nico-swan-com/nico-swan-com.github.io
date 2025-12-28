export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  features: string[]
  architecture: string
  challenges: string[]
  achievements: string[]
}

export const projects: Project[] = [
  {
    id: 'artiverse-galleria',
    title: 'Artiverse Galleria',
    description:
      'Portfolio demonstration project: A full-stack e-commerce art gallery platform built with Next.js 16, showcasing modern architecture patterns, security best practices, and enterprise-grade features.',
    longDescription: `Artiverse Galleria is a portfolio demonstration project showcasing full-stack development capabilities through a comprehensive e-commerce platform designed for art galleries. This project demonstrates proficiency in modern web technologies, architectural patterns, and enterprise-grade security implementations.

The application features a feature-based architecture that promotes scalability and maintainability. It implements a three-layer pattern (Repository → Service → Action) ensuring clean separation of concerns. The platform includes advanced features like image processing with watermarking, rate limiting for API protection, role-based access control, and comprehensive security measures.

Why this project? Built to demonstrate expertise in: modern React/Next.js patterns, TypeScript best practices, database design with Drizzle ORM, authentication flows with NextAuth.js v5, image processing pipelines, and production-ready architecture patterns.`,
    technologies: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'NextAuth.js v5',
      'Tailwind CSS',
      'React Context API',
      'TanStack Query',
      'Docker',
      'Sharp (Image Processing)'
    ],
    imageUrl: '/placeholder.svg',
    features: [
      'Feature-based architecture for scalability',
      'Three-layer architecture pattern (Repository → Service → Action)',
      'NextAuth.js v5 authentication with role-based access control',
      'Advanced image processing with watermarking and optimization',
      'Rate limiting for API protection',
      'Real-time analytics tracking',
      'Automated order processing',
      'PayFast payment integration',
      'Media management with bytea storage',
      'Comprehensive admin dashboard',
      'Artist profile management',
      'Product catalog with advanced filtering',
      'Security headers and CSRF protection',
      'Database health monitoring',
      'Docker containerization support'
    ],
    architecture: `The application follows a feature-based architecture where code is organized by business domain rather than technical layer. This approach ensures that related code is co-located, making it easier to maintain and scale.

The system uses a three-layer pattern:
1. Repository Layer: Handles data access and database operations
2. Service Layer: Contains business logic and orchestration
3. Action Layer: Server actions for client components with cache revalidation

Authentication is handled through NextAuth.js v5 with JWT session strategy. The platform implements role-based access control (RBAC) with roles including Admin, Editor, ShopManager, and User.

Caching is implemented at multiple levels: Next.js cache, unstable cache for server-side data fetching, and browser cache for static assets. Cache invalidation is handled through tag-based and path-based revalidation.`,
    challenges: [
      'Implementing efficient image processing and storage in PostgreSQL as bytea',
      'Designing a scalable rate limiting system without external dependencies',
      'Creating a flexible role-based access control system',
      'Optimizing database queries for large product catalogs',
      'Implementing secure payment webhook handling',
      'Managing complex state across multiple features'
    ],
    achievements: [
      'Demonstrates production-ready e-commerce platform development',
      'Showcases clean separation of concerns with three-layer architecture',
      'Implements comprehensive security measures including rate limiting and CSRF protection',
      'Features scalable feature-based architecture supporting easy feature additions',
      'Includes optimized image processing pipeline with automatic format conversion',
      'Demonstrates admin dashboard patterns with role-based permissions'
    ]
  },
  {
    id: 'bcb-entitlements-platform',
    title: 'BCB Entitlements & Authorization Platform',
    description:
      'Enterprise-grade attribute-based access control (ABAC) system that enabled BCB Group to secure their French EMI license. Powers authorization across the entire banking technology stack.',
    longDescription: `Developed a comprehensive Entitlements capability for BCB Group, a regulated financial services company. This platform implements attribute-based policy-driven security for authorization across the entire technology stack.

The system was critical to BCB Group securing their French Electronic Money Institution (EMI) license, demonstrating its compliance with stringent European financial regulations. The platform handles complex authorization scenarios across microservices, ensuring that every action within the banking system is properly authorized based on user attributes, roles, and contextual policies.

This project showcases deep expertise in financial services security, regulatory compliance, and enterprise architecture patterns essential for banking technology.`,
    technologies: [
      'TypeScript',
      'Node.js',
      'Microservices',
      'ABAC (Attribute-Based Access Control)',
      'Policy Engine',
      'REST APIs',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'Event-Driven Architecture'
    ],
    imageUrl: '/placeholder.svg',
    features: [
      'Attribute-Based Access Control (ABAC) implementation',
      'Policy-driven authorization engine',
      'Cross-service authorization propagation',
      'Audit logging for regulatory compliance',
      'Fine-grained permission management',
      'Real-time policy evaluation',
      'Integration with existing authentication systems',
      'Compliance reporting dashboards',
      'Role hierarchy management',
      'Contextual access decisions'
    ],
    architecture: `The entitlements platform follows a centralized policy decision point (PDP) architecture with distributed policy enforcement points (PEP) across all microservices.

Key architectural components:
1. Policy Decision Point (PDP): Central service that evaluates access requests against defined policies
2. Policy Enforcement Points (PEPs): Middleware integrated into each microservice
3. Policy Administration Point (PAP): Admin interface for managing policies and attributes
4. Policy Information Point (PIP): Aggregates user and resource attributes from various sources

The system uses an event-driven approach for attribute synchronization and implements caching strategies to minimize latency in authorization decisions.`,
    challenges: [
      'Designing a system that meets stringent financial regulatory requirements',
      'Implementing low-latency authorization across distributed microservices',
      'Creating a flexible policy language that non-technical compliance officers can understand',
      'Ensuring complete audit trails for regulatory audits',
      'Migrating from legacy RBAC to ABAC without service disruption'
    ],
    achievements: [
      'Critical contribution to BCB Group securing French EMI license',
      'Sub-millisecond authorization decisions across the stack',
      'Zero security incidents since deployment',
      'Reduced compliance audit preparation time by 60%',
      'Enabled complex multi-tenancy scenarios for enterprise clients'
    ]
  },
  {
    id: 'bcb-approval-workflow',
    title: 'Four-Eye Approval Workflow System',
    description:
      'Financial-grade approval workflow implementing four-eye principle for all data-modifying operations. Safeguards against internal fraud and meets banking regulatory requirements.',
    longDescription: `Designed and implemented a comprehensive approval workflow system for BCB Group that requires a four-eye process for any user actions that change data. This system is essential for safeguarding against internal fraud and meeting banking regulatory requirements.

The workflow engine handles complex approval scenarios including multi-level approvals, delegation, escalation, and time-based expiration. It integrates seamlessly with all internal consoles and microservices, ensuring that no critical data modification can occur without proper authorization and review.

This capability was instrumental in BCB Group obtaining their French EMI license, demonstrating the company's commitment to operational security and regulatory compliance.`,
    technologies: [
      'TypeScript',
      'Node.js',
      'React',
      'PostgreSQL',
      'Message Queues',
      'Event Sourcing',
      'CQRS',
      'WebSockets',
      'REST APIs'
    ],
    imageUrl: '/placeholder.svg',
    features: [
      'Four-eye principle enforcement',
      'Multi-level approval chains',
      'Delegation and escalation workflows',
      'Time-based approval expiration',
      'Complete audit trail',
      'Real-time notification system',
      'Approval analytics dashboard',
      'Integration with existing services',
      'Role-based approval routing',
      'Bulk approval capabilities'
    ],
    architecture: `The approval workflow system implements an event-sourced architecture ensuring complete auditability and the ability to reconstruct the approval history at any point.

The system consists of:
1. Workflow Engine: Manages approval state transitions and routing
2. Notification Service: Handles real-time and email notifications
3. Audit Service: Records all approval events for compliance
4. Integration Layer: Connects with all data-modifying services

CQRS pattern separates read and write operations, allowing for optimized query patterns for approval dashboards while maintaining strict consistency for approval decisions.`,
    challenges: [
      'Ensuring zero-downtime deployment for a critical financial system',
      'Handling complex approval scenarios with multiple conditional branches',
      'Implementing real-time notifications across multiple channels',
      'Maintaining performance with complete event sourcing',
      'Integrating with legacy systems that had no approval concepts'
    ],
    achievements: [
      'Key contribution to French EMI license approval',
      'Zero internal fraud incidents since implementation',
      '99.99% system availability',
      'Processes over 10,000 approvals daily',
      'Reduced approval cycle time by 40% through workflow optimization'
    ]
  },
  {
    id: 'ntt-servicenow-platform',
    title: 'Enterprise ServiceNow Implementation',
    description:
      'Led one of the largest ServiceNow implementations globally, building customized capabilities and integrations for NTT/Dimension Data serving millions of users across managed networks and data centers.',
    longDescription: `As R&D Software Engineer and Senior Services Manager at NTT Ltd. (formally Dimension Data), led the development of customized capabilities for one of the largest ServiceNow implementations in the world.

This platform serves NTT's global managed services operations across Managed Networks, Managed Data Centers, and Communication and Collaboration portfolios. Led a team of 13 members across South Africa and Australia, ensuring successful delivery and regional transitions.

Recognized with multiple excellence awards including Dimension Data FY18 Quarterly winner for Professional Excellence, demonstrating exceptional technical and leadership capabilities.`,
    technologies: [
      'ServiceNow',
      'JavaScript',
      'Node.js',
      'TypeScript',
      'REST APIs',
      'SOAP',
      'Integration Hub',
      'Workflow Engine',
      'ITIL Framework',
      'Scaled Agile Framework (SAFe)'
    ],
    imageUrl: '/placeholder.svg',
    features: [
      'Custom ServiceNow application development',
      'Multi-platform integration architecture',
      'Automated workflow orchestration',
      'ITIL-compliant service management',
      'Real-time reporting dashboards',
      'Global multi-timezone support',
      'Custom CMDB extensions',
      'SLA management and tracking',
      'Incident and change management',
      'Asset lifecycle management'
    ],
    architecture: `The platform follows a microservices integration pattern with ServiceNow as the central ITSM hub.

Key architectural decisions:
1. Integration Layer: REST and SOAP APIs connecting ServiceNow to network management, monitoring, and provisioning systems
2. Workflow Engine: Custom workflows for complex multi-step service delivery
3. Reporting Layer: Real-time dashboards and analytics for operations
4. CMDB: Extended configuration management for network and data center assets`,
    challenges: [
      'Scaling ServiceNow for one of the world largest implementations',
      'Integrating with diverse legacy systems across multiple regions',
      'Managing development team across multiple continents and time zones',
      'Ensuring ITIL compliance while meeting custom business requirements',
      'Transitioning solutions to regional teams with different skill levels'
    ],
    achievements: [
      'Delivered one of the largest ServiceNow implementations globally',
      'Led team of 13 across South Africa and Australia',
      'Won Dimension Data FY18 Quarterly Award for Professional Excellence',
      'Received 3 recognition awards for Professional Excellence, Technical Excellence, and Recognizing Others',
      'Successfully managed 3 portfolios: Managed Networks, Data Centers, and Communications'
    ]
  },
  {
    id: 'teoco-support-operations',
    title: 'Global 24/7 Support Operations',
    description:
      'Built and managed a $3.7M revenue-generating support organization with 34 engineers across US and India, serving enterprise telecommunications clients including AT&T.',
    longDescription: `At TEOCO (formally AIRCOM International), established and managed a world-class 24/7 technical support organization from the ground up. This department served major telecommunications clients including AT&T, delivering custom solutions and enterprise support.

Generated significant revenue through both support services ($3M on a $20M project) and professional services ($700K in custom solutions). Built the team from scratch, implementing processes, training programs, and operational excellence frameworks.

This role demonstrates strong leadership capabilities, revenue generation, and the ability to build high-performing teams across multiple time zones and cultures.`,
    technologies: [
      'ITIL',
      'Telecommunications',
      'LTE',
      'UMTS',
      'Oracle',
      'Informix',
      'UNIX',
      'Shell Scripting',
      'Project Management',
      'Service Level Management'
    ],
    imageUrl: '/placeholder.svg',
    features: [
      '24/7 global support coverage',
      'Custom solution development',
      'Executive reporting dashboards',
      'SLA management and tracking',
      'Tier 3 technical escalation',
      'Knowledge base development',
      'Training program creation',
      'Process optimization',
      'Change control management',
      'Data quality assurance'
    ],
    architecture: `Built a scalable support organization following ITIL best practices:

1. Tier Structure: Three-tier support model with clear escalation paths
2. Follow-the-Sun: 24/7 coverage with teams in US and India
3. Knowledge Management: Centralized knowledge base and runbooks
4. Metrics and Reporting: Real-time SLA tracking and executive dashboards
5. Continuous Improvement: Regular process reviews and optimization`,
    challenges: [
      'Building a support organization from scratch',
      'Establishing 24/7 operations across multiple time zones',
      'Managing cultural differences between US and India teams',
      'Meeting stringent SLAs for enterprise telecommunications clients',
      'Transitioning from startup to mature operational model'
    ],
    achievements: [
      'Generated $3M revenue on $20M project through support services',
      'Created additional $700K revenue through professional services',
      'Built 24/7 support department with 34 engineers across US and India',
      'Successfully managed operations for 3 years before regional integration',
      'Established Professional Services team for AT&T engagement'
    ]
  },
  {
    id: 'incidentia-platform',
    title: 'Incidentia BI & Analytics Platform',
    description:
      'Business intelligence platform for human capital management, productivity analytics, and process management. Built as Technical Consultant for Artesi SA CC (2014-2024).',
    longDescription: `As Technical Consultant and Product Developer for Artesi SA, architected and developed Incidentia—a comprehensive business intelligence and business analytics platform. The platform focuses on human capital management, productivity tracking, and process management.

Implemented AGILE and LEAN methodologies, provided system architecture direction, and developed the platform's UX v2, RESTful APIs, microservices architecture, and dashboard components.

This contract work laid the foundation for a long-term relationship that eventually led to acquiring the company in 2024 after securing a new business management platform contract.`,
    technologies: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'React',
      'RESTful APIs',
      'Microservices',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Data Visualization'
    ],
    imageUrl: '/placeholder.svg',
    features: [
      'Human capital management analytics',
      'Productivity tracking and insights',
      'Process management workflows',
      'Real-time dashboards',
      'Custom report builder',
      'Data integration connectors',
      'Role-based access control',
      'Automated alerting',
      'Historical trend analysis',
      'Export and scheduling capabilities'
    ],
    architecture: `Incidentia follows a modern microservices architecture:

1. API Gateway: Central entry point with authentication and rate limiting
2. Analytics Engine: Processes and aggregates data from multiple sources
3. Dashboard Service: Real-time visualization and reporting
4. Integration Hub: Connectors for HR systems, time tracking, and process tools
5. Notification Service: Alerts and scheduled report delivery`,
    challenges: [
      'Aggregating data from diverse HR and productivity systems',
      'Designing intuitive analytics for non-technical users',
      'Ensuring data privacy and compliance',
      'Scaling analytics for large organizations',
      'Balancing feature requests with platform stability'
    ],
    achievements: [
      'Successfully launched Incidentia v2 with modernized UX',
      'Implemented AGILE and LEAN methodologies across the development cycle',
      'Designed scalable microservices architecture',
      'Established product roadmap and technical direction',
      'Created reusable component library for rapid feature development',
      'Built lasting client relationship that led to company acquisition opportunity'
    ]
  },
  {
    id: 'enterprise-business-platform',
    title: 'Enterprise Business Management Platform',
    description:
      'Full-stack enterprise platform replacing a legacy FileMaker system for a South African company. Features SARS VAT compliance, FICA verification, order management, production workflows, and secure client file uploads.',
    longDescription: `Acquired Artesi SA CC to deliver this comprehensive business management platform for a South African client. The platform replaces a legacy FileMaker system that suffered from desktop-only access, poor performance, and high operational risk.

The new solution provides universal web accessibility, role-based workflows, complete SARS VAT and FICA compliance, secure file handling via MinIO (S3), and integration with payment gateways and SMS services.

Key regulatory requirements include multi-country tax compliance (South Africa VAT 15%, with Canadian GST/HST/PST support), FICA customer verification with 5-year document retention, and complete audit trails for all financial transactions. The platform supports multiple user roles: Intake Staff, Production Operators, Department Managers, and Branch Managers.`,
    technologies: [
      'TypeScript',
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'TypeORM',
      'MinIO (S3)',
      'Docker',
      'Traefik',
      'Redis',
      'GitLab CI/CD',
      'Payment Gateway',
      'SMS Integration'
    ],
    imageUrl: '/placeholder.svg',
    features: [
      'Role-based authentication with 4 user types (Intake, Operator, Dept Manager, Branch Manager)',
      'SARS-compliant VAT invoicing (Full/Abridged auto-determination)',
      'FICA customer verification with encrypted document storage',
      'Order-to-Invoice-to-Payment workflow',
      'Production queue management with two-level job tracking',
      'Secure client file upload portal replacing third-party services',
      'Bank statement import and reconciliation',
      'Inventory management with stock reservation and low-stock alerts',
      'Real-time work order chat and task assignment',
      'Vendor management and pricelists',
      'SMS collection notifications via integration',
      'Payment gateway integration',
      'Complete audit trails with 5-year retention',
      'Legacy data migration (clients, invoices, orders, vendors, banking)'
    ],
    architecture: `The platform follows a decoupled architecture with polyrepo structure:

Frontend (Next.js): Monolithic application with modular folder structure by business domain, role-specific landing pages, WCAG AA accessibility compliance, and responsive design for desktop, tablet, and mobile.

Backend (NestJS): Headless API service with all business logic, TypeORM for PostgreSQL data access, Passport.js authentication with role-based access control, and API versioning via URI (/api/v1/).

Infrastructure: Self-hosted PostgreSQL on NixOS, MinIO (S3-compatible) for file storage with encryption, Redis for caching and sessions, Docker Swarm deployment via GitLab CI/CD, and Traefik reverse proxy.

Compliance Layer: Tax calculation engine supporting VAT, GST/HST/PST, FICA verification workflow with document encryption, soft delete strategy for regulatory retention, and complete audit logging.`,
    challenges: [
      'Delivering full enterprise platform as sole developer',
      'Implementing complex South African tax and FICA compliance requirements',
      'Migrating historical data from legacy FileMaker system',
      'Designing efficient production workflow with two-level status management',
      'Building secure file handling replacing insecure third-party services',
      'Ensuring <2 second response times for all common operations'
    ],
    achievements: [
      'Secured contract for complete enterprise platform delivery',
      'Acquired Artesi SA CC to execute the project independently',
      'Designed phased delivery plan with clear milestones and acceptance criteria',
      'Architecture supports future multi-country expansion',
      'Platform eliminates single-person maintenance risk of legacy system'
    ]
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjects(): Project[] {
  return projects
}
