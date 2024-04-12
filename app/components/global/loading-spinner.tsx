'use client'
import React, { useEffect, useState } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'

const LoadingSpinner = () => {
  
  const [loading,setLoading] = useState<boolean>(true)

  useEffect(()=>{
    setTimeout(() => {
        setLoading(false)
    }, 2000);
  },[])

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <PacmanLoader color="yellow" aria-label='Loading Spinner' data-testid ="loader"  size={150} loading={loading} /> 
    </div>
  )
}
 
export default LoadingSpinner
