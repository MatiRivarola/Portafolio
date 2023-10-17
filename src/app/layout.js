import './styles/globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800']
})

export const metadata = {
  title: 'Portafolio Matias',
  description: 'Portafolio de Matias Rivarola',
}

import Transition from '@components/transition'
import AnimatePresencesLayout from '@components/Animate-presence'
import Nav from '@components/nav'


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${sora.className} page bg-site text-white bg-cover bg-no-repeat font-so
     relative`}>
        <AnimatePresencesLayout>
          <Transition/>
          <Nav/>
          {children}
        </AnimatePresencesLayout>
      </body>
    </html>
  )
}
