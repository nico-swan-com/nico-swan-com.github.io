'use client'

import { Card } from '@/components/ui/card'
import { impactMetrics } from '@/lib/data'
import { getIcon } from '@/lib/icons'

interface ImpactMetricsProps {
  isVisible: boolean
}

/**
 * Impact metrics component for hero section.
 * Now imports from centralized metrics data.
 */
export function ImpactMetrics({ isVisible }: ImpactMetricsProps) {
  return (
    <div
      className={`mb-12 grid grid-cols-2 gap-3 transition-all delay-500 duration-700 sm:grid-cols-4 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {impactMetrics.map((metric, index) => {
        const Icon = getIcon(metric.iconName)
        return (
          <Card
            key={index}
            className='border-accent/20 bg-background/50 p-4 backdrop-blur-sm'
          >
            <div className='flex items-center gap-3'>
              <div className='rounded-lg bg-accent/10 p-2'>
                <Icon className='size-5 text-accent' />
              </div>
              <div>
                <p className='text-lg font-bold text-primary sm:text-xl'>
                  {metric.value}
                </p>
                <p className='text-xs text-muted-foreground'>{metric.label}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
