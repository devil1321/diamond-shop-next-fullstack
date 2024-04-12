'use client'
import Footer from '@/app/components/global/footer.component'
import Nav from '@/app/components/global/nav.component'
import * as ApiActons from '@/app/controller/action-creators/api.action-creators'
import React, { useEffect } from 'react'
import { Suspense } from 'react'
import LoadingSpinner from '@/app/components/global/loading-spinner'
import '@/app/normalize.css'
import '@/app/globals.css'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'


const Layout:React.FC<{ children:React.ReactNode }> = ({children}) => {

  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActons,dispatch)


  useEffect(()=>{
    APIActions.setProducts()
  },[])


  return (
      <div className='layout'>
          <div className="container-fluid">
            <Nav />
            {children}
            <Footer />
          </div>
      </div>
  )
}

export default Layout