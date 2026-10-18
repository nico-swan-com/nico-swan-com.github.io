'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  type Experience,
  experienceData,
  experienceSummary
} from '@/lib/data/experience'
import { impactMetrics } from '@/lib/data'
import { ResumeDownloadButton } from '@/components/pdf/ResumeDownloadButton'
import {
  ImpactMetricsGrid,
  RecruiterCTA,
  SocialButtons
} from '@/components/shared'

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(
    experienceData[0] || null
  )

  return (
    <div className='pt-16'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {/* Header with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8'
        >
          <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
            <div>
              <h1 className='mb-4 text-4xl font-bold text-primary'>
                Professional Experience
              </h1>
            </div>
            <div className='flex gap-3'>
              <ResumeDownloadButton />
              <SocialButtons
                linkedInLabel='LinkedIn Profile'
                contactLabel='Contact Me'
              />
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mb-8'
        >
          <ImpactMetricsGrid metrics={impactMetrics} />
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className='mb-12'
        >
          <p className='text-lg leading-relaxed text-secondary'>
            {experienceSummary}
          </p>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-6'
        >
          <h2 className='text-2xl font-semibold text-primary'>
            Career Timeline
          </h2>
          <p className='text-muted-foreground'>
            Click on any role to view details
          </p>
        </motion.div>

        <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className='space-y-4'
          >
            {experienceData.map((exp, index) => (
              <div key={exp.id} className='relative'>
                {/* Timeline connector */}
                {index < experienceData.length - 1 && (
                  <div className='absolute left-[27px] top-[60px] h-[calc(100%+1rem)] w-0.5 bg-accent/20' />
                )}
                <Card
                  className={`cursor-pointer transition-all hover:border-accent/50 hover:shadow-lg ${
                    selectedExp?.id === exp.id
                      ? 'border-accent bg-accent/5 ring-2 ring-accent'
                      : ''
                  }`}
                  onClick={() => setSelectedExp(exp)}
                >
                  <CardContent className='p-4'>
                    <div className='flex items-start space-x-4'>
                      <div
                        className={`relative z-10 shrink-0 rounded-lg p-2 ${
                          selectedExp?.id === exp.id
                            ? 'bg-accent'
                            : 'bg-accent/10'
                        }`}
                      >
                        <Briefcase
                          className={`size-5 ${
                            selectedExp?.id === exp.id
                              ? 'text-accent-foreground'
                              : 'text-accent'
                          }`}
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <h3 className='truncate text-lg font-semibold text-primary'>
                          {exp.role}
                        </h3>
                        <p className='mt-0.5 text-sm text-secondary'>
                          {exp.company}
                        </p>
                        <div className='mt-1.5 flex items-center text-sm text-muted-foreground'>
                          <Calendar className='mr-1.5 size-3.5' />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      {exp.period.includes('Present') && (
                        <Badge className='shrink-0 border-green-500/20 bg-green-500/10 text-xs text-green-600'>
                          Current
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='lg:sticky lg:top-24 lg:self-start'
          >
            {selectedExp ? (
              <Card className='max-h-[calc(100vh-8rem)] overflow-y-auto'>
                <CardHeader>
                  <CardTitle className='text-2xl font-semibold text-primary'>
                    {selectedExp.role}
                  </CardTitle>
                  <p className='mt-2 text-secondary'>{selectedExp.company}</p>
                  <div className='mt-2 flex items-center text-muted-foreground'>
                    <Calendar className='mr-2 size-4' />
                    <span>{selectedExp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='mb-6 text-secondary'>
                    {selectedExp.description}
                  </p>

                  <h4 className='mb-3 text-lg font-semibold text-primary'>
                    Key Achievements
                  </h4>
                  <ul className='mb-6 space-y-3'>
                    {selectedExp.achievements.map((achievement, index) => (
                      <li key={index} className='flex items-start'>
                        <ArrowUpRight className='mr-2 mt-1 size-5 shrink-0 text-accent' />
                        <span className='text-secondary'>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className='mb-3 text-lg font-semibold text-primary'>
                    Technologies & Skills
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {selectedExp.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant='outline'
                        className='border-accent text-secondary'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className='flex h-full items-center justify-center'>
                <p className='text-lg text-muted-foreground'>
                  Select an experience to view details
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Recruiter Call-to-Action */}
        <div className='mt-16'>
          <RecruiterCTA
            headline='Interested in Working Together?'
            description="I'm looking for Staff-level engineering work on platforms that have to be secure and correct, remote from Johannesburg. If that sounds like your team, get in touch."
            primaryLink='/contact'
            primaryLabel='Contact Me'
            animationDelay={0.5}
          />
        </div>
      </div>
    </div>
  )
}

export default Experience
