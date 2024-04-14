import React from 'react'
import Image from 'next/image'

const Ads = () => {
  return (
    <div className='cart-ads mt-12'>
      <Image className='my-2' src="/assets/category-5.png" alt='ad-image' width={400} height={400}/>
      <Image className='my-2' src="/assets/about-1.png" alt='ad-image' width={400} height={400}/>
    </div>
  )
}

export default Ads
