import React from 'react'

const BusinessCard = () => {
  return (
    <div className='flex flex-col text-center h-[400px] w-[325px] rounded-[40px] border border-gray-300 bg-white  hover:shadow-xl transition duration-300 ease-in-out shadow-md items-center  '>
      <div className='bg-[#FFF2F8] w-32 h-32 mt-12 rounded-3xl flex items-center justify-center' >
      <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
        <path d="M27.7529 54.7289C27.4138 54.7289 27.0438 54.6364 26.7354 54.4822C24.3613 53.2797 22.3263 51.4914 20.8463 49.2714C19.6129 47.4214 19.6129 45.0472 20.8463 43.1972C22.3263 40.9772 24.3613 39.1889 26.7354 38.0172C27.8763 37.4314 29.2638 37.9247 29.8496 39.0655C30.4354 40.2064 29.9729 41.5939 28.8013 42.1797C27.1363 43.0122 25.7179 44.2764 24.7004 45.818C24.5154 46.0955 24.5154 46.4655 24.7004 46.7739C25.7179 48.3155 27.1363 49.5797 28.8013 50.4122C29.9421 50.998 30.4046 52.3855 29.8496 53.5264C29.4179 54.2664 28.5854 54.7289 27.7529 54.7289Z" fill="#FF007A"/>
        <path d="M46.895 54.7288C46.0317 54.7288 45.23 54.2663 44.8292 53.4647C44.2433 52.3238 44.7058 50.9363 45.8775 50.3505C47.5425 49.518 48.9608 48.2538 49.9783 46.7122C50.1633 46.4347 50.1633 46.0647 49.9783 45.7563C48.9608 44.2147 47.5425 42.9505 45.8775 42.118C44.7367 41.5322 44.2742 40.1447 44.8292 39.0038C45.415 37.863 46.8025 37.4005 47.9433 37.9555C50.3175 39.158 52.3525 40.9463 53.8325 43.1663C55.0658 45.0163 55.0658 47.3905 53.8325 49.2405C52.3525 51.4605 50.3175 53.2488 47.9433 54.4205C47.5733 54.6363 47.2342 54.7288 46.895 54.7288Z" fill="#FF007A"/>
        <path d="M46.25 70.1458H27.75C11.0075 70.1458 3.85413 62.9925 3.85413 46.25V27.75C3.85413 11.0075 11.0075 3.85416 27.75 3.85416H46.25C62.9925 3.85416 70.1458 11.0075 70.1458 27.75V46.25C70.1458 62.9925 62.9925 70.1458 46.25 70.1458ZM27.75 8.47916C13.5358 8.47916 8.47913 13.5358 8.47913 27.75V46.25C8.47913 60.4642 13.5358 65.5208 27.75 65.5208H46.25C60.4641 65.5208 65.5208 60.4642 65.5208 46.25V27.75C65.5208 13.5358 60.4641 8.47916 46.25 8.47916H27.75Z" fill="#FF007A"/>
        <path d="M6.87732 27.01C5.61315 27.01 4.56482 25.9617 4.56482 24.6975C4.56482 23.4333 5.58232 22.385 6.87732 22.385L66.1391 22.3542C67.4032 22.3542 68.4516 23.4025 68.4516 24.6667C68.4516 25.9308 67.4341 26.9792 66.1391 26.9792L6.87732 27.01Z" fill="#FF007A"/>
      </svg>
      </div>
        <h1 className='text-black mt-10 font-averta-demo-pe-cutted-demo text-2xl font-bold leading-normal'>Development <br></br> Website and App</h1>
        <p className=' text-gray-600 mt-6 font-Averta-Demo-PE-Cutted-Demo text-base'>Communication protocols apart <br></br>from engagement models</p>
    </div>
  )
}

export default BusinessCard;