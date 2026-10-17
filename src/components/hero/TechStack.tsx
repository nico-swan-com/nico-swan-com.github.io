'use client'

import { Badge } from '@/components/ui/badge'
import { highlightedTech } from '@/lib/data'

interface TechStackProps {
  isVisible: boolean
}

/**
 * Tech stack badges for hero section.
 * Now imports from centralized tech-stack data.
 */
export function TechStack({ isVisible }: TechStackProps) {
  return (
    <div
      className={`mt-12 flex flex-wrap justify-center gap-2 transition-all delay-700 duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {highlightedTech.map((tech) => (
        <Badge
          key={tech}
          variant='outline'
          className='border-accent/30 text-secondary'
        >
          {tech}
        </Badge>
      ))}
    </div>
  )
}
