import React from 'react'

const Resume = () => {
  return (
    <div className="section resume lg:mb-[30vh] mb-[10vh] md:mb-[20vh] mt-[20vh] lg:px-[10vw]" id="resume">
        <h2 className="main-heading text-6xl sm:text-7xl md:text-8xl font-bold">resume<span className="inline-line-right"></span></h2>
        <div>
            <p className="resume-body text-md sm:text-lg md:text-xl mt-8 max-w-2x mb-[40px] font-geist-mono">
                If you would like to view my resume, click the button below.
            </p>
            <a className="resume-link bg-[--accent] text-[--text] px-5 py-4 rounded-3xl font-bold transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-sm hover:shadow-[var(--foreground)]" href="https://drive.google.com/file/d/1zViU2fp7Byk8BMF9adDGTM1CPMCmN_st/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
    </div>
  )
}

export default Resume;