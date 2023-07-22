import React from "react";

const BusinessCard = () => {
  return (
    <div className="flex flex-col text-center h-[400px] w-[325px] rounded-[40px] hover:shadow-xl transition duration-300 ease-in-out  border border-gray-300 bg-white shadow-md items-center  ">
      <div className="bg-[#FFF7E3] w-32 h-32 mt-12 rounded-3xl flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
        >
          <path
            d="M54.6984 70.1458H19.3017C11.6242 70.1458 5.39587 63.9175 5.39587 56.24V35.4891C5.39587 27.8117 11.6242 21.5833 19.3017 21.5833H54.6984C62.3759 21.5833 68.6042 27.8117 68.6042 35.4891V39.9291C68.6042 41.1933 67.5559 42.2416 66.2917 42.2416H60.0634C58.9842 42.2416 57.9975 42.6425 57.2884 43.3825L57.2575 43.4133C56.3942 44.2458 55.9934 45.3866 56.0859 46.5583C56.2709 48.5933 58.2134 50.2275 60.4334 50.2275H66.2917C67.5559 50.2275 68.6042 51.2758 68.6042 52.54V56.2091C68.6042 63.9175 62.3759 70.1458 54.6984 70.1458ZM19.3017 26.2083C14.1834 26.2083 10.0209 30.3708 10.0209 35.4891V56.24C10.0209 61.3583 14.1834 65.5208 19.3017 65.5208H54.6984C59.8167 65.5208 63.9792 61.3583 63.9792 56.24V54.8833H60.4334C55.7775 54.8833 51.8309 51.43 51.4609 46.99C51.2142 44.4616 52.1392 41.9641 53.9892 40.145C55.5925 38.5108 57.7509 37.6166 60.0634 37.6166H63.9792V35.4891C63.9792 30.3708 59.8167 26.2083 54.6984 26.2083H19.3017Z"
            fill="#FF9900"
          />
          <path
            d="M7.70837 40.5767C6.44421 40.5767 5.39587 39.5284 5.39587 38.2642V24.1735C5.39587 19.5794 8.29421 15.4167 12.58 13.7825L37.0617 4.53255C39.59 3.57671 42.3959 3.916 44.585 5.45767C46.805 6.99934 48.1 9.49684 48.1 12.1793V23.8959C48.1 25.1601 47.0517 26.2084 45.7875 26.2084C44.5234 26.2084 43.475 25.1601 43.475 23.8959V12.1793C43.475 11.0077 42.92 9.92844 41.9334 9.25011C40.9467 8.57177 39.775 8.41761 38.665 8.84927L14.1834 18.0993C11.6859 19.0551 9.99004 21.491 9.99004 24.1735V38.2642C10.0209 39.5592 8.97254 40.5767 7.70837 40.5767Z"
            fill="#FF9900"
          />
          <path
            d="M60.4348 54.884C55.779 54.884 51.8323 51.4306 51.4623 46.9906C51.2157 44.4315 52.1407 41.934 53.9907 40.1148C55.5632 38.5115 57.7215 37.6173 60.034 37.6173H66.4473C69.4998 37.7098 71.8432 40.1148 71.8432 43.0748V49.4265C71.8432 52.3865 69.4998 54.7915 66.5398 54.884H60.4348ZM66.3857 42.2423H60.0648C58.9857 42.2423 57.999 42.6431 57.2898 43.3831C56.3957 44.2465 55.964 45.4181 56.0873 46.5898C56.2723 48.6248 58.2148 50.259 60.4348 50.259H66.4782C66.879 50.259 67.249 49.889 67.249 49.4265V43.0748C67.249 42.6123 66.879 42.2731 66.3857 42.2423Z"
            fill="#FF9900"
          />
          <path
            d="M43.1667 39.3125H21.5834C20.3192 39.3125 19.2709 38.2642 19.2709 37C19.2709 35.7358 20.3192 34.6875 21.5834 34.6875H43.1667C44.4309 34.6875 45.4792 35.7358 45.4792 37C45.4792 38.2642 44.4309 39.3125 43.1667 39.3125Z"
            fill="#FF9900"
          />
        </svg>
      </div>
      <h1 className="text-black mt-10 font-averta-demo-pe-cutted-demo text-2xl font-bold leading-normal">
        Financial <br></br>Planning System
      </h1>
      <p className=" text-gray-600 mt-6 font-Averta-Demo-PE-Cutted-Demo text-base">
        Protocols apart from aengage <br></br>models, pricing billing
      </p>
    </div>
  );
};

export default BusinessCard;
