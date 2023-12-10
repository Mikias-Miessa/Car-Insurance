"use client"
import React from 'react'
import car from '../../../public/assets/car2.png'
import { motion } from "framer-motion"
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link';
const Home = () => {
  const pageStyle = {
  backgroundImage: `url('/assets/bg.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center', // Adjust as needed
  height: '100vh',
};

  return (
    <div name="home" style={pageStyle}>
      <div className=' flex flex-col items-center justify-center md:flex-row h-full'>
        <div className='felx flex-col justify-center  mx-40 mt-40 md:mt-16'>
          <h1 className='text-5xl font-extrabold  md:text-7xl'>Get Your</h1>
          <span className='flex gap-2'>
            <h1 className='text-5xl font-extrabold text-sky-600 md:text-7xl'>Car</h1>
            <h1 className='text-5xl font-extrabold md:text-7xl'>Insured</h1>
          </span>
          <p className='text-gray-500 py-6 max-w-md'>
            
            Welcome to Car Insurance – simplifying your annual payments.
            Our user-friendly platform ensures a hassle-free experience.
            Trust us for reliable and easy insurance payments.
            Join today for convenience and peace of mind.
          </p>
          <div>
        <Link  href='#about' className='group text-sky-600 hover:text-sky-400 font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black cursor-pointer'>
          Find out more
          <span className='group-hover:rotate-90 duration-300'>
            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
          </span>
        </Link>
      </div>
        </div>
        <motion.div
          initial={{x:1000}}           
          animate={{ x: 0 }}
          transition={{
            type: 'spring',stiffness: 40, damping: 10 
                  }}
          className='flex justify-center mx-auto'>
          <Image
            src={car}
            alt='Car'
            width={700}
            height={700}
            className='w-fit'
          />
        </motion.div>
          
      </div>
    </div>
  )
}

export default Home
