import './styles/globals.css'
// import Transition from '@components/transition'
// import AnimatePresencesLayout from '@components/Animate-presence'
import Nav  from '@components/nav'
import { sora } from './utils/fonts'
import  Header from '@components/header'


export const metadata = {
  title: 'Portafolio Matias',
  description: 'Portafolio de Matias Rivarola',
}


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${sora.className} page bg-black text-white bg-cover bg-no-repeat font-so
     relative`}>
        {/* <AnimatePresencesLayout> */}
          {/* <Transition/> */}
          <Nav/>
          <Header/>
          {children}
        {/* </AnimatePresencesLayout> */}
      </body>
    </html>
  )
}
