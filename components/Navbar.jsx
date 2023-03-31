import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <header className='flex justify-around items-center py-2 z-20 bg-white fixed top-0 w-full'>
      <Link href='/'><Image src='/Logo.svg' alt='Logo' width={340} height={90} /></Link>
      <nav>
        <ul className='flex gap-3 items-center uppercase'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/projects'>Proyectos</Link></li>
          <li><Link href='https://www.instagram.com/govelproyectosarquitectonicos/'><AiOutlineInstagram size='1.3rem' /></Link></li>
          <li><Link href='https://www.facebook.com/govelproyectosarquitectonicos/'><AiOutlineFacebook size='1.3rem' /></Link></li>
          <li><Link href='https://api.whatsapp.com/send?phone=5213781217917&text=Hola%2C%20estoy%20en%20tu%20p%C3%A1gina%20web%20www.govel.com.mx%20y%20quiero%20informaci%C3%B3n...'><AiOutlineWhatsApp size='1.3rem' /></Link></li>
        </ul>
      </nav>
    </header>
  )
}
