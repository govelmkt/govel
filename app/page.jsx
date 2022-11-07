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
    title: 'Las tendencias y guston personales cambian ¿Qué esperas?',
    buttonText: '¡Renueva tu Hogar!'
  }
]

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div
        className='mt-24 absolute w-screen'
        style={{ background: 'url(/bg.png) center center no-repeat' }}
      >
        <div className='-mt-24'>
          <Slider slides={slides} />
        </div>
      </div>
    </>
  )
}

export default HomePage
