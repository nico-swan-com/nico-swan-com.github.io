'use client'

import { motion } from 'framer-motion'
import {
  Github,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Users,
  Shield,
  Award,
  Building2,
  Linkedin,
  FileText
} from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { projects } from '@/lib/projects'

const impactMetrics = [
  {
    icon: TrendingUp,
    value: '$3.7M+',
    label: 'Revenue Generated',
    description: 'Through support services and custom solutions'
  },
  {
    icon: Users,
    value: '34+',
    label: 'Engineers Managed',
    description: '24/7 global teams across US, India, Australia'
  },
  {
    icon: Shield,
    value: 'EMI Licence',
    label: 'Regulatory Compliance',
    description:
      'Secured French banking licence through ABAC & approval systems'
  },
  {
    icon: Award,
    value: '25+ Years',
    label: 'Industry Experience',
    description: 'Business management platforms, R&D, enterprise systems'
  }
]

const domainExpertise = [
  { name: 'Business Management Platforms', highlight: true },
  { name: 'R&D PoC Projects', highlight: true },
  { name: 'Enterprise Architecture', highlight: false },
  { name: 'Microservices & APIs', highlight: false },
  { name: 'Team Leadership', highlight: true },
  { name: 'Cloud Infrastructure', highlight: false },
  { name: 'Security & ABAC', highlight: false }
]

const Portfolio = () => {
  return (
    <div className='pt-16'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {/* Hero Section with Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12'
        >
          <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
            <div className='flex-1'>
              <h1 className='mb-4 text-4xl font-bold text-primary'>
                Full Stack Engineer & Technical Leader
              </h1>
              <p className='max-w-3xl text-xl text-secondary'>
                25+ years building enterprise systems across multiple industries
                and countries. I solve your toughest problems: regulatory
                requirements, distributed teams, and complex architectures.
              </p>
            </div>
            <div className='flex gap-3'>
              <Button asChild variant='default' className='gap-2'>
                <a
                  href='https://www.linkedin.com/in/nicoswan/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='size-4' />
                  Connect on LinkedIn
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

        {/* Impact Metrics - What recruiters want to see */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mb-16'
        >
          <h2 className='mb-6 text-2xl font-semibold text-primary'>
            Proven Impact
          </h2>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {impactMetrics.map((metric, index) => (
              <Card
                key={index}
                className='border-accent/20 bg-gradient-to-br from-background to-accent/5 p-6'
              >
                <div className='flex items-start gap-4'>
                  <div className='rounded-lg bg-accent/10 p-2'>
                    <metric.icon className='size-6 text-accent' />
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-primary'>
                      {metric.value}
                    </p>
                    <p className='text-sm font-medium text-secondary'>
                      {metric.label}
                    </p>
                    <p className='mt-1 text-xs text-muted-foreground'>
                      {metric.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Domain Expertise Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className='mb-12'
        >
          <h2 className='mb-4 text-2xl font-semibold text-primary'>
            Domain Expertise
          </h2>
          <div className='flex flex-wrap gap-2'>
            {domainExpertise.map((domain, index) => (
              <Badge
                key={index}
                variant={domain.highlight ? 'default' : 'outline'}
                className={
                  domain.highlight
                    ? 'bg-accent text-accent-foreground'
                    : 'border-accent/50 text-secondary'
                }
              >
                {domain.name}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-8'
        >
          <h2 className='text-2xl font-semibold text-primary'>
            Featured Projects
          </h2>
          <p className='mt-2 text-secondary'>
            Enterprise systems, compliance platforms, and revenue-generating
            solutions
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.05 }}
            >
              <Card className='group flex h-full flex-col overflow-hidden transition-all hover:border-accent/50 hover:shadow-lg'>
                <div className='relative flex h-48 items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5'>
                  <Building2 className='size-16 text-accent/30 transition-colors group-hover:text-accent/50' />
                  {/* Featured badge for key projects */}
                  {index < 3 && (
                    <Badge className='absolute right-3 top-3 bg-accent text-xs text-accent-foreground'>
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className='flex flex-1 flex-col p-6'>
                  <h3 className='mb-2 text-xl font-semibold text-primary transition-colors group-hover:text-accent'>
                    {project.title}
                  </h3>
                  <p className='mb-4 flex-1 text-sm leading-relaxed text-secondary'>
                    {project.description}
                  </p>

                  {/* Key Achievement Highlight */}
                  {project.achievements && project.achievements[0] && (
                    <div className='mb-4 rounded-lg border border-accent/10 bg-accent/5 p-3'>
                      <p className='mb-1 text-xs font-medium text-accent'>
                        Key Achievement
                      </p>
                      <p className='line-clamp-2 text-sm text-secondary'>
                        {project.achievements[0]}
                      </p>
                    </div>
                  )}

                  <div className='mb-4 space-y-4'>
                    <div className='flex flex-wrap gap-1.5'>
                      {project.technologies.slice(0, 5).map((tech) => (
                        <Badge
                          key={tech}
                          variant='outline'
                          className='border-accent/30 text-xs text-secondary'
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge
                          variant='outline'
                          className='border-accent/30 text-xs text-secondary'
                        >
                          +{project.technologies.length - 5}
                        </Badge>
                      )}
                    </div>
                    <div className='flex gap-2'>
                      {project.githubUrl && (
                        <Button
                          variant='outline'
                          size='sm'
                          className='flex items-center gap-2 bg-transparent hover:bg-accent/20'
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='size-4' />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant='outline'
                          size='sm'
                          className='flex items-center gap-2 bg-transparent hover:bg-accent/20'
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='size-4' />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className='p-6 pt-0'>
                  <Button
                    variant='outline'
                    className='w-full transition-colors group-hover:bg-accent group-hover:text-accent-foreground'
                    asChild
                  >
                    <Link href={`/portfolio/${project.id}`}>
                      View Architecture & Details
                      <ArrowRight className='ml-2 size-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recruiter Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='mt-20'
        >
          <Card className='border-accent/30 bg-gradient-to-r from-accent/10 via-accent/5 to-background p-8'>
            <div className='flex flex-col items-center gap-8 lg:flex-row'>
              <div className='flex-1 text-center lg:text-left'>
                <h2 className='mb-3 text-2xl font-bold text-primary'>
                  Looking for a Senior Full Stack Engineer?
                </h2>
                <p className='mb-4 text-secondary'>
                  I bring 25+ years of experience in business management
                  platforms, R&D PoC projects, and building teams that deliver.
                </p>
                <div className='flex flex-wrap justify-center gap-2 lg:justify-start'>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    TypeScript
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
                    Microservices
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    AWS/Docker
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
                    View LinkedIn Profile
                  </a>
                </Button>
                <Button asChild variant='outline' size='lg' className='gap-2'>
                  <Link href='/experience'>
                    <FileText className='size-5' />
                    Full Experience
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

export default Portfolio
