import { Reveal } from './reveal'
import { Video, Clock3, HeartHandshake } from 'lucide-react'

const steps = [
  {
    n: 'I',
    icon: Video,
    title: 'Online',
    desc: 'Sessões por vídeo, com a mesma presença e cuidado de um encontro presencial — de onde você se sentir à vontade.',
  },
  {
    n: 'II',
    icon: Clock3,
    title: '60 minutos',
    desc: 'Um tempo dedicado inteiramente a você, sem pressa, para que cada conversa encontre o seu ritmo.',
  },
  {
    n: 'III',
    icon: HeartHandshake,
    title: 'Acompanhamento Contínuo',
    desc: 'Um percurso construído no vínculo, que respeita cada fase e sustenta as suas travessias.',
  },
]

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-20 flex flex-col items-center text-center">
          <span className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-tertiary">
            <span className="h-px w-8 bg-tertiary" />
            A experiência
          </span>
          <h2 className="max-w-2xl font-serif text-4xl font-light leading-[1.08] text-primary-900 text-balance md:text-6xl">
            Como acontece o nosso encontro
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-1/2 top-16 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-tertiary-200 to-transparent md:block" />

          {steps.map((step, i) => (
            <Reveal key={step.title} variant="up" delay={i * 140} className="relative flex flex-col items-center text-center">
              <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-primary-100 bg-secondary-50" />
                <span className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 font-serif text-lg text-neutral-100">
                  {step.n}
                </span>
                <step.icon className="relative h-11 w-11 text-tertiary-700" strokeWidth={1.2} />
              </div>
              <h3 className="font-serif text-2xl text-primary-900 md:text-3xl">{step.title}</h3>
              <p className="mt-4 max-w-xs leading-relaxed text-neutral-600">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
