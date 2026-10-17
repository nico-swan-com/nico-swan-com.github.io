'use client'

import { useEffect, useState } from 'react'
import { HeroActions } from './hero/HeroActions'
import { ImpactMetrics } from './hero/ImpactMetrics'
import { QuickNav } from './hero/QuickNav'
import { TechStack } from './hero/TechStack'
import { FeaturedTestimonial } from './hero/FeaturedTestimonial'
import { Testimonials } from './Testimonials'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className='relative flex min-h-screen items-center justify-center overflow-hidden py-20'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 opacity-[0.02]' />
      </div>

      <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        {/* Name & Title */}
        <h1
          className={`mb-4 text-center text-5xl font-bold text-primary transition-all delay-100 duration-700 sm:text-6xl lg:text-7xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Nico Swan
        </h1>

        <p
          className={`mb-6 text-center text-xl font-light text-secondary transition-all delay-200 duration-700 sm:text-2xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Principal Software Engineer | Fintech &amp; Crypto Infrastructure
        </p>

        {/* Value Proposition */}
        <p
          className={`mx-auto mb-8 max-w-3xl text-center text-lg text-secondary transition-all delay-300 duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Subject Matter Expert managing and maintaining complex ecosystems
          within the tech stack, including full ownership of architecture,
          release cycles, and system support.
        </p>

        <HeroActions isVisible={isVisible} />

        <ImpactMetrics isVisible={true} />
        <QuickNav isVisible={true} />
        <TechStack isVisible={true} />

        {/* Featured Testimonial & Carousel */}
        <div className='container mx-auto py-12'>
          <FeaturedTestimonial />
          <p className='mb-4 text-center text-xs text-muted-foreground'>
            More recommendations from colleagues
          </p>
          <Testimonials />
        </div>
      </div>
    </div>
  )
}

export default Hero
