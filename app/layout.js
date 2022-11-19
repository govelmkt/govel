import { Exo } from '@next/font/google'
import '../styles/globals.css'

const exo = Exo()

export default function RootLayout ({ children }) {
  return (
    <html lang='es' className={exo.className}>
      <head>
        <title>GOVEL</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
