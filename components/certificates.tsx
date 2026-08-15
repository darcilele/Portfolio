'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from './reveal'
import { Lightbox } from './lightbox'

const AUTOPLAY_DELAY = 3000

// Todos os cartões usam a mesma caixa (proporção do certificado paisagem,
// que é a maioria do acervo). Certificados retrato ficam com uma leve
// margem lateral dentro da caixa (object-contain), mas o tamanho do cartão
// é idêntico para todos — é isso que garante que os vizinhos apareçam de
// forma simétrica no coverflow, independente da orientação do ativo.
const FRAME_ASPECT_CLASS = 'aspect-[3508/2481]'

const certificates = [
  {
    src: assetPath('/images/Certificados/Certificado ABA _page-0001.jpg'),
    title: 'Curso ABA e Autismo para Profissionais',
    org: 'Capacitação e Aprimoramento em ABA (180 horas/aula)',
  },
  {
    src: assetPath('/images/Certificados/4 simpósio Unicap_page-0001.jpg'),
    title: '4º Simpósio de Psicologia da Unicap',
    org: 'Diálogos interdisciplinares possíveis (20 horas)',
  },
  {
    src: assetPath('/images/Certificados/Certificado AT_page-0001.jpg'),
    title: 'Curso de Acompanhante Terapêutico',
    org: 'Certificado de Conclusão - Carga horária de 120 horas',
  },
  {
    src: assetPath('/images/Certificados/Certificado ledora e transcritora_page-0001.jpg'),
    title: 'Curso de Formação de Ledores e Transcritores',
    org: 'Apto(a) para atuar em concursos e avaliações (20 horas)',
  },
  {
    src: assetPath('/images/Certificados/DECLARAÇÃO DE CONCLUSÃO.jpg'),
    title: 'Declaração de Conclusão de Graduação',
    org: 'Bacharelado em Psicologia - UNINASSAU',
  },
  {
    src: assetPath('/images/Certificados/Evento tecnologia, felicidade e motivação_page-0001.jpg'),
    title: 'A Apropriação da Tecnologia Envolvendo a Felicidade e Motivação',
    org: 'Evento Acadêmico - UNINASSAU',
  },
  {
    src: assetPath('/images/Certificados/TOD_page-0001.jpg'),
    title: 'Congresso de Transtorno Opositivo Desafiador (TOD)',
    org: 'Diagnóstico, Intervenção e Comorbidades (10 horas)',
  },
  {
    src: assetPath('/images/Certificados/VII Congresso Multidisciplinar de Saúde_page-0001.jpg'),
    title: 'A Apropriação da Tecnologia Envolvendo a Felicidade e Motivação',
    org: 'Evento Acadêmico - UNINASSAU',
  },
] as const

// Distância circular mais curta entre dois índices — evita que o item
// "dê a volta inteira" ao cruzar a borda do laço (ex.: do último item de
// volta ao primeiro deve andar 1 passo pra frente, não voltar 7 pra trás).
function shortestDiff(index: number, current: number, total: number) {
  let diff = index - current
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

export function Certificates() {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isTabHidden, setIsTabHidden] = useState(
    () => typeof document !== 'undefined' && document.hidden
  )
  const [autoplayTick, setAutoplayTick] = useState(0)
  const total = certificates.length

  // Reinicia a contagem do autoplay a cada navegação manual, para não
  // "pular" de novo logo em seguida de um clique do usuário.
  const restartAutoplay = () => setAutoplayTick((t) => t + 1)

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + total) % total)
    restartAutoplay()
  }

  const goToIndex = (index: number) => {
    setActive(index)
    restartAutoplay()
  }

  const openLightboxAt = (index: number) => {
    setActive(index)
    setLightboxOpen(true)
  }

  // Pausa o autoplay quando a aba perde o foco/visibilidade
  useEffect(() => {
    const handleVisibility = () => setIsTabHidden(document.hidden)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  // Carrossel automático em loop: avança um certificado a cada 3s, de forma
  // circular. Pausa enquanto a modal estiver aberta, com o mouse sobre o
  // carrossel (desktop), ou com a aba em segundo plano; retoma assim que
  // nenhuma dessas condições estiver ativa.
  useEffect(() => {
    if (lightboxOpen || isHovering || isTabHidden || total <= 1) return
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total)
    }, AUTOPLAY_DELAY)
    return () => clearInterval(id)
  }, [lightboxOpen, isHovering, isTabHidden, autoplayTick, total])

  return (
    <section id="certificacoes" className="relative overflow-hidden bg-tertiary-50 py-24 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-tertiary-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-tertiary">
            <span className="h-px w-8 bg-tertiary" />
            Formação
          </span>
          <h2 className="max-w-2xl font-serif text-4xl font-light leading-[1.08] text-primary-900 text-balance md:text-6xl">
            Estudo contínuo a serviço do cuidado
          </h2>
        </Reveal>

        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative flex items-center justify-center">
            <div className="relative flex h-[26rem] w-full items-center justify-center md:h-[32rem]">
              {certificates.map((cert, i) => {
                const offset = shortestDiff(i, active, total)
                const isActive = offset === 0
                const isHidden = Math.abs(offset) > 1
                return (
                  <button
                    key={cert.src}
                    type="button"
                    onClick={() => openLightboxAt(i)}
                    aria-label={`Ampliar certificado: ${cert.title}`}
                    aria-hidden={isHidden}
                    tabIndex={isHidden ? -1 : 0}
                    className="absolute cursor-zoom-in appearance-none border-0 bg-transparent p-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform: `translateX(${offset * 46}%) scale(${isActive ? 1 : 0.78})`,
                      opacity: isHidden ? 0 : isActive ? 1 : 0.5,
                      filter: isActive ? 'blur(0px)' : 'blur(3px)',
                      zIndex: isActive ? 20 : 10 - Math.abs(offset),
                      pointerEvents: isHidden ? 'none' : 'auto',
                    }}
                  >
                    <div
                      className={`relative ${FRAME_ASPECT_CLASS} h-[22rem] overflow-hidden rounded-[20px] border border-primary-100 bg-neutral-0 shadow-[0_40px_80px_-40px_rgba(44,33,31,0.55)] md:h-[28rem]`}
                    >
                      <Image
                        src={cert.src || assetPath('/placeholder.svg')}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 70vw, 30vw"
                        className="object-contain"
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="font-serif text-2xl text-primary-900">{certificates[active].title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.26em] text-primary-400">
                {certificates[active].org}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Certificado anterior"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 text-primary-700 transition-all duration-500 hover:border-tertiary hover:bg-tertiary hover:text-neutral-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {certificates.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir para o certificado ${i + 1}`}
                    onClick={() => goToIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === active ? 'w-8 bg-tertiary' : 'w-1.5 bg-primary-200'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próximo certificado"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 text-primary-700 transition-all duration-500 hover:border-tertiary hover:bg-tertiary hover:text-neutral-0"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        items={certificates.map((cert) => ({ src: cert.src, alt: cert.title }))}
        index={active}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setActive}
      />
    </section>
  )
}