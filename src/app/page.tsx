'use client';
import dynamic from 'next/dynamic';
import Navbar from "./components/UI/Navbar";
import Hero from "./components/sections/Hero";
import InViewWrapper from './components/InViewWrapper';

// Components to lazy-load
const ProjectSection = dynamic(() => import('./components/sections/Projects'), { ssr: false });
const SkillsSection = dynamic(() => import('./components/sections/Skills'), { ssr: false });
const AboutSection = dynamic(() => import('./components/sections/About'), { ssr: false });
const ResumeSection = dynamic(() => import('./components/sections/Resume'), { ssr: false });

const sections = [
  { id: 'projects', component: ProjectSection },
  { id: 'skills', component: SkillsSection },
  { id: 'about', component: AboutSection },
  { id: 'resume', component: ResumeSection },
]

export default function Home() {
  return (
    // TODO: add a cool background animation that is subtle and not distracting for the whole page.
    // Maybe some floating shapes or particles that move slowly.
    // Maybe some parallax effect when scrolling.
    // Maybe a gradient background that changes colors slowly.
    // Maybe a combination of the above.
    <div className="flex flex-col w-screen items-center p-8 xl:max-w-[80vw]">
      <Navbar />
      <main className="w-full flex flex-col justify-center align-center ">
        <Hero />
        {sections.map(({ id, component: SectionComponent }) => (
          <InViewWrapper key={id}>
            <SectionComponent />
          </InViewWrapper>
        ))}
      </main>
    </div>
  );
}
