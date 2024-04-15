'use client'
import Link from 'next/link'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from 'redux'

const Form = () => {

  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)

  const minRef = useRef() as MutableRefObject<HTMLDivElement>
  const maxRef = useRef() as MutableRefObject<HTMLDivElement>
  const sliderMinRef = useRef() as MutableRefObject<HTMLDivElement>
  const sliderMaxRef = useRef() as MutableRefObject<HTMLDivElement>

  const [min,setMin] = useState<number>(0)
  const [max,setMax] = useState<number>(500)
  const [color,setColor] = useState<any>({})

  const [isMin,setIsMin] = useState<boolean>(false)
  const [isMax,setIsMax] = useState<boolean>(false)
  const [colors,setColors] = useState<{name:string,hex:string}[]>([
    {
        "name":"Green",
        "hex":"00FFFF"
    },
    {
        "name":"Purple",
        "hex":"FA00FF"
    },
    {
        "name":"Orange",
        "hex":"F1D129"
    },
    {
        "name":"Strong Green",
        "hex":"5CE72B"
    },
    {
        "name":"Dark Grey",
        "hex":"7B7575"
    }
])


const handleColor = (e:any) =>{
  const colors = document.querySelectorAll('.favoruites-color') as NodeListOf<HTMLDivElement>
  colors.forEach((c:HTMLDivElement) => c.style.borderColor = 'transparent')
  e.target.style.borderColor = 'black'
}

const handleMin = (e:any) =>{
  if(isMin){
    const rect = sliderMinRef.current.getBoundingClientRect()
    let pos
    if(e.touches){
      pos = e.touches[0].pageX - rect.left
    }else{
      pos = e.pageX - rect.left
    }
    if(pos > 0 && pos < sliderMinRef.current.clientWidth){
      minRef.current.style.left = pos - 19 + 'px'
      minRef.current.textContent = String(min)
    }
  }
}

const handleMax = (e:any) =>{
  if(isMax){
    const rect = sliderMinRef.current.getBoundingClientRect()
    let pos
    if(e.touches){
      pos = e.touches[0].pageX - rect.left
    }else{
      pos = e.pageX - rect.left
    }
    if(pos > 0 && pos < sliderMaxRef.current.clientWidth){
      maxRef.current.style.left = pos - 19 + 'px'
      maxRef.current.textContent = String(max)
    }
  }
}

useEffect(()=>{
  minRef.current.textContent = String(min)
  maxRef.current.textContent = String(max)
},[])


  return (
    <div className='favoruites-form m-4 mr-5 md:m-0 rounded-[25px] text-white h-[600px] rounded-[25px  ] p-2 md:py-12 md:px-6 md:w-1/3'>
      <h2 className="text-2xl font-bold mb-12">Filter</h2>
      <h2 className="text-2xl font-bold mb-12">Price</h2>
      <div ref={sliderMinRef} onTouchMove={(e)=>handleMin(e)} onTouchStart={()=>setIsMin(true)} onTouchEnd={()=>setIsMin(false)} onMouseDown={()=>setIsMin(true)} onMouseUp={()=>setIsMin(false)} className="favoruites-form-field mb-12  relative top-0 left-0">
        <input className='favoruites-slider accent-green-300' onMouseMove={(e)=>handleMin(e)} type="range" value={min} min={0} max={500} onChange={(e)=>setMin(Number(e.target.value))} />
        <div className="p-2 bg-figma-green absolute top-7 left-0 rounded-md font-bold" ref={minRef}></div>
      </div>
      <div ref={sliderMaxRef} onTouchMove={(e)=>handleMax(e)} onTouchStart={()=>setIsMax(true)} onTouchEnd={()=>setIsMax(false)} onMouseDown={()=>setIsMax(true)} onMouseUp={()=>setIsMax(false)} className="favoruites-form-field mb-12 relative top-0 left-0">
        <input className='favoruites-slider accent-purple-400' onMouseMove={(e)=>handleMax(e)} type="range" value={max} min={0} max={500} onChange={(e)=>setMax(Number(e.target.value))} />
        <div className="p-2 bg-figma-purple absolute top-7 left-0 rounded-md font-bold" ref={maxRef}></div>
      </div>
      <h2 className="text-2xl font-bold mb-6">Color</h2>
      <div className="favoruites-colors mb-12 flex gap-3">
        {colors.map((c:any) => <div key={`color-filter-${c.hex}`} onClick={(e)=>{
          handleColor(e)
          setColor(c)
          }} style={{backgroundColor:`#${c.hex}`}} className='favoruites-color cursor-pointer h-5 w-5 border-[1px] border-transparent rounded-full'></div>)}
      </div>
      <button onClick={()=>APIActions.filterProducts(min,max,color)} className='block hover:opacity-50 w-[100%] py-2 mt-[90px] font-bold text-white rounded-md'>Filter</button>
      <Link href="/cart">
        <button className='block hover:opacity-50 w-[100%] py-2 my-2 font-bold text-white rounded-md'>Go To Cart</button>
      </Link>
    </div>
  )
}

export default Form
