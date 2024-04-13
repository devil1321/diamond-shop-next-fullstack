import React from 'react'
import { BlogComponents } from '../components/blog'
import { GlobalComponents } from '../components/global'

const Blog = () => {
  return (
    <div className='container-fluid'>
      <BlogComponents.Hero />
      <div className="container">
        <GlobalComponents.Title className='green-purple' title='World of Fashion' start='-=350px' end='-=350px' />
        <BlogComponents.Article />
      </div>
    </div>
  )
}

export default Blog
