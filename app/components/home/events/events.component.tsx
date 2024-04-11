import React from 'react'
import Image from 'next/image'
import Event from './event.component'

const Events = () => {
  return (
    <div className='home-events relative z-10 top-0 left-0'>
      <div className="overlay w-[100%] h-[100%] absolute z-10 top-0 left-0 opacity-50 bg-figma-brown"></div>
      <Image src="/assets/events-banner.png" alt='banner' width={1920} height={400} />
      <div className="home-events-items w-[100%] h-[100%] z-20  md:flex md:justify-center md:items-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]">
        <Event img="/assets/events-1.png" maxInvinites={231} startDate="2024-04-15T12:00:00" />
        <Event img="/assets/events-2.png" maxInvinites={129} startDate="2024-08-12T12:00:00" />
        <Event img="/assets/events-3.png" maxInvinites={461} startDate="2024-05-17T12:00:00" />
        <Event img="/assets/events-4.png" maxInvinites={234} startDate="2024-12-25T12:00:00" />
      </div>
    </div>
  )
}

export default Events
