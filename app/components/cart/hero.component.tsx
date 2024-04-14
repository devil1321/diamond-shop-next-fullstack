import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="cart-hero w-[100vw] h-[100vh] relative top-0 left-0">
      <Image src="/assets/cart-hero.png" alt="cart-hero-image" width={1920} height={768} />
      <div className="cart-hero-details absolute md:top-[15%] lg:top-[18%] left-[2%] md:left-[10%]">
        <h1 className='font-bold text-5xl md:text-[100px] text-red-500'>Ready to Checkout?</h1>
        <p className="text-sm md:w-1/3 -mt-5 md:-mt-10">Your cart awaits with all your must-have items - just a few clicks away from making them yours. Don't let your favorites slip away; proceed to checkout now!</p>
      </div>
    </div>
  )
}

export default Hero
