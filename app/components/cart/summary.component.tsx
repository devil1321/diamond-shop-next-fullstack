'use client'
import React, { useEffect } from 'react'
import { State } from '@/app/controller/reducers/root.reducer'
import { useDispatch, useSelector } from 'react-redux'
import * as ShopActions from '@/app/controller/action-creators/shop.action-creators'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from 'redux'
import Link from 'next/link'

const Summary = () => {

  const { products,paymentLink } = useSelector((state:State) => state.api)
  const { summary,cart } = useSelector((state:State) => state.shop)
  const { currency } = useSelector((state:State) => state.ui)
  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)
  const APIActions = bindActionCreators(ApiActions,dispatch)

  
  const handleDescription = () =>{
    let description = ''
    cart.map((i:any,index:number)=>{
      const item = products.find((p:any)=>p.id === i.id)
      description += `${index + 1}. ${item?.title} with price ${item?.price}. `
    })
    return description
  }


  useEffect(()=>{
    shopActions.summary()
    const description = handleDescription()
    APIActions.pay(summary,currency,description)
  },[cart.length,summary])

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
      <Link href={paymentLink}><button className='block w-[100%] py-2 font-bold text-white'>Pay</button></Link>
    </div>
  )
}

export default Summary
