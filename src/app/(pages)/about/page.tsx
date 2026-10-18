'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Rocket, Shield, Users, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { testimonials, accomplishments, coreTech } from '@/lib/data'
import { getIcon } from '@/lib/icons'
import { TechBadgeList, RecruiterCTA, SocialButtons } from '@/components/shared'

const About = () => {
  return (
    <div className='pt-16'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {/* Header with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12'
        >
          <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
            <div>
              <h1 className='mb-4 text-4xl font-bold text-primary'>About Me</h1>
            </div>
            <SocialButtons
              linkedInLabel='LinkedIn Profile'
              contactLabel='Contact Me'
            />
          </div>

          <div className='prose prose-lg mt-6 max-w-none text-secondary'>
            <p className='mb-4 text-lg leading-relaxed'>
              I&apos;m a software engineer at BCB Group, a regulated crypto and
              payments firm, where I&apos;ve worked on the platform team since
              July 2021. Before that I built ServiceNow capabilities and ran a
              13-person team at NTT, and managed a 24/7 department of 34
              engineers across the US and India at TEOCO. I&apos;ve delivered
              telecom and financial systems for clients in the UK, Europe, the
              Middle East, the US and South Africa.
            </p>
            <p className='mb-4 text-lg leading-relaxed'>
              At BCB I designed the four-eyes approval engine and the
              authorisation service behind part of BCB&apos;s controls for its
              French EMI licence, and led the architecture for client API
              request signing, which went live in production on 12 October 2026.
            </p>
            <p className='text-lg leading-relaxed'>
              I also run a small part-time consultancy,{' '}
              <a
                href='https://cygnus-labs.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-accent hover:underline'
              >
                Cygnus Labs
              </a>
              , building business software for small businesses in South Africa.
              My current client is WetInk.
            </p>
          </div>

          {/* Core Technologies */}
          <div className='mt-6'>
            <TechBadgeList
              technologies={coreTech}
              badgeClassName='border-accent text-secondary'
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-16'
        >
          <h2 className='mb-8 text-3xl font-semibold text-primary'>
            Key Accomplishments
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {accomplishments.map((item, index) => {
              const Icon = getIcon(item.iconName)
              return (
                <Card
                  key={index}
                  className='border-accent/20 bg-gradient-to-br from-background to-accent/5 p-6 transition-shadow hover:shadow-lg'
                >
                  <div className='flex items-start space-x-4'>
                    <div className='shrink-0 rounded-lg bg-accent/10 p-2'>
                      <Icon className='size-6 text-accent' />
                    </div>
                    <div>
                      <h3 className='mb-2 text-xl font-semibold text-primary'>
                        {item.title}
                      </h3>
                      <p className='text-secondary'>{item.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </motion.div>

        <Separator className='my-12' />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mb-16'
        >
          <h2 className='mb-8 text-3xl font-semibold text-primary'>
            What I Bring to Your Team
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <Rocket className='size-5 text-accent' />
                <h3 className='text-xl font-semibold text-primary'>
                  Solution Architecture
                </h3>
              </div>
              <p className='text-secondary'>
                I design services and the boundaries between them, then write it
                down as RFCs, PRDs and as-built docs. At BCB that has covered
                client API signing, authorisation, four-eyes approvals and
                billing.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <Shield className='size-5 text-accent' />
                <h3 className='text-xl font-semibold text-primary'>
                  Building Inside Regulation
                </h3>
              </div>
              <p className='text-secondary'>
                Most of my recent work sits under a licence: attribute-based
                authorisation, four-eyes approvals, PSD2 one-time passwords and
                audit trails at BCB, and SARS VAT and FICA checks for a South
                African client. I build the controls in from the start.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <Users className='size-5 text-accent' />
                <h3 className='text-xl font-semibold text-primary'>
                  Cross-Timezone Leadership
                </h3>
              </div>
              <p className='text-secondary'>
                Led a 34-person engineering department across the US and India
                (TEOCO) and a 13-person team of analysts and developers across
                South Africa and Australia (NTT). Today I work remotely from
                Johannesburg with a London-based team.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <Lightbulb className='size-5 text-accent' />
                <h3 className='text-xl font-semibold text-primary'>
                  Business Impact Focus
                </h3>
              </div>
              <p className='text-secondary'>
                I tie technical work to something the business can see. At TEOCO
                that was $3M in support revenue on a $20M project and $700K from
                professional services. At BCB it was French EMI licence
                controls, and billing changes that ended manual database fixes
                by Support.
              </p>
            </div>
          </div>
        </motion.div>

        <Separator className='my-12' />

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='mb-16'
        >
          <h2 className='mb-8 text-3xl font-semibold text-primary'>
            What Others Say
          </h2>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {testimonials.slice(0, 2).map((testimonial) => (
              <Card
                key={testimonial.id}
                className='relative border-accent/20 bg-gradient-to-br from-background to-accent/5 p-6'
              >
                <Quote className='absolute right-6 top-6 size-8 text-accent/20' />
                <div className='mb-4'>
                  <p className='italic leading-relaxed text-secondary'>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className='border-t border-border pt-4'>
                  <p className='font-semibold text-primary'>
                    {testimonial.name}
                  </p>
                  <p className='text-sm text-secondary'>{testimonial.title}</p>
                  {testimonial.relationship && testimonial.date && (
                    <p className='mt-1 text-xs text-muted-foreground'>
                      {testimonial.relationship} • {testimonial.date}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
          <p className='mt-4 text-center text-sm text-muted-foreground'>
            View more recommendations on{' '}
            <a
              href='https://www.linkedin.com/in/nicoswan/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent hover:underline'
            >
              LinkedIn
            </a>
          </p>
        </motion.div>

        {/* Recruiter Call-to-Action */}
        <RecruiterCTA
          headline='Hiring a Staff Engineer?'
          description="I'm looking for a remote Staff Software Engineer role on a fintech platform: API security, authorisation, payments or billing. Have a look at my experience, or message me on LinkedIn."
          primaryLink='/experience'
          primaryLabel='View Experience'
          showTechBadges={false}
          animationDelay={0.6}
        />
      </div>
    </div>
  )
}

export default About
