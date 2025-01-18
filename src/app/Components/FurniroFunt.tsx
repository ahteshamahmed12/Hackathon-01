import React from 'react'
import Image from 'next/image'
function FurniroFunt() {
  return (
    <div>
         <p className='text-center pl-2 font-semibold text-2xl text-[#616161]'>Share your setup with </p>
         <h1 className='text-center font-bold text-5xl text-[#3a3a3a] md:pl-3'>#FuniroFurniture</h1>
        <div >
           

          <Image className='ml-[200px] mt-4' src="/fn1.png" alt="furnitute image" width={380} height={380}></Image>
         <div className='flex justify-center gap-4'>
          <div className='w-[14px] h-[14px] rounded-full bg-white border  relative mt-[12px] border-[#b88e2f]'>
          <div className='w-[6px] h-[6px] bg-[#b88e2f] relative bottom-[13px] left-[3px] rounded-full mt-4' >  </div>
            </div> 
            <div className='w-[6px] h-[6px] bg-[#b88e2f]  rounded-full mt-4' ></div>
                <div className='w-[6px] h-[6px] bg-[#b88e2f]  rounded-full mt-4' ></div>
                <div className='w-[6px] h-[6px] bg-[#b88e2f]  rounded-full mt-4' ></div>
               </div>
               </div> 
            
        </div>

        
    
  )
}

export default FurniroFunt