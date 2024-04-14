'use client'
import React from 'react'
import { State } from '@/app/controller/reducers/root.reducer'
import { useSelector } from 'react-redux'

const Summary = () => {

  const { summary } = useSelector((state:State) => state.shop)
  const { currency } = useSelector((state:State) => state.ui)

  return (
    <div className='cart-summary text-white py-12 px-6 rounded-[25px]'>
      <h2 className="font-bold text-2xl">Summary</h2>
      <div className="summary-item my-5 flex justify-between items-center">
        <h3 className='font-extralight text-md'>Items</h3>
        <h3 className='font-bold text-md'>{summary}{currency}</h3>
      </div>
      <div className="summary-item my-5 flex justify-between items-center">
        <h3 className='font-extralight text-md'>Shipping</h3>
        <h3 className='font-bold text-md'>100{currency}</h3>
      </div>
      <div className="border-t-[1px] pt-5 text-right border-t-gray-300 font-bold text-md">Total: {summary !== 0 ? summary + 100 : 0}{currency}</div>
    </div>
  )
}

export default Summary
