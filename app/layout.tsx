'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./normalize.css";
import Nav from "./components/global/nav.component";
import Footer from "./components/global/footer.component";
import React, { useEffect } from "react";
import store from "@/app/controller/store";
import { Provider } from "react-redux";
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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

  useEffect(()=>{
    APIActions.setProducts()
    gsap.registerPlugin(ScrollTrigger)
  },[])

  return(
      <div className="main">{children}</div>
  )
}