import type { Metadata } from 'next'

type Params = Promise<{ slug: string }>
interface Props { params: Params }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  return {
    title: `博客详情页:${slug}`,
    description: `博客详情页:${slug}`,
  }
}
export default async function Slug({ params }: Props) {
  const { slug } = await params
  await new Promise<void>(resolve => setTimeout(resolve, 2000))
  return (
    <div>
      <div>{`Slug:${slug}`}</div>
    </div>
  )
}
