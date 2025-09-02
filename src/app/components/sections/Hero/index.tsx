import React from 'react'
import Image from 'next/image'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="section hero flex flex-col justify-start items-start mt-[10vh] pt-[10vh] pl-[20vh] max-w-5xl" id="hero">
        <h1 className="hero-heading text-7xl sm:text-8xl md:text-9xl font-bold">Nathaniel
            <br /> Chang
            <span className="red-dot relative inline-block"><Image src="./circle.svg" alt="Logo" width={50} height={50}/></span>
        </h1>

        <p className="hero-subheading text-sm sm:text-md md:text-xl mt-8 max-w-2xl">
            Hi there! I&apos;m someone who loves to solves interesting problem, travel, and spend time with my wife and dog. Let&apos;s chat!
        </p>

        {/* <div className="hero-image mt-8">
          <
        </div> */}
        <h2></h2>
    </div>
  )
}

export default Hero;