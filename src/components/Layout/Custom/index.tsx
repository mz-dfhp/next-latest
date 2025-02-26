import type { ReactNode } from 'react'

export default function LayoutCustom({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="p-6 py-10 min-h-[100svh]">
        {children}
      </main>
    </>
  )
}
