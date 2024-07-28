import Image from 'next/image'
import React from 'react'
import pic from "../../public/terrypic.jpg"
import Link from 'next/link'

const Hero = () => {
  return (
     <main className='h-[500px] w-full flex justify-center items-center flex-col bg-slate-100 gap-3 border-b-full '>
        <Image src={pic} alt='terry img' width={1000} height={1000} className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-cover rounded-full border-2 '/>
        <p className='font-bold text-[20px] md:text-[30px] text-center'>Full-Stack Software-Engineer<br/> Avaliable For Work</p>
        <button className='bg-slate-600 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded border'><Link href={"https://wa.link/hpd18t"}>Contact me</Link></button>
     </main>
  )
}

export default Hero