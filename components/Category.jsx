export const Category = ({ name, img, href }) => {
  return (
    <div
      style={{
        background: `url(${img}) no-repeat center center`,
        backgroundSize: 'cover',
        height: '600px'
      }}
      className='flex justify-center items-center'
    >
      <a
        className='text-3xl text-white backdrop-opacity-10 backdrop-invert bg-black/30 p-3 rounded uppercase text-center'
        href={href}
      >
        {name}
      </a>
    </div>
  )
}
