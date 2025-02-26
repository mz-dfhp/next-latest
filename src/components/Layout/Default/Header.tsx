import LocaleSwitcher from '@/components/LocaleSwitcher'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dashed backdrop-blur">
      <div className="px-4 h-14 flex items-center">
        <Link className="" href="/">
          <Image
            className="dark:invert rounded-full mr-4"
            src="/logo.png"
            alt="mz-dfhp"
            width={30}
            height={30}
            priority
          />
        </Link>
        <div className="flex items-center gap-4 xl:gap-6">
          {
            [
              'dashboard',
              'blog',
              'counter',
              'swr',
            ].map((item) => {
              return <Link key={item} href={`/${item}`}>{item}</Link>
            })
          }
        </div>
        <div className="ml-auto flex items-center gap-5">
          <Link href="https://github.com/mz-dfhp/next-latest">
            <div
              className="icon-[bi--github] cursor-pointer transition-all hover:scale-[1.2]"
            >
            </div>
          </Link>
          <div
            className={`${false ? 'icon-[bi--fullscreen-exit]' : 'icon-[bi--arrows-angle-expand]'} cursor-pointer hover:scale-[1.2] transition-all`}
          >
          </div>
          <div
            className={`${false ? 'icon-[bi--moon]' : 'icon-[bi--sun]'} cursor-pointer hover:scale-[1.2] transition-all`}
          >
          </div>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}
