import { getProjectById } from '@/lib/projects'
import { notFound } from 'next/navigation'
import ProjectDetailClient from './ProjectDetailClient'

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { slug } = await params
  const project = getProjectById(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}

export default ProjectDetailPage
