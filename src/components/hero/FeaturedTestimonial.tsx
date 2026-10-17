'use client'

import { Card } from '@/components/ui/card'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

/**
 * Featured testimonial component for Hero section.
 * Displays the most impactful testimonial quote prominently.
 */
export function FeaturedTestimonial() {
  // Feature the John Andrews testimonial (first in the list)
  const featured =
    testimonials.find((t) => t.id === 'john-andrews') || testimonials[0]

  return (
    <div className='mx-auto mb-8 max-w-3xl'>
      <h3 className='mb-4 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground'>
        What Leaders Say
      </h3>
      <Card className='relative border-accent/20 bg-background/50 p-6 backdrop-blur-sm'>
        <Quote className='absolute right-4 top-4 size-8 text-accent/20' />
        <blockquote className='mb-4 text-center text-lg italic leading-relaxed text-secondary'>
          &ldquo;{featured.quote}&rdquo;
        </blockquote>
        <p className='text-center text-sm text-muted-foreground'>
          <span className='font-semibold text-primary'>{featured.name}</span>
          {' • '}
          {featured.role}
        </p>
      </Card>
    </div>
  )
}
