import React from 'react'
import Image from 'next/image'

const MultipleBanner = () => {
  return (
    <div className='about-multiple-banenr md:my-[200px] h-[300px] relative top-0 left-0'>
      <Image src="/assets/woman-sky-banner.png" alt='main-banner-image' width={1920} height={300} />
      <Image className='hidden md:visible absolute z-20 left-[-10%] top-[50%]' src="/assets/sub-banner-1.png" alt='main-banner-image' width={300} height={300} />
      <Image className='hidden md:visible absolute z-20 right-[-8%] -top-[40%]' src="/assets/sub-banner-2.png" alt='main-banner-image' width={300} height={300} />
    </div>
  )
}

export default MultipleBanner
