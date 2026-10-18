'use client'

import { motion } from 'framer-motion'
import { Linkedin, FileText } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { coreTech } from '@/lib/data'

interface RecruiterCTAProps {
  /**
   * Headline text for the CTA.
   * @default "Interested in Working Together?"
   */
  headline?: string
  /**
   * Description text.
   * @default "I'm looking for Staff-level engineering work..."
   */
  description?: string
  /**
   * Primary link destination.
   * @default "/portfolio"
   */
  primaryLink?: string
  /**
   * Primary link label.
   * @default "View Portfolio"
   */
  primaryLabel?: string
  /**
   * Whether to show technology badges.
   * @default true
   */
  showTechBadges?: boolean
  /**
   * Custom technology list (defaults to coreTech).
   */
  technologies?: string[]
  /**
   * Animation delay for framer-motion.
   * @default 0.5
   */
  animationDelay?: number
}

/**
 * Reusable recruiter call-to-action section.
 * Replaces duplicated CTA sections across experience, about, portfolio pages.
 */
export function RecruiterCTA({
  headline = 'Interested in Working Together?',
  description = "I'm looking for Staff-level engineering work on platforms that have to be secure and correct, remote from Johannesburg. If that sounds like your team, get in touch.",
  primaryLink = '/portfolio',
  primaryLabel = 'View Portfolio',
  showTechBadges = true,
  technologies = coreTech,
  animationDelay = 0.5
}: RecruiterCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
    >
      <Card className='border-accent/30 bg-gradient-to-r from-accent/10 via-accent/5 to-background p-8'>
        <div className='flex flex-col items-center gap-8 lg:flex-row'>
          <div className='flex-1 text-center lg:text-left'>
            <h2 className='mb-3 text-2xl font-bold text-primary'>{headline}</h2>
            <p className='mb-4 text-secondary'>{description}</p>
            {showTechBadges && (
              <div className='flex flex-wrap justify-center gap-2 lg:justify-start'>
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className='flex flex-col gap-3 sm:flex-row'>
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
              <Link href={primaryLink}>
                <FileText className='size-5' />
                {primaryLabel}
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
