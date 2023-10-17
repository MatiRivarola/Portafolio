'use client'
import MovingWordsCircle from "./circleHome";
import ParticlesContainer from "./particlesContainer";
import Image from "next/image";

export default function HomeClient(){
  return (
    <>
      <div className="container h-full w-full z-20">
        <div className="flex flex-row justify-center w-screen h-screen">
          <ParticlesContainer />
          <div className="flex flex-col-reverse sm:flex-row justify-end md:justify-normal items-center w-full p-[10px] m-[15px]">
            <div className="text-center sm:m-4 items-center">
              <h1 className="text-xl  md:text-[40px] py-6 text-white font-medium">Matias Rivarola</h1>
              <h2 className="text-lg  md:text-[25px] py-4 text-white font-medium">Full<span className="text-accent">Stack</span> Developer</h2>
              <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
                The software and ideas change the <span className="font-bold text-accent">world.</span> Everything is possible.
              </p>
              <div className="flex justify-center xl:hidden relative">
                <MovingWordsCircle/>
              </div>
            </div>
            <div className="w-auto h-auto">
              <Image src="/perfil-sinfondo-cuadrado.png" width={500} height={500} alt='Profile photo' priority={true} className='object-contain' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
