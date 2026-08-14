import { Reveal } from './reveal'
import { Wind, Cloud, Compass, Sparkles, Sprout, Sunrise } from 'lucide-react'

const topics = [
  {
    icon: Wind,
    title: 'Ansiedade',
    desc: 'Compreender o excesso de alerta e reencontrar espaços de respiro no cotidiano.',
  },
  {
    icon: Cloud,
    title: 'Luto',
    desc: 'Atravessar perdas com acolhimento, no tempo que a dor pede para ser vivida.',
  },
  {
    icon: Compass,
    title: 'Questões Existenciais',
    desc: 'Dar lugar às perguntas sobre sentido, escolhas e os rumos da própria vida.',
  },
  {
    icon: Sparkles,
    title: 'Autoconhecimento',
    desc: 'Olhar com honestidade e gentileza para quem você é e deseja se tornar.',
  },
  {
    icon: Sprout,
    title: 'Juventude',
    desc: 'Um espaço seguro para adolescentes e jovens elaborarem suas vivências.',
  },
  {
    icon: Sunrise,
    title: 'Cotidiano',
    desc: 'Sustentar os desafios do dia a dia e as transições que pedem cuidado.',
  },
]

export function Services() {
  return (
    <section id="cuidado" className="relative overflow-hidden bg-primary-50 py-24 md:py-36">
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-tertiary-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 max-w-2xl">
          <span className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-tertiary">
            <span className="h-px w-8 bg-tertiary" />
            O que podemos cuidar juntos
          </span>
          <h2 className="font-serif text-4xl font-light leading-[1.08] text-primary-900 text-balance md:text-6xl">
            Temas que costumam chegar até a terapia
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, i) => (
            <Reveal key={topic.title} variant="up" delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-primary-100 bg-neutral-0/70 p-8 shadow-[0_20px_50px_-38px_rgba(44,33,31,0.55)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-tertiary-200 hover:shadow-[0_34px_70px_-40px_rgba(44,33,31,0.6)]">
                <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-tertiary-100/0 blur-2xl transition-all duration-500 group-hover:bg-tertiary-100/70" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-100 bg-secondary-50 text-tertiary-700 transition-colors duration-500 group-hover:bg-tertiary group-hover:text-neutral-0">
                  <topic.icon className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <h3 className="relative mt-7 font-serif text-2xl text-primary-900">{topic.title}</h3>
                <p className="relative mt-3 leading-relaxed text-neutral-600">{topic.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
