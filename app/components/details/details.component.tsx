import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import * as ShopActions from '@/app/controller/action-creators/shop.action-creators'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const Details:React.FC<{product:any,quantity:number,currency:string}> = ({product,quantity,currency}) => {

  const [size,setSize] = useState<string>('S')
  const [color,setColor] = useState<any>({})
  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)

  const menuRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleColor = (e:any) =>{
    const colors = document.querySelectorAll('.details-color') as NodeListOf<HTMLDivElement>
    colors.forEach((c:HTMLDivElement) => c.style.borderColor = 'transparent')
    e.target.style.borderColor = 'black'
  }
  
  const handleInitMenu = () =>{
    menuRef.current.style.visibility = 'hidden'
  }

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


  useEffect(()=>{
    handleInitMenu()
  },[menuRef.current])

  return (
    <div className='details-info md:w-1/2 md:mx-2 p-2 md:p-0'>
      <h2 className="text-5xl md:text-[100px]">{product?.title}</h2>
      <p className="text-sm text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur. Tincidunt id dui massa porta risus tincidunt morbi nec. Pulvinar aenean sed nulla.</p>
      <p className="text-sm text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur. Tincidunt id dui massa porta risus tincidunt morbi nec. Pulvinar aenean sed nulla.</p>
      <div className="details-info-buttons flex justify-between items-center gap-3">
        <button className="block rounded-md font-bold text-white w-1/2">{product?.price}{currency}</button>
        <button className="block rounded-md font-bold text-white w-1/2 line-through">{product?.prevPrice}{currency}</button>
      </div>
      <div className="details-colors-and-sizes my-5 flex justify-between items-center">
        <div className='details-colors w-1/2 flex justify-center items-center'>{product?.colors?.map((c:any)=><div onClick={(e)=>{
          handleColor(e)
          setColor(c)
          }} style={{backgroundColor:`#${c.hex}`}} className='details-color cursor-pointer h-5 w-5 rounded-full mx-2 border-transparent border-[1px]'></div>)}
        </div>
        <div className="details-sizes w-1/2 relative top-0 left-0">
          <div onClick={()=>handleMenu(menuRef)} className='bg-neutral-700 font-bold text-white text-center p-2 rounded-md  cursor-pointer hover:bg-neutral-400'>{size}</div>
          <div ref={menuRef} className="details-sizes-menu absolute w-[100%] top-10 left-1/2 -translate-x-1/2 bg-neutral-700 rounded-md overflow-hidden">
             <div onClick={(e:any)=>{
              setSize(e.target.textContent)
             }} className="cursor-pointer text-center font-bold text-white py-2 hover:bg-neutral-400">S</div>
             <div onClick={(e:any)=>{
              setSize(e.target.textContent)
             }} className="cursor-pointer text-center font-bold text-white py-2 hover:bg-neutral-400">M</div>
             <div onClick={(e:any)=>{
              setSize(e.target.textContent)
             }} className="cursor-pointer text-center font-bold text-white py-2 hover:bg-neutral-400">XL</div>
             <div onClick={(e:any)=>{
              setSize(e.target.textContent)
             }} className="cursor-pointer text-center font-bold text-white py-2 hover:bg-neutral-400">XXL</div>
          </div>
        </div>
      </div>
      <div className="details-quantity flex justify-center items-center gap-3">
        <div onClick={()=>{
          if(!Boolean(quantity > 1)){
            shopActions.removeFromCart(product.id)
          }else if(quantity > 0){
            shopActions.decrement(product.id,1)
          }
        }} className='w-[32%] rounded-md h-8 flex justify-center items-center hover:opacity-50 cursor-pointer font-bold text-center text-white bg-figma-green'>-</div>
        <div className='w-[32%] rounded-md h-8 flex justify-center items-center hover:opacity-50 cursor-pointer font-bold text-center text-white bg-figma-purple'>{quantity}</div>
        <div onClick={()=>{
          if(!Boolean(quantity > 0)){
          }else{
            shopActions.increment(product.id,1)
          }
        }} className='w-[32%] rounded-md h-8 flex justify-center items-center hover:opacity-50 cursor-pointer font-bold text-center text-white bg-figma-green'>+</div>
      </div>
      {product?.inCart 
        ? <button className='block w-[100%] my-2 font-bold text-white rounded-md'>In Cart</button>
        : <button onClick={()=>shopActions.addToCart(product?.id,1,product?.price,color)} className='block w-[100%] my-2 font-bold text-white rounded-md'>Buy</button>
      }
    </div>
  )
}

export default Details
