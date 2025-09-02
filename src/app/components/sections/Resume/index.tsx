import React from 'react'
import "./Resume.css"

const Resume = () => {
  return (
    <div className="section resume h-screen mt-[10vh] pt-[10vh] pl-[20vh] max-w-5xl" id="resume">
        <h2 className="main-heading text-6xl sm:text-7xl md:text-8xl font-bold">resume</h2>
        <div>
            <p className="resume-body text-md sm:text-lg md:text-xl mt-8 max-w-2x mb-[40px]">
                If you would like to view my resume, click the button below.
            </p>
            <a className="resume-link" href="https://drive.google.com/file/d/1Mc_gi2MfPWa70Mrb8vJKMiejgU3bCHxf/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
    </div>
  )
}

export default Resume;