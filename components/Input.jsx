export const Input = ({ type, placeholder, name, onChange, value }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className='bg-transparent text-white border-b-[1px] border-white text-center py-2 focus:outline-none'
    />
  )
}
