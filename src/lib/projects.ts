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
      'A demonstration project that shows how I structure a full-stack app: an e-commerce art gallery on Next.js 16 with role-based access, rate limiting and an image-processing pipeline.',
    longDescription: `Artiverse Galleria is a demonstration project: an e-commerce platform for art galleries that I built to show how I put a full-stack app together.

The application features a feature-based architecture that promotes scalability and maintainability. It implements a three-layer pattern (Repository → Service → Action) ensuring clean separation of concerns. It includes image processing with watermarking, rate limiting on the API, role-based access control, security headers and CSRF protection.

I built it to work through current Next.js and React patterns, database design with Drizzle ORM, authentication with NextAuth.js v5 and an image-processing pipeline, end to end.`,
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
      'Admin dashboard',
      'Artist profile management',
      'Product catalogue with advanced filtering',
      'Security headers and CSRF protection',
      'Database health monitoring',
      'Docker containerisation support'
    ],
    architecture: `The application follows a feature-based architecture where code is organised by business domain rather than technical layer. This approach ensures that related code is co-located, making it easier to maintain and scale.

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
      'Optimising database queries for large product catalogues',
      'Implementing secure payment webhook handling',
      'Managing complex state across multiple features'
    ],
    achievements: [
      'Code organised by feature, in three layers (repository, service, action), so a new feature slots in without touching the rest',
      'Clear separation between data access, business logic and server actions',
      'Rate limiting, security headers and CSRF protection built in',
      'Features scalable feature-based architecture supporting easy feature additions',
      'Includes optimised image processing pipeline with automatic format conversion',
      'Demonstrates admin dashboard patterns with role-based permissions'
    ]
  },
  {
    id: 'bcb-entitlements-platform',
    title: 'Client API Security & Authorisation (BCB Group)',
    description:
      'Signed client API requests, self-service keys and attribute-based authorisation for a regulated crypto and payments group. Client API signing went live in production on 12 October 2026.',
    longDescription: `BCB Group is a regulated crypto and payments group. I work on the platform team, on the services that decide who can call the client APIs and what they are allowed to do.

In 2022 I delivered the entitlements capability: attribute-based access control, with an open-source policy engine as the decision point, enforced by a shared NestJS guard in both client API gateways. I've since advised other teams on using it.

