export default async function Slug({ params }: { params: { slug: string } }) {
  const { slug } = await params
  return (
    <div>
      {` Slug:${slug}`}
    </div>
  )
}
