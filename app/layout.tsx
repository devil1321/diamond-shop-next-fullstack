'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./normalize.css";
import Nav from "./components/global/nav.component";
import Footer from "./components/global/footer.component";
import React, { useEffect } from "react";
import store from "@/app/controller/store";
import { Provider, useSelector } from "react-redux";
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Suspense } from "react";
import LoadingSpinner from "./components/global/loading-spinner";
import { State } from "./controller/reducers/root.reducer";
import { usePathname, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <WithRedux>
              <Nav />
              {children}
              <Footer />
          </WithRedux>
        </Provider>
      </body>
    </html>
  );
}


const WithRedux:React.FC<{ children:React.ReactNode }> = ({children}) =>{

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

  return(
      <div className="main">{children}</div>
  )
}