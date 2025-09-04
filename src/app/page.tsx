import Navbar from "./components/UI/Navbar";
import Hero from "./components/sections/Hero";
import Resume from "./components/sections/Resume";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About/About";

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-center p-8 xl:max-w-[80vw]">
      <Navbar />
      <main className="w-full flex flex-col justify-center align-center ">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Resume />
      </main>
    </div>
  );
}
