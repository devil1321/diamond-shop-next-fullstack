"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from 'redux'

const Nav = () => {

  const { user } = useSelector((state:State) => state.api)
  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)
  const [isProfile,setIsProfile] = useState<boolean>(false) 

  return (
    <div className='nav max-w-[100vw] px-12  py-6'>
      <div className="nav-menu lg:flex lg:justify-end lg:gap-5">
        <Link href="/home" className='my-2 md:my-0 hover:underline hover:opacity-50 flex items-center'>
          <Image className="mr-2" src="/assets/home-icon.png" alt='home-icon' width={30} height={30} />
          <span>Home</span>
        </Link>
        <Link href="/favoruites" className='my-2 md:my-0 hover:underline hover:opacity-50 flex items-center'>
          <Image className="mr-2" src="/assets/heart-icon.png" alt='heart-icon' width={30} height={30} />
          <span>Favoruites</span>
        </Link>
        <Link href="/products" className='my-2 md:my-0 hover:underline hover:opacity-50 flex items-center'>
          <Image className="mr-2" src="/assets/products-icon.png" alt='cart-icon' width={30} height={30} />
          <span>Products</span>
        </Link>
        <Link href="/cart" className='my-2 md:my-0 hover:underline hover:opacity-50 flex items-center relative top-0 left-0'>
          <Image className="mr-2" src="/assets/cart-icon.png" alt='cart-icon' width={30} height={30} />
          <span>Cart</span>
          <span className='absolute -top-5 right-5 px-2 font-bold rounded-full bg-black text-white'>0</span>
        </Link>
        <Link href="about" className='my-2 md:my-0 hover:underline hover:opacity-50 flex items-center'>
          <Image className="mr-2" src="/assets/about-icon.png" alt='about-icon' width={30} height={30} />
          <span>About Us</span>
        </Link>
        <Link href="/contact" className='my-2 md:my-0 hover:underline hover:opacity-50 flex items-center'>
          <Image className="mr-2" src="/assets/contact-icon.png" alt='contact-icon' width={30} height={30} />
          <span>Contact</span>
        </Link>
        {user && <Link href="/profile"><button className='px-3 mr-2 md:mr-0 h-8 rounded-md text-white font-bold hover:opacity-70'>Profile</button></Link>}
        {user && <button onClick={()=>APIActions.logout()} className='px-3 h-8 mr-2 md:mr-0 rounded-md text-white font-bold hover:opacity-70'>Logout</button>}
      </div>
    </div>
  )
}

export default Nav
