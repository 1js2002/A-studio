import React from 'react'
import Image from "next/image";
import vid from "../assets/vid.png"
import play from "../assets/play.png"
import eclipse from "../assets/eclipse.png"

const Service = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row items-center justify-center relative '>
      <div className='w-full py-3 md:pr-5 flex justify-center items-center relative  ' >
        <Image className='rounded-[40px]  transition duration-300 ease-in-out ' src={vid} alt="vid" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
          <Image src={play} className='cursor-pointer' alt="play" />
        </div>
        <div className='absolute -z-10 right-20 bottom-4'>
          <Image src={eclipse} alt='ecp' />
        </div>
      </div>
      <div className='relative w-full flex-col text-center  flex md:justify-center md:items-start mx-auto '>
        <h1 className="text-4xl font-semibold font-averta py-7 md:text-left">Great Digital Product<br></br> Agency since 2016 </h1>
        <p className='text-gray-600 md:text-left md:mr-36'>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
        <div className='absolute md:block hidden -top-4 -z-10 -left-16  '>
          <svg width="178" height="178" viewBox="0 0 178 178" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H178V78C178 133.228 133.228 178 78 178H0V0Z" fill="#EFF1FF" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Service
