'use client'
import { motion } from "framer-motion";
import ParticlesContainer from "./particlesContainer";
import Image from "next/image";

export default function HomeClient(){
  return (
    <>
      <div className="container text-center mb-28 h-full w-full p-4 sm:p-0 z-20">
        <div className="flex flex-row m-2 justify-center items-center w-full h-full">
          <ParticlesContainer />
          <div className="flex flex-col sm:flex-row justify-center items-center w-full">
            <div className="text-right sm:mr-4 mb-4 sm:mb-0">
              <p className="mb-10 mt-4 px-4 text-lg sm:text-xl md:text-2xl text-white font-medium w-auto h-auto">
                The software and ideas change the <span className="font-bold">world.</span> Everything is possible.
              </p>
            </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'tween',
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="p-4 sm:w-full w-auto"
              >
                <Image src="/perfil-sinfondo.png" width={500} height={500} alt='Profile photo' priority={true} className='absolute' />
              </motion.div>
            </div>
          </div>
        </div>
    </>
  );
}
