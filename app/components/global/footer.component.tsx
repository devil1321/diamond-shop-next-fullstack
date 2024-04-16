import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='footer mt-12 max-w-[100vw]'>
      <div className="footer-main px-12 border-y-[1px] border-gray-200 md:flex md:justify-between md:items-center">
        <div className="footer-col md:w-1/4">
          <Image src="/assets/footer-logo.png" alt='footer-logo' width={200} height={50} />
          <div className="footer-info-field my-2 flex items-start gap-3">
            <Image src="/assets/email-icon.png" alt='' width={20} height={20} />
            <span>s.dominik1321@gmail.com</span>
          </div>
          <div className="footer-info-field my-2 flex items-start gap-3">
            <Image src="/assets/phone-icon.png" alt='' width={20} height={20} />
            <span>222-222-222</span>
          </div>
          <div className="footer-info-field my-2 flex items-start gap-3">
            <Image src="/assets/address-icon.png" alt='' width={20} height={20} />
            <div>
              <p>Houston Road 34</p>
              <p>Seattle 200-40004</p>
            </div>
          </div>
        </div>
        <div className="footer-col mt-5 md:mt-0 md:w-1/4">
            <h3 className="text-2xl text-center">Contact With Us</h3>
            <form action="">
              <div className="footer-input p-2 bg-gray-200 rounded-md">
                <input type="text" placeholder='Enter Your Email Address'/>
              </div>
              <button className="block w-[100%] my-2 text-white rounded-md bg-gradient-figma-purple-green font-bold text-center  ">Send</button>
            </form>
        </div>
      </div>
      <div className="footer-foot text-center text-sm text-gray-500">Diamond &copy;Copyright 2024</div>
    </div>
  )
}

export default Footer
