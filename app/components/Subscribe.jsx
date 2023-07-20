import React from 'react'

const Subscribe = () => {
  return (
    <div className='min-h-screen'>
        <div className='flex flex-col items-center justify-center my-10 '>
            <h1 className='text-4xl font-semibold text-center py-5'>Subscribe Newsletter</h1>
            <p className='text-gray-600 text-center'>I will update good news and promotion service not spam</p>
        </div>
        <form>
            <div className="border border-gray-200 shadow-md rounded-3xl outline-none caret-var(--main-clr) p-25 w-full  text-sm mr-25 ml-25 ">
                <input type="email"  className='' name="email" id="email" placeholder="Enter your email address.." />
                <button className='bg-blue-600 w-52 h-16 rounded-[60px] my-6 text-white font-medium' type="submit">Contact Now</button>
            </div>
        </form>
    </div>
  )
}

export default Subscribe
