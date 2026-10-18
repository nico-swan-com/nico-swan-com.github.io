import type { TechCategory, DomainExpertise } from './types'

/**
 * Single source of truth for tech stack.
 * Consolidates from multiple page components.
 */

export const techCategories: TechCategory[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Node.js', 'SQL', 'HTML/CSS']
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    items: [
      'NestJS',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'MinIO (S3)',
      'REST APIs',
      'Microservices'
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'GCP', 'Azure', 'GitLab CI/CD', 'Nix/NixOS']
  }
]

/**
 * Flat list of highlighted technologies for hero/CTA sections.
 */
export const highlightedTech: string[] = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'React/Next.js',
  'Angular',
  'PostgreSQL',
  'MySQL',
  'Microservices',
  'GCP',
  'Kubernetes',
  'Docker',
  'Nix/NixOS'
]

/**
 * Core technologies used in CTA sections.
 */
export const coreTech: string[] = [
  'TypeScript',
  'Node.js',
  'React/Next.js',
  'NestJS',
  'PostgreSQL',
  'Docker',
  'GCP',
  'Microservices'
]

/**
 * Domain expertise areas with highlight flags.
 */
export const domainExpertise: DomainExpertise[] = [
  { name: 'Business Management Platforms', highlight: true },
  { name: 'R&D PoC Projects', highlight: true },
  { name: 'Enterprise Architecture', highlight: false },
  { name: 'Microservices & APIs', highlight: false },
  { name: 'Team Leadership', highlight: true },
  { name: 'Cloud Infrastructure', highlight: false },
  { name: 'Security & ABAC', highlight: false }
]
