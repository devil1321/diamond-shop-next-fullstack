'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'

const useProduct = (id:number) => {

  const { products } = useSelector((state:State) => state.api)
  const [product,setProduct] = useState<any>({})

  const handleProduct = () =>{
    const item = products.find((p:any) => p.id === id)
    setProduct(item)
  }

  useEffect(()=>{
    handleProduct()
  },[products.length,id])

  return [product,setProduct]
}

export default useProduct
