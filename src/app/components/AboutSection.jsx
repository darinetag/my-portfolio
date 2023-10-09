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
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>HTML/CSS</li>
        <li>Tailwind CSS</li>
        <li>CLI</li>
        <li>GIT</li>
        <li>Firebase</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Re:Coded Front-end Bootcamp</li>
        <li>Master's in Translation </li>
        <li>Bachelor in English</li>
      </ul>
    ),
  },
  {
    title: "Additional Skills",
    id: "additional skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Translation</li>
        <li>Voice-acting</li>
        <li>Writing</li>
        <li>Digital Art</li>
        <li>Teaching</li>
        <li>Proofreading</li>
        <li>Presentation</li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutme.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm Darine Tag, a growth-minded front-end developer passionate about
            Turning ideas into aesthetically pleasing digital solutions. My soft
            skills fuel my technical growth. I recently completed an immersive
            Front-end development bootcamp, mastering JavaScript, Next.js,
            React.js, HTML, CSS, TailwindCSS, CLI, Firebase, and Git workflow. I
            thrive in team environments and I'm eager to contribute my skills to
            your team's success.
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
              selectTab={() => handleTabChange("additional skills")}
              active={tab === "additional skills"}
            >
              {" "}
              Additional Skills{" "}
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
