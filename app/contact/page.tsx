import React from 'react'
import { ContactComponents } from '../components/contact'
import { GlobalComponents } from '../components/global'

const Contact = () => {
  return (
    <div className='container-fluid'>
      <ContactComponents.Hero />
      <div className="container">
        <GlobalComponents.Title className='green-purple' title='Contact With Us' start='-=350px' end='-=350px' />
        <ContactComponents.Form />
      </div>
    </div>
  )
}

export default Contact
