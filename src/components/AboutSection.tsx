import { about } from '@/lib/data/about'

export const AboutSection = () => {
  return (
    <div className='relative overflow-hidden bg-background py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl lg:mx-0'>
          <div className='mb-16'>
            <h2 className='text-3xl font-bold tracking-tight text-primary sm:text-4xl'>
              {about.intro.title}
            </h2>
            <p className='mt-6 text-lg leading-8 text-secondary'>
              {about.intro.description}
            </p>
          </div>

          <div className='border-l-4 border-accent pl-6'>
            <h3 className='text-xl font-semibold text-primary'>
              {about.philosophy.title}
            </h3>
            <p className='mt-4 text-lg italic leading-8 text-secondary'>
              &quot;{about.philosophy.description}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
