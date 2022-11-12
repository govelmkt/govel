import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'

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
        className='w-screen absolute mt-12'
        style={{ background: 'url(/bg.png) center center no-repeat' }}
      >
        <Slider slides={slides} />
      </div>
    </>
  )
}

export default HomePage
