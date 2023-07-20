import React from "react";
import image8 from "../assets/image8.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative w-full flex md:flex-row flex-col py-6">
      <div className="md:w-1/2 md:ml-[140px] md:mt-36">
        <h1 className="text-center text-4xl font-semibold md:text-left md:flex justify-start my-3 ">A Digital Product Agency</h1>
        <p className="text-center text-gray-600 md:text-left  md:flex justify-start my-3">Leading digital agency with solid design and development <br />expertise. We build readymade websites, mobile applications,<br /> and elaborate online business services.</p>
       
          <div className="flex items-center justify-center md:justify-start  md:my-4"><button className="bg-blue-600 w-52 h-20 rounded-[60px] my-6 ">Contact Now</button></div>
        
      </div>
      <div className="md:w-1/2 md:flex-shrink-0">
        <Image src={image8} alt="img" />
      </div>
      <div className="hidden lg:block absolute z-[-10] right-[45.5%] flex-shrink-0 md:flex-shrink">
        <svg className="w-129 md:w-129 md:h-129" width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64.5" cy="64.5" r="64.5" fill="#DAE9FF" />
        </svg>
      </div>
      <div className="hidden lg:block absolute z-[-10] -bottom-16 right-32 flex-shrink-0 md:flex-shrink">
        <svg width="178" height="178" viewBox="0 0 178 178" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H178V78C178 133.228 133.228 178 78 178H0V0Z" fill="#FFF5DB"/>
        </svg>

      </div>
      <div className="hidden absolute bottom-4 -z-10 md:flex mx-20">
        <svg className="mr-4"xmlns="http://www.w3.org/2000/svg" width="196" height="154" viewBox="0 0 196 154" fill="none">
          <circle cx="3.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="196" height="154" viewBox="0 0 196 154" fill="none">
          <circle cx="3.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="3.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="24.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="45.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="66.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="87.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="108.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="129.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="150.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="171.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="3.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="24.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="45.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="66.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="87.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="108.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="129.5" r="3.5" fill="#F4F4F4"/>
          <circle cx="192.5" cy="150.5" r="3.5" fill="#F4F4F4"/>
        </svg>
      </div>
      
    </div>
  );
};

export default Home;
