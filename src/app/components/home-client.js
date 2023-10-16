'use client'
import ParticlesContainer from "./particlesContainer";
import Image from "next/image";

export default function HomeClient(){
  return (
    <>
      <div className="container h-full w-full p-4 sm:p-8 z-20">
        <div className="flex flex-row m-2 justify-center w-full h-full">
          <ParticlesContainer />
          <div className="flex flex-col-reverse sm:flex-row justify-center items-center w-full p-[10px] m-[15px]">
            <div className="text-center sm:m-4">
              <h1 className="text-xl  md:text-2xl text-white font-medium">PortFolio Matias Rivarola</h1>
              <h2 className="text-lg  md:text-2xl text-white font-medium">Full<span className="text-accent">Stack</span> Developer whit JavaScript</h2>
              <p className="m-2 p-4 text-lg md:text-2xl text-white font-medium">
                The software and ideas change the <span className="font-bold text-accent">world.</span> Everything is possible.
              </p>
            </div>
            <Image src="/perfil-sinfondo.png" width={500} height={500} alt='Profile photo' priority={true} className=' w-[180px] h-[240px] xl:w-auto xl:h-auto hover:cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  );
}
