'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Linkedin,
  TrendingUp,
  Users,
  Shield,
  Award,
  Briefcase,
  Code,
  Quote
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const impactMetrics = [
  { icon: TrendingUp, value: '$3.7M+', label: 'Revenue Generated' },
  { icon: Users, value: '34+', label: 'Engineers Led' },
  { icon: Shield, value: 'EMI Licence', label: 'Secured' },
  { icon: Award, value: '25+ Years', label: 'Experience' }
]

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

        {/* CTA Buttons */}
        <div
          className={`mb-12 flex flex-wrap justify-center gap-4 transition-all delay-400 duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Button asChild size='lg' className='gap-2'>
            <a
              href='https://www.linkedin.com/in/nicoswan/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin className='size-5' />
              Connect on LinkedIn
            </a>
          </Button>
          <Button asChild variant='outline' size='lg' className='gap-2'>
            <Link href='/contact'>
              Contact Me
              <ArrowRight className='size-4' />
            </Link>
          </Button>
        </div>

        {/* Impact Metrics */}
        <div
          className={`mb-12 grid grid-cols-2 gap-3 transition-all delay-500 duration-700 sm:grid-cols-4 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {impactMetrics.map((metric, index) => (
            <Card
              key={index}
              className='border-accent/20 bg-background/50 p-4 backdrop-blur-sm'
            >
              <div className='flex items-center gap-3'>
                <div className='rounded-lg bg-accent/10 p-2'>
                  <metric.icon className='size-5 text-accent' />
                </div>
                <div>
                  <p className='text-lg font-bold text-primary sm:text-xl'>
                    {metric.value}
                  </p>
                  <p className='text-xs text-muted-foreground'>
                    {metric.label}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Navigation */}
        <div
          className={`flex flex-col items-center gap-6 transition-all delay-600 duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className='text-sm uppercase tracking-widest text-muted-foreground'>
            Explore My Work
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href='/experience'
              className='group flex items-center gap-2 rounded-lg border border-border bg-card/50 px-6 py-3 transition-all hover:border-accent/50 hover:bg-accent/5'
            >
              <Briefcase className='size-5 text-accent' />
              <span className='font-medium text-primary'>Experience</span>
              <ArrowRight className='size-4 text-muted-foreground transition-transform group-hover:translate-x-1' />
            </Link>
            <Link
              href='/portfolio'
              className='group flex items-center gap-2 rounded-lg border border-border bg-card/50 px-6 py-3 transition-all hover:border-accent/50 hover:bg-accent/5'
            >
              <Code className='size-5 text-accent' />
              <span className='font-medium text-primary'>Portfolio</span>
              <ArrowRight className='size-4 text-muted-foreground transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-2 transition-all delay-700 duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            'TypeScript',
            'Node.js',
            'React/Next.js',
            'PostgreSQL',
            'Microservices',
            'GCP (Cloud SQL)',
            'Kubernetes',
            'Azure Functions',
            'AWS S3'
          ].map((tech) => (
            <Badge
              key={tech}
              variant='outline'
              className='border-accent/30 text-secondary'
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Testimonial Highlight */}
        <div
          className={`mt-12 transition-all delay-800 duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Card className='relative mx-auto max-w-2xl border-accent/20 bg-background/50 p-6 backdrop-blur-sm'>
            <Quote className='absolute right-4 top-4 size-6 text-accent/20' />
            <p className='mb-3 text-center text-sm italic text-secondary'>
              &ldquo;Nico is a smart thinking professional, technology savvy,
              with the business acumen and execution focus to make a real
              difference in any team, function or organisation.&rdquo;
            </p>
            <p className='text-center text-xs text-muted-foreground'>
              <span className='font-medium text-primary'>John Andrews</span>
              {' • '}Practice Lead @ Accenture
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Hero
