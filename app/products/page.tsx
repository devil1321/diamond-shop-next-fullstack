'use client'
import React from 'react'
import { GlobalComponents } from '../components/global'
import { useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import { ProductsComponents } from '../components/products'

const Products = () => {

  const { products } = useSelector((state:State) => state.api)

  return (
    <div className="container-fluid products">
      <GlobalComponents.CarouselComponents.Carousel />
      <div className="container">
        <ProductsComponents.Form />
        <GlobalComponents.Title title="Products" className="purple-green" start="-=350px" end="-=350px" />
        <div className="home-product md:flex md:justify-between md:items-start md:flex-wrap">
          {products.map((p)=> <GlobalComponents.Product product={p} />)}
        </div>
      </div>
      <div className="container-fluid">
        <GlobalComponents.Banner img="/assets/discover-banner.png" text='Discover Our Latest Collection'/>
      </div>
    </div>
  )
}

export default Products
