import type { Testimonial } from './types'

/**
 * Single source of truth for testimonials.
 * Consolidated from about.ts and Testimonials.tsx with consistent schema.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'john-andrews',
    name: 'John Andrews',
    title: 'Strategic & Enterprise Accounts, Southeast Asia, Planview',
    role: 'Planview; senior colleague at NTT/Dimension Data at the time',
    relationship: 'Senior colleague at NTT/Dimension Data at the time',
    date: 'July 2021',
    quote:
      "Nico is a smart thinking professional, technology savvy, with the business acumen and execution focus to make a real difference in any team, function or organisation. Moreover, he's able to communicate in an engaging way, bringing people along with him in a collaborative and open style. Nico has high ambitions, has achieved a great deal, and no doubt will continue to deliver against his ambitions, being an asset to whatever organisation he works with."
  },
  {
    id: 'brian-white',
    name: 'Brian White',
    title: 'Vice President New Product Introduction for the Americas, Ericsson',
    role: 'Ericsson; my direct manager at TEOCO/AIRCOM at the time',
    relationship: 'My direct manager at TEOCO/AIRCOM at the time',
    date: 'April 2014',
    quote:
      'Nico was a pivotal leader in the delivery of perhaps the largest Telecom Performance Management platform deployed to date. He took on increasingly important positions and surpassed expectations in each role. His work ethic and professionalism are second to none. I look forward to the opportunity to work with Nico again in future.'
  },
  {
    id: 'jan-posthumus',
    name: 'Jan Posthumus',
    title: 'Managing Director @ Manasa (Pty) Ltd.',
    role: 'Managing Director @ Manasa (Pty) Ltd.',
    quote:
      'Mr. Swan possesses unique skills and expertise with regards to software development and integration... He applies his mind creatively to solve problems and challenges.'
  },
  {
    id: 'tj-grobbelaar',
    name: 'T.J. Grobbelaar',
    title: 'Managing Director @ AGI Information Systems',
    role: 'Managing Director @ AGI Information Systems',
    quote:
      'Nico performed his work efficiently and proved to be a very dependable, honest and trustworthy person... Given a challenge, I have no doubt that he will meet it with success.'
  },
  {
    id: 't-ribeiro',
    name: 'T. Ribeiro',
    title: 'Allianz Insurance Limited',
    role: 'Allianz Insurance Limited',
    quote:
      'He had the task of virtually having to re-write the program under a great deal of pressure... He subsequently completed the task in the expected time. It was a pleasure working with Nico.'
  },
  {
    id: 'henk-kruger',
    name: 'Henk Krüger',
    title: 'Financial Director @ Contract Lease Management',
    role: 'Financial Director @ Contract Lease Management',
    quote:
      'Nico is a very diligent, punctual and hardworking individual. His computer literacy is far beyond the expected level... His ambition, drive and eagerness to learn will always benefit him.'
  }
]
