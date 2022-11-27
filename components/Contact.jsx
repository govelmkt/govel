'use client'
import { Input } from './Input'

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    window.alert('mensaje enviado')
  }
  return (
    <section className='bg-[url(/bg3.jpg)] w-full p-16 flex flex-col justify-center items-center'>
      <h3 className='text-3xl text-white uppercase'>¿Tienes en mente un proyecto?</h3>
      <p className='uppercase text-xl text-white'>¡Dejanos tus datos!</p>
      <form className='mt-8 flex flex-col w-full max-w-md gap-3' onSubmit={handleSubmit}>
        <Input type='text' name='name' placeholder='Nombre completo' />
        <Input type='email' name='email' placeholder='Correo electrónico' />
        <Input type='phone' name='phone' placeholder='Teléfono' />
        <button className='bg-[#E5331F] p-2 text-white'>
          Enviar
        </button>
      </form>
    </section>
  )
}
