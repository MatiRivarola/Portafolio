'use client'
import Image from "next/image";
import {Progress} from "@nextui-org/react";

export default function AboutPage(){

    return (
        <div className="w-full h-full">
					<div>
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
						<h2>Tec<span className="text-accent">nologys</span>:</h2>
					</div>
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
        </div>
    )
}