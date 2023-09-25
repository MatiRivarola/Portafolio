"use client";

import Nav from './nav'
import Header from './header'
import TopLeftImg from './topLeftImg'

export default function AnimationLayout({children}){
  return(
    <>
    <div className='page bg-site text-white bg-cover bg-no-repeat font-so
     relative'>
      <Nav/>
      <Header/>
      <TopLeftImg/>
      {children}
    </div>
    </>
  )
}