"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Home() {

  return (
    <section> 
      <div className="flex justify-center item-center">
        <div className="relative ">
          <motion.div
          initial={{opacity:0, scale:0}}
          animate={{opacity:1, scale:1}}
          transition={{
            type:'tween',
            delay:0.8,
            duration: 0.8,
          }}
          >
          <Image src="/perfil-icon.jpg" width="192" height="192" quality="92" alt='Profile photo' priority={true} className='h-24 w-24 rounded-full shadow-md border-white' />

          </motion.div>
          <motion.span className="absolute top-0 right-0 text-xl"
          initial={{opacity:0, scale:0}}
          animate={{opacity:1, scale:1}}
          transition={{
            type:'spring',
            stiffness:125,
            delay:0.9,
            duration: 1 ,
          }}
          >👋</motion.span>
        </div>
        <p className="mb-10 mt-4 px-4 text-2xl text-white font-medium ">
          <span className=" font-bold">Hello,I'm Matias</span>.
          I'm a <span className="font-bold">Full-stack develepor</span> whit Javascript.
        </p>
      </div>
    </section>
  );
}
