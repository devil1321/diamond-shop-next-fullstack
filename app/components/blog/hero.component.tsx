import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='blog-hero h-[80vh] w-[100vw] md:h-[100vh] md:w-[100vw] relative top-0 left-0'>
      <Image src="/assets/blog-hero.png" alt='blog-hero-image' width={1920} height={768} />
      <div className="blog-hero-jumbotron rounded-md flex justify-center items-center absolute top-[10%] left-1/2 -translate-x-1/2 bg-figma-green/50 w-[90%] h-[30%] font-thin text-center text-white text-5xl md:text-[80px]">Where Style Meets Substance</div>
      <h1 className="absolute bottom-10 left-20 font-bold text-5xl md:text-[100px] md:w-3/4 hidden md:visible text-white">Unveiling Fashion's Finest Moments</h1>
    </div>
  )
}

export default Hero
