'use client'

import { ArrowRight, Briefcase, Code } from 'lucide-react'
import Link from 'next/link'

interface QuickNavProps {
  isVisible: boolean
}

export function QuickNav({ isVisible }: QuickNavProps) {
  return (
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
  )
}
