import './styles/globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800']
})

export const metadata = {
  title: 'Portafolio Matias',
  description: 'Generated by create next app',
}

import Transition from './components/transition'
import AnimationLayout from './components/Animationlayout'
import AnimatePresencesLayout from './components/Animate-presence'


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={sora.className}>
        <AnimationLayout>
          <AnimatePresencesLayout>
            <Transition/>
            {children}
          </AnimatePresencesLayout>
           
        </AnimationLayout>
      </body>
    </html>
  )
}
