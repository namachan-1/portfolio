import React from 'react'
import "./Resume.css"

const Resume = () => {
  return (
    <div className="section resume h-screen mt-[20vh] pt-[10vh] lg:px-[10vw] " id="resume">
        <h2 className="main-heading text-6xl sm:text-7xl md:text-8xl font-bold">resume</h2>
        <div>
            <p className="resume-body text-md sm:text-lg md:text-xl mt-8 max-w-2x mb-[40px]">
                If you would like to view my resume, click the button below.
            </p>
            <a className="resume-link" href="https://drive.google.com/file/d/1zViU2fp7Byk8BMF9adDGTM1CPMCmN_st/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
    </div>
  )
}

export default Resume;