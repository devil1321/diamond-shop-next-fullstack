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
        gsap.fromTo(split.chars,{ x:-1000 ,opacity:0 },{ x:0,opacity:1,stagger:0.1,scrollTrigger:{
            trigger:'.title',
            start:'-=300px',
            end:'-=300px'
        }})
    }else if(className.includes('purple-green')){
        gsap.fromTo(split.chars,{ x:1000 ,opacity:0 },{ x:0,opacity:1,stagger:0.1,scrollTrigger:{
            trigger:'.title',
            start:'-=300px',
            end:'-=300px'
        }})
    }
    gsap.fromTo('.title:before',{opacity:0},{opacity:1})
    gsap.fromTo('.title:after',{opacity:0},{opacity:1})
  }

  useEffect(()=>{
    handleAnimate()
  },[title])

  return (
    <h2 ref={titleRef} className={`title mt-[50px] mb-[100px] text-[70px] text-center font-extralight relative top-0 left-0 ${className}`}>{title}</h2>
  )
}

export default Title
