'use client'
import React, { MutableRefObject, useEffect, useRef } from 'react'   
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { splitText } from '@/app/controller/lib/split-text'

const Categories = () => {

  const heightRef_1 = useRef() as MutableRefObject<HTMLDivElement>
  const heightRef_2 = useRef() as MutableRefObject<HTMLDivElement>

  const handleAnimateIn = (e:any) =>{
    e.stopPropagation()
    const heading_1 = e.target.parentElement.querySelector('h2:first-of-type') as HTMLHeadingElement
    const heading_2 = e.target.parentElement.querySelector('h2:last-of-type') as HTMLHeadingElement
    const chars_1 = splitText(heading_1) as HTMLSpanElement[]
    const chars_2 = splitText(heading_2) as HTMLSpanElement[]
    heading_1.innerHTML = ''
    heading_2.innerHTML = ''
    chars_1.forEach((char:HTMLSpanElement)=>heading_1.appendChild(char))
    chars_2.forEach((char:HTMLSpanElement)=>heading_2.appendChild(char))
    const letters_1 = heading_1.querySelectorAll('.letter') as NodeListOf<HTMLSpanElement>
    const letters_2 = heading_2.querySelectorAll('.letter') as NodeListOf<HTMLSpanElement>
    gsap.from(letters_2,{
        opacity:0,
        y:50,
        rotateX:-90,
        stagger:0.05
    })
    gsap.to(letters_1,{
        opacity:1,
        rotateX:90,
        y:-50,
        stagger:0.05
    })
  }
  const handleAnimateOut = (e:any) =>{
    e.stopPropagation()
    const heading_1 = e.target.parentElement.querySelector('h2:first-of-type') as HTMLHeadingElement
    const heading_2 = e.target.parentElement.querySelector('h2:last-of-type') as HTMLHeadingElement
    const chars_1 = splitText(heading_1) as HTMLSpanElement[]
    const chars_2 = splitText(heading_2) as HTMLSpanElement[]
    heading_1.innerHTML = ''
    heading_2.innerHTML = ''
    chars_1.forEach((char:HTMLSpanElement)=>heading_1.appendChild(char))
    chars_2.forEach((char:HTMLSpanElement)=>heading_2.appendChild(char))
    const letters_1 = heading_1.querySelectorAll('.letter') as NodeListOf<HTMLSpanElement>
    const letters_2 = heading_2.querySelectorAll('.letter') as NodeListOf<HTMLSpanElement>
    gsap.to(letters_2,{
        opacity:0,
        y:50,
        rotateX:-90,
        stagger:0.05
    })
    gsap.from(letters_1,{
        opacity:1,
        rotateX:90,
        y:-50,
        stagger:0.05,
    })
  }

  return (
    <div className={`home-categoriesflex-col md:flex-row md:flex md:justify-center md:items-stretch  md:gap-5 max-h-fit overflow-hidden`}>
      <div style={{
        maxHeight:heightRef_1?.current?.clientHeight + heightRef_2?.current?.clientHeight + 20 + 'px'
      }} className={`home-categories-category overflow-hidden home-categories-category-men cursor-pointer  transition-all mb-5 md:mb-0   relative top-0 left-0 w-[100%]  md:w-1/3`}>
        <Link href="/products">
            <div style={{
              maxHeight:heightRef_1?.current?.clientHeight + heightRef_2?.current?.clientHeight + 20 + 'px'
              }} onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="home-categories-category cursor-pointer  relative top-0 left-0">
                <Image className='min-w-[200%]' src="/assets/category-1.png" alt='category-man' width={820} height={800} />
                <h2 className="pointer-events-none categories-heading-men absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold text-white text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Men</h2>
                <h2 className="pointer-events-none categories-heading-men absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold text-white text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Men</h2>
            </div>
        </Link>
      </div>
      <div  className="home-categories-category mb-5 md:mb-0 cursor-pointer relative top-0 left-0-col w-[100%] md:w-1/3 flex flex-col justify-start items-center gap-5">
      <Link href="/products" >
        <div ref={heightRef_1} onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="home-categories-category cursor-pointer  transition-all   relative top-0 left-0">
            <Image src="/assets/category-2.png" alt='' width={400} height={600} />
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Woman</h2>
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Woman</h2>
        </div>
      </Link>
      <Link href="/products" >
        <div ref={heightRef_2} onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="home-categories-category cursor-pointer  transition-all   relative top-0 left-0">
            <Image src="/assets/category-3.png" alt='' width={400} height={600} />
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Shirts</h2>
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Shirts</h2>
        </div>
      </Link>
      </div>
      <div className="home-categories-category cursor-pointer relative top-0 left-0-col w-[100%] md:w-1/3 flex flex-col justify-start items-center gap-5">
      <Link href="/products">
        <div onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="home-categories-category cursor-pointer  transition-all   relative top-0 left-0">
            <Image src="/assets/category-4.png" alt='' width={400} height={600} />
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Suits</h2>
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Suits</h2>
        </div>
      </Link>
      <Link href="/products">
        <div onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="home-categories-category cursor-pointer  transition-all   relative top-0 left-0">
            <Image src="/assets/category-5.png" alt='' width={400} height={600} />
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Pants</h2>
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-[50px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Pants</h2>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default Categories
