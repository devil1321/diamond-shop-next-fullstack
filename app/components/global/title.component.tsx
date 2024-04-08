'use client'
import React, { MutableRefObject, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitTextJS from 'split-text-js';

const Title:React.FC<{className:string; title:string}> = ({className,title}) => {

  const titleRef = useRef() as MutableRefObject<HTMLHeadingElement>
 
  const handleAnimate = () =>{
    gsap.registerPlugin(ScrollTrigger)
    const split = new SplitTextJS(titleRef.current);
    if(className.includes('green-purple')){
        gsap.fromTo(titleRef.current,{opacity:0},{opacity:1,scrollTrigger:{
          trigger:titleRef.current,
          start:'-=350px',
          end:'-=350px'
      }})
        gsap.fromTo([...split.chars].reverse(),{ x:-1000 ,opacity:0 },{ x:0,opacity:1,stagger:0.1,scrollTrigger:{
            trigger:titleRef.current,
            start:'-=350px',
            end:'-=350px'
        }})
    }else if(className.includes('purple-green')){
        gsap.fromTo(titleRef.current,{opacity:0},{opacity:1,scrollTrigger:{
          trigger:titleRef.current,
          start:'-=350px',
          end:'-=350px'
      }})
        gsap.fromTo(split.chars,{ x:1000 ,opacity:0 },{ x:0,opacity:1,stagger:0.1,scrollTrigger:{
            trigger:titleRef.current,
            start:'-=350px',
            end:'-=350px',
        }})
    }
  }

  useEffect(()=>{
    handleAnimate()
  },[title])

  return (
    <h2 ref={titleRef} className={`title -mt-[70px] md:mt-[50px] mb-[100px] text-4xl md:text-[70px] text-center font-extralight relative top-0 left-0 ${className}`}>{title}</h2>
  )
}

export default Title
