import { Category } from './Category'

const categories = [
  {
    name: 'Arquitectura',
    img: '/arch.jpg',
    href: '/'
  },
  {
    name: 'Diseño de Interiores',
    img: '/interior.jpg',
    href: '/'
  },
  {
    name: 'Construcción Pública y Privada',
    img: '/construction.jpg',
    href: '/'
  }
]

export default function Categories ({ params }) {
  return (
    <section className='mt-12'>
      <h2 className='text-xl text-center text-[#E5331F]'>Somos mas que un estudio arquitectonico</h2>
      <p className='uppercase text-center text-3xl text-[#E5331F] text-bold'>Contamos con </p>
      <section className='flex flex-col justify-center mt-12'>
        {categories.map((category) => <Category key={category.name} name={category.name} img={category.img} href={category.ref} />)}
      </section>
    </section>
  )
}
