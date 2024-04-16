'use client'
import React, { MutableRefObject, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { useSelector ,useDispatch} from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import * as ShopActions  from '@/app/controller/action-creators/shop.action-creators'
import { bindActionCreators } from 'redux'
import { useRouter } from 'next/navigation'

const Product:React.FC<{product:any}> = ({product}) => {

  const { currency } = useSelector((state:State) => state.ui)
  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)
  const router = useRouter()
  const productRef = useRef() as MutableRefObject<HTMLDivElement>

  const [color,setColor] = useState<any>({})

  const plate_1_ref = useRef() as MutableRefObject<HTMLDivElement>
  const plate_2_ref = useRef() as MutableRefObject<HTMLDivElement>
  const titleRef = useRef() as MutableRefObject<HTMLHeadingElement>
  const colorsRef = useRef() as MutableRefObject<HTMLDivElement>
  const button_1_ref = useRef() as MutableRefObject<HTMLButtonElement>
  const button_2_ref = useRef() as MutableRefObject<HTMLButtonElement>
  const buyRef = useRef() as MutableRefObject<HTMLButtonElement>
 
  const handleNavigate = () =>{
    if(productRef.current.classList.contains('--open')){
      router.push(`/details/${product.id}`)
    }
  }

  const handleColor = (e:any) =>{
    const colors = colorsRef.current.querySelectorAll("div")
    colors.forEach((c:HTMLDivElement)=>c.style.borderColor = 'transparent')
    e.target.style.borderColor = 'black'
  }

  const handleOpen = () =>{      
    const tl = gsap.timeline()
    gsap.fromTo(plate_1_ref.current,{ y:0 },{y:-30,duration:0.3})
    gsap.fromTo(plate_2_ref.current,{ y:-100 },{y:-50,duration:0.3})
    tl.fromTo(titleRef.current,{ opacity:0 },{opacity:1,duration:1,delay:0.3})
    tl.fromTo(colorsRef.current,{ y:-100 },{y:10,duration:0.3})
    gsap.fromTo(button_1_ref.current,{x:50,y:-100,opacity:1},{x:0,y:120,opacity:1,delay:0.6})
    gsap.fromTo(button_2_ref.current,{x:-50,y:-100,opacity:1},{x:0,y:120,opacity:1,delay:0.6})
    gsap.to(buyRef.current,{ y:-30 ,delay:0.6 })
    gsap.fromTo(buyRef.current,{opacity:0},{ opacity:1,delay:0.6,onComplete:()=>{
      productRef.current.classList.add('--open')
    }})
  }
  const handleClose = () =>{
    productRef.current.classList.remove('--open')
    const tl = gsap.timeline()
    tl.fromTo(titleRef.current,{opacity:1},{ opacity:0 ,duration:1})
    tl.fromTo(colorsRef.current,{y:10},{ y:-30 ,duration:0.3,delay:0.3})
    gsap.fromTo(plate_2_ref.current,{ y:-50,duration:0.3 },{y:-100,duration:0.3,delay:1.3})
    gsap.fromTo(plate_1_ref.current,{y:-30},{ y:0,duration:0.3 ,delay:1.3})
    gsap.fromTo(button_1_ref.current,{x:0,y:120,opacity:1},{x:50,y:-50,opacity:1,delay:0.6})
    gsap.fromTo(button_2_ref.current,{x:0,y:120,opacity:1},{x:-50,y:-50,opacity:1,delay:0.6})
    gsap.to(buyRef.current,{ opacity:0,delay:0.6 })
    gsap.fromTo(buyRef.current,{ y:-30 },{y:-100,delay:0.6})
  }

  return (
    <div ref={productRef} className='product mb-5 cursor-pointer md:w-1/2 xl:w-1/3' onMouseEnter={()=>handleOpen()} onMouseLeave={()=>handleClose()}>
      <div ref={plate_1_ref} className="product-plate relative z-20 left-0 top-0 mx-auto flex justify-center ronded-md overflow-hidden">
        <Image onClick={()=>handleNavigate()} className='mx-auto' src={product.img} alt="" width={300} height={300} />
      </div>
      <div ref={plate_2_ref} className="product-plate relative top-0 left-0 z-10 -translate-y-[90%] mx-auto py-5 rounded-[25px] w-[320px] md:w-[350px]">
        <div ref={colorsRef} className="product-colors -translate-y-[20px] flex justify-center items-center">
          {product.colors.map((c:any) => <div onClick={(e)=>{ 
            handleColor(e)
            setColor(c)
          }} className='rounded-full mx-2 w-5 h-5 cursor-pointer p-2 border-[1px] border-transparent' style={{backgroundColor:`#${c.hex}`}}></div>)}
        </div>
        <h3 ref={titleRef} className='product-title text-white font-bold mt-5 text-2xl text-center'>{product.title}</h3>
      </div>
      <div className="product-buttons mx-auto w-fit flex -translate-y-[160px]">
        <button ref={button_1_ref} className="product-price block rounded-md mx-2 px-5 py-3 bg-figma-green font-bold text-white">{product.price}{currency}</button>
        <button ref={button_2_ref} className="product-price block rounded-md mx-2 px-5 py-3 bg-figma-green font-bold text-white line-through">{product.prevPrice}{currency}</button>
      </div>
      <button ref={buyRef} className='product-buy block w-[75%] md:w-[90%] lg:w-[68%] xl:w-[90%] -translate-y-[250px] rounded-md mx-auto px-5 py-3 bg-figma-green font-bold text-white' onClick={()=>shopActions.addToCart(product?.id,1,product.price,color)}>{product.inCart ? "In Cart" : "Buy"}</button>
    </div>
  )
}

export default Product
