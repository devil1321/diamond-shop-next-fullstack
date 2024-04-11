import Footer from '@/app/components/global/footer.component'
import Nav from '@/app/components/global/nav.component'
import React from 'react'
import '@/app/normalize.css'
import '@/app/globals.css'

const Layout:React.FC<{ children:React.ReactNode }> = ({children}) => {
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