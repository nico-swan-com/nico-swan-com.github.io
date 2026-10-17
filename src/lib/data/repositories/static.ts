import type {
  IMetricsRepository,
  ITestimonialsRepository,
  ITechStackRepository,
  IAccomplishmentsRepository
} from './interfaces'
import type {
  ImpactMetric,
  Testimonial,
  TechCategory,
  DomainExpertise,
  Accomplishment
} from '../types'

import { impactMetrics } from '../metrics'
import { testimonials } from '../testimonials'
import { techCategories, highlightedTech, domainExpertise } from '../tech-stack'
import { accomplishments } from '../accomplishments'

/**
 * Static data repository implementations.
 * These read from local TypeScript files.
 * Can be replaced with Sanity/DB implementations in the future.
 */

// =============================================================================
// Static Metrics Repository
// =============================================================================

export class StaticMetricsRepository implements IMetricsRepository {
  async getImpactMetrics(): Promise<ImpactMetric[]> {
    return impactMetrics
  }
}

// =============================================================================
// Static Testimonials Repository
// =============================================================================

export class StaticTestimonialsRepository implements ITestimonialsRepository {
  async getAll(): Promise<Testimonial[]> {
    return testimonials
  }

  async getFeatured(count: number): Promise<Testimonial[]> {
    return testimonials.slice(0, count)
  }
}

// =============================================================================
// Static Tech Stack Repository
// =============================================================================

export class StaticTechStackRepository implements ITechStackRepository {
  async getAll(): Promise<TechCategory[]> {
    return techCategories
  }

  async getHighlighted(): Promise<string[]> {
    return highlightedTech
  }

  async getDomainExpertise(): Promise<DomainExpertise[]> {
    return domainExpertise
  }
}

// =============================================================================
// Static Accomplishments Repository
// =============================================================================

export class StaticAccomplishmentsRepository
  implements IAccomplishmentsRepository
{
  async getAll(): Promise<Accomplishment[]> {
    return accomplishments
  }
}
