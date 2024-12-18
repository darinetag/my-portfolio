"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
          <h1 className="text-white mb-4 lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent lg:text-6xl text-5xl bg-clip-text bg-gradient-to-br from-yellow-200 via-teal-900 to-blue-900">
              Hey, I&apos;m{"  "}
            </span>{" "}
            <br></br>
            <TypeAnimation
            className="dark:text-white text-gray-900"
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
          <p className="text-gray-900 dark:text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            Front-End Developer | Next.js | React.js Turning ideas into
            aesthetically pleasing digital solutions.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full font-medium mr-4 bg-gradient-to-br  from-[#649173] via-teal-900 to-blue-900 hover:bg-slate-200 dark:text-white text-black">
              <Link href="#contact">Hire Me</Link>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-[#649173] via-teal-900 to-blue-900 hover:bg-slate-800 dark:text-white text-black mt-3">
              <span className="block font-medium dark:bg-[#121212] bg-[#87A922] hover:bg-lime-600/10 rounded-full px-5 py-2">
                <Link href="https://drive.google.com/file/d/10WEvLtRCdAqC2ODrxRuAB94zfF0WEKyZ/view?usp=sharing">
                  Download CV
                </Link>
              </span>
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-14 lg:mt-0"
        >
          <div className="lg:w-[500px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/deee.png"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
