import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '工作台',
  description: '工作台',
}

export default function Dashboard() {
  return (
    <div className="p-4">dashboard</div>
  )
}
