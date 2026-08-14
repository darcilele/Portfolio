'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Como funciona o atendimento online?',
    a: 'As sessões acontecem por videochamada, em uma plataforma segura. Você só precisa de um lugar tranquilo, privado e uma boa conexão de internet. A experiência preserva a mesma escuta e o mesmo vínculo de um encontro presencial.',
  },
  {
    q: 'Quanto tempo dura cada sessão?',
    a: 'Cada sessão tem duração de 60 minutos. Esse tempo é dedicado inteiramente a você, permitindo que a conversa encontre o seu próprio ritmo, sem pressa.',
  },
  {
    q: 'O que é a Fenomenologia Existencial?',
    a: 'É uma abordagem que compreende a pessoa em sua totalidade e singularidade, valorizando a experiência vivida, a liberdade e a busca por sentido. Em vez de rótulos, o foco está em como você percebe e habita a própria existência.',
  },
  {
    q: 'Quem pode fazer terapia com você?',
    a: 'Atendo crianças, adolescentes e adultos. Cada fase da vida traz questões próprias, e o cuidado é sempre adaptado ao momento e às necessidades de quem chega.',
  },
  {
    q: 'Como faço para agendar a primeira consulta?',
    a: 'Basta entrar em contato pelo WhatsApp ou pelo botão de agendamento. Conversamos sobre o melhor horário e alinhamos os detalhes para o seu primeiro encontro.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="perguntas" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-4">
            <span className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-tertiary">
              <span className="h-px w-8 bg-tertiary" />
              Dúvidas
            </span>
            <h2 className="font-serif text-4xl font-light leading-[1.08] text-primary-900 text-balance md:text-5xl">
              Perguntas frequentes
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-600">
              Se ficar com alguma dúvida, será um prazer conversar diretamente com você.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <Reveal key={faq.q} variant="up" delay={i * 60}>
                    <div
                      className={`overflow-hidden rounded-[22px] border bg-neutral-0/60 backdrop-blur-sm transition-all duration-500 ${
                        isOpen ? 'border-tertiary-200 shadow-[0_24px_60px_-45px_rgba(44,33,31,0.55)]' : 'border-primary-100'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                      >
                        <span className="font-serif text-xl text-primary-900 md:text-2xl">{faq.q}</span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-200 text-tertiary-700 transition-transform duration-500 ${
                            isOpen ? 'rotate-[135deg] bg-tertiary text-neutral-0' : ''
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>
                      <div
                        className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-7 pb-7 leading-relaxed text-neutral-600">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
