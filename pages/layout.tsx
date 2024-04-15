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
import { usePathname, useRouter } from 'next/navigation'
import { State } from '@/app/controller/reducers/root.reducer'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import gsap from 'gsap'
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger'

const Layout:React.FC<{ children:React.ReactNode }> = ({children}) => {
  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)
  const { user } = useSelector((state:State) => state.api)
  const router = useRouter()
  const pathname = usePathname() 

  const handleInit = () =>{
    if(typeof window !== 'undefined'){
      const token = localStorage.getItem('jwt')
      if(pathname !== "/" && !token){
        router.push("/")
      }else if(pathname === '/' && token){
        router.push('/home')
      }
    }
  }

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    if(typeof window !== 'undefined'){
      const token = localStorage.getItem('jwt')
      if(token){
        APIActions.getUser()
        APIActions.setProducts()
      }
    }
  },[])

  useEffect(()=>{
    handleInit()
  },[user])



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