In 2026 I led the architecture and core delivery of client API self-service. Clients used to authenticate with long-lived (29-day) Auth0 bearer tokens. Now each request is signed with the client's own key (Holder-of-Key, aligned with FAPI 1.0 and Open Banking UK v4.0) and verified by BCB. It went live in production on 12 October 2026 and the first clients are onboarding. I built it with product and engineering colleagues; my part was the solution architecture, the verification service and much of the core build.`,
    technologies: [
      'TypeScript',
      'Node.js',
      'NestJS',
      'Express',
      'gRPC',
      'PostgreSQL',
      'GCP Pub/Sub',
      'ABAC (Attribute-Based Access Control)',
      'Policy Engine',
      'Detached JWS (PS256/ES256)',
      'Kubernetes'
    ],
    imageUrl: '/placeholder.svg',
    features: [
      'Holder-of-Key signed requests aligned with FAPI 1.0 and Open Banking UK v4.0',
      'Signature checks on both client API gateways, with no bearer-token fallback',
      'Replay protection: each signed request is accepted once',
      'Audit log of every allow and deny decision, kept for at least 12 months',
      'Fail-closed: a request is refused if its replay or audit record cannot be stored',
      'Client self-service in the console: service accounts, public-key upload (CSR/PEM) and key revocation',
      'PSD2 one-time passwords on every service-account and key change',
      'IP allow-lists on both gateways',
      'Attribute-based access control with a central policy decision point',
      'Shared NestJS guard library for policy enforcement'
    ],
    architecture: `Authorisation uses a central policy decision point: an open-source policy engine behind a gRPC service. Each client API gateway enforces its decisions through a shared guard library.

Request signing adds a verification step in front of that:
1. The client signs each request with its own private key (detached JWS, PS256 or ES256). BCB only ever holds the public key.
2. The gateway (a NestJS guard in one stack, Express middleware in the other) sends the signature to a gRPC verification service.
3. The service checks the key, the signature and a single-use transaction number stored in PostgreSQL, so a replayed request is rejected.
4. Every allow or deny is written to an audit log with a SHA-256 hash of the signed bytes, through GCP Pub/Sub, with a synchronous fallback for large payloads.
5. If the replay store or the audit write fails, the request is refused.`,
    challenges: [
      'Redesigning the architecture late in the project, after another lead asked for a change, and still shipping a new greenfield service',
      'Adding PSD2 one-time passwords and a one-counterparty limit per service account part-way through delivery',
      'Applying the same security rules across two gateway stacks, NestJS and Express',
      'Keeping signature verification fast: in sandbox testing the median verify time was 16.5 to 18.1 ms'
    ],
    achievements: [
      'Client API signing live in production since 12 October 2026, with the first clients onboarding',
      'The UAT test client found the console easy to use and said the documentation was spot on',
      'Delivered the entitlements capability by its September 2022 target',
      'Wrote the RFC set, as-built architecture docs and Support runbook, and presented the design at our Tech Day'
    ]
  },
  {
    id: 'bcb-approval-workflow',
    title: 'Four-Eyes Approval Engine (BCB Group)',
    description:
      "An approval engine that makes a second person sign off data-changing actions in BCB's internal consoles. The Admin Console controls built on it formed part of BCB's French EMI licence requirements.",
    longDescription: `In the second half of 2023 I designed and delivered a new four-eyes approval engine for BCB Group. A user action that changes data goes to a second person for approval before it takes effect, which protects against mistakes and internal fraud.

Integrating it with the existing payment workflow service took far more work than planned, and taught me a lot about the payments flow and event sourcing. In 2024 I extended it and built the Admin Console controls that formed part of BCB's French EMI licence requirements.`,
    technologies: [
      'TypeScript',
      'Node.js',
      'NestJS',
      'Angular',
      'PostgreSQL',
      'Event Sourcing',
      'REST APIs'
    ],
    imageUrl: '/placeholder.svg',
    features: [
      'Four-eyes approval for data-changing user actions',
      'Approval flow from the console UI through the API gateway to the approval engine',
      'Integration with the existing payment workflow service and the legacy API',
      'Admin Console controls for French EMI licence requirements',
      'Approvals for account fee edits'
    ],
    architecture: `A request that changes data goes from the console UI through the API gateway to the approval engine. The engine holds the change until a second, authorised person approves it, then passes it to the existing payment workflow service or the legacy API to apply.`,
    challenges: [
      'Integrating approvals with an existing payment workflow service, a much bigger job than planned',
      'Adding approvals to legacy endpoints that had no concept of them',
      'Meeting French EMI licence control requirements in the Admin Console'
    ],
    achievements: [
      'Designed and delivered the new four-eyes approval engine in the second half of 2023',
      "Built the Admin Console controls that formed part of BCB's French EMI licence requirements (2024)",
      'Extended the engine in 2024, including approvals for account fee edits'
    ]
  },
  {
    id: 'ntt-servicenow-platform',
    title: 'Enterprise ServiceNow Implementation',
    description:
      "Custom ServiceNow capabilities and integration microservices for NTT's global managed services, built while leading a 13-person team across South Africa and Australia.",
    longDescription: `At NTT Ltd. (formerly Dimension Data) I was an R&D software engineer and later a Senior Services Manager. I built custom capabilities on one of the largest ServiceNow implementations, and microservices that connected it to other platforms in NTT's architecture.

The platform supported NTT's global managed services across three portfolios: Managed Networks, Managed Data Centres, and Communication and Collaboration. I led a team of 13 business analysts, technical analysts, ITSM developers and team leads across South Africa and Australia, and handed solutions over to the regions.

I was a Dimension Data FY18 quarterly winner for Professional Excellence.`,
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
4. CMDB: Extended configuration management for network and data centre assets`,
    challenges: [
      'Building on one of the largest ServiceNow implementations',
      'Integrating with diverse legacy systems across multiple regions',
      'Managing development team across multiple continents and time zones',
      'Ensuring ITIL compliance while meeting custom business requirements',
      'Transitioning solutions to regional teams with different skill levels'
    ],
    achievements: [
      'Built custom capabilities for one of the largest ServiceNow implementations',
      'Led team of 13 across South Africa and Australia',
      'Won Dimension Data FY18 Quarterly Award for Professional Excellence',
      'Received 3 recognition awards for Professional Excellence, Technical Excellence, and Recognising Others',
      'Successfully managed 3 portfolios: Managed Networks, Data Centres, and Communications'
    ]
  },
  {
    id: 'teoco-support-operations',
    title: 'Global 24/7 Support Operations',
    description:
      'Set up and ran a 24/7 support department of 34 engineers across the US and India for enterprise telecoms clients, including AT&T: $3M in support revenue on a $20M project, plus $700K from professional services.',
    longDescription: `At TEOCO (formerly AIRCOM International) I set up and managed a 24/7 technical support department for telecoms clients, including AT&T. I recruited, onboarded and coached the team, and wrote the processes it ran on.

Support services brought in $3M on a $20M project. I also set up a Professional Services team for AT&T that brought in a further $700K by building custom solutions. After three years I merged the department into the regional support group.`,
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
      'Training programme creation',
      'Process optimisation',
      'Change control management',
      'Data quality assurance'
    ],
    architecture: `Built the support organisation on ITIL practice:

1. Tier Structure: Three-tier support model with clear escalation paths
2. Follow-the-Sun: 24/7 coverage with teams in US and India
3. Knowledge Management: Centralized knowledge base and runbooks
4. Metrics and Reporting: Real-time SLA tracking and executive dashboards
5. Continuous Improvement: Regular process reviews and optimization`,
    challenges: [
      'Building a support organisation from scratch',
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
      'Business intelligence platform for human capital management, productivity analytics, and process management. Built as technical consultant for Artesi SA CC.',
    longDescription: `As Technical Consultant and Product Developer for Artesi SA, architected and developed Incidentia, a business intelligence and analytics platform focused on human capital management, productivity tracking, and process management.

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
      'Launched Incidentia v2 with a new UX',
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
    longDescription: `Acquired Artesi SA CC to deliver this business management platform for a South African client. The platform replaces a legacy FileMaker system that suffered from desktop-only access, poor performance, and high operational risk.

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
