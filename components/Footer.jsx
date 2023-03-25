import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center p-6'>
      <p>Tel 3781217912</p>
      <p>Mayas #760</p>
      <p>Las colonias</p>
      <p>Tepatitlán de Morelos, Jalisco</p>
      <Link href='/privacy-policy'><small>Aviso de Privacidad</small></Link>
    </footer>
  )
}
