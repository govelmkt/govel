import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'
import Categories from '../components/Categories'

const slides = [
  {
    path: '/slide1.jpg',
    href: '/proyects',
    title: 'Construimos tu casa a tus necesidades',
    buttonText: '¡Mira nuestras Propiedades!'
  },
  {
    path: '/slide2.jpg',
    href: '#form',
    title: 'Las tendencias y gustos personales cambian ¿Qué esperas?',
    buttonText: '¡Renueva tu Hogar!'
  }
]

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div
        className='w-full mt-24'
        style={{ background: 'url(/bg.png) center center no-repeat' }}
      >
        <Slider slides={slides} indicators />

        <section className='text-center py-10 text-white'>
          <h2 className='text-2xl text-bold'>¿Quienes somos?</h2>
          <p>En GOVEL, somo especialistas e el área de construcción y Diseño de Interiores con mas de 11 años de experiencia.</p>
          <br />
          <h3 className='uppercase'>¡Deja tu proyecto en nuestras manos!</h3>
        </section>
      </div>
      <section className='container mx-auto'>
        <Categories />
      </section>
    </>
  )
}

export default HomePage
