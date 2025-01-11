import Link from 'next/link'

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
