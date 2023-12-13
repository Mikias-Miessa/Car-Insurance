import React from 'react'
import happy from '../../../public/assets/happyy.png'
import stress from '../../../public/assets/stress.png'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about' className="min-h-fit flex mb-10 justify-center">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <h1 className="text-center font-bold text-4xl mt-20">
        Why Need Us?
        </h1>
        <div className='flex justify-center mt-1'>
            <hr className='bg-sky-500 h-1 w-16'/>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-32 gap-20  px-12 sm:px-0 mt-16 mx-auto'>
          <div className='bg-slate-50 w-60 h-80 rounded-md shadow-lg shadow-sky-200  flex  flex-col '>
            <div className='flex justify-center items-center pt-5 px-1'>
              <Image src={stress} alt='stressed person' width={200}
            height={200} className='rounded-md w-72 h-40 duration-200 hover:scale-105 ' />
            </div>
            
                <div className='flex justify-center items-center pt-3 font-semibold px-10'> Minimize Stress </div>
            <p className='flex justify-center items-center pt-2 text-xs text-center font-light px-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis nobis aperiam corrupti aspernatur 
                </p>
          </div>
          <div className='bg-slate-50 w-60 h-80 rounded-md shadow-lg shadow-sky-200  flex  flex-col '>
            <div className='flex justify-center items-center pt-5 px-10'>
              <Image src={happy} alt='happy person' width={170}
            height={160} className='rounded-md duration-200 hover:scale-105 ' />
            </div>
            
                <div className='flex justify-center items-center pt-3 font-semibold px-10'> Save Time </div>
            <p className='flex justify-center items-center pt-2 text-xs text-center font-light px-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis nobis aperiam corrupti aspernatur 
                </p>
          </div>
          <div className='bg-slate-50 w-60 h-80 rounded-md shadow-lg shadow-sky-200  flex  flex-col '>
            <div className='flex justify-center items-center pt-5 px-10'>
              <Image src={happy} alt='happy person' width={170}
            height={160} className='rounded-md duration-200 hover:scale-105 ' />
            </div>
            
                <div className='flex justify-center items-center pt-3 font-semibold px-10'> Minimize Stress </div>
            <p className='flex justify-center items-center pt-2 text-xs text-center font-light px-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis nobis aperiam corrupti aspernatur 
                </p>
          </div>
            {/* <div className='bg-slate-50 w-60 h-80 rounded-md shadow-lg shadow-sky-200'></div>
            <div className='bg-slate-50 w-60 h-80 rounded-md shadow-lg shadow-sky-200'></div> */}
        </div>
       
      </div>
      
    </div>
  )
}

export default About
