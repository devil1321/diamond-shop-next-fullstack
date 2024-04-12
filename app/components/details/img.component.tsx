import React, { useEffect } from 'react'
import Image from 'next/image'

const Img:React.FC<{product:any}> = ({product}) => {
  return (
    <div className='md:w-1/2 md:mx-2'>
        <Image className="block mx-auto" src={product?.img} alt="product-img" width={300} height={500}  />
    </div>
  )
}

export default Img
