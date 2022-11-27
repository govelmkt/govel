export const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className='bg-transparent text-white border-b-[1px] border-white text-center py-2 focus:outline-none'
    />
  )
}
