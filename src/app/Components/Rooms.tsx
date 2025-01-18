import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
function Rooms() {
  return (
    <div className='lg:w-[1440px] lg:h-[670px] w-[770px] h-[770px] lg:flex bg-[#fcf8f3] '>
      <div>
        <h1 className='lg:text-[40px] font-bold text-[#3a3a3a] text-5xl text-center lg:text-start pt-16 lg:pt-60 lg:pl-20'>50+ Beautiful rooms <span className='hidden lg:block '></span> inspiration</h1>
        <p className='text-[28px] pl-1 lg:text-[16px] lg:pl-20 lg:pt-2 font-medium text-[#616161]'>Our designer already made a lot of  beautiful <span className='hidden lg:block'> </span>  prototipe of <span className='pl-60 lg:pl-0'> rooms  that inspire you </span></p>
          <button className='lg:w-[176px] lg:h-12 w-[240px] h-20 ml-[270px] mt-3 font-semibold lg:text-[16px] text-3xl text-white bg-[#b88e2f] lg:ml-20 lg:mt-5 hover:bg-white hover:border-2 hover:border-[#b88e2f] hover:text-[#b88e2f]'><Link href="">Explore More</Link></button>
          </div>
          <div>

            <div className="bg-[url('/i24.png')] bg-cover lg:w-[404px] lg:h-[582px] w-[380px] h-[500px] lg:mt-20 lg:ml-12 ml-[200px] mt-4 "> 
            <div className='lg:w-[217px] w-[200px] h-[100px] lg:h-[130px] bg-[#ffffff] relative lg:top-[430px] top-[360px] left-4'>
              <p className='font-medium lg:text-[16px] text-md lg:pt-8 lg:pl-5 pt-5 pl-5 text-[#616161]'>01 ---- Bed Room</p>
              <h3 className='lg:text-[28px] text-2xl font-semibold text-[#3a3a3a] pt-2 pl-5 lg:pl-5'>Inner Peace</h3>
            </div>
            <div className='lg:w-[48px] w-[35px] h-[35px] left-[216px] top-[325px]  lg:h-12 bg-[#b88e2f] relative lg:top-[382px] lg:left-[233px]'>
            <div className='lg:hidden w-[60px] h-[60px] rounded-full absolute bottom-44 bg-white left-24 '>
              <div className='pl-4 text-[#b88e2f] w-[20px] h-[20px] pt-5 md:pl-5'><ChevronRight/></div> 
            </div>
               <div className='text-white lg:ml-2 lg:pt-3 pt-1 pl-1'><Link href=""><ArrowRight/></Link></div> 

               <div className='lg:hidden flex absolute gap-4 top-9 right-[75px]'>
             <div className='w-[14px] h-[14px] rounded-full bg-white border relative mt-[12px] border-[#b88e2f]'>
          <div className='w-[6px] h-[6px] bg-[#b88e2f] relative bottom-[13px] left-[3px] rounded-full mt-4' >  </div>
            </div>      
                <div className='w-[6px] h-[6px] bg-[#b88e2f]  rounded-full mt-4' ></div>
                <div className='w-[6px] h-[6px] bg-[#b88e2f]  rounded-full mt-4' ></div>
                <div className='w-[6px] h-[6px] bg-[#b88e2f]  rounded-full mt-4' ></div>
               </div>
               
            </div>
            
            </div>
          </div>
          
              <div className="bg-[url('/i25.png')] bg-cover w-[350px] h-[486px] hidden lg:block mt-20 ml-3 ">
                <div className='w-[48px] h-[48px] bg-white rounded-full hidden relative lg:block left-[324px]  top-[320px]'> 
                  <div className='ml-[10px] pt-3'><ArrowRight/></div>

                </div>
                

              </div>
            <div className="bg-[url('/i26.png')] bg-cover w-[60px] h-[486px] hidden lg:block ml-6 mt-20">

            </div>
    </div>
  )
}

export default Rooms