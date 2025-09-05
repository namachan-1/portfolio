import React from 'react'
import ProjectCard from '../../UI/ProjectCard';
import { useInView } from 'react-intersection-observer';

interface Project {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string | null;
    projectUrl: string;
}

const projectData: Project[] = [
    {
        id: 1,
        title: "Stock Rater",
        description: "A React Native app that rates stocks based on various financial metrics, news articles and data visualization to make informed decisions.",
        date: "In Progress",
        imageUrl: "/images/stock_chart.jpg",
        projectUrl: "https://link-to-project-one.com"
    }, 
    {
        id: 2,
        title: "Budget App",
        description: "Uses React Native and Expo to help users track their expenses and manage their budget effectively. Uses Plaid API to securely connect personal accounts to fetch transaction data.",
        date: "In Progress",
        imageUrl: null,
        projectUrl: "#"
    },
    {
        id: 3,
        title: "Another Project",
        description: "Coming Soon!",
        date: "In Progress",
        imageUrl: null,
        projectUrl: "#"
    },
]

// TODO: add new pages for each project and link to them from each project card.
const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

  return (
    <div ref={ref} className="section projects flex flex-col mt-40 pt-40 lg:px-[10vw]" id="projects">
        <div className={`projects-heading-container mb-8 transition-opacity duration-1000 ease-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="main-heading text-6xl sm:text-7xl md:text-8xl font-bold">projects<span className="inline-line-right"></span></h2>
            <p className="project-body text-md sm:text-lg md:text-xl mt-8 max-w-2x font-geist-mono">
                Come check out some of my recent/coming work!
            </p>
        </div>
        <div className="projects-container flex flex-col items-center gap-10 w-full">
            {projectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    projectUrl={project.projectUrl}
                />
            ))}
        </div>
    </div>
  )
}

export default Projects;