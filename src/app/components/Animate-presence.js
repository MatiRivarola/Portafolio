'use client'; 
import { AnimatePresence , motion} from "framer-motion"
import { usePathname } from "next/navigation";

export default function AnimatePresencesLayout({children}) {
  const router = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router} className="h-full">
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
