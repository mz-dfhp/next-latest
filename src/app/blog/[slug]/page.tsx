import { use } from 'react'

type Params = Promise<{ slug: string }>

interface Props { params: Params }

export default function Slug(props: Props) {
  const { params } = props
  const { slug } = use(params)

  return (
    <div className="p-4">
      {`Slug:${slug}`}
    </div>
  )
}
