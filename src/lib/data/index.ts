// Types
export * from './types'

// Data provider (main entry point)
export { getDataProvider, dataProvider } from './data-provider'

// Repository interfaces (for custom implementations)
export type {
  IMetricsRepository,
  ITestimonialsRepository,
  ITechStackRepository,
  IAccomplishmentsRepository,
  IDataProvider
} from './repositories/interfaces'

// Direct data access (for simple use cases)
export { impactMetrics } from './metrics'
export { testimonials } from './testimonials'
export {
  techCategories,
  highlightedTech,
  coreTech,
  domainExpertise
} from './tech-stack'
export { accomplishments } from './accomplishments'

// Legacy exports (for backward compatibility during migration)
export { testimonials as testimonialsData } from './testimonials'
export { accomplishments as accomplishmentsData } from './accomplishments'
