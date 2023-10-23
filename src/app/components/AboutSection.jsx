"use client";
import TabButton from "./TabButton";
import { useTransition, useState } from "react";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>CLI</li>
        <li>GIT</li>
        <li>HTML/CSS</li>
        <li>Tailwind CSS</li>
        <li>Figma</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Re:Coded Front-end Bootcamp</li>
        <li>Master&apos;s in Translation </li>
        <li>Bachelor in English</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Growth mindset</li>
        <li>Problem solving</li>
        <li>Communication</li>
        <li>Creativity</li>
        <li>Teamwork</li>
        <li>Empathy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-16 sm:py-16 xl:px-6">
        <Image
          className="xl:w-full xl:h-80 xl:self-stretch"
          src="/images/aboutme.gif"
          width={500}
          height={500}
          alt="about me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m Darine Tag, a growth-minded front-end developer who&apos;s
            all about turning ideas into aesthetically pleasing digital
            solutions. My soft skills fuel my technical growth. I recently
            completed an immersive Front-end development bootcamp, mastering
            JavaScript, Next.js, React.js, HTML, CSS, TailwindCSS, CLI,
            Firebase, and Git workflow. I thrive in team environments and
            I&apos;m eager to contribute my skills to your team&apos;s success.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("soft skills")}
              active={tab === "soft skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
