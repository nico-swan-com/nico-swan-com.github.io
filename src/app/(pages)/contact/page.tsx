'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Shield,
  Award
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const impactMetrics = [
  { icon: TrendingUp, value: '$3.7M+', label: 'Revenue Generated' },
  { icon: Users, value: '34+', label: 'Engineers Led' },
  { icon: Shield, value: 'EMI License', label: 'Regulatory Compliance' },
  { icon: Award, value: '25+ Years', label: 'Industry Experience' }
]

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    roleType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `${formState.roleType || 'Opportunity'} Inquiry from ${formState.name}`
    )
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\nRole Type: ${formState.roleType}\n\nMessage:\n${formState.message}`
    )
    window.location.href = `mailto:nico@nicoswan.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='pt-16'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8'
        >
          <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
            <div>
              <h1 className='mb-4 text-4xl font-bold text-primary'>
                Let&apos;s Work Together
              </h1>
              <p className='max-w-2xl text-lg text-secondary'>
                Looking for a senior engineer who can architect solutions, lead
                teams, and deliver business value? I&apos;d love to hear about
                your opportunity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mb-12'
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

        <div className='grid gap-8 lg:grid-cols-2'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className='text-primary'>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className='flex flex-col items-center py-8 text-center'>
                    <CheckCircle className='mb-4 size-16 text-green-500' />
                    <h3 className='mb-2 text-xl font-semibold text-primary'>
                      Email Client Opened!
                    </h3>
                    <p className='mb-4 text-secondary'>
                      Your message has been prepared. Please send the email from
                      your mail client.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='grid gap-4 sm:grid-cols-2'>
                      <div>
                        <label
                          htmlFor='name'
                          className='mb-1 block text-sm font-medium text-secondary'
                        >
                          Name *
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className='w-full rounded-md border border-border bg-background px-3 py-2 text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
                          placeholder='Your name'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='mb-1 block text-sm font-medium text-secondary'
                        >
                          Email *
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className='w-full rounded-md border border-border bg-background px-3 py-2 text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
                          placeholder='your@email.com'
                        />
                      </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-2'>
                      <div>
                        <label
                          htmlFor='company'
                          className='mb-1 block text-sm font-medium text-secondary'
                        >
                          Company
                        </label>
                        <input
                          type='text'
                          id='company'
                          name='company'
                          value={formState.company}
                          onChange={handleChange}
                          className='w-full rounded-md border border-border bg-background px-3 py-2 text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
                          placeholder='Your company'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='roleType'
                          className='mb-1 block text-sm font-medium text-secondary'
                        >
                          Role Type
                        </label>
                        <select
                          id='roleType'
                          name='roleType'
                          value={formState.roleType}
                          onChange={handleChange}
                          className='w-full rounded-md border border-border bg-background px-3 py-2 text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
                        >
                          <option value=''>Select role type</option>
                          <option value='Full-time Permanent'>
                            Full-time Permanent
                          </option>
                          <option value='Contract'>Contract</option>
                          <option value='Consulting'>Consulting</option>
                          <option value='Technical Leadership'>
                            Technical Leadership
                          </option>
                          <option value='Other'>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='message'
                        className='mb-1 block text-sm font-medium text-secondary'
                      >
                        Message *
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className='w-full rounded-md border border-border bg-background px-3 py-2 text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
                        placeholder='Tell me about the opportunity...'
                      />
                    </div>

                    <Button
                      type='submit'
                      className='w-full gap-2'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Opening Email...'
                      ) : (
                        <>
                          <Send className='size-4' />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='space-y-6'
          >
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className='text-primary'>Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <a
                  href='https://www.linkedin.com/in/nicoswan/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent/10'
                >
                  <div className='rounded-lg bg-[#0077B5]/10 p-2'>
                    <Linkedin className='size-5 text-[#0077B5]' />
                  </div>
                  <div>
                    <p className='font-medium text-primary'>LinkedIn</p>
                    <p className='text-sm text-secondary'>
                      linkedin.com/in/nicoswan
                    </p>
                  </div>
                  <ArrowRight className='ml-auto size-4 text-muted-foreground' />
                </a>

                <a
                  href='mailto:nico@nicoswan.com'
                  className='flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent/10'
                >
                  <div className='rounded-lg bg-accent/10 p-2'>
                    <Mail className='size-5 text-accent' />
                  </div>
                  <div>
                    <p className='font-medium text-primary'>Email</p>
                    <p className='text-sm text-secondary'>nico@nicoswan.com</p>
                  </div>
                  <ArrowRight className='ml-auto size-4 text-muted-foreground' />
                </a>

                <div className='flex items-center gap-3 rounded-lg p-3'>
                  <div className='rounded-lg bg-accent/10 p-2'>
                    <MapPin className='size-5 text-accent' />
                  </div>
                  <div>
                    <p className='font-medium text-primary'>Location</p>
                    <p className='text-sm text-secondary'>
                      South Africa (Remote-friendly)
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-3 rounded-lg p-3'>
                  <div className='rounded-lg bg-accent/10 p-2'>
                    <Clock className='size-5 text-accent' />
                  </div>
                  <div>
                    <p className='font-medium text-primary'>Timezone</p>
                    <p className='text-sm text-secondary'>
                      SAST (UTC+2) • Flexible for global teams
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What I'm Looking For */}
            <Card>
              <CardHeader>
                <CardTitle className='text-primary'>
                  What I&apos;m Looking For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-3'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='mt-0.5 size-4 shrink-0 text-accent' />
                    <span className='text-secondary'>
                      Senior/Lead Full Stack Developer roles
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='mt-0.5 size-4 shrink-0 text-accent' />
                    <span className='text-secondary'>
                      Business management platforms and R&D PoC projects
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='mt-0.5 size-4 shrink-0 text-accent' />
                    <span className='text-secondary'>
                      Remote or hybrid arrangements
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='mt-0.5 size-4 shrink-0 text-accent' />
                    <span className='text-secondary'>
                      Contract or permanent positions
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='mt-0.5 size-4 shrink-0 text-accent' />
                    <span className='text-secondary'>
                      Technical leadership opportunities
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Core Tech Stack */}
            <Card>
              <CardHeader>
                <CardTitle className='text-primary'>Core Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
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
                    NestJS
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
                    Docker
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    AWS/GCP
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-accent text-secondary'
                  >
                    Microservices
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <div className='flex gap-3'>
              <Button asChild variant='outline' className='flex-1 gap-2'>
                <Link href='/portfolio'>View Portfolio</Link>
              </Button>
              <Button asChild variant='outline' className='flex-1 gap-2'>
                <Link href='/experience'>View Experience</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
