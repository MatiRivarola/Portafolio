"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ParticlesContainer from "./particlesContainer";

export default function HomeClient(){
  return (
    <>
    <div className="container text-center mb-28 h-full w-full p-4 sm:p-0 z-20">
      <div className="flex flex-col m-2 justify-center item-center w-full h-full">

        <ParticlesContainer/>
        <div className="flex justify-center items-center w-full sm:w-auto">
          <motion.div
          initial={{opacity:0, scale:0}}
          animate={{opacity:1, scale:1}}
          transition={{
            type:'tween',
            delay:0.8,
            duration: 0.8,
          }}
          className='p-4 relative'
          >
            <Image src="/foto-perfil.jpg" width={220} height={220} quality="92" alt='Profile photo' priority={true} className='sm:h-24  sm:w-24 rounded-full shadow-md border-white' />

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
          </motion.div>
        </div>
        <p className="mb-10 mt-4 px-4 text-lg sm:text-xl md:text-2xl text-white font-medium w-auto h-auto">
          <span className=" font-bold">Hello,I'm Matias</span>.
          I'm a <span className="font-bold text-accent">Full-stack</span> develepor whit Javascript.
        </p>
        <div className="flex flex-col w-auto h-auto">
          <h1>Tec<span className="text-accent">nologys:</span></h1>
          <div className="flex flex-col xl:flex-row flex-auto items-center gap-3 xl:gap-6 self-center p-3 xl:p-3 m-3 xl:m-3">
            <Image src="icon-twcss.svg" width={50} height={50} alt='Tecnologias ofrecidas por Rivarola Matias' />
            <Image src="icon-js.svg" width={50} height={50} alt='Tecnologias ofrecidas por Rivarola Matias'/>
            <Image src="icon-html.svg" width={50} height={50} alt='Tecnologias ofrecidas por Rivarola Matias'/>
            <Image src="next.svg" width={50} height={50} alt='Tecnologias ofrecidas por Rivarola Matias' className="text-white" />
            <Image src="icon-react.svg" width={50} height={50} alt='Tecnologias ofrecidas por Rivarola Matias'/>
            <Image src="icon-github.svg" width={50} height={50} alt='Tecnologias ofrecidas por Rivarola Matias'/>
            <Image src="icon-npm.svg" width={50} height={50} alt='Tecnologias ofrecidas por Rivarola Matias'/>
            <Image src="icon-git.svg" width={50} height={50} alt='Tecnologias ofrecidas por Rivarola Matias'/>
          </div>
          
          <h2></h2>

        </div>
      
      </div>
    </div>
    </>
  );
}