import React from 'react'
import Image from 'next/image'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="section hero flex flex-col items-center mt-[10vh] pt-[10vh]" id="hero">
        <h1 className="hero-heading text-7xl md:text-8xl lg:text-9xl font-bold">Nathaniel
            <br /> Chang
            <span className="red-dot relative inline-block"><Image src="./circle.svg" alt="Logo" width={50} height={50}/></span>
        </h1>

        <p className="hero-subheading flex justify-start text-md sm:text-lg md:text-xl mt-8 max-w-2xl font-geist-mono">
            Hi there! I&apos;m someone who loves to solves interesting problems, travel, and spend time with my wife and dog. Let&apos;s chat!
        </p>
        <h2></h2>
    </div>
  )
}

export default Hero;