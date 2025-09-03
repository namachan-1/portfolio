import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

const ProjectCard = ({title, description, imageUrl, projectUrl}: Project) => {
  return (
    <div className="project-card border rounded-lg bg-[#DCC495] shadow-lg hover:shadow-2xl 
        transition-shadow duration-300 w-full max-w-xl
        odd:self-start even:self-end">
      <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div>
            <Image src={imageUrl} alt={title} width={75} height={50} className="w-full object-cover"/>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-md text-gray-700">{description}</p>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard;