'use client'
import React from 'react'
import Image from 'next/image'

interface FeatureProps{
  img:string;
  isLeft:boolean;
  title:string;
  paragraph_1:string;
  paragraph_2:string;
}

const Feature:React.FC<FeatureProps> = ({img,isLeft,title,paragraph_1,paragraph_2}) => {
  return (
    <div className='feature h-[460px] mt-[100px] xl:my-0 md:h-[600px] relative top-0 left-0'>
      <div className={`feature-image relative z-20 md:z-10 md:absolute ${isLeft ? "left-0" : "right-0"}`}>
        <Image src={img} alt='feature-image' width={700} height={700}/>
      </div>
      <div className={`feature-details z-10 md:z-20 relative md:w-[90%] lg:w-[70%] md:absolute top-1/2 ${isLeft ? "right-[0px]" : 'left-[0px]'} -translate-y-[50%] md:-translate-y-1/2 lg:-translate-y-[60%] bg-black/50 p-2  lg:px-12 lg:py-5`}>
        <h3 className="text-5xl my-[70px] text-white font-bold">{title}</h3>
        <p className="text-sm my-2 text-white">{paragraph_1}</p>
        <p className="text-sm my-2 text-white">{paragraph_2}</p>
      </div>
    </div>
  )
}

export default Feature
