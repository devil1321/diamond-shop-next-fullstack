import React from 'react'
import Image from 'next/image'

interface BannerProps{
    img:string;
    text:string;
}

const Banner:React.FC<BannerProps> = ({img,text}) => {
  return (
    <div className='banner relative top-0 left-0'>
       <div className="banner-overlay absolute z-20 top-0 left-0 w-[100%] h-[100%] opacity-40"></div>
      <Image src={img} alt="banner-image" width={1920} height={400} />
      <h2 className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-5xl w-[100%] lg:text-[100px] font-bold text-center text-white">{text}</h2>
    </div>
  )
}

export default Banner
