import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-lg tracking-wider text-[#5651e5]">
              About
            </p>
            <h2 className="mt-6">Who I Am</h2>
            <p className="mt-4">i am not your normal developer</p>
            <p className="mt-4 text-gray-600">
              I&#39;m Adeel Khalid I&#39;m a Web 3.0 developer with a passion
              for building decentralized applications that empower individuals
              and promote freedom. I specialize in using blockchain technologies
              such as Ethereum, and smart contracts to create innovative DApps
              that provide users with more control over their data and
              transactions.
            </p>
            <p className="mt-4 text-gray-600">
              I started learning javaScript and was even more enthused with
              making websites interactive. I then started freelancing and now
              spending my time building projects with Next Js, Tailwind CSS and
              Chakra UI, and learning new technologies.
            </p>
            <p className="mt-4 text-[#2a2789] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </div>
          <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-110 ease-in duration-300">
            <Image
              className="rounded-xl pt-10"
              src={"/../public/adeel.jpeg"}
              alt={"about"}
              height="400"
              width={"400"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
