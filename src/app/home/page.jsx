import React from 'react'
import car from '../../../public/assets/car2.png'
import Image from 'next/image'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full'>
      <div className=' flex flex-col items-center justify-center md:flex-row h-full'>
        <div className='felx flex-col justify-center  mx-40 mt-60 md:mt-16'>
          <h1 className='text-6xl font-extrabold  md:text-7xl'>Get Your</h1>
          <span className='flex gap-2'>
            <h1 className='text-6xl font-extrabold text-sky-600 md:text-7xl'>Car</h1>
            <h1 className='text-6xl font-extrabold md:text-7xl'>Insured</h1>
          </span>
          <p className='text-gray-500 py-6 max-w-md'>
            
            Welcome to Car Insurance – simplifying your annual payments.
            Our user-friendly platform ensures a hassle-free experience.
            Trust us for reliable and easy insurance payments.
            Join today for convenience and peace of mind.
          </p>
        </div>
        <div className='flex justify-center mx-auto'>
          <Image
            src={car}
            alt='Car'
            width={700}
            height={700}
            className='w-fit'
          />
        </div>
          
      </div>
    </div>
  )
}

export default Home
