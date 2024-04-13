import React from 'react'
import Comment from './comment.component'

const Comments = () => {
  return (
    <div className='details-comments p-2 md:p-0'>
      <h2 className="font-bold text-5xl my-12">Comments</h2>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Comments
