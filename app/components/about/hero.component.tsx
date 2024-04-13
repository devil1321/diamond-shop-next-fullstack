'use client'
import React, { MutableRefObject, useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Hero = () => {

  const catRef = useRef() as MutableRefObject<HTMLImageElement>
  const detailsRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleAnimate = () =>{
    const tl = gsap.timeline()
    tl.fromTo(catRef.current,{opacity:0},{opacity:1,duration:1})
    tl.fromTo(detailsRef.current,{opacity:0},{opacity:1,duration:1})
  }

  useEffect(()=>{
    handleAnimate()
  },[])

  return (
    <div className='about-hero w-[100vw] h-[100vh] relative top-0 left-0'>
      <Image className='hidden md:visible' src="/assets/about-hero.png" alt='about-hero-image' width={1920} height={768} />
      <Image ref={catRef} className='md:w-1/2 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-3/4' src="/assets/cat.png" alt='cat-image' width={600} height={600} />
      <div ref={detailsRef} className="about-hero-details p-3 md:py-3 md:px-6 relative md:absolute md:top-1/2 md:-translate-y-1/2 md:w-1/2 md:left-1/2 md:-translate-x-1/4 bg-white">
        <h1 className='font-bold text-3xl md:text-[80px]'>Style Essence</h1>
        <p className="text-sm my-5">Step into the limelight with our latest collection at Radiant Revolutions. Our designs transcend conventional boundaries, merging avant-garde concepts with timeless elegance.</p>
      </div>
    </div>
  )
}

export default Hero
