import ClientCounter from '@/components/ClientCounter'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <ClientCounter />
      <div>{ process.env.NEXT_MODE}</div>
      <div>{ process.env.NEXT_BASE}</div>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  )
}
