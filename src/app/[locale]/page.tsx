import ClientCounter from '@/components/ClientCounter'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <ClientCounter />
      <h1 className="font-bold py-2">env</h1>
      <div>{ process.env.NEXT_MODE}</div>
      <div>{process.env.NEXT_BASE}</div>
      <h1>i18n</h1>
      <div>{t('title')}</div>
      <div>{t('about')}</div>

      <h1 className="font-bold py-2">image</h1>
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
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        alt="test1"
        width={90}
        height={135}
        priority
        style={{ objectFit: 'cover' }}
      />
      <Image
        className="dark:invert"
        src="https://storage.googleapis.com/ai-application-test/shortfilm/goodshort/covercover-IIXNmGfv2C.webp"
        alt="test2"
        width={30}
        height={40}
        priority
      />
    </div>
  )
}
