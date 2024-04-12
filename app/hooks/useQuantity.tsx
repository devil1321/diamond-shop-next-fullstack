'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'

const useQuantity = (id:number) => {

  const { cart } = useSelector((state:State) => state.shop)
  
  const [quantity,setQuantity] = useState<number>(1)

  const handleQuantity = () =>{
    const item = cart.find((c:any) => c.id === id)
    setQuantity(item?.quantity)
  }

  useEffect(()=>{
    handleQuantity()
  },[cart.length,id])

  return [quantity,setQuantity]
}

export default useQuantity
