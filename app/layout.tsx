import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ElderCare Pro - Panel Administrativo',
  description: 'Sistema avanzado de supervisión y cuidado para adultos mayores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body 
        className={cn(
          'min-h-screen bg-background font-sans antialiased custom-scrollbar',
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}