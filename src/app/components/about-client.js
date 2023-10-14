'use client'
import Image from "next/image";
import {Progress} from "@nextui-org/react";
import { motion } from "framer-motion";
export default function AboutClient() {

  return(
    <div className="w-full h-full">

      <div className="relative">
        <div className='text-xl xl:text-xl'>
          <h1 className="p-2 ">
            Hi, I'm Matias Rivarola and I Full<span className="text-accent">Stack</span> developer whit Javascript
          </h1>
          <h1 className="p-1">
            I'm interested in the new technologies and create software of quality
          </h1>
        </div>
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
        <h1></h1>
      </div>
      <div className="flex flex-col  flex-auto items-start gap-3 xl:gap-6 self-center p-3 xl:p-3 m-3 xl:m-3">
        <h2 className="text-xl xl:text-2xl">Tec<span className="text-accent">nologys</span>:</h2>
        <div className="flex flex-row gap-3 xl:gap-8">
        <Image src="/next.svg" width={50} height={50} loading="eager" alt='Tecnologias ofvarola Matias' className="text-white" />
        <Progress aria-label="Loading..." value={60} className="max-w-md"/>
        </div>
        <div>
        <Image src="/icon-js.svg" width={50}  height={50} loading="eager" alt=' Rivarola Matias'/>
        </div>
        <div>
        <Image src="/icon-twcss.svg" priority width={50}  height={50} loading="eager" alt='Tecnologias ofrecidas por Rivarola Matias' />
        </div>
        <div>
        <Image src="/icon-html.svg" width={50}  height={50} loading="eager" alt='Tecnologias ofrecidas pors'/>
        </div>
        <div>
          <Image src="/icon-react.svg" width={50} height={50} loading="eager" alt='Tecnologias ofola Matias'/>
        </div>
        <Image src="/icon-npm.svg" width={50} height={50} loading="eager" alt='Tecnologias ofr Matias'/>
        <Image src='/icon-github.svg' width={50} height={50} loading="eager" alt="Git hub Matias Rivarola"/>
      </div>
    </div>
  )
}