'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from './reveal'
import { Lightbox } from './lightbox'

const images = [
  { src: '/images/Experiencias/2.jpeg', alt: '', span: 'row-span-2' },
  { src: '/images/Experiencias/3.jpeg', alt: '', span: '' },
  { src: '/images/Experiencias/4.jpeg', alt: '', span: '' },
  { src: '/images/Experiencias/5.jpeg', alt: '', span: 'row-span-2' },
  { src: '/images/Experiencias/6.jpeg', alt: '', span: '' },
]

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="galeria" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-tertiary">
            <span className="h-px w-8 bg-tertiary" />
            Um espaço que respira
          </span>
          <h2 className="max-w-2xl font-serif text-4xl font-light leading-[1.08] text-primary-900 text-balance md:text-6xl">
            Calma, luz e o tempo de simplesmente ser
          </h2>
        </Reveal>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              variant="scale"
              delay={i * 80}
              className={`group relative overflow-hidden rounded-[22px] bg-primary-100 shadow-[0_24px_60px_-45px_rgba(44,33,31,0.55)] ${img.span}`}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Ampliar imagem: ${img.alt}`}
                className="absolute inset-0 h-full w-full cursor-zoom-in appearance-none border-0 bg-transparent p-0"
              >
                <Image
                  src={img.src || '/placeholder.svg'}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-primary-900/0 transition-colors duration-500 group-hover:bg-primary-900/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        items={images}
        index={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  )
}