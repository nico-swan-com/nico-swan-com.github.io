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
              Senior Full Stack Software Engineer with 25+ years building
              enterprise systems across multiple industries (financial services,
              telecommunications, managed services, and more) and countries
              (United States, United Kingdom, Australia, India, South Africa,
              Europe, Middle East, Central America and Africa). I specialise in
              business management platforms, R&D PoC projects, distributed
              architectures, and leading engineering teams across multiple time
              zones.
            </p>
            <p className='text-lg leading-relaxed'>
              Currently at BCB Group, I developed the entitlements and approval
              workflow capabilities that were critical to securing a French EMI
              banking licence. I combine deep technical expertise with business
              acumen—having generated $3.7M+ in revenue through technical
              leadership and custom solutions.
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
                  Enterprise Architecture
                </h3>
              </div>
              <p className='text-secondary'>
                Designing three-layer architectures, microservices, and
                event-driven systems. Experience with feature-based code
                organization that scales with team size and complexity.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <Shield className='size-5 text-accent' />
                <h3 className='text-xl font-semibold text-primary'>
                  Regulatory Compliance
                </h3>
              </div>
              <p className='text-secondary'>
                Deep experience with ABAC/RBAC authorization, approval
                workflows, audit trails, and financial compliance (EMI
                licensing, SARS VAT, FICA). I understand what regulators need.
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
                Led teams of 13-34 engineers across US, India, UK, Australia,
                and South Africa. Experienced with follow-the-sun operations and
                distributed team collaboration.
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
                Every technical decision tied to business outcomes. Track record
                of generating revenue ($3.7M+), reducing costs, and delivering
                capabilities that unlock business opportunities (EMI license).
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
          headline="Let's Build Something Great"
          description="Looking for a senior engineer who can architect solutions, lead teams, and deliver business value? Let's talk about how I can contribute to your organisation."
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
