import { Reveal } from './reveal'

const timeline = [
  {
    date: 'Jan/2026 – Atualmente',
    title: 'Acompanhante Terapêutica',
    subtitle: 'Desenvolver terapias integradas',
    desc: 'AT escolar a crianças neurodivergentes.',
  },
  {
    date: 'Jan/2026 (6 meses)',
    title: 'Adaptação de livros',
    subtitle: 'Acreditar',
    desc: 'Adaptação de materiais pedagógicos.',
  },
  {
    date: 'Ago/2025 (6 meses)',
    title: 'Auxiliar Terapêutica',
    subtitle: 'Marista São Luís',
    desc: 'Acompanhante de pré‑adolescente com Síndrome de Down.',
  },
  {
    date: 'Mai/2025 (7 meses)',
    title: 'Estágio em Clínica Psicopedagógica',
    subtitle: 'Acreditar terapias e educação',
    desc: 'Auxílio em atendimentos.',
  },
  {
    date: 'Ago/2024 (8 meses)',
    title: 'Estágio em Clínica Psiquiátrica',
    subtitle: 'Clínica terapêutica Virtude',
    desc: 'Acompanhamento de grupos e internação.',
  },
  {
    date: '2022 (2 anos)',
    title: 'Apoio à Educação Especial',
    subtitle: 'Escola Municipal Magalhães Bastos',
    desc: 'Auxiliar de alunos com deficiência.',
  },
]

const dotColors = ['bg-tertiary-200', 'bg-secondary-50', 'bg-tertiary-700']

export function Experience() {
  return (
    <section id="trajetoria" className="relative overflow-hidden bg-secondary-900 py-24 text-neutral-100 md:py-36">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-tertiary-700/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 max-w-2xl">
          <span className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-tertiary-200">
            <span className="h-px w-8 bg-tertiary-200" />
            Trajetória
          </span>
          <h2 className="font-serif text-4xl font-light leading-[1.08] text-secondary-50 text-balance md:text-6xl">
            Experiência e Base Sólida
          </h2>
        </Reveal>

        <ol className="relative mx-auto flex max-w-2xl flex-col gap-10 border-l border-tertiary-700/40 pl-8 md:gap-12 md:pl-10">
          {timeline.map((item, i) => (
            <li key={item.title} className="group relative">
              <Reveal variant="up" delay={i * 90}>
                <span
                  className={`absolute -left-[38px] top-1.5 h-3 w-3 rounded-full ring-4 ring-secondary-900 transition-transform duration-500 group-hover:scale-110 md:-left-[46px] ${dotColors[i % dotColors.length]}`}
                />

                <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.18em] text-tertiary-200">
                  {item.date}
                </span>

                <h3 className="font-serif text-2xl font-light leading-snug text-secondary-50 transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                  {item.title}{' '}
                  {item.subtitle && (
                    <em className="text-[0.62em] font-normal italic text-secondary-200/80">
                      ({item.subtitle})
                    </em>
                  )}
                </h3>

                <p className="mt-2 leading-relaxed text-secondary-200">{item.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}