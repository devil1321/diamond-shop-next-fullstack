import React from 'react'
import Image from 'next/image'

const Form = () => {
  return (
    <div className='contact-form relative md:bg-neutral-900 xl:bg-transparent rounded-[25px] top-0 left-0'>
      <form className="block w-5/6 mx-auto rounded-[25px]" action="">
        <Image className='absolute top-0 xl:top-5 left-1/2 -translate-x-1/2' src="/assets/contact-form.png" alt='form-image' width={1200} height={800} />
        <div className="contact-fields py-14 relative z-20 top-0 left-0 md:h-[800px] w-[100%]">
            <label htmlFor="" className='block font-bold text-white'>Name:</label>
            <div className="contact-field p-2 md:p-5 rounded-md my-5 bg-neutral-600/50">
                <input type="text" />
            </div>
            <label htmlFor="" className='block font-bold text-white'>Email:</label>
            <div className="contact-field p-2 md:p-5 rounded-md my-5 bg-neutral-600/50">
                <input type="email" />
            </div>
            <label htmlFor="" className='block font-bold text-white'>Message:</label>
            <div className="contact-field p-2 md:p-5 rounded-md my-5 bg-neutral-600/50">
                <textarea className='w-[100%] md:h-[100px] lg:h-[350px]' />
            </div>
        </div>
      </form>
    </div>
  )
}

export default Form
