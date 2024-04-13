import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='contact-hero mb-[100px] md:mb-[0px] w-[100vw] xl:h-[100vh] relative top-0 left-0'>
      <Image src="/assets/contact-hero.png" alt='contact-hero' width={1920} height={768} />
      <div className="contact-details absolute z-20 top-[20%] left-[5%] md:top-[60%] xl:top-[30%] md:left-[10%]">
        <h1 className='text-white text-2xl md:text-5xl xl:text-[100px] w-[100%] font-bold'>Let's Make Magic Together</h1>
        <p className='text-white text-sm -translate-y-[20%]'>Drop us a line or give us a call - we're here to turn your dreams into reality.</p>
      </div>
    </div>
  )
}

export default Hero
