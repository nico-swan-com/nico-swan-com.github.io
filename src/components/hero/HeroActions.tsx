'use client'

import { ArrowRight, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeroActionsProps {
  isVisible: boolean
}

export function HeroActions({ isVisible }: HeroActionsProps) {
  return (
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
  )
}
