import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-200 dark:bg-[#121212] duration-200 ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection/>  
      </div>
      <Footer/>
    </main>
  );
}
