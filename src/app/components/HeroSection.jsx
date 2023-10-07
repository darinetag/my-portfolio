"use client";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
          <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-2xl font-extrabold">
            <span className="text-transparent lg:text-6xl text-5xl bg-clip-text bg-gradient-to-br from-yellow-100 via-teal-900 to-blue-900">
              Hey, I'm{"  "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Darine",
                1000,
                "Front-end Developer",
                1000,
                "Web Developer",
                1000,
                "Translator & Artist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sit, tenetur qui magni nostrum et maxime.Nesciunt odio
            nostrum.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-[#649173] via-teal-900 to-blue-900 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-[#649173] via-teal-900 to-blue-900 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-14 lg:mt-0">
          <div className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/hero-img.png"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
