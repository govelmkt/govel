'use client'
import { useFormik } from 'formik'
import { Input } from './Input'

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    onSubmit: async values => {
      const message = {
        data: values
      }
      const result = await fetch('https://govel-backend-production.up.railway.app/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message, null, 2)
      })
      const json = await result.json()
      const { data } = await json
      if (data) {
        window.alert('Nos pondremos en contanto contigo')
        formik.resetForm()
      }
    }
  })
  return (
    <section className='bg-[url(/bg3.jpg)] w-full p-16 flex flex-col justify-center items-center'>
      <h3 className='text-3xl text-white uppercase'>¿Tienes en mente un proyecto?</h3>
      <p className='uppercase text-xl text-white'>¡Dejanos tus datos!</p>
      <form className='mt-8 flex flex-col w-full max-w-md gap-3' onSubmit={formik.handleSubmit}>
        <Input type='text' name='name' placeholder='Nombre completo' onChange={formik.handleChange} value={formik.values.name} />
        <Input type='email' name='email' placeholder='Correo electrónico' onChange={formik.handleChange} value={formik.values.email} />
        <Input type='phone' name='phone' placeholder='Teléfono' onChange={formik.handleChange} value={formik.values.phone} />
        <button className='bg-[#E5331F] p-2 text-white' type='submit'>
          Enviar
        </button>
      </form>
    </section>
  )
}
