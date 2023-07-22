import React from "react";
import Image from "next/image";

import google from "../assets/google.png";
import Uber from "../assets/Uber.png";
import Airbnb from "../assets/Airbnb.png";
import Amazon from "../assets/Amazon.png";
const ClientLogo = () => {
  return (
    <div className="md:h-40 h-3/6 w-full md:flex flex-row md:ml-32 ">
      <div className="md:w-1/4  flex flex-col">
        <h1 className="text-5xl font-semibold text-center md:text-left mb-4">
          Our Client
        </h1>
        <p className="text-gray-600 font-normal text-center md:text-left">
          Several selected clients, who already <br></br> believe in our
          service.
        </p>
      </div>
      <div className="flex md:flex-row md:justify-around md:space-x-20 flex-wrap my-6 mx-3 items-center justify-center ">
        <Image className="p-4 cursor-pointer" src={google} alt="google" />
        <Image className="p-4 cursor-pointer" src={Airbnb} alt="google" />
        <Image className="p-4 cursor-pointer" src={Uber} alt="google" />
        <Image className="p-4 cursor-pointer" src={Amazon} alt="google" />
      </div>
    </div>
  );
};

export default ClientLogo;
