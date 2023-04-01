import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import contact from "../../public/contact.avif";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-2xl tracking-wider text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left side box */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4  hover:scale-105">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl mx-12"
                  src="/contact.avif"
                  alt="contact us"
                  height={300}
                  width={300}
                />
              </div>
              <div>
                <h2 className="py-2"> Adeel Khalid</h2>
                <p>Front-End Developer</p>
                <p>Back-End Developer</p>
                <p className="py-4">
                  i am available for freelance or full-time position. Contact me
                  lets talk
                </p>
                <div>
                  <p className="uppercase pt-8">connect with me</p>
                  <div className="flex items-center justify-center mmax-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-[#5651e5] p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300 ">
                      <FaLinkedinIn />
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
          </div>

          {/* right side box */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full mt-10 py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm pb-2">Name</label>
                    <input
                      className="border-2 rounded-lg  py-2 border-[#7c78f1]"
                      placeholder=" Adeel Khalid"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm pb-2">
                      phone number
                    </label>
                    <input
                      className="border-2 rounded-lg  py-2 border-[#7c78f1]"
                      placeholder=" +923214260147"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4 py-2">
                  <label className="uppercase text-sm pb-2">Email</label>
                  <input
                    className="border-2 rounded-lg py-2 border-[#7c78f1]"
                    placeholder=" adeelkhalid147@gmail.com"
                    type="email"
                  />
                  <div className="flex flex-col mt-4 py-2">
                    <label className="uppercase text-sm pb-2">subject</label>
                    <input
                      className="border-2 rounded-lg  py-2 border-[#7c78f1]"
                      placeholder=" Enter your subject name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col  mt-4 py-2">
                    <label className="uppercase text-sm pb-2">message</label>
                    <textarea
                      className="border-2 rounded-lg border-[#7c78f1] p-3 grid-rows-6"
                      placeholder=" Enter Your Message........"
                    ></textarea>
                  </div>
                  <button className="uppercase w-full p-4 text-gray-100 mt-4">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-[#7c78f1] p-6 cursor-pointer hover:scale-110 duration-300">
              <HiOutlineChevronDoubleUp className="text-[#7c78f1] size={30}" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
