export const Project = ({ project }) => {
  const { attributes } = project
  const { name, images } = attributes
  const img = images.data[0].attributes.url
  console.log(img)
  return (
    <div
      style={{
        background: `url(https://govel-backend-production.up.railway.app${img}) no-repeat center center`,
        height: '80vh'
      }}
      className='flex flex-col items-center justify-center'
    >
      <p className='p-8 bg-white text-[#E5331F]'>{name}</p>
    </div>
  )
}
