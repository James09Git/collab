import React from 'react'
import Pic from "../odinaka/asset/pic.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-[#F0FFFF] w-full  h-[100vh] px-10'>
      <header className='flex justify-between items-center max-w-[1500px] px-20 py-10 h-[50px] m-auto max-sm:px-0'>
        <div className='text-[#356DA6] text-[20px] font-bold max-sm:text-[18px]'>KidsCare</div>
        <div className='text-[15px] flex gap-4 max-xl:hidden'>
            <a>Home</a>
            <a>About</a>
            <a>Locations</a>
            <a>OurDoctors</a>
            <a>Contact us</a> 
        </div>
        <div className='flex gap-3'>
            <button className='text-[15px] font-[500]'>Log in</button>
            <button className='text-[15px] font-[500] text-[#356DA6] border border-[#356DA6] rounded-full px-3 py-2'>Sign up</button>
        </div>
      </header>
      <main className='flex w-[100%] max-w-[1500px] gap-5 bg-[#356DA6] m-auto rounded-[20px] pl-20 h-[80vh] max-xl:px-8'>
        <div className='w-50% flex flex-col justify-center max-xl:items-center max-xl:w-[100%]'>
            <p className='text-[50px] text-white font-[600] max-w-[600px] max-xl:max-w-full max-xl:text-balance max-xl:text-center  max-sm:text-[30px]'>Ensuring Quality Healthcare For Every Children</p>
            <p className='text-[#d7d7d7] text-[15px] max-w-[500px] max-xl:max-w-full max-xl:text-balance max-xl:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quos asperiores eligendi aut aperiam.</p>
            <div className='flex bg-white max-w-[800px] mt-10 rounded-lg justify-between items-center p-5 max-xl:w-full max-sm:flex-col'>
              <div className='flex justify-between items-center gap-3 max-sm:mb-2'>
              <div className='flex flex-col'>
                <p className='text-[15px] font-[500] mb-1'>Location <span className='text-[8px] font-[600]'> V </span></p>
                <p className='text-[13px] text-[#333333]'>Choose a clinic</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-[15px] font-[500] mb-1'>Date <span className='text-[8px] font-[600]'>V</span></p>
                <p className='text-[13px] text-[#333333]'>Select date</p>
              </div>
              </div>
              
              <button className='bg-[#356DA6] text-white rounded-full py-2 px-3 text-[15px] font-[500]'>Book an appointment</button>
            </div>
        </div>
        <div className='w-50% max-xl:hidden'>
            <Image src={Pic} width={500} height={500} alt="pic" className='w-[100%] h-[100%] rounded-tr-[20px] rounded-br-[20px]' />
        </div>
      </main> 
    </div>
  )
}
    "border-top-right-radius: 50px"

export default page
