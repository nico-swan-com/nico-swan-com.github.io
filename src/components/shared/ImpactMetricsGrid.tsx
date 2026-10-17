'use client'

import { Card } from '@/components/ui/card'
import { type ImpactMetric } from '@/lib/data/types'
import { getIcon } from '@/lib/icons'

interface ImpactMetricsGridProps {
  metrics: ImpactMetric[]
  /**
   * Whether to show descriptions (used in portfolio page).
   * @default false
   */
  showDescriptions?: boolean
  /**
   * Animation visibility state for staggered entrance.
   * @default true
   */
  isVisible?: boolean
  /**
   * Custom animation delay in ms.
   * @default 500
   */
  animationDelay?: number
}

/**
 * Reusable impact metrics grid component.
 * Replaces duplicated implementations across experience, contact, portfolio pages.
 */
export function ImpactMetricsGrid({
  metrics,
  showDescriptions = false,
  isVisible = true,
  animationDelay = 500
}: ImpactMetricsGridProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-4 transition-all duration-700 sm:grid-cols-4 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      {metrics.map((metric, index) => {
        const Icon = getIcon(metric.iconName)
        return (
          <Card
            key={index}
            className={`border-accent/20 bg-gradient-to-br from-background to-accent/5 ${
              showDescriptions ? 'p-6' : 'p-4'
            }`}
          >
            <div
              className={`flex gap-3 ${showDescriptions ? 'items-start' : 'items-center'}`}
            >
              <div className='rounded-lg bg-accent/10 p-2'>
                <Icon
                  className={`text-accent ${showDescriptions ? 'size-6' : 'size-5'}`}
                />
              </div>
              <div>
                <p
                  className={`font-bold text-primary ${
                    showDescriptions ? 'text-2xl' : 'text-xl'
                  }`}
                >
                  {metric.value}
                </p>
                <p
                  className={
                    showDescriptions
                      ? 'text-sm font-medium text-secondary'
                      : 'text-xs text-muted-foreground'
                  }
                >
                  {metric.label}
                </p>
                {showDescriptions && metric.description && (
                  <p className='mt-1 text-xs text-muted-foreground'>
                    {metric.description}
                  </p>
                )}
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
