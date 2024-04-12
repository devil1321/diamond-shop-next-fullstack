'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

interface EventProps{
    img:string;
    maxInvinites:number;
    startDate:string;
}

const Event:React.FC<EventProps> = ({img,maxInvinites,startDate}) => {

    const [days,setDays] = useState<number>(0)
    const [hours,setHours] = useState<number>(0)
    const [minutes,setMinutes] = useState<number>(0)
    const [seconds,setSeconds] = useState<number>(0)
    const [invinites,setInvinites] = useState(0)


  function handleCountdown() {
  const now = new Date(); // Get the current date and time
  const start_date = new Date(startDate as string); // Convert the start date string to a Date object
  // @ts-ignore
  const timeDifference = start_date - now; // Calculate the time difference in milliseconds
  // Calculate the remaining days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  setDays(days)
  setHours(hours)
  setMinutes(minutes)
  setSeconds(seconds)
}


  const handleInvinites = () =>{
    let time = 0
    for(let i = 0; i < maxInvinites; i++){
        setTimeout(() => {
            setInvinites(i)
        }, time += 300);
    }
  }
  

  useEffect(()=>{
    setInterval(handleCountdown,1000)
    handleInvinites()
  },[])

  return (
    <div className='home-event lg:my-0 md:w-[48%] lg:w-[22%] relative top-0 left-0 my-[100px] md:my-0'>
      <div className="home-event-image z-20 relative top-0 left-0 rounded-[25px] overflow-hidden">
        <Image className='block mx-auto' src={img} alt='event-image' width={400} height={400} />
        <div className="hme-event-countdown absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3">
          <div className="bg-white/50 text-white w-[50px] h-[40px] rounded-md font-bold text-2xl flex justify-center items-center" >{days}</div>
          <div className="bg-white/50 text-white w-[50px] h-[40px] rounded-md font-bold text-2xl flex justify-center items-center" >{hours}</div>
          <div className="bg-white/50 text-white w-[50px] h-[40px] rounded-md font-bold text-2xl flex justify-center items-center" >{minutes}</div>
          <div className="bg-white/50 text-white w-[50px] h-[40px] rounded-md font-bold text-2xl flex justify-center items-center" >{seconds}</div>
        </div>
      </div>
      <div className="event-details-bg bg-white/50 z-10 rounded-[25px] w-[100%] h-[200px] absolute -bottom-[50px] left-0">
      </div>
        <div className="event-invinites absolute top-[135%] md:top-[125%] xl:top-[135%] left-1/2 -translate-x-1/2 z-20 px-10 py-5 -translate-y-[120px] bg-white/50 rounded-[25px] font-bold text-2xl text-center w-[40%] mx-auto">{invinites}</div>
    </div>
  )
}

export default Event
