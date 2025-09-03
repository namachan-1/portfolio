import React from 'react'

const About = () => {
  return (
    <div className="section about h-screen mt-[10vh] pt-[10vh] pl-[20vh] max-w-5xl" id="about">
        <div className="about-heading-container mb-8">
          <h2 className="main-heading text-6xl sm:text-7xl md:text-8xl font-bold">About</h2>
        </div>
        <div className="about-container flex flex-row gap-10">
            <div className="about">
                <h3 className="about-heading-1 text-md sm:text-lg md:text-xl ">
                    I got my Bachelor&apos;s degree in Computer Science from the University of California, I enjoy building web applications that are both functional and visually appealing.
                </h3>
            </div>
            <div className="about">
                <h3 className="about-heading-2 text-md sm:text-lg md:text-xl">
                    When I&apos;m not coding, you can find me exploring the outdoors, trying out new recipes in the kitchen, or spending quality time with my family and friends.
                </h3>
            </div>
        </div>
    </div>
  )
}

export default About