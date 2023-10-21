"use client";
import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiNpm,
  SiNotion,
  SiGit,
  SiGithub,
  SiFigma,
  SiUbuntu,
  SiFramer,
  
} from "react-icons/si";
import Profile from "./Profile";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import CountUp from "react-countup";

const aboutData = [
  {
    title: "Tecnology",
    info: [
      {
        title: "Frontend",
        icons: [
          <FaHtml5 />,
          <FaCss3Alt />,
          <SiJavascript />,
          <SiTailwindcss />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFirebase/>
        ],
      },
      
    ],
  },
  {
    title: "Tools",
    info: [
      {
        title: "WorkFlow",
        icons: [
          <SiNpm/>,
          <SiNotion/>,
          <SiGit/>,
          <SiGithub/>,
          <SiFramer/>,
          <SiFigma/>,
          <SiUbuntu/>,
        ],
      },
      
    ],
  },
  {
    title: "Carrer",
    info: [
      {
        title: "Industrial Engginer",
        stage: "2019 - 2022",
      },
      {
        title: "Full Stack Developer whit JavaScript",
        stage: "2022 - 2023.   Platzi",
      },
    ],
  },
];

export default function AboutClient() {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full h-full py-32 text-center xl:text-left">
      <motion.div
        className="hidden xl:flex absolute bottom-0 -left-[243px] w-[80%] h-[80%]"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Profile />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto xl:overflow-visible">
        {/* text */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center z-20"
        >
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent design.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I'm Matías Rivarola, a full-stack web developer with an engineering background. Passionate about coding, I aim to bring both art and solutions to web development. I'm looking to join innovative teams and continue learning. My goal is to excel in web development while tackling the digital world's evolving challenges. I offer a unique blend of creativity and reliability.
          </motion.p>
          {/* counter  */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Year of experience
                </div>
              </div>

              {/* client */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied client
                </div>
              </div> */}

              {/* projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={14} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Technologys
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col w-full xl:max-w-[48%] h-[480px] z-20">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex && "text-accent "
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex md:flex-row max-w-max gap-x-2 items-center text-white/60 "
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex ">-</div>
                  <div>{item.stage}</div>

                  {item.icons?.map((icon, itemIndex) => {
                    return (
                      <div className="text-2xl" key={itemIndex}>
                        {icon}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
