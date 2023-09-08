'use client'
import { motion } from "framer-motion"

const transitionVariants = {
    initial: {
        x : "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%'],
    }
}

export default function Transition({children}){
    return (
        <>
        <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]" 
        variants={transitionVariants} 
        initial="initial" 
        animate='animate' 
        exit="exit"
        transition={{delay: 0.2 , duration: 0.6 , ease: 'easeInOut'}}  
        >
            {children}
        </motion.div>
        <div>2</div>
        <div>3</div>
        
        </>
    )
}