'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  Lightbulb,
  Rocket,
  Shield,
  TrendingUp,
  Users,
  Linkedin,
  FileText
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const About = () => {
  const accomplishments = [
    {
      title: 'Regulatory Compliance',
      description:
        "Developed ABAC entitlements and approval workflows that secured BCB Group's French EMI banking license",
      icon: <Shield className='size-6 text-accent' />
    },
    {
      title: 'Revenue Generation',
      description:
        'Generated $3.7M+ in revenue through support services and custom solutions at TEOCO',
      icon: <TrendingUp className='size-6 text-accent' />
    },
    {
      title: 'Team Leadership',
      description:
        'Built and led 24/7 support operations with 34 engineers across US, India, and Australia',
      icon: <Users className='size-6 text-accent' />
    }
  ]

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
            <div className='flex gap-3'>
              <Button asChild variant='default' className='gap-2'>
                <a
                  href='https://www.linkedin.com/in/nicoswan/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='h-4 w-4' />
                  LinkedIn Profile
                </a>
              </Button>
              <Button asChild variant='outline' className='gap-2'>
                <Link href='/contact'>
                  <FileText className='h-4 w-4' />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>

          <div className='prose prose-lg mt-6 max-w-none text-secondary'>
            <p className='mb-4 text-lg leading-relaxed'>
              Senior Full Stack Software Engineer with 25+ years building
              enterprise systems in financial services, telecommunications, and
              managed services. I specialize in regulatory compliance,
              distributed architectures, and leading engineering teams across
              multiple time zones.
            </p>
            <p className='text-lg leading-relaxed'>
              Currently at BCB Group, I developed the entitlements and approval
              workflow capabilities that were critical to securing a French EMI
              banking license. I combine deep technical expertise with business
              acumen—having generated $3.7M+ in revenue through technical
              leadership and custom solutions.
            </p>
          </div>

          {/* Core Technologies */}
          <div className='mt-6 flex flex-wrap gap-2'>
            <Badge variant='outline' className='border-accent text-secondary'>
              TypeScript
            </Badge>
            <Badge variant='outline' className='border-accent text-secondary'>
              Node.js
            </Badge>
            <Badge variant='outline' className='border-accent text-secondary'>
              React/Next.js
            </Badge>
            <Badge variant='outline' className='border-accent text-secondary'>
              NestJS
            </Badge>
            <Badge variant='outline' className='border-accent text-secondary'>
              PostgreSQL
            </Badge>
            <Badge variant='outline' className='border-accent text-secondary'>
              Docker
            </Badge>
            <Badge variant='outline' className='border-accent text-secondary'>
              Microservices
            </Badge>
            <Badge variant='outline' className='border-accent text-secondary'>
              GCP/AWS
            </Badge>
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
            {accomplishments.map((item, index) => (
              <Card
                key={index}
                className='border-accent/20 bg-gradient-to-br from-background to-accent/5 p-6 transition-shadow hover:shadow-lg'
              >
                <div className='flex items-start space-x-4'>
                  <div className='shrink-0 rounded-lg bg-accent/10 p-2'>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className='mb-2 text-xl font-semibold text-primary'>
                      {item.title}
                    </h3>
                    <p className='text-secondary'>{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
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
                <Rocket className='h-5 w-5 text-accent' />
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
                <Shield className='h-5 w-5 text-accent' />
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
                <Users className='h-5 w-5 text-accent' />
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
                <Lightbulb className='h-5 w-5 text-accent' />
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

        {/* Recruiter Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className='border-accent/30 bg-gradient-to-r from-accent/10 via-accent/5 to-background p-8'>
            <div className='flex flex-col items-center gap-8 lg:flex-row'>
              <div className='flex-1 text-center lg:text-left'>
                <h2 className='mb-3 text-2xl font-bold text-primary'>
                  Let&apos;s Build Something Great
                </h2>
                <p className='mb-4 text-secondary'>
                  Looking for a senior engineer who can architect solutions,
                  lead teams, and deliver business value? Let&apos;s talk about
                  how I can contribute to your organization.
                </p>
              </div>
              <div className='flex flex-col gap-3 sm:flex-row'>
                <Button asChild size='lg' className='gap-2'>
                  <a
                    href='https://www.linkedin.com/in/nicoswan/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin className='h-5 w-5' />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild variant='outline' size='lg' className='gap-2'>
                  <Link href='/experience'>
                    <FileText className='h-5 w-5' />
                    View Experience
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

export default About
