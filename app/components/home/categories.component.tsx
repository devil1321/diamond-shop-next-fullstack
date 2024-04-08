'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { splitText } from '@/app/controller/lib/split-text'

const Categories = () => {


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
    <div className='categories md:flex md:justify-center md:items-start md:gap-5'>
      <div className="categories-category cursor-pointer hover:shadow-lg transition-all hover:shadow-gray-500  relative top-0 left-0-col w-1/3 overflow-hidden">

        <Link href="/products">
            <div onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="categories-category cursor-pointer  relative top-0 left-0 w-max h-max">
                <Image src="/assets/category-1.png" alt='' width={470} height={600} />
                <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 font-bold text-white text-[80px]">Men</h2>
                <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 font-bold text-white text-[80px]">Men</h2>
            </div>
        </Link>
      </div>
      <div className="categories-category cursor-pointer relative top-0 left-0-col w-1/3 flex flex-col justify-start items-center gap-5">
      <Link href="/products">
        <div onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="categories-category cursor-pointer hover:shadow-lg transition-all hover:shadow-gray-500  relative top-0 left-0">
            <Image src="/assets/category-2.png" alt='' width={400} height={600} />
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-[80px]">Woman</h2>
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-[80px]">Woman</h2>
        </div>
      </Link>
      <Link href="/products">
        <div onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="categories-category cursor-pointer hover:shadow-lg transition-all hover:shadow-gray-500  relative top-0 left-0">
            <Image src="/assets/category-3.png" alt='' width={400} height={600} />
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[80px]">Shirts</h2>
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[80px]">Shirts</h2>
        </div>
      </Link>
      </div>
      <div className="categories-category cursor-pointer relative top-0 left-0-col w-1/3 flex flex-col justify-start items-center gap-5">
      <Link href="/products">
        <div onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="categories-category cursor-pointer hover:shadow-lg transition-all hover:shadow-gray-500  relative top-0 left-0">
            <Image src="/assets/category-4.png" alt='' width={400} height={600} />
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[80px]">Suits</h2>
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[80px]">Suits</h2>
        </div>
      </Link>
      <Link href="/products">
        <div onMouseEnter={(e)=>handleAnimateIn(e)} onMouseLeave={(e)=>handleAnimateOut(e)} className="categories-category cursor-pointer hover:shadow-lg transition-all hover:shadow-gray-500  relative top-0 left-0">
            <Image src="/assets/category-5.png" alt='' width={400} height={600} />
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-[80px]">Pants</h2>
            <h2 className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-[80px]">Pants</h2>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default Categories
