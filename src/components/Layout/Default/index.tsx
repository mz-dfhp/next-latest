import type { ReactNode } from 'react'
import AppFooter from '@/components/Layout/Default/Footer'
import AppHeader from '@/components/Layout/Default/Header'

export default function LayoutDefault({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="p-6 py-10 min-h-[100svh]">
        {children}
      </main>
      <AppFooter />
    </>
  )
}
