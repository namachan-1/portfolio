import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string | null;
    projectUrl: string;
}

const ProjectCard = ({title, description, imageUrl, projectUrl}: Project) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
  
  return (
    <div ref={ref} className={`project-card rounded-lg bg-[--card-bg] text-[--card-text] shadow-lg
        transition-all duration-300 w-full max-w-xl
        odd:self-start even:self-end hover:scale-105 object-cover ease-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="rounded-lg overflow-hidden">
          {imageUrl ?
            <Image src={imageUrl} alt={title} width={1800} height={1300} quality={100} className="w-full object-cover "/>
            : <div className="w-full h-[20rem] sm:h-[25rem] object-cover flex items-center justify-center">
                <span className="project-image-placeholder text-gray-500">Coming Soon</span>
            </div>
          }
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-md">{description}</p>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard;