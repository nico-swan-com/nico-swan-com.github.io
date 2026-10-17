import FractalGrid from '@/components/FractalGrid'
import Hero from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <FractalGrid />
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <AboutSection />
        </section>
      </main>
    </>
  )
}
