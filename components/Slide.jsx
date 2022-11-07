export const Slide = ({ slide }) => {
  return (
    <div
      style={
        {
          background: `url(${slide.path}) no-repeat center/contain fixed`,
          minHeight: '300px',
          width: '100%',
          margin: '10px',
          padding: 0
        }
      }
      className='flex flex-col items-center justify-center'
    >
      <h3 className=' text-center text-white max-w-lg'>{slide.title}</h3>
      <button className='bg-white py-2 px-3 mt-3 text-[#E5331F] text-bold'>{slide.buttonText}</button>
    </div>
  )
}
