import Footer from '@/app/components/global/footer.component'
import Nav from '@/app/components/global/nav.component'
import React from 'react'

const Layout:React.FC<{ children:React.ReactNode }> = ({children}) => {
  return (
    <div className='layout'>
        <Nav />
        {children}
        <Footer />
    </div>
  )
}

export default Layout