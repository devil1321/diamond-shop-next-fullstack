'use client'
import React,{ useEffect } from 'react'
import { CartComponents } from '../components/cart'
import { GlobalComponents } from '../components/global'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import gsap from 'gsap'

const Cart = () => {

  const { cart } = useSelector((state:State) => state.shop)

  useEffect(()=>{
    gsap.fromTo('.cart-item',{opacity:0,y:100},{opacity:1,y:0,stagger:0.2,duration:1})
  },[cart.length])

  return (
    <div className='container-fluid cart'>
      <CartComponents.Hero />
      <div className="container">
        <GlobalComponents.Title title='Your Cart' className='purple-green' start='-=350px' end='-=350px' />
      </div>
      <div className="container md:flex md:justify-between md:items-start md:gap-3">
        <div className="cart-items md:w-2/3">
          {cart.map((i:any) => <CartComponents.Item key={`cart-item-${i.id}`} id={i.id} color={i.color} />)}
        </div>
        <div className="cart-summary-and-ads md:w-1/3">
          <CartComponents.Summary />
          <CartComponents.Ads />
        </div>
      </div>
    </div>
  )
}

export default Cart
