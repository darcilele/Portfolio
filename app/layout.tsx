import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Leticia Darci Silva Rocha — Psicóloga Clínica | Fenomenologia Existencial',
  description:
    'Psicoterapia online com escuta sensível e acolhedora. Leticia Darci Silva Rocha (CRP 02/33177), psicóloga clínica na abordagem da Fenomenologia Existencial. Atendimento para crianças, adolescentes e adultos.',
  keywords: [
    'psicóloga',
    'psicoterapia online',
    'fenomenologia existencial',
    'ansiedade',
    'luto',
    'autoconhecimento',
    'terapia online',
  ],
  authors: [{ name: 'Leticia Darci Silva Rocha' }],
  openGraph: {
    title: 'Leticia Darci Silva Rocha — Psicóloga Clínica',
    description:
      'Cada história merece ser acolhida com respeito e sensibilidade. Psicoterapia online na abordagem da Fenomenologia Existencial.',
    type: 'website',
    locale: 'pt_BR',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf1ec',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
