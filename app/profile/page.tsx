'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import * as Interfaces from '../controller/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../controller/reducers/root.reducer'
import Image from 'next/image'
import * as ApiActions from '@/app/controller/action-creators/api.action-creators'
import { bindActionCreators } from 'redux'

const Profile = () => {
  const [profile,setProfile] = useState<any>({})
  const [file,setFile] = useState<any>({})
  const { user,data,image } = useSelector((state:State) => state.api)
  const dispatch = useDispatch()
  const APIActions = bindActionCreators(ApiActions,dispatch)

  const msgRef = useRef() as  MutableRefObject<HTMLDivElement>

  const handleMessage = () =>{
    if(msgRef.current){
      msgRef.current.style.display = 'block'
      setTimeout(() => {
        msgRef.current.style.display = 'none'
      }, 5000);
    }
  }
    
  function fileToBlob(file:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const blob = new Blob([reader.result as any], { type: file.type });
        resolve(blob);
      };
      reader.onerror = reject;
      const blob = new Blob([file])
      reader.readAsArrayBuffer(blob);
    });
  }

  const handleFile = async() =>{
    const reader = new FileReader();
    const currentFile = await fileToBlob(file)
    reader.readAsDataURL(currentFile as any);
    reader.onloadend = async function() {
      const base64Data = reader.result?.toString().split(',')[1]; 
      setProfile((prevState:any) => ({
        ...prevState,
        image:base64Data
      }))
    }
  }

  const handleChangeFile = (e:any)=>{
    setFile(e.target.files[0])
  }
  
  const handleInit = () =>{
    let tmpProfile:Interfaces.User = {} as Interfaces.User
    if(user){
      for(let key in user){
        // @ts-ignore
        tmpProfile[key as keyof Interfaces.User] = user[key as keyof Interfaces.User] 
      }
      tmpProfile.password = ''
      setProfile(tmpProfile)
    }
  }

  const handleChange = (e:any) =>{
    setProfile((prevState:any)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = (e:any) =>{
    e.preventDefault()
    APIActions.updateProfile(profile)
  }

  useEffect(()=>{
    handleMessage()
  },[data?.msg])

  useEffect(()=>{
    handleInit()
  },[user])

  useEffect(()=>{
    handleFile()
  },[file])

  return (
    <div className="profile md:flex md:justify-between md:items-center">
          <form method="POST" className='flex flex-wrap justify-between md:w-2/3' action="" onSubmit={(e)=>handleSubmit(e)} encType='multipart/form-data'>
            {data?.msg && <div ref={msgRef} className={`w-[100%] px-5 py-2 my-2 bg-red-300 text-red-700 rounded-md`}>{data.msg}</div>}
            <div className="profile-field w-[100%] md:w-[49%] ">
              <label className="text-green-500 italic" htmlFor="">Nickname:</label>
              <input className="block w-[100%] rounded-md bg-white border-[1px] border-gray-300 p-2"type="text" name="nickname" onChange={(e)=>handleChange(e)} value={profile.nickname}/>
            </div>
            <div className="profile-field w-[100%] md:w-[49%] ">
              <label className="text-green-500 italic" htmlFor="">Email:</label>
              <input className="block w-[100%] rounded-md bg-white border-[1px] border-gray-300 p-2"type="email" name="email" onChange={(e)=>handleChange(e)}  value={profile.email}/>
            </div>
            <div className="profile-field w-[100%]">
              <label className="text-green-500 italic" htmlFor="">Password:</label>
              <input className="block w-[100%] rounded-md bg-white border-[1px] border-gray-300 p-2"type="password" name="password" onChange={(e)=>handleChange(e)} value={profile.password} required/>
            </div>
            <div className="profile-field w-[100%] md:w-[49%] ">
              <label className="text-green-500 italic" htmlFor="">First Name:</label>
              <input className="block w-[100%] rounded-md bg-white border-[1px] border-gray-300 p-2"type="text" name="first_name" onChange={(e)=>handleChange(e)} value={profile.first_name}/>
            </div>
            <div className="profile-field w-[100%] md:w-[49%] ">
              <label className="text-green-500 italic" htmlFor="">Last Name:</label>
              <input className="block w-[100%] rounded-md bg-white border-[1px] border-gray-300 p-2"type="text" name='last_name' onChange={(e)=>handleChange(e)} value={profile.last_name}/>
            </div>
            <div className="profile-field w-[100%] md:w-[49%] ">
              <label className="text-green-500 italic" htmlFor="">City:</label>
              <input className="block w-[100%] rounded-md bg-white border-[1px] border-gray-300 p-2"type="text" name="city" onChange={(e)=>handleChange(e)} value={profile.city} />
            </div>
            <div className="profile-field w-[100%] md:w-[49%] ">
              <label className="text-green-500 italic" htmlFor="">Zip:</label>
              <input className="block w-[100%] rounded-md bg-white border-[1px] border-gray-300 p-2"type="text" name="zip" onChange={(e)=>handleChange(e)} value={profile.zip}/>
            </div>
            <div className="profile-field w-[100%]">
              <label className="text-green-500 italic" htmlFor="">Phone:</label>
              <input className="block w-[100%] rounded-md bg-white border-[1px] border-gray-300 p-2"type="text" name="phone" onChange={(e)=>handleChange(e)} value={profile.phone}/>
            </div>
            <div className='profile-field w-[100%]'>
              <label className='text-green-500 italic' htmlFor="">Image:</label>
              <input className="block w-[100%] rounded-md bg-white border-[1px] border-gray-300 p-2" type="file" name="image" onChange={(e)=>handleChangeFile(e)} />
            </div>
            <button type="submit" className='w-[100%] font-bold text-white rounded-md block my-2 p-2 bg-green-300 hover:bg-green-500'>Save</button>
          </form>
          <Image className='ml-5' src={image} alt="profile-image" width={600} height={700} />
    </div>
  )
}

export default Profile