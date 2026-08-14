import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Experience } from '@/components/experience'
import { Gallery } from '@/components/gallery'
import { Certificates } from '@/components/certificates'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative">
      <SiteNav />
      <Hero />
      <About />
      <Services />
      <Process />
      <Experience />
      <Gallery />
      <Certificates />
      <Faq />
      <SiteFooter />
    </main>
  )
}
