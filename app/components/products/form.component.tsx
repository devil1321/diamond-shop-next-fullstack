'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Form = () => {

  const [cloth,setCloth] = useState<string>('Cloth')
  const [size,setSize] = useState<string>('Size:')

  const clothesMenuRef = useRef() as MutableRefObject<HTMLDivElement> 
  const sizesMenuRef = useRef() as MutableRefObject<HTMLDivElement> 

  const handleMenu = (ref:MutableRefObject<HTMLDivElement>) =>{
    if(!ref.current.classList.contains('--open')){
      ref.current.classList.add('--open')
      ref.current.style.visibility = 'visible'
      gsap.fromTo(ref.current,{ y:50,opacity:0 },{ y:0, opacity:1 })
    }else{
      gsap.fromTo(ref.current,{ y:0, opacity:1 },{ y:50,opacity:0,onComplete:()=>{ 
        ref.current.classList.remove('--open')
        ref.current.style.visibility = 'hidden'
      }})
    }
  }

  const handleInitMenus = () =>{
    clothesMenuRef.current.style.visibility = 'hidden'
    sizesMenuRef.current.style.visibility = 'hidden'
  }

  useEffect(()=>{
    handleInitMenus()
  },[sizesMenuRef.current,clothesMenuRef.current])

  return (
    <div className='products-form-wrapper'>
      <div className="products-form-nav-menu flex justify-between items-center">
        <h3 className="text-5xl font-bold">Filter</h3>
        <div className="products-form-nav-menus flex justify-between items-center">
          <div onClick={()=>handleMenu(clothesMenuRef)} className="products-menu-button cursor-pointer px-12 py-2 font-bold mx-2 text-white relative top-0 left-0 bg-figma-purple">
            {cloth}
            <div ref={clothesMenuRef} className="products-menu z-10 absolute top-12 left-1/2 -translate-x-1/2 p-2 bg-figma-purple">
              <div onClick={(e:any)=>setCloth(e.target.textContent)} className='px-9 py-2 hover:bg-white/50'>T Shirt</div>
              <div onClick={(e:any)=>setCloth(e.target.textContent)} className='px-9 py-2 hover:bg-white/50'>Dress</div>
              <div onClick={(e:any)=>setCloth(e.target.textContent)} className='px-9 py-2 hover:bg-white/50'>Skirt</div>
              <div onClick={(e:any)=>setCloth(e.target.textContent)} className='px-9 py-2 hover:bg-white/50'>Jacket</div>
            </div>
          </div>
          <div onClick={()=>handleMenu(sizesMenuRef)} className="products-menu-button cursor-pointer px-12 py-2 font-bold mx-2 text-white relative top-0 left-0 bg-figma-green">
            {size}
            <div  ref={sizesMenuRef}   className="products-menu z-10 absolute top-12 left-1/2 -translate-x-1/2 p-2 bg-figma-green">
            <div onClick={(e:any)=>setSize(e.target.textContent)} className='px-12 py-2 hover:bg-white/50'>S</div>
              <div onClick={(e:any)=>setSize(e.target.textContent)} className='px-12 py-2 hover:bg-white/50'>M</div>
              <div onClick={(e:any)=>setSize(e.target.textContent)} className='px-12 py-2 hover:bg-white/50'>XL</div>
              <div onClick={(e:any)=>setSize(e.target.textContent)} className='px-12 py-2 hover:bg-white/50'>XXL</div>
            </div>
          </div>
        </div>
      </div>
      <form action="" className='block my-12'>
        <div className="products-form-field bg-gray-300 p-4 rounded-lg">
          <input placeholder='Search Items' type="text" />
        </div>
        <button className="font-bold p-4 text-white block w-[100%] my-2 rounded-lg">Search</button>
      </form>
    </div>
  )
}

export default Form
