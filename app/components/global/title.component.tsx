'use client'
import React, { MutableRefObject, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitTextJS from 'split-text-js';

const Title:React.FC<{className:string; title:string,start:string,end:string}> = ({className,title,start,end}) => {

  const titleRef = useRef() as MutableRefObject<HTMLHeadingElement>
 
  const handleAnimate = () =>{
    const split = new SplitTextJS(titleRef.current);
    if(className.includes('green-purple')){
        titleRef.current.style.opacity = '1'
        gsap.fromTo([...split.chars].reverse(),{ x:-1000 ,opacity:0 },{ x:0,opacity:1,stagger:0.1,scrollTrigger:{
            trigger:titleRef.current,
            start:start,
            end:end,
        },
        onStart:()=>titleRef.current.classList.add('active')
      })
    }else if(className.includes('purple-green')){
        titleRef.current.style.opacity = '1'
        gsap.fromTo(split.chars,{ x:1000 ,opacity:0 },{ x:0,opacity:1,stagger:0.1,scrollTrigger:{
            trigger:titleRef.current,
            start:start,
            end:end,
        },
        onStart:()=>titleRef.current.classList.add('active')
      })
    }
  }

  useEffect(()=>{
    setTimeout(() => {
      handleAnimate()
    }, 2000);
  },[title,titleRef.current])

  return (
    <h2 ref={titleRef} className={`title -mt-[70px] md:mt-[100px] opacity-0 mb-[100px] text-4xl md:text-[70px] text-center font-extralight relative top-0 left-0 ${className}`}>{title}</h2>
  )
}

export default Title
