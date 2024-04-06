import React from 'react'
import axios from 'axios'
const Details = () => {
  return (
    <div>
      
    </div>
  )
}

export default Details

// export async function getStaticProps({ params }:{ params:{ id:string }}){
//     try{
//       const res = await axios.get('http://localhost:3000/assets/products.json')
//       const products = await res.data
//       const product = products.find((p:any) => p.id.toString() === params?.id?.toString())
//       return {
//         props: { product }
//       }
//     }catch(err){
//       console.log(err)
//       return {
//         props:{}
//       }
//     }
//   };

// export async function getStaticPaths(){
//     try{
//         const res = await axios.get('http://localhost:3000/assets/products.json')
//         const products = await res.data
//         const paths = products.map(({ id }:{ id:number }) => ({ params:{ id:id.toString() }}))
//         return { paths ,fallback:false }
//     }
//     catch(err){
//         console.log(err)
//         return { paths:[] ,fallback:false }
//     }
// }
