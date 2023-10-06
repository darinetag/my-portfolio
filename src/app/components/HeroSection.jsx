import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hey, I'm Darine
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sit, tenetur qui magni nostrum et maxime. Culpa, nesciunt odio
            nostrum, commodi nemo cum quibusdam dolores consectetur nobis eaque
            harum ratione.
          </p>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="rounded-full  w-[250px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
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
