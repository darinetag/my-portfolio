"use client";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Shareity",
    description:
      "Shareity encourages people to share and reuse products like clothes, food and furniture amongst the community",
    tags: "#Next.js #TailwindCSS #Firebase #Firestore",
    image: "/images/shareity.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/team-f",
    previewUrl: "https://letshare-iota.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "My Portfolio showcases my projects, and all the necessary information concerning my skils, competencies, and how to contact me.",
    tags: "#Next.js #TailwindCSS #Gitworkflow",
    image: "/images/3.png",
    gitUrl: "https://github.com/darinetag/my-portfolio",
    previewUrl: "https://darinetag.vercel.app/",
  },
  {
    id: 3,
    title: "ChromX",
    description:
      "ChromX is an E-Commerce project designed to showcase the usage of various technologies for building a modern website.",
    tags: "#Next.js #TailwindCSS #Firebase #Gitworkflow",
    image: "/images/1.png",
    gitUrl: "https://github.com/darinetag/e-commerce-project-chromx",
    previewUrl: "https://e-commerce-project-chromx.vercel.app/",
  },
  {
    id: 4,
    title: "Cosmic Nova",
    description:
      "Cosmic Nova is a madlibs game created with vanilla Javascript, CSS and HTML. It is responsive and the styling was inspired from Figma.",
    tags: "#Javascript #CSS #HTML",

    image: "/images/2.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/madlibs-cosmic-nova",
    previewUrl: "https://cosmicnova.netlify.app/",
  },
  {
    id: 5,
    title: "ChatGPT Clone",
    description:
      "ChatGPT Clone, a powerful chat application built with TypeScript, Next.js (React), Firebase, Firestore, Tailwind CSS, and ChatGPT's Open AI API.",
    tags: "#Next.js #Typescript #Firebase #useSWR",

    image: "/images/chatgpt.jpg",
    gitUrl: "https://github.com/darinetag/chatgpt-clone",
    previewUrl: "https://chatgpt-delta-vert.vercel.app/",
  },
  {
    id: 6,
    title: "Portfolio",
    description:
      "Portfolio designed and coded from scratch to reflect my UI UX Design skills and demonstrate both my design thinking and development skills.",
    tags: "#Next.js #Framer-motion #Tailwindcss",

    image: "/images/portfolio.png",
    gitUrl: "https://github.com/darinetag/portfolio",
    previewUrl: "https://www.darinetag.dev/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2
        className="text-center text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-8 md:mb-12"
        id="projects"
      >
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tags={project.tags}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
