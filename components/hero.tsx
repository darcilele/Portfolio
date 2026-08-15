'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Botanical } from './botanical'
import { assetPath } from '@/lib/utils'

const WHATSAPP = 'https://wa.me/558192942851'

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 md:pt-40">
      {/* Soft organic gradient washes */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-tertiary-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-60 h-[28rem] w-[28rem] rounded-full bg-primary-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 pb-16 md:px-12 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Left — editorial copy */}
        <div className="flex flex-col justify-center lg:col-span-6 lg:pr-6">
          <span className="reveal is-visible mb-8 inline-flex w-fit items-center gap-3 text-xs uppercase tracking-[0.32em] text-tertiary">
            <span className="h-px w-8 bg-tertiary" />
            Psicoterapia Online
          </span>

          <h1 className="font-serif text-[2.7rem] font-light leading-[1.04] tracking-tight text-primary-900 text-balance sm:text-6xl lg:text-[4.4rem]">
            Cada história merece ser acolhida com{' '}
            <em className="font-medium not-italic text-tertiary-700">respeito</em> e{' '}
            <em className="font-medium not-italic text-tertiary-700">sensibilidade</em>.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
            Um espaço de escuta cuidadosa para atravessar o que dói, reconhecer o que
            importa e reencontrar sentido — no seu tempo, ao seu modo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary-900 px-8 py-4 text-sm text-neutral-100 shadow-[0_18px_40px_-18px_rgba(44,33,31,0.7)] transition-all duration-500 hover:bg-primary-700"
            >
              Agendar Consulta
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-primary-200 px-7 py-4 text-sm text-primary-800 transition-all duration-500 hover:border-tertiary hover:text-tertiary-700"
            >
              <span className="h-2 w-2 rounded-full bg-tertiary transition-transform duration-500 group-hover:scale-125" />
              WhatsApp
            </a>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-primary-100 pt-8">
            {[
              ['CRP', '02/33177'],
              ['Sessões', '60 minutos'],
              ['Abordagem', 'Fenomenologia'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.68rem] uppercase tracking-[0.28em] text-primary-400">{k}</dt>
                <dd className="mt-1 font-serif text-xl text-primary-900">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — portrait with organic mask */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <Botanical className="absolute -left-8 -top-10 z-10 hidden h-40 w-auto text-tertiary-400/70 animate-float-slower md:block" />

            <div className="mask-organic grain relative aspect-[4/5] overflow-hidden bg-primary-100 shadow-[0_40px_80px_-40px_rgba(44,33,31,0.55)]">
              <Image
                src={assetPath('/images/Perfil/1.jpeg')}
                alt="Retrato da psicóloga Leticia Darci Silva Rocha"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* Floating glass caption card */}
            <div className="absolute -bottom-6 left-4 z-20 max-w-[15rem] rounded-2xl border border-neutral-0/60 bg-secondary-50/70 p-5 shadow-[0_24px_48px_-24px_rgba(44,33,31,0.5)] backdrop-blur-md md:-left-8">
              <p className="font-serif text-lg leading-snug text-primary-900">
                “Acolher é fazer espaço para quem você é.”
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-primary-400">
                Leticia Darci · Psicóloga
              </p>
            </div>

            <span className="animate-float-slow absolute -right-4 top-1/3 z-0 h-24 w-24 rounded-full bg-tertiary-200/50 blur-md" />
          </div>
        </div>
      </div>

      {/* Marquee-like keyword strip */}
      <div className="relative border-y border-primary-100 bg-primary-50/50">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-center text-sm text-primary-400 md:px-12">
          {['Ansiedade', 'Luto', 'Questões Existenciais', 'Autoconhecimento', 'Juventude', 'Cotidiano'].map(
            (w, i) => (
              <span key={w} className="flex items-center gap-x-10">
                {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-tertiary-200 sm:block" />}
                <span className="font-serif text-lg italic text-primary-700">{w}</span>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
