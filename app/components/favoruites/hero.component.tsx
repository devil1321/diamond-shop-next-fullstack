import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="cart-hero w-[100vw] h-[100vh] relative top-0 left-0">
      <Image src="/assets/favoruites-hero.png" alt="cart-hero-image" width={1920} height={768} />
      <div className="cart-hero-details absolute md:top-[15%] lg:top-[18%] left-[2%] md:left-[10%]">
        <h1 className='font-bold text-5xl md:text-[100px] md:w-2/3 md:text-white'>Your Personal Favorites</h1>
        <p className="text-sm md:w-1/3 -mt-5 md:-mt-10 md:text-white">Explore your handpicked favorites, meticulously selected to reflect your unique style and preferences.</p>
      </div>
    </div>
  )
}

export default Hero
