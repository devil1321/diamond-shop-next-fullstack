'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import gsap from 'gsap'
const Details = () => {

  const { carouselCount } = useSelector((state:State) => state.ui)

  const [nodes,setNodes] = useState<any>([
    {
      title:'Diamond Threads',
      paragraph:'Where style meets timelessness, offering curated fashion for every moment.'
    },
    {
      title:'Sparkle Like Royalty',
      paragraph:'Discover our exquisite collection of diamond-studded attire, fit for those who desire to shine with regal elegance.'
    },
    {
      title:'Elevate Your Style',
      paragraph:'Step into a realm of sophistication with our curated selection of diamond-infused fashion, designed to elevate your everyday look.'
    },
    {
      title:'Every Stitch',
      paragraph:'Experience the epitome of luxury as every garment in our collection is adorned with meticulously crafted diamond accents.'
    }
  ])

  const handleAnimate = () =>{
    const tl = gsap.timeline()
    tl.fromTo('h1',{x:100,opacity:0},{x:0,opacity:1,delay:1.5})
    tl.fromTo('p',{y:100,opacity:0},{y:-50,opacity:1})
  }

  useEffect(()=>{
    handleAnimate()
  },[carouselCount])

  return (
    <div className="carousel-details w-3/4 md:w-max absolute z-10 top-[40%] left-[10%]">
      {[nodes[carouselCount]].map(({title,paragraph}:{title:string,paragraph:string}) => 
        <div className='relative top-0 left-0' key={`key-${title}`}>
          <h1 className="absolute top-0 left-0 md:w-max font-bold md:mb-0 text-5xl md:text-[80px] xl:text-[100px] text-white">{title}</h1>
          <p className='absolute top-[200px] md:w-max xl:top-[250px] left-0 text-white text-sm relative w-[80%]'>{paragraph}</p>
        </div>
      )}
    </div>
  )
}

export default Details
