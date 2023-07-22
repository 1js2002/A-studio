import React from "react";
import BusinessCard from "../components/BusinessCard";
import FinancialCard from "../components/FinancialCard";
import MarketCard from "../components/MarketCard";
import DevelopmentCard from "../components/DevelopmentCard";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="h-full flex relative flex-col md:flex-row max-w-full md:ml-7 ">
      {/* text */}
      <div className="md:w-[40%] md:ml-24 md:flex flex-col md:justify-center">
        <h1 className="text-4xl font-semibold text-center md:text-left p-2 md:py-5 ">
          How can we help your <br /> Business ?
        </h1>
        <p className="text-gray-600 font-normal text-center md:text-left p-2 md:py-5">
          We build readymade websites, mobile applications,
          <br /> and elaborate online business services.
        </p>
        <div className="hidden md:block absolute top-96 left-12 -z-10">
          <svg
            width="178"
            height="178"
            viewBox="0 0 178 178"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M178 178L0 178L6.81898e-06 100C1.16472e-05 44.7715 44.7715 -1.16472e-05 100 -6.81898e-06L178 0L178 178Z"
              fill="#FFF5DB"
            />
          </svg>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-wrap justify-center items-center relative">
        <div className="py-3 px-3 w-full md:w-1/2 flex justify-center items-center md:mt-20 md:order-1 md:flex md:justify-end">
          <BusinessCard />
        </div>
        <div className="py-3 px-3 w-full md:w-1/2  flex justify-center items-center md:order-2 md:-mt-24 md:flex md:justify-start">
          <FinancialCard />
        </div>
        <div className="py-3 px-3 w-full md:w-1/2  flex justify-center items-center md:mb-36 md:order-3 md:flex md:justify-end">
          <MarketCard />
        </div>
        <div className="py-3 px-3 w-full md:w-1/2   flex justify-center items-center  md:-mt-80 md:order-4 md:flex md:justify-start">
          <DevelopmentCard />
        </div>
        <div className="hidden md:block absolute -z-10 right-0 bottom-52">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60"
              cy="60"
              r="55.6"
              stroke="#FF007A"
              stroke-width="8.8"
            />
          </svg>
        </div>
      </div>

      <div className="hidden md:block absolute right-0 top-40 flex-shrink-1 -z-10">
        <svg
          width="1047"
          height="619"
          viewBox="0 0 1047 619"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 150C0 67.1573 67.1573 0 150 0H1047V619H0V150Z"
            fill="#F4F9FF"
          />
        </svg>
      </div>
    </div>
  );
};

export default WhatWeDo;
