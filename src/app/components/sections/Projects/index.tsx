import React from 'react'
import ProjectCard from '../../UI/ProjectCard';

interface Project {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

const projectData: Project[] = [
    {
        id: 1,
        title: "Stock Rater",
        description: "A React Native app that rates stocks based on various financial metrics, news articles and data visualization to make informed decisions.",
        date: "In Progress",
        imageUrl: "/path/to/image1.jpg",
        projectUrl: "https://link-to-project-one.com"
    }, 
    {
        id: 2,
        title: "Another Project",
        description: "A brief description of Project Two.",
        date: "In Progress",
        imageUrl: "/path/to/image2.jpg",
        projectUrl: "https://link-to-project-two.com"
    },
    {
        id: 3,
        title: "Another Project",
        description: "A brief description of Project Two.",
        date: "In Progress",
        imageUrl: "/path/to/image2.jpg",
        projectUrl: "https://link-to-project-two.com"
    },
]

const Projects = () => {
  return (
    <div className="section projects h-screen flex flex-col mt-[10vh] pt-[10vh] lg:px-[10vh]" id="projects">
        <div className="projects-heading-container mb-8">
          <h2 className="main-heading text-6xl sm:text-7xl md:text-8xl font-bold">projects</h2>
            <p className="project-body text-md sm:text-lg md:text-xl mt-8 max-w-2x mb-[40px] font-geist-mono">
                Come check out some of my recent work!
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