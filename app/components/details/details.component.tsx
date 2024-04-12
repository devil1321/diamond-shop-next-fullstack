import React from 'react'

const Details:React.FC<{product:any,quantity:number,currency:string}> = ({product,quantity,currency}) => {
  return (
    <div className='details-info md:w-1/2 md:mx-2'>
      <h2 className="text-5xl md:text-[100px]">{product?.title}</h2>
      <p className="text-sm text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur. Tincidunt id dui massa porta risus tincidunt morbi nec. Pulvinar aenean sed nulla.</p>
      <p className="text-sm text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur. Tincidunt id dui massa porta risus tincidunt morbi nec. Pulvinar aenean sed nulla.</p>
      <div className="details-info-buttons flex justify-between items-center gap-3">
        <button className="block rounded-md font-bold text-white w-1/2">{product?.price}{currency}</button>
        <button className="block rounded-md font-bold text-white w-1/2 line-through">{product?.prevPrice}{currency}</button>
      </div>
    </div>
  )
}

export default Details
