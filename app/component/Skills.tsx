import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-2xl tracking-wider text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/skills.png"
                  alt="skill"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>


          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/javascript.png"
                  alt="skill"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>


          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/react.png"
                  alt="skill"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>


          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/tailwind.png"
                  alt="skill"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>


          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/css.png"
                  alt="skill"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>


          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/firebase.png"
                  alt="skill"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>FireBase</h3>
              </div>
            </div>
          </div>


          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/mongo.png"
                  alt="skill"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MangoDB</h3>
              </div>
            </div>
          </div>


          <div className="p-6 shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/nextjs.png"
                  alt="skill"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Skills;
