import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <header className='flex justify-around items-center py-2 z-20 bg-white fixed top-0 w-full'>
      <Link href='/'><Image src='/Logo.svg' alt='Logo' width={340} height={90} /></Link>
      <nav>
        <ul className='flex gap-3 items-center uppercase'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/projects'>Proyectos</Link></li>
          <li><Link href='https://instagram.com'><AiOutlineInstagram size='1.3rem' /></Link></li>
          <li><Link href='/'><AiOutlineWhatsApp size='1.3rem' /></Link></li>
        </ul>
      </nav>
    </header>
  )
}
