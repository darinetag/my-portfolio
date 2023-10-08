import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "ChromX",
    description: "ChromX is an E-Commerce project designed to showcase the usage of various technologies and tools for building a modern web application.",
    image: "/images/1.png",
//add tag to all array if u want to filter different types of projects
    gitUrl: "https://github.com/darinetag/e-commerce-project-chromx",
    previewUrl: "e-commerce-project-chromx.vercel.app",
  },
  {
    id: 2,
    title: "Cosmic Nova",
    description: "Cosmic Nova is a madlibs game created with vanilla Javascript, CSS and HTML. It is responsive and the styling was inspired from Figma.",
    image: "/images/2.png",
    gitUrl: "https://github.com/202306-NEA-DZ-FEW/madlibs-cosmic-nova",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "My Portfolio showcases my projects, and all the necessary information concerning my skils, competencies, and how to contact me.",
    image: "/images/3.png",
    gitUrl: "https://github.com/darinetag/my-portfolio",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
        // add tag here as well and a make a componenet 
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
