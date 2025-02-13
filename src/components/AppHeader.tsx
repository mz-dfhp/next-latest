import LocaleSwitcher from '@/components/LocaleSwitcher'
import { Link } from '@/i18n/routing'

export default function AppHeader() {
  return (
    <header className="h-16 p-4 flex items-center gap-x-2 shadow-sm border-b">
      <Link className="p-2" href="/">home</Link>
      {
        [
          'dashboard',
          'blog',
          'counter',
          'swr',
        ].map((item) => {
          return <Link className="p-2" key={item} href={`/${item}`}>{item}</Link>
        })
      }
      <LocaleSwitcher />
    </header>
  )
}
