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
        width={197}
        height={40}
        priority
      />
      <Image
        className="dark:invert"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        alt="test1"
        width={502}
        height={493}
        priority
      />
      <Image
        className="dark:invert"
        src="https://storage.googleapis.com/ai-application-test/shortfilm/goodshort/covercover-IIXNmGfv2C.webp"
        alt="test2"
        width={150}
        height={200}
        priority
      />
    </div>
  )
}
