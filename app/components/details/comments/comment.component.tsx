import React from 'react'
import Image from 'next/image'

const Comment = () => {
  return (
    <div className='details-comment my-2 flex justify-start items-center'>
      <div className="details-comment-img rounded-full h-[60px] w-[60px] overflow-hidden  mr-2">
        <Image className='min-w-[340%] -translate-x-[50px]' src="/assets/discover-banner.png" alt='profile-img' width={300} height={100} />
      </div>
      <p className="text-sm w-2/3 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In cumque optio corrupti facilis nisi quam iste accusamus consequatur qui praesentium.</p>
    </div>
  )
}

export default Comment
