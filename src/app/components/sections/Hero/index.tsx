import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="section hero flex flex-col items-center mt-[7rem] pt-[7rem]" id="hero">
        <h1 className="hero-heading text-8xl md:text-[9rem] font-bold">Nathaniel
            <br /> Chang
            <span className="red-dot relative inline-block text-[--accent]">●</span>
        </h1>

        <p className="hero-subheading flex justify-start text-md sm:text-lg md:text-xl mt-8 max-w-md md:max-w-2xl font-geist-mono">
            Hi there! I&apos;m a software engineer who loves to solves interesting problems, travel, and spend time with my wife and dog. Let&apos;s chat!
        </p>

    </div>
  )
}

export default Hero;