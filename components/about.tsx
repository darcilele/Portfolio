import Image from 'next/image'
import { Reveal } from './reveal'

const facts = [
  ['Psicóloga Clínica', 'CRP 02/33177'],
  ['Abordagem', 'Fenomenologia Existencial'],
  ['Atendimento', 'Online, de onde você estiver'],
  ['Sessão', '60 minutos'],
]

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 flex items-end justify-between gap-6">
          <div>
            <span className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-tertiary">
              <span className="h-px w-8 bg-tertiary" />
              Sobre
            </span>
            <h2 className="max-w-2xl font-serif text-4xl font-light leading-[1.08] text-primary-900 text-balance md:text-6xl">
              Uma presença serena para os seus movimentos internos
            </h2>
          </div>
          <span className="hidden shrink-0 font-serif text-7xl leading-none text-primary-100 lg:block">
            
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Large photograph */}
          <Reveal variant="left" className="lg:col-span-7">
            <div className="mask-organic-alt grain relative aspect-[5/6] overflow-hidden bg-primary-100 shadow-[0_40px_80px_-45px_rgba(44,33,31,0.5)] sm:aspect-[4/3] lg:aspect-[5/6]">
              <Image
                src="/images/Perfil/Leticia.jpg"
                alt="Leticia Darci em um ambiente sereno e acolhedor"
                fill
                sizes="(max-width: 1024px) 90vw, 55vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Text + floating card */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal variant="right">
              <p className="font-serif text-2xl font-light leading-relaxed text-primary-800 md:text-3xl">
                Acredito que toda pessoa carrega uma história única — e que ser
                verdadeiramente ouvida já é, em si, um gesto de cuidado.
              </p>
              <p className="mt-6 leading-relaxed text-neutral-600">
                Meu trabalho parte da Fenomenologia Existencial: um olhar que não
                busca rótulos, mas sentido. Juntos, damos espaço para o que você
                sente, para as escolhas que atravessam o seu dia e para a maneira
                singular como você habita a própria vida.
              </p>
              <p className="mt-4 leading-relaxed text-neutral-600">
                Atendo crianças, adolescentes e adultos, sempre no seu tempo e no
                seu ritmo.
              </p>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <dl className="mt-10 rounded-2xl border border-primary-100 bg-neutral-0/60 p-7 shadow-[0_24px_60px_-40px_rgba(44,33,31,0.5)] backdrop-blur-sm">
                {facts.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex items-center justify-between gap-6 py-3.5 ${
                      i !== facts.length - 1 ? 'border-b border-primary-100/70' : ''
                    }`}
                  >
                    <dt className="text-[0.7rem] uppercase tracking-[0.26em] text-primary-400">{k}</dt>
                    <dd className="text-right font-serif text-lg text-primary-900">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
