import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '博客',
  description: '博客',
}
export default function Blog() {
  const list = Array.from({ length: 10 }, (_, i) => i)
  return (
    <div>
      <ul>
        {
          list.map(item => (
            <li key={item}>
              <Link href={`/blog/${item}`}>
                {`Blog: ${item}`}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
