import Footer from '@/app/components/global/footer.component'
import Nav from '@/app/components/global/nav.component'
import React from 'react'
import '@/app/normalize.css'
import '@/app/globals.css'

const Layout:React.FC<{ children:React.ReactNode }> = ({children}) => {
  return (
    <div className='layout'>
        <Nav />
        <div className="container-fluid">
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout