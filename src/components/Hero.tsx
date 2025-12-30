'use client'

import { useEffect, useState } from 'react'
import { HeroActions } from './hero/HeroActions'
import { ImpactMetrics } from './hero/ImpactMetrics'
import { QuickNav } from './hero/QuickNav'
import { TechStack } from './hero/TechStack'
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
          Senior Full Stack Software Engineer &amp; Enterprise Systems Architect
        </p>

        {/* Value Proposition */}
        <p
          className={`mx-auto mb-8 max-w-3xl text-center text-lg text-secondary transition-all delay-300 duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          25+ years building enterprise systems that{' '}
          <span className='font-medium text-accent'>generate revenue</span>,{' '}
          <span className='font-medium text-accent'>ensure compliance</span>,
          and <span className='font-medium text-accent'>scale globally</span>.
          Experience across multiple industries and countries, specialising in
          business management platforms and R&D PoC projects.
        </p>

        <HeroActions isVisible={isVisible} />

        <ImpactMetrics isVisible={true} />
        <QuickNav isVisible={true} />
        <TechStack isVisible={true} />
        <div className='container mx-auto py-12'>
          <Testimonials />
        </div>
      </div>
    </div>
  )
}

export default Hero
