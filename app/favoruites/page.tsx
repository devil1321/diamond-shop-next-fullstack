'use client'
import React, { useEffect } from 'react'
import { FavoruitesComponents } from '../components/favoruites'
import { CartComponents } from '../components/cart'
import { GlobalComponents } from '../components/global'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import gsap from 'gsap'

const Favoruites = () => {

  const { products } = useSelector((state:State) => state.api)

  useEffect(()=>{
    gsap.fromTo('.cart-item',{opacity:0,y:100},{opacity:1,y:0,stagger:0.2,duration:1})
  },[products.length])

  return (
    <div className="container-fluid favoruites">
      <FavoruitesComponents.Hero />
      <div className="container">
        <GlobalComponents.Title title='Favoruites' className='green-purple' start='-=350px' end='-=350px' />
      </div>
      <div className="container md:flex md:justify-between md:items-start md:gap-3">
        <FavoruitesComponents.Form />
        <div className="favoruites-items md:w-2/3">
          {products.map((p:any) => <CartComponents.Item key={`favoruites-item-${p.id}`} id={p.id} color={p.colors[0]} />)}
        </div>
      </div>
    </div>
  )
}

export default Favoruites
