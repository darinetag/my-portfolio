"use client";
import TabButton from "./TabButton";
import { useTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <li>Astro</li>
        <li>wordpress</li>
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
        <li>Adaptability</li>
        <li>Creativity</li>
        <li>Problem solving</li>
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Empathy</li>
      </ul>
    ),
  },
  {
    title: "blogs",
    id: "blogs",
    content: (
      <ul className="list-disc pl-2">
        <li className="cursor-pointer hover:text-teal-600">
          <Link href="https://darinetag.hashnode.dev/beginner-programmers-in-self-doubt-no-more?source=more_articles_bottom_blogs">
            Beginner Programmers in Self-doubt ... No More
          </Link>
        </li>
        <li className="cursor-pointer hover:text-teal-600">
          <Link href="https://darinetag.hashnode.dev/beginner-programmers-journey">
            Beginner Programmer&apos;s Journey
          </Link>
        </li>
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
    <section className="dark:text-white text-gray-900" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-16 sm:py-16 xl:px-6">
        <Image
          className="xl:w-full xl:h-80 xl:self-stretch"
          src="/images/aboutme.gif"
          width={500}
          height={500}
          alt="about me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold dark:text-white text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I&apos;m Darine Tag, a front-end developer who&apos;s
            all about turning ideas into aesthetically pleasing digital
            solutions. My soft skills fuel my technical growth. I recently
            completed an immersive Front-end development bootcamp, mastering
            CLI, Git, HTML, CSS, TailwindCSS, JavaScript, React.js, Next.js, and
            Firebase. I thrive in team environments and I&apos;m eager to
            contribute my skills to your team&apos;s success.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
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
            <TabButton
              selectTab={() => handleTabChange("blogs")}
              active={tab === "blogs"}
            >
              {" "}
              Blogs{" "}
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
