import React from 'react'
import Image from 'next/image'
function Furniture() {
  return (
    <div className='w-[1600px] h-[780px]  ' >
        <div>
            <p className='text-center text-xl font-semibold text-[#616161]'>Share your setup with</p>
            <h1 className='text-center text-[40px] font-bold text-[#3a3a3a]'>#FuniroFurniture</h1>
        </div>
        <div className='flex  '>
            <Image className='relative' src="/fn5.png" alt="image" width={100} height={382} ></Image>
            <Image className='ml-4 pt-44 relative ' src="/Rect38.png" alt="image" width={450} height={400} ></Image> 
            <Image className='ml-4  relative top-60' src="/fn3.png" alt="image" width={295} height={392} ></Image> 
            <Image className='ml-4  relative top-[180px]' src="/fn1.png" alt="image" width={290} height={348} ></Image> 
            <Image className='ml-4  relative ' src="/Rect45.png" alt="image" width={170} height={433} ></Image> 
            </div>
            <div className='flex'>
            <Image className='relative top-2 ' src="/rec1.png" alt="image" width={200} height={323} ></Image>
            <Image className='pt-2 pl-2 relative  ' src="/rec2.png" alt="image" width={344} height={242} ></Image>
            <Image className='pt-2 pl-2 relative left-[340px] top-[180px] ' src="/rec3.png" alt="image" width={178} height={200} ></Image>
            <Image className='pt-2 pl-2 relative left-[340px] top-[180px] ' src="/rec4.png" alt="image" width={258} height={196} ></Image>
            </div>


        </div>
       
            
        
   
  )
}

export default Furniture