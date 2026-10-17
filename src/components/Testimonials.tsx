'use client'

import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

/**
 * Testimonials carousel component.
 * Now imports from centralized testimonials data.
 */
export function Testimonials() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      className='mx-auto w-full max-w-2xl'
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <div className='p-1'>
              <Card className='relative border-accent/20 bg-background/50 p-6 backdrop-blur-sm'>
                <Quote className='absolute right-4 top-4 size-6 text-accent/20' />
                <p className='mb-3 text-center text-sm italic text-secondary'>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className='text-center text-xs text-muted-foreground'>
                  <span className='font-medium text-primary'>
                    {testimonial.name}
                  </span>
                  {' • '}
                  {testimonial.role}
                </p>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
