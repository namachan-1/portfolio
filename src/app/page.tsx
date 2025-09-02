import Navbar from "./components/UI/Navbar";
import Hero from "./components/sections/Hero";
import Resume from "./components/sections/Resume";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <div className="w-screen p-[32px] sm:p-[64px]">
      <Navbar />
      <main className="w-full flex flex-col justify-center align-center ">
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        {/* Add more sections here as needed
            * Projects
            * Skills
            * About
        */}
      </main>
      <footer className="">
        <div>hi</div>
      </footer>
    </div>
  );
}
