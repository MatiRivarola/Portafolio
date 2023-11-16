'use client'

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "@/app/utils/variants";

export default function ContactPage() {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-white xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] bg-[#0e0d0a4a]">
          <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 text-center mb-12">
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form 
          action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_ID}`}
          method="POST"
          variants={fadeIn('up',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex-1 flex flex-col gap-6 w-full mx-auto'
          
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" id="name" name="name" className="input" required/>
              <input type="email" placeholder="Email" id="email" name="email" className="input" required/>
            </div>
              <input type="text" placeholder="Subject" className="input" required/>
              <textarea placeholder="Message" className="textarea" type="text" id="message" name="message"></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              type="submit"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let's talk</span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
              </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
