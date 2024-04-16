"use client"
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from 'redux'
import gsap from 'gsap'

const Nav = () => {

  const { user } = useSelector((state:State) => state.api)
  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)
  const [isProfile,setIsProfile] = useState<boolean>(false) 
  const menuRef = useRef() as MutableRefObject<HTMLDivElement>
  const hamburgerRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleMenu = (ref:MutableRefObject<HTMLDivElement>) =>{
    if(!ref.current.classList.contains('--open')){
      ref.current.classList.add('--open')
      ref.current.style.visibility = 'visible'
      gsap.fromTo(ref.current,{ y:50,opacity:0 },{ y:0, opacity:1 })
    }else{
      gsap.fromTo(ref.current,{ y:0, opacity:1 },{ y:50,opacity:0,onComplete:()=>{ 
        ref.current.classList.remove('--open')
        ref.current.style.visibility = 'hidden'
      }})
    }
  }

  const handleHamburger = (ref:MutableRefObject<HTMLDivElement>) =>{
    if(!ref.current.classList.contains('--open')){
      ref.current.classList.add('--open')
      gsap.fromTo('.nav-hamburger span:first-of-type',{rotate:0},{rotate:45,duration:0.5,transformOrigin:'6px 2px'})
      gsap.fromTo('.nav-hamburger span:nth-of-type(2)',{opacity:1},{opacity:0,duration:0.5})
      gsap.fromTo('.nav-hamburger span:last-of-type',{rotate:0},{rotate:-45,duration:0.5,transformOrigin:'6px 2px'})
    }else{
      ref.current.classList.remove('--open')
      gsap.fromTo('.nav-hamburger span:first-of-type',{rotate:45,transformOrigin:'6px 2px'},{rotate:0,duration:0.5})
      gsap.fromTo('.nav-hamburger span:nth-of-type(2)',{opacity:0},{opacity:1,duration:0.5})
      gsap.fromTo('.nav-hamburger span:last-of-type',{rotate:-45,transformOrigin:'6px 2px'},{rotate:0,duration:0.5})
    }
  }

  const handleInitMenu = () =>{
    if(typeof window !== 'undefined'){
      if(window.innerWidth < 1024){
        menuRef.current.style.visibility = 'hidden'
      }
    }
  }

  useEffect(()=>{
    handleInitMenu()
  },[])


  return (
    <div className='nav max-w-[100vw] px-12  py-6 flex justify-between items-center lg:block relative top-0 left-0'>
      <div ref={hamburgerRef} onClick={()=>{
        handleMenu(menuRef)
        handleHamburger(hamburgerRef)
      }} className="nav-hamburger ml-auto visible lg:hidden">
        <span className="block border-[2px] rounded-full border-black w-7 my-[2px]"></span>
        <span className="block border-[2px] rounded-full border-black w-7 my-[2px]"></span>
        <span className="block border-[2px] rounded-full border-black w-7 my-[2px]"></span>
      </div>
      <div ref={menuRef} className="nav-menu z-20 bg-white shadow-lg lg:shadow-none shadow-gray-300 rounded-md lg:rounded-none w-[90%] lg:ml-auto lg:w-fit p-4 lg:p-0 absolute top-12 lg:top-0 left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:-translate-x-0 lg:flex lg:justify-end lg:gap-5">
        <Link href="/home" className='my-2 md:my-0 hover:underline  hover:opacity-50 flex items-center'>
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
