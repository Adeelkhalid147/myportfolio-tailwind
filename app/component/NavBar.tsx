"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <section>
      <div className="fixed w-full h-20  bg-gray-300 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full px-2 2xl:px-16">
          <Image
            src={"/navLogo.png"}
            alt={"AKlogo"}
            width="80"
            height="25"
          />
          <div>
            <ul className="hidden md:flex">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href="#main"> Home</a>
              </li>

              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href="#about">About</a>
              </li>
              {/* <Link href={"#About"}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link> */}

              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href="#skills"> Skills</a>
              </li>

              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href="#projects"> Projects</a>
              </li>

              <li className="ml-10 text-sm uppercase hover:border-b">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  src="/../public/navLogo.png"
                  alt="navLogo"
                  height="25"
                  width="60"
                />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-[#5651e5] p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Lets build something legendary together
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-20">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Lets connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-[#5651e5] p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#5651e5] p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#5651e5] p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#5651e5] p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
