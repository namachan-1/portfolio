import React from 'react';
import Image from 'next/image';
import "./Skills.css"
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
  });
  return (
    <div ref={ref} className="section skills mt-20 pt-20 flex flex-col justify-center items-center lg:px-[10vw]" id="skills">
        <div className={`flex items-center flex-row gap-4 skills-heading-container mb-8 transition-opacity duration-1000 ease-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <Image className="relative inline-block" src="/diamond-long-shifted.svg" alt="diamond icon" width={40} height={40} />
          <h2 className="main-heading text-6xl sm:text-7xl md:text-8xl font-bold">
            skills
          </h2>
          <Image className="relative inline-block" src="/diamond-long-shifted.svg" alt="diamond icon" width={40} height={40} />
        </div>
        <div className="skill-container flex flex-row gap-10">
          <div className={`skill transition-opacity duration-[1s] linear ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="skill-heading-1 text-md sm:text-lg md:text-xl">
                Build <span className="skill-highlight">end-to-end solutions</span> 
                that are based on <span className="skill-highlight">user needs & metrics</span>.
            </h3>
          </div>
          <div className={`skill transition-opacity duration-[1.2s] linear ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="skill-heading-2 text-md sm:text-lg md:text-xl">
                Design <span className="skill-highlight">intuitive user interfaces</span> 
                that are <span className="skill-highlight">scalable</span> and <span className="skill-highlight">accessible</span>.
            </h3>
          </div>
          <div className={`skill transition-opacity duration-[1.5s] linear ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="skill-heading-3 text-md sm:text-lg md:text-xl">
                Write <span className="skill-highlight">clean, maintainable, tested,</span> and <span className="skill-highlight">well-documented</span> code.
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Skills;