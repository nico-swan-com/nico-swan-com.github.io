'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowLeft, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Project } from '@/lib/projects'

interface ProjectDetailClientProps {
  project: Project
}

const ProjectDetailClient = ({ project }: ProjectDetailClientProps) => {
  return (
    <div className='pt-16'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant='ghost' className='mb-8' asChild>
            <Link href='/portfolio'>
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Portfolio
            </Link>
          </Button>

          <div className='mb-8'>
            <h1 className='mb-4 text-4xl font-bold text-primary'>
              {project.title}
            </h1>
            <p className='text-xl text-secondary'>{project.description}</p>
          </div>

          <div className='mb-8'>
            <div className='relative h-96 w-full overflow-hidden rounded-lg'>
              <img
                src={project.imageUrl}
                alt={project.title}
                className='h-full w-full object-cover'
              />
            </div>
          </div>

          <div className='mb-8 flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant='outline'
                className='border-accent text-secondary'
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className='mb-8 flex gap-4'>
            {project.githubUrl && (
              <Button variant='outline' asChild>
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='mr-2 h-4 w-4' />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant='outline' asChild>
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <ExternalLink className='mr-2 h-4 w-4' />
                  Live Demo
                </a>
              </Button>
            )}
          </div>

          <div className='grid gap-8 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle className='text-primary'>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='whitespace-pre-line text-secondary'>
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-primary'>Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='whitespace-pre-line text-secondary'>
                  {project.architecture}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className='mt-8 grid gap-8 md:grid-cols-3'>
            <Card>
              <CardHeader>
                <CardTitle className='text-primary'>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className='flex items-start gap-2 text-secondary'
                    >
                      <CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-accent' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-primary'>Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className='flex items-start gap-2 text-secondary'
                    >
                      <CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-accent' />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-primary'>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {project.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className='flex items-start gap-2 text-secondary'
                    >
                      <CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-accent' />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetailClient
