'use client'
import React, { MutableRefObject, useEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';

interface FeatureProps{
    title:string;
    paragraph_1:string;
    paragraph_2:string;
}

const Feature:React.FC<FeatureProps> = ({title,paragraph_1,paragraph_2}) => {
  
  const imgRef_1 = useRef() as  MutableRefObject<HTMLDivElement>
  const imgRef_2 = useRef() as  MutableRefObject<HTMLDivElement>
  const imgRef_3 = useRef() as  MutableRefObject<HTMLDivElement>

  const handleAnimate = () =>{
    gsap.fromTo(imgRef_1.current,{x:-200,y:-200,opacity:0},{
        x:0,
        y:0,
        opacity:1,
        duration:1,
        scrollTrigger:{
            trigger:'.about-feature',
            start:'-=150px',
            end:'-=150px'
        }
    })
    gsap.fromTo(imgRef_2.current,{x:200,opacity:0},{
        x:0,
        opacity:1,
        duration:1,
        scrollTrigger:{
            trigger:'.about-feature',
            start:'-=150px',
            end:'-=150px'
        }
    })
    gsap.fromTo(imgRef_3.current,{x:-100,y:200,opacity:0},{
        x:0,
        y:0,
        opacity:1,
        duration:1,
        scrollTrigger:{
            trigger:'.about-feature',
            start:'-=150px',
            end:'-=150px'
        }
    })
  }

  useEffect(()=>{
    setTimeout(handleAnimate,2000)
  },[])

  return (
    <div className='about-feature md:flex-col lg:flex-row md:flex md:justify-between md:items-center p-2 md:p-0'>
      <div className='aboyt-feature-images h-[500px] md:w-1/2 relative top-0 left-0'>
        <div ref={imgRef_1} className="about-feature-image opacity-0 absolute top-[5%] left-[0%] md:w-[300px] md:h-[300px]">
            <Image src="/assets/essence-1.png" alt='feature-image' width={300} height={300} />
        </div>
        <div ref={imgRef_2} className="about-feature-image opacity-0 absolute top-[20%] left-[30%] md:w-[300px] md:h-[300px]">
            <Image src="/assets/essence-2.png" alt='feature-image' width={300} height={300} />
        </div>
        <div ref={imgRef_3} className="about-feature-image opacity-0 absolute top-[35%] left-[10%] md:w-[300px] md:h-[300px]">
            <Image src="/assets/essence-3.png" alt='feature-image' width={300} height={300} />
        </div>
      </div>
      <div className="about-feature-details md:w-[100%] lg:w-1/2 p-2 md:p-5">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-sm my-5">{paragraph_1}</p>
        <p className="text-sm my-5">{paragraph_2}</p>
      </div>
    </div>
  )
}

export default Feature
