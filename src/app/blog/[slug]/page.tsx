type Params = Promise<{ slug: string }>

interface Props { params: Params }

export default async function Slug({ params }: Props) {
  const { slug } = await params
  await new Promise<void>(resolve => setTimeout(resolve, 4000))
  return (
    <div>
      <div>{`Slug:${slug}`}</div>
    </div>
  )
}
