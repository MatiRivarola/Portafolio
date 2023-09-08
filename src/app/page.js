'use client'
import Image from 'next/image'
import Transition from './components/transition'
import { AnimatePresence , motion} from 'framer-motion'

import { usePathname } from 'next/navigation'

export default function Home() {
  const router = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
      </motion.div>
    </AnimatePresence>
  );
};
