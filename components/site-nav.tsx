'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Inicio', href: '#topo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Demandas', href: '#cuidado' },
  { label: 'Experiências', href: '#processo' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Registro e vivências', href: '#galeria' },
  { label: 'Certificações', href: '#certificacoes' },
  { label: 'Duvidas', href: '#perguntas' },
]

const WHATSAPP = 'https://wa.me/558192942851'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-secondary-50/80 backdrop-blur-md border-b border-primary-100/70'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#topo" className="group flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight text-primary-900 md:text-2xl">
            Letícia Darci
          </span>
          <span className="text-[0.68rem] uppercase tracking-[0.32em] text-primary-400">
            Psicologia
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-primary-700 transition-colors hover:text-primary-900"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-tertiary transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-primary-200 px-6 py-2.5 text-sm text-primary-700 transition-all duration-500 hover:border-tertiary hover:bg-tertiary hover:text-neutral-0 md:inline-block"
          >
            Agendar Consulta
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-primary-900 transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span className={`h-px w-6 bg-primary-900 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-px w-6 bg-primary-900 transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-y-auto border-t border-primary-100/70 bg-secondary-50/95 backdrop-blur-md transition-[max-height] duration-500 lg:hidden ${
          open ? 'max-h-[calc(100vh_-_5rem)]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-serif text-2xl text-primary-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-full bg-tertiary px-6 py-3 text-sm text-neutral-0"
            >
              Agendar Consulta
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
