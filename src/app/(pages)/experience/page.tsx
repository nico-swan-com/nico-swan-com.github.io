'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  ArrowUpRight,
  Linkedin,
  FileText
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  type Experience,
  experienceData,
  impactMetrics,
  experienceSummary
} from '@/lib/data/experience'
import { ResumeDownloadButton } from '@/components/pdf/ResumeDownloadButton'

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
              <Button asChild variant='default' className='gap-2'>
                <a
                  href='https://www.linkedin.com/in/nicoswan/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='size-4' />
                  LinkedIn Profile
                </a>
              </Button>
              <Button asChild variant='outline' className='gap-2'>
                <Link href='/contact'>
                  <FileText className='size-4' />
                  Contact Me
                </Link>
              </Button>
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
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
            {impactMetrics.map((metric, index) => (
              <Card
                key={index}
                className='border-accent/20 bg-gradient-to-br from-background to-accent/5 p-4'
              >
                <div className='flex items-center gap-3'>
                  <div className='rounded-lg bg-accent/10 p-2'>
                    <metric.icon className='size-5 text-accent' />
                  </div>
                  <div>
                    <p className='text-xl font-bold text-primary'>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='mt-16'
        >
          <Card className='border-accent/30 bg-gradient-to-r from-accent/10 via-accent/5 to-background p-8'>
            <div className='flex flex-col items-center gap-8 lg:flex-row'>
              <div className='flex-1 text-center lg:text-left'>
                <h2 className='mb-3 text-2xl font-bold text-primary'>
                  Interested in Working Together?
                </h2>
                <p className='mb-4 text-secondary'>
                  I bring 25+ years of hands-on experience in financial
                  services, regulatory compliance, and building high-performing
                  engineering teams.
                </p>
                <div className='flex flex-wrap justify-center gap-2 lg:justify-start'>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    TypeScript/JavaScript
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    React/Next.js
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    AWS/Docker
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    Microservices
                  </Badge>
                </div>
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
                  <Link href='/portfolio'>
                    <FileText className='size-5' />
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
