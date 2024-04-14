'use client'
import React from 'react'
import { CartComponents } from '../components/cart'
import { GlobalComponents } from '../components/global'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'

const Cart = () => {

  const { cart } = useSelector((state:State) => state.shop)

  return (
    <div className='container-fluid cart'>
      <CartComponents.Hero />
      <div className="container">
        <GlobalComponents.Title title='Your Cart' className='purple-green' start='-=350px' end='-=350px' />
      </div>
      <div className="container md:flex md:justify-between md:items-start md:gap-3">
        <div className="cart-items md:w-2/3">
          {cart.map((i:any) => <CartComponents.Item key={`cart-item-${i.id}`} id={i.id} />)}
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
