import type { IDataProvider } from './repositories/interfaces'
import {
  StaticMetricsRepository,
  StaticTestimonialsRepository,
  StaticTechStackRepository,
  StaticAccomplishmentsRepository
} from './repositories/static'

/**
 * Data provider factory.
 *
 * Returns repository implementations for data access.
 * Currently returns static implementations.
 *
 * Future integration:
 * - Set NEXT_PUBLIC_DATA_SOURCE=sanity to use Sanity CMS
 * - Set NEXT_PUBLIC_DATA_SOURCE=database to use PostgreSQL
 *
 * @example
 * const provider = getDataProvider()
 * const metrics = await provider.metrics.getImpactMetrics()
 */
export function getDataProvider(): IDataProvider {
  // Future: check env variable to return different implementations
  // const dataSource = process.env.NEXT_PUBLIC_DATA_SOURCE || 'static'

  return {
    metrics: new StaticMetricsRepository(),
    testimonials: new StaticTestimonialsRepository(),
    techStack: new StaticTechStackRepository(),
    accomplishments: new StaticAccomplishmentsRepository()
  }
}

/**
 * Singleton instance of the data provider.
 * Use this for client components that can't use async/await.
 */
export const dataProvider = getDataProvider()
