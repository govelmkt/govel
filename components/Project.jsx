import Link from 'next/link'

export const Project = ({ project }) => {
  const { attributes } = project
  const { name, images, slug } = attributes
  const img = images.data[0].attributes.url
  return (
    <div
      style={{
        background: `url(https://govel-backend-production.up.railway.app${img}) no-repeat center center`,
        height: '80vh'
      }}
      className='flex flex-col items-center justify-center'
    >
      <Link href={`projects/${slug}`} className='p-8 bg-white text-[#E5331F]'>{name}</Link>
    </div>
  )
}
