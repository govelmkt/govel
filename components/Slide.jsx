import Link from 'next/link'

export const Slide = ({ slide }) => {
  return (
    <div
      style={{
        background: `url(https://govel-backend-production.up.railway.app${slide.attributes.img.data.attributes.url}) no-repeat center center`,
        backgroundSize: 'cover',
        minHeight: '480px'
      }}
      className='flex flex-col items-center justify-center -mt-24'
    >
      <h3 className='text-2xl text-center text-white max-w-lg rounded p-2 backdrop-opacity-10 backdrop-invert bg-black/50 uppercase'>
        {slide.attributes.title}
      </h3>
      <Link href={slide.attributes.path} className='bg-white py-2 px-3 mt-3 text-[#E5331F] font-bold'>
        {slide.attributes.buttonText}
      </Link>
    </div>

  )
}
