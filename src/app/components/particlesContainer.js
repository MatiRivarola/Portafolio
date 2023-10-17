
import { useCallback } from "react"
import {Particles} from "react-tsparticles"
import {loadFull} from "tsparticles"
import { particlesOption } from "./particles-option";

export default function ParticlesContainer(){
  
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(() => {}, []);

  return(
    <Particles 
    className="w-full h-full absolute translate-z-0 opacity-70"
    id='tsparticles' 
    init={particlesInit} 
    loaded={particlesLoaded}
    options={particlesOption}
    />
    )
}