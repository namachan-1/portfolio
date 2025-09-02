import React from 'react';
import "./Skills.css"

const Skills = () => {
  return (
        <div className="section skills h-screen mt-[10vh] pt-[10vh] pl-[20vh] max-w-5xl" id="skills">
        <div className="skills-heading-container mb-8">
          <h2 className="main-heading text-6xl sm:text-7xl md:text-8xl font-bold">skills</h2>
        </div>
        <div className="skill-container flex flex-row gap-10">
          <div className="skill">
            <h3 className="skill-heading-1 text-md sm:text-lg md:text-xl ">
                Build end-to-end solutions based on user needs/metrics.
            </h3>
          </div>
          <div className="skill">
            <h3 className="skill-heading-2 text-md sm:text-lg md:text-xl">
                Design intuitive user interfaces that are scalable and accessible.
            </h3>
          </div>
          <div className="skill">
            <h3 className="skill-heading-3 text-md sm:text-lg md:text-xl">
                Write clean, maintainable, tested, and well-documented code.
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Skills;