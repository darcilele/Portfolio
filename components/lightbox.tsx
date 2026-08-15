'use client'

import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { assetPath } from '@/lib/utils'

export interface LightboxItem {
  src: string
  alt: string
}

interface LightboxProps {
  items: LightboxItem[]
  index: number
  isOpen: boolean
  onClose: () => void
  onIndexChange: (index: number) => void
}

/**
 * Modal de visualização (lightbox) reutilizável.
 * Usado tanto pela Galeria quanto pelas Certificações para manter
 * a mesma mecânica de abertura, navegação e fechamento em ambos os lugares.
 */
export function Lightbox({ items, index, isOpen, onClose, onIndexChange }: LightboxProps) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [imageVisible, setImageVisible] = useState(true)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const total = items.length

  const goTo = useCallback(
    (dir: number) => {
      if (total === 0) return
      onIndexChange((index + dir + total) % total)
    },
    [index, total, onIndexChange]
  )

  // Controla montagem/desmontagem para permitir animação de saída
  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }
    setVisible(false)
    const timeout = setTimeout(() => setMounted(false), 300)
    return () => clearTimeout(timeout)
  }, [isOpen])

  // Bloqueia o scroll da página enquanto a modal estiver aberta
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  // Impede que o restante da página fique navegável/interativo (foco/tab)
  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return
    const dialogEl = dialogRef.current
    const siblings = Array.from(document.body.children) as HTMLElement[]
    const toRestore: HTMLElement[] = []
    siblings.forEach((el) => {
      if (el === dialogEl || el.contains(dialogEl)) return
      if (!el.hasAttribute('inert')) {
        el.setAttribute('inert', '')
        toRestore.push(el)
      }
    })
    return () => {
      toRestore.forEach((el) => el.removeAttribute('inert'))
    }
  }, [isOpen])

  // Navegação e fechamento pelo teclado + trap de foco básico
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goTo(-1)
      } else if (e.key === 'ArrowRight') {
        goTo(1)
      } else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, goTo])

  // Foco inicial no botão de fechar ao abrir
  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus()
  }, [isOpen])

  // Transição suave/fade ao trocar de imagem
  useEffect(() => {
    setImageVisible(false)
    const timeout = setTimeout(() => setImageVisible(true), 20)
    return () => clearTimeout(timeout)
  }, [index])

  if (!mounted || typeof document === 'undefined') return null

  const current = items[index]
  if (!current) return null

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-primary-900/90 backdrop-blur-sm" />

      <button
        type="button"
        ref={closeButtonRef}
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        aria-label="Fechar visualização"
        className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-neutral-0/10 text-neutral-0 backdrop-blur-md transition-all duration-300 hover:bg-neutral-0/20 md:right-8 md:top-8"
      >
        <X className="h-6 w-6" />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goTo(-1)
            }}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-0/10 text-neutral-0 backdrop-blur-md transition-all duration-300 hover:bg-neutral-0/20 md:left-6 md:h-14 md:w-14"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goTo(1)
            }}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-0/10 text-neutral-0 backdrop-blur-md transition-all duration-300 hover:bg-neutral-0/20 md:right-6 md:h-14 md:w-14"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        className={`relative flex h-full w-full items-center justify-center px-4 py-16 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-20 ${
          visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative h-full max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-[20px] transition-opacity duration-300 ease-out ${
            imageVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={current.src || assetPath('/placeholder.svg')}
            alt={current.alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
