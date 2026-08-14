import { ArrowUpRight, Camera, MessageCircle } from 'lucide-react'
import { Reveal } from './reveal'
import { Botanical } from './botanical'

const WHATSAPP = 'https://wa.me/558192942851'
const INSTAGRAM = 'https://instagram.com'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary-900 text-primary-100">
      {/* Final CTA */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <Botanical className="pointer-events-none absolute right-8 top-8 hidden h-48 w-auto text-primary-700/60 md:block" />

        <Reveal className="max-w-3xl">
          <span className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-tertiary-200">
            <span className="h-px w-8 bg-tertiary-200" />
            Vamos conversar
          </span>
          <h2 className="font-serif text-4xl font-light leading-[1.05] text-secondary-50 text-balance md:text-6xl lg:text-7xl">
            O primeiro passo pode ser dado com gentileza.
          </h2>
          <p className="mt-8 max-w-lg leading-relaxed text-primary-200">
            Se você sente que é hora de ser ouvida com cuidado, estarei aqui para
            acolher a sua história.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-secondary-50 px-8 py-4 text-sm text-primary-900 transition-all duration-500 hover:bg-tertiary hover:text-neutral-0"
          >
            Agendar Consulta
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>

      {/* Footer base */}
      <div className="border-t border-primary-700/60">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-12">
          <div>
            <p className="font-serif text-2xl text-secondary-50">Leticia Darci Silva Rocha</p>
            <p className="mt-2 text-sm text-primary-200">Psicóloga Clínica · CRP 02/33177</p>
            <p className="mt-1 text-sm text-primary-400">Fenomenologia Existencial · Atendimento Online</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-700 text-primary-100 transition-all duration-500 hover:border-tertiary-200 hover:bg-tertiary hover:text-neutral-0"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
            </a>
            {/* <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-700 text-primary-100 transition-all duration-500 hover:border-tertiary-200 hover:bg-tertiary hover:text-neutral-0"
            >
              <Camera className="h-5 w-5" strokeWidth={1.5} />
            </a> */}
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] border-t border-primary-700/40 px-6 py-6 md:px-12">
          <p className="text-xs text-primary-400">
            © {new Date().getFullYear()} Leticia Darci Silva Rocha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
