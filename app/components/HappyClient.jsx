import React from "react";
import Image from "next/image";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";
import client8 from "../assets/client8.png";

import client9 from "../assets/client9.png";

import EllipseWhite from "../assets/EllipseWhite.png";
import Ellipsedot from "../assets/Ellipsedot.png";

const HappyClient = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div>
        {/* heading */}
        <h1 className="text-5xl font-semibold text-center py-5">
          What our happy clients say
        </h1>
        <p className="text-gray-600 text-center">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className="md:flex md:flex-row md:mt-16">
        <div className="relative md:w-1/3 flex items-center justify-start md:ml-16">
          <div className="absolute -z-10 left-8 bottom-16 ">
            {" "}
            {/*circle */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <circle
                cx="60"
                cy="60"
                r="55.6"
                stroke="#FF007A"
                stroke-width="8.8"
              />
            </svg>
            <div className="absolute xl:block hidden -top-80 left-60">
              <svg width="196" height="154" viewBox="0 0 196 154" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <Image src={client1} alt="client1" />

        </div>
        <div className="flex flex-col md:w-1/3 md:mt-20">
          <div className="flex flex-row space-x-7 justify-center md:order-3 md:items-start md:justify-start py-6">
            <Image src={Ellipsedot} className="cursor-pointer" alt="dot" />
            <Image src={EllipseWhite} className="cursor-pointer" alt="dot" />
            <Image src={EllipseWhite} className="cursor-pointer" alt="dot" />
            <Image src={EllipseWhite} className="cursor-pointer" alt="dot" />
            <Image src={EllipseWhite} className="cursor-pointer" alt="dot" /> 
          </div>
          <h1 className="text-2xl font-semibold text-center py-2 md:order-1 md:text-left md:py-6">
            Matthew Paul
          </h1>
          <p className="text-fray-600 text-center md:order-2 md:text-left text-gray-600">
            Perfect, very good job! Thank you for the amazing design and work.
            Really impressed with the high quality and quick turnaround time.
            Highly recommend.
          </p>
        </div>
        <div className="">
          <div className="relative md:block hidden mt-20 ml-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="184"
              height="184"
              viewBox="0 0 184 184"
              fill="none"
            >
              <circle cx="92" cy="92" r="92" fill="#FFF5DB" />
            </svg>
            <div className="absolute z-10 -top-10 -left-10 ">
              <Image src={client2} alt="c2" />
            </div>
            <div className="absolute z-10 -top-28 left-24">
              <Image src={client3} alt="c3" />
            </div>
            <div className="absolute z-10 -top-10 -right-20 ">
              <Image src={client4} alt="c4" />
            </div>
            <div className="absolute z-10 top-16 -right-28">
              <Image src={client5} alt="c5" />
            </div>
            <div className="absolute z-10 top-40 -right-20 ">
              <Image src={client6} alt="c6" />
            </div>
            <div className="absolute z-10 -bottom-16">
              <Image src={client7} alt="c7" />
            </div>
            <div className="absolute z-10 top-20 -left-10">
              <Image src={client8} alt="c8" />
            </div>
            <div className="absolute z-10 top-4 -right-7">
              <Image src={client9} alt="c9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
