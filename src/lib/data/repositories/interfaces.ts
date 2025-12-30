import type {
  ImpactMetric,
  Testimonial,
  TechCategory,
  DomainExpertise,
  Accomplishment
} from '../types'

/**
 * Repository interfaces define the contract for data access.
 * This abstraction allows swapping static data for Sanity CMS, database, or API later.
 */

// =============================================================================
// Metrics Repository
// =============================================================================

export interface IMetricsRepository {
  getImpactMetrics(): Promise<ImpactMetric[]>
}

// =============================================================================
// Testimonials Repository
// =============================================================================

export interface ITestimonialsRepository {
  getAll(): Promise<Testimonial[]>
  getFeatured(count: number): Promise<Testimonial[]>
}

// =============================================================================
// Tech Stack Repository
// =============================================================================

export interface ITechStackRepository {
  getAll(): Promise<TechCategory[]>
  getHighlighted(): Promise<string[]>
  getDomainExpertise(): Promise<DomainExpertise[]>
}

// =============================================================================
// Accomplishments Repository
// =============================================================================

export interface IAccomplishmentsRepository {
  getAll(): Promise<Accomplishment[]>
}

// =============================================================================
// Combined Data Provider Interface
// =============================================================================

export interface IDataProvider {
  metrics: IMetricsRepository
  testimonials: ITestimonialsRepository
  techStack: ITechStackRepository
  accomplishments: IAccomplishmentsRepository
}
