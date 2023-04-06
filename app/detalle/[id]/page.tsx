export default function DetallePage({ params }: { params: any }) {
  const { id } = params
  return (
    <h1>Detalle [id]:{id}</h1>
  )
}
