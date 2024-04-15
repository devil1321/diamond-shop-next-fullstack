'use client'
import React from 'react'
import axios from 'axios'
import Layout from '../layout'
import useQuantity from '@/app/hooks/useQuantity'
import useProduct from '@/app/hooks/useProduct'
import { DetailsComponents } from '@/app/components/details'
import { useSelector } from 'react-redux'
import { State } from '@/app/controller/reducers/root.reducer'
import products from '@/public/assets/db/products.json'

const Details:React.FC<{id:number}> = ({id}) => {
  
  const [quantity,setQuantity] = useQuantity(id)
  const [product,setProduct] = useProduct(id)
  const { currency } = useSelector((state:State) => state.ui) 

  return (
    <Layout>
      <div className="container details">
        <div className="details-hero md:flex md:justify-between md:items-center">
          <DetailsComponents.Img product={product} />
          <DetailsComponents.Details 
            product={product} 
            quantity={quantity as number} 
            currency={currency}
          />
        </div>
        <DetailsComponents.CommentsComponents.Comments />
      </div>
    </Layout>
  )
}

export default Details

export async function getStaticProps({ params }:{ params:{ id:string }}){
    try{
      const product = products.find((p:any) => p.id.toString() === params?.id?.toString())
      if(product){
        return {
          props: { id:product.id }
        }
      }else{
        throw('product not loaded')
      }
    }catch(err){
      console.log(err)
      return {
        props:{}
      }
    }
  };

export async function getStaticPaths(){
    try{
        const paths = products.map(({ id }:{ id:number }) => ({ params:{ id:id.toString() }}))
        return { paths ,fallback:false }
    }
    catch(err){
        console.log(err)
        return { paths:[] ,fallback:false }
    }
}
