'use client'
import Image from 'next/image'
import Transition from './components/transition'
import { AnimatePresence , motion} from 'framer-motion'


export default function Home(Components , pageProps) {

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={''} className='h-full'>
        <Components {...pageProps}/>
      </motion.div>
    </AnimatePresence>

  )
}
