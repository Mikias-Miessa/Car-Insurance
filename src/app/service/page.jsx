import React from 'react'
import happy from '../../../public/assets/happyy.png'
import Image from 'next/image'
const Service = () => {
  return (
    <div id='service' className="min-h-screen flex  justify-center">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <h1 className="text-center font-bold text-4xl mt-20">
        Our Services
        </h1>
        <div className='flex justify-center mt-1'>
            <hr className='bg-sky-500 h-1 w-16'/>
        </div>
        <div className='flex flex-col justify-center'>
           <div class="border-l-4 border-sky-400 rounded-lg overflow-hidden shadow-lg shadow-sky-200 p-6 my-10">
      <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
       
        <div class="w-1/3 flex justify-center ">
                {/* <img src="your-image-url.jpg" alt="Card Image" class="w-full h-auto rounded-lg" /> */}
                <Image src={happy} alt='stressed person' width={100}
            height={100} className='w-auto rounded-lg duration-200 hover:scale-105 ' />
        </div>

     
        <div class="w-2/3 ml-4">
            <p class="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at qui distinctio eum, nobis a et eius est obcaecati sequi officiis atque dolore nam dicta unde accusamus explicabo facere consequatur!
            </p>
        </div>
    </div>
</div>
           <div class="border-r-4 border-sky-400 rounded-lg overflow-hidden shadow-lg shadow-sky-200 p-6 my-10">
      <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
       
      
        <div class="w-2/3 ml-4">
            <p class="text-black text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at qui distinctio eum, nobis a et eius est obcaecati sequi officiis atque dolore nam dicta unde accusamus explicabo facere consequatur!
            </p>
              </div>
          <div class="w-1/3 flex justify-center ">
                {/* <img src="your-image-url.jpg" alt="Card Image" class="w-full h-auto rounded-lg" /> */}
                <Image src={happy} alt='stressed person' width={100}
            height={100} className='w-auto rounded-lg duration-200 hover:scale-105 ' />
        </div>    
    </div>
          </div>
          
          <div class="border-l-4 border-sky-400 rounded-lg overflow-hidden shadow-lg shadow-sky-200 p-6 my-10">
      <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
       
        <div class="w-1/3 flex justify-center ">
                {/* <img src="your-image-url.jpg" alt="Card Image" class="w-full h-auto rounded-lg" /> */}
                <Image src={happy} alt='stressed person' width={100}
            height={100} className='w-auto rounded-lg duration-200 hover:scale-105 ' />
        </div>

     
        <div class="w-2/3 ml-4">
            <p class="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at qui distinctio eum, nobis a et eius est obcaecati sequi officiis atque dolore nam dicta unde accusamus explicabo facere consequatur!
            </p>
        </div>
    </div>
</div>

        </div>
       
      </div>
      
    </div>
  )
}

export default Service
