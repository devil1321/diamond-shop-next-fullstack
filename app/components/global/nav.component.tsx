import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='nav px-12 border-b-[1px] border-gray-200 py-6'>
      <div className="nav-menu lg:flex lg:justify-end lg:gap-5">
        <Link href="/home" className='hover:underline hover:opacity-50 flex items-center'>
          <Image className="mr-2" src="/assets/home-icon.png" alt='home-icon' width={30} height={30} />
          <span>Home</span>
        </Link>
        <Link href="/favoruites" className='hover:underline hover:opacity-50 flex items-center'>
          <Image className="mr-2" src="/assets/heart-icon.png" alt='heart-icon' width={30} height={30} />
          <span>Favoruites</span>
        </Link>
        <Link href="/cart" className='hover:underline hover:opacity-50 flex items-center relative top-0 left-0'>
          <Image className="mr-2" src="/assets/cart-icon.png" alt='cart-icon' width={30} height={30} />
          <span>Cart</span>
          <span className='absolute -top-5 right-5 px-2 font-bold rounded-full bg-black text-white'>0</span>
        </Link>
        <Link href="about" className='hover:underline hover:opacity-50 flex items-center'>
          <Image className="mr-2" src="/assets/about-icon.png" alt='about-icon' width={30} height={30} />
          <span>About Us</span>
        </Link>
        <Link href="/contact" className='hover:underline hover:opacity-50 flex items-center'>
          <Image className="mr-2" src="/assets/contact-icon.png" alt='contact-icon' width={30} height={30} />
          <span>Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default Nav
