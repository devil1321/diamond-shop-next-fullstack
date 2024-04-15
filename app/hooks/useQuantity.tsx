'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'

const useQuantity = (id:number) => {

  const { cart } = useSelector((state:State) => state.shop)
  
  const [quantity,setQuantity] = useState<number>(0)
  const [item,setItem] = useState<any>()

  const handleQuantity = () =>{
    const item = cart.find((c:any) => c.id === id)
    if(item){
      setItem(item)
      setQuantity(item?.quantity)
    }else{
      setQuantity(0)
    }
  }

  useEffect(()=>{
    handleQuantity()
  },[cart.length,item?.quantity,id])

  return [quantity,setQuantity]
}

export default useQuantity
