import Image from "next/image";
import React from "react";
import atm3 from "../../public/atm3.jpg";
import atm2 from "../../public/atm2.jpg";
import numberguess from "../../public/numberguess.png";
import Screenshot from "../../public/Screenshot.png";
import todo from "../../public/todo.png";
import pricingui from "../../public/chakrauipricing.png";
import chakrauidao from "../../public/chakrauidao.png";
import chakrauidao2 from "../../public/chakrauidao2.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="upercase text-2xl tracking-wider text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>

        {/* main div of projects */}
        <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
          {/* first project atm */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadoww-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-lg group-hover:opacity-10"
              src={atm3}
              alt="atmcli"
            />
            <div className="hidden group-hover:block absolute top-[50%] ">
              <h3 className="text-2xl text-white -tracking-wider text-center">
                Property Finder
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Next Js</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>

          {/* second project atm */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadoww-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-lg group-hover:opacity-10"
              src={atm2}
              alt="atmcli"
            />
            <div className="hidden group-hover:block absolute top-[50%] ">
              <h3 className="text-2xl text-white -tracking-wider text-center">
                Property Finder
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Next Js</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>

          {/* 3rd number guess */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadoww-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-lg group-hover:opacity-10"
              src={numberguess}
              alt="atmcli"
            />
            <div className="hidden group-hover:block absolute top-[50%] ">
              <h3 className="text-2xl text-white -tracking-wider text-center">
                Property Finder
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Next Js</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>

          {/* university management system */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadoww-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-lg group-hover:opacity-10"
              src={Screenshot}
              alt="atmcli"
            />
            <div className="hidden group-hover:block absolute top-[50%] ">
              <h3 className="text-2xl text-white -tracking-wider text-center">
                Property Finder
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Next Js</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>

          {/* todo app */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadoww-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-lg group-hover:opacity-10"
              src={todo}
              alt="atmcli"
            />
            <div className="hidden group-hover:block absolute top-[50%] ">
              <h3 className="text-2xl text-white -tracking-wider text-center">
                Property Finder
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Next Js</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>

          {/* chakra ui pricing */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadoww-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-lg group-hover:opacity-10"
              src={pricingui}
              alt="atmcli"
            />
            <div className="hidden group-hover:block absolute top-[50%] ">
              <h3 className="text-2xl text-white -tracking-wider text-center">
                Property Finder
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Next Js</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>

          {/* chakra dao ahm */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadoww-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-lg group-hover:opacity-10"
              src={chakrauidao}
              alt="atmcli"
            />
            <div className="hidden group-hover:block absolute top-[50%] ">
              <h3 className="text-2xl text-white -tracking-wider text-center">
                Property Finder
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Next Js</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>

          {/* chakra ui dao ows*/}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadoww-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-lg group-hover:opacity-10"
              src={chakrauidao2}
              alt="atmcli"
            />
            <div className="hidden group-hover:block absolute top-[50%] ">
              <h3 className="text-2xl text-white -tracking-wider text-center">
                Property Finder
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Next Js</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
