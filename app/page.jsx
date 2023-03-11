import { Slider } from '../components/Slider'
import { Categories } from '../components/Categories'
import { Contact } from '../components/Contact'
import { fetchSlides } from '../components/api'
import { Footer } from '../components/Footer'
import Link from 'next/link'

const HomePage = async () => {
  const slides = await fetchSlides()
  return (
    <>
      <div
        className='w-full mt-64'
        style={{ background: 'url(/bg.png) center center no-repeat' }}
      >
        {slides && <Slider slides={slides} />}
        <section className='text-center py-10 text-white'>
          <h2 className='text-2xl text-bold'>¿Quienes somos?</h2>
          <p>En GOVEL, somos especialistas en el área de construcción y Diseño de Interiores con mas de 11 años de experiencia.</p>
          <br />
          <h3 className='uppercase'>¡Deja tu proyecto en nuestras manos!</h3>
        </section>
      </div>

      <Categories />

      <section className='flex w-full'>
        <div className='bg-[url(/bg2.jpg)] w-full -z-10 p-16 flex flex-col justify-center items-center'>
          <p className='text-5xl text-[#E5331F] font-bold'>Proyectos</p>
          <p className='text-[#E5331F]'>En curso o realizados</p>
        </div>
        <Link href='/projects' className='bg-[#E5331F] w-1/3 flex items-center justify-center text-3xl text-white'>
          ¡Vamos a verlos!
        </Link>
      </section>
      <Contact />

      <Footer />
    </>
  )
}

export default HomePage
