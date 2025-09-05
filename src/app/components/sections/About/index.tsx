import React from 'react'
import ImageGrid from './ImageGrid'
import { useInView } from 'react-intersection-observer'


const About = () => {
  const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: true,
  });
  return (
    <div ref={ref} className="section about mt-[10vh] pt-[10vh] lg:px-[10vw]" id="about">
        <div className={`about-heading-container mb-8 transition-opacity duration-300 ease-in ${inView ? 'opacity-100' : 'opacity-0'} `}>
          <h2 className="main-heading text-6xl sm:text-7xl md:text-8xl font-bold">about<span className="inline-line-right"></span></h2>
        </div>
        <div className="about-container flex flex-row gap-10">
            <div className={`about transition-opacity duration-300 ease-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <p className="about-heading text-md sm:text-lg md:text-xl font-geist-mono">
                    I got my Bachelor&apos;s degree in Computer Science from the University of California, Santa Cruz. I enjoy building web applications that are both functional and visually appealing.
                    When I&apos;m not coding, you can find me exploring the outdoors, learning more about personal finance, or spending quality time with my family and friends.
                </p>
                <br />
                <p className="about-heading text-md sm:text-lg md:text-xl font-geist-mono">
                    Here are some favorite pictures of my travels over the years!
                </p>

                <div className={`image-grid-container flex justify-center items-center mt-8 transition-opacity duration-300 ease-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
                    <ImageGrid />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;