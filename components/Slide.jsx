export const Slide = ({ slide }) => {
  return (
    <div
      style={
        {
          background: `url(${slide.path}) no-repeat center/cover fixed`,
          minHeight: '400px',
          width: '100%',
          padding: 0
        }
      }
      className='flex flex-col items-center justify-center -mt-20'
    >
      <h3 className='text-2xl text-center text-white max-w-lg rounded p-2 backdrop-opacity-10 backdrop-invert bg-black/50'>{slide.title}</h3>
      <button className='bg-white py-2 px-3 mt-3 text-[#E5331F] text-bold'>{slide.buttonText}</button>
    </div>
  )
}
