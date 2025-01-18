import React from 'react'
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Contacts from '../Components/Contacts';
import Contactl from '../Components/Contactl';
import Footer from '../Components/Footer';
 function page() {
   
 return (
    <div>
         <div className="lg:w-[1440px]  lg:h-[316px] w-[770px] h-[300px] bg-[url('/bg.png')] bg-cover  ">
                <Image className='lg:ml-[685px] relative top-24 ml-[350px]' src="/icon.png" alt='icon' width={77} height={77}></Image>
               <h1 className='text-center font-medium lg:text-[48px] lg:pt-24 pt-24 text-5xl'>Contact</h1>
               <div className='flex justify-center pl-4'>
               <p className='text-center font-medium lg:text-[16px] lg:top-[1px] top-1  lg:pr-2 pr-5 text-xl'>Home</p>
               <div className='relative lg:right-2 lg:top-[3px] top-1 right-4 '><ChevronRight/></div>
               <p className='relative lg:right-1 font-light  lg:top-[1px] lg:text-[16px] text-xl right-5'>Contact</p>
               </div>
        
                </div>

                <div>
                    <h1 className='font-semibold lg:text-[36px] text-2xl text-center relative left-44 md:left-0 pt-10 lg:pt-20 '>Get In Touch With Us</h1>
                    <p className='font-normal lg:text-[16px] relative left-44 md:left-0 text-xl text-center text-[#9f9f9f] pt-2'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
               
            <div className='lg:hidden'><Contacts/></div>
            <div className='hidden lg:block'> <Contactl/> </div>

            <div className='w-[770px] lg:w-[1440px] lg:h-[270px] h-[150px] relative top-10 lg:bottom-4 bg-[#faf3ea] '>
                    <div className='flex lg:pt-[110px] lg:pl-12 pt-12 pl-2'>
                   <Image  src="/trophy1.png" alt="trophy" width={52.77} height={60}></Image>
                    <div>
                        <p className='lg:font-semibold font-normal lg:text-[25px] text-sm pl-1 pt-3 lg:pt-1 lg:pl-2 text-[#242424] '>High Quality</p>
                        <p className='lg:font-medium font-light lg:text-[20px] text-xs pl-1 lg:pt-3 lg:pl-2 text-[#898989]'>crafted from top materials</p>
            
                    </div>
                    
                    <Image className='ml-3 lg:ml-16' src="/trophy2.png" alt="trophy" width={60} height={58}></Image>
                    <div>
                        <p className='lg:font-semibold font-normal lg:text-[25px] pt-3 text-sm pl-1 lg:pt-1 lg:pl-2 text-[#242424] '>Warranty Protection</p>
                        <p className='lg:font-medium font-light lg:text-[20px] text-xs pl-1 lg:pt-3 lg:pl-2 text-[#898989]'>over 2 year</p>
            
                    </div>
            
                    <Image className='ml-3 lg:ml-16' src="/trophy3.png" alt="trophy" width={60} height={58}></Image>
                    <div>
                        <p className='lg:font-semibold font-normal lg:text-[25px] pt-3 text-sm pl-1 lg:pt-1 lg:pl-2 text-[#242424] '>Free Shipping</p>
                        <p className='lg:font-medium font-light lg:text-[20px] text-xs pl-1 lg:pt-3 lg:pl-2 text-[#898989]'>Order over 150 $</p>
            
                    </div>
            
                    <Image className='ml-3 lg:ml-16' src="/trophy4.png" alt="trophy" width={60} height={58}></Image>
                    <div>
                        <p className='lg:font-semibold font-normal lg:text-[25px] pt-3 text-sm pl-1 lg:pt-1 lg:pl-2 text-[#242424] '>24 / 7 Support</p>
                        <p className='lg:font-medium font-light lg:text-[20px] text-xs pl-1 lg:pt-3 lg:pl-2 text-[#898989]'>Dedicated support</p>
            
                    </div>
                   </div>
            
                   
                </div>

                <Footer/>
    </div>
  )
}

export default page