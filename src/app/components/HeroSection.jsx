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
            <span className="text-transparent lg:text-6xl text-5xl bg-clip-text bg-gradient-to-br from-yellow-100 via-teal-900 to-blue-900">
              Hey, I&apos;m{"  "}
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
            Front-End Developer | Next.js | React.js Turning ideas into
            aesthetically pleasing digital solutions.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-[#649173] via-teal-900 to-blue-900 hover:bg-slate-200 text-white">
              <Link href="#contact">Hire Me</Link>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-[#649173] via-teal-900 to-blue-900 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <Link href="https://drive.google.com/file/d/17RLAIabu3y4V3zS3ghndKlbdeeBT-mTu/view?usp=sharing">
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
              src="/images/hero-img.png"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
