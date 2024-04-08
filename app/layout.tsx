'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./normalize.css";
import Nav from "./components/global/nav.component";
import Footer from "./components/global/footer.component";
import React from "react";
import store from "./controller/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <WithRedux>
            <Nav />
            <div className="container-fluid">
              {children}
            </div>
            <Footer />
          </WithRedux>
      </body>
    </html>
  );
}


const WithRedux:React.FC<{ children:React.ReactNode }> = ({children}) =>{
  return(
    <Provider store={store}>
      <div className="main">{children}</div>
    </Provider>
  )
}