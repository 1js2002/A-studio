import React from 'react'
import Image from "next/image";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
const Contact = () => {
  return (
    <footer className='w-full    h-[45%]'>
      <hr className='md:mx-32 md:my-10 mb-10 mx-5'></hr>
      <div className='mx-auto w-full flex flex-col md:flex-row  '>
        <div className='md:w-1/4 md:mx-32 mb-4 mx-4 '>
              <h2 class="pb-5  text-2xl font-semibold uppercase ">A+ Studio</h2>
              <p className='pb-2 pr-10 text-gray-600'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
          </div>  
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        
        <div>
            <h2 class="mb-6 text-xl font-semibold">What We Do</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Web Design</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">App Design</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Social Media Manage</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Market Analysis Project</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-xl font-semibold">Company</h2>
            <ul class="font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">About us</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Career</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Become Investor</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-xl font-semibold">Support</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">FAQ</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Business</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-xl font-semibold">Contact</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Whatspp</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Support 24</a>
                </li>
                
            </ul>
        </div>
      </div>
      </div> 
      <div className='flex w-full mx-10 md:mx-32 space-x-2 justify-center md:justify-start md:space-x-5'>
        <Image src={twitter} alt="twitter" className='cursor-pointer' />
        <Image src={linkedin} alt="linkedin"  className='cursor-pointer'/>
        <Image src={facebook} alt="facebook" className='cursor-pointer' />
      </div>
      <hr className='mx-10 my-4'></hr>
      <div className='flex justify-center text-center text-gray-500'>Copyright © 2023 Dinesh</div>
    </footer>
  )
}

export default Contact
