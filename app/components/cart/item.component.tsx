'use client'
import React, { useReducer } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import useProduct from '@/app/hooks/useProduct'
import useQuantity from '@/app/hooks/useQuantity'
import { usePathname } from 'next/navigation'
const Item:React.FC<{id:number}> = ({id}) => {

  const [quantity,setQuantity] = useQuantity(id)
  const [product,setProduct] = useProduct(id)

  const pathmane = usePathname()

  const { currency } = useSelector((state:State) => state.ui)

  const handleColor = (e:any) =>{
    const colors = document.querySelectorAll('.cart-color') as NodeListOf<HTMLDivElement>
    colors.forEach((c:HTMLDivElement) => c.style.borderColor = 'transparent')
    e.target.style.borderColor = 'black'
  }

  return (
    <div className='cart-item p-3 md:p-0 mr-1 md:mr-0 my-10 md:flex md:justify-start md:items-center'>
      <div className="cart-item-image md:min-w-[50%] overflow-hidden flex justify-center items-center">
        <Image src={product?.img} alt='cart-item-image' width={400} height={400} />
      </div>
      <div className="cart-item-details px-6 md:px-12 flex flex-col justify-center items-start rounded-[25px] min-w-[70%] h-[170px] md:-translate-x-1/3">
          <h3 className="font-bold text-2xl text-white">{product?.title}</h3>
          <div className="cart-colors flex gap-3">
            {product?.colors?.map((c:any) => <div onClick={(e)=>handleColor(e)} style={{backgroundColor:`#${c.hex}`}} className='cart-color border-[1px] border-transparent my-2 w-5 h-5 rounded-full'></div>)}
          </div>
          <div className="cart-item-inner-details flex justify-between md:justify-start xl:gap-3  items-center flex-wrap xl:flex-nowrap">
          <button className='rounded-bl-[25px] w-[45%]  xl:w-fit rounded-tr-[25px] px-6 h-8 text-white font-bold'>{product?.price}{currency}</button>
          <div className="cart-quantity w-[45%] md:w-fit flex justify-center items-center text-white rounded-bl-[25px] rounded-tr-[25px] overflow-hidden">
            <div className='font-bold hover:opacity-50 cursor-pointer w-10 h-8 flex justify-center items-center text-md'>-</div>
            <div className='font-bold hover:opacity-50 cursor-pointer w-10 h-8 flex justify-center items-center text-md'>{quantity as number}</div>
            <div className='font-bold hover:opacity-50 cursor-pointer w-10 h-8 flex justify-center items-center text-md'>+</div>
          </div>
          {pathmane !== '/cart' && <button className='rounded-bl-[25px] mt-2 xl:mt-0 w-[100%] xl:w-fit hover:opacity-80 rounded-tr-[25px] px-6 h-8 text-white font-bold'>Add To Cart</button>}
        </div>
      </div>
      </div>
  )
}

export default Item
