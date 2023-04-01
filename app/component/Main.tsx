"use client"
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai"
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div  id="main" className="w-full h-screen text-center">
      <div className="maw-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-wider text-gray-600">
            lets build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Adeel Khalid </span>
          </h1>
          <div className="py-2 text-6xl font-bold text-gray-700">
            {/* blinking animation start here install npm typewriter in ternimal then use the */}
          <Typewriter  
        onInit={(typewriter) => {
          typewriter.typeString('Jam Stack Developer')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            // .deleteAll()
          
            .start();
        }}
        
      />
      {/* blinking animation end */}
      </div>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            i m a front-end and back-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            i m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-center mmax-w-[330px] m-auto py-4">
            <div  className="rounded-full shadow-lg shadow-[#5651e5] p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <FaLinkedinIn/>
            </div>
            <div className="rounded-full shadow-lg shadow-[#5651e5] p-6  m-2 cursor-pointer hover:scale-110 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-[#5651e5] p-6  m-2 cursor-pointer hover:scale-110 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-[#5651e5] p-6  m-2 cursor-pointer hover:scale-110 ease-in duration-300 ">
                  <BsFillPersonLinesFill />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
