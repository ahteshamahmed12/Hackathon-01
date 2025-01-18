import React from 'react'
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash } from 'lucide-react';

import Footer from '../Components/Footer';
function page() {
  return (
    <div>
          <div className="lg:w-[1440px]  lg:h-[316px] w-[770px] h-[300px] bg-[url('/bg.png')] bg-cover  ">
                <Image className='lg:ml-[685px] relative top-24 ml-[350px]' src="/icon.png" alt='icon' width={77} height={77}></Image>
               <h1 className='text-center font-medium lg:text-[48px] lg:pt-24 pt-24 text-5xl'>Cart</h1>
               <div className='flex justify-center pl-4'>
               <p className='text-center font-medium lg:text-[16px] lg:top-[1px] top-1  lg:pr-2 pr-5 text-xl'>Home</p>
               <div className='relative lg:right-2 lg:top-[3px] top-1 right-4 '><ChevronRight/></div>
               <p className='relative lg:right-1 font-light  lg:top-[1px] lg:text-[16px] text-xl right-5'>Cart</p>
               </div>
        
                </div>

                <div className='lg:w-[1440px] lg:h-[525px] w-[770px] h-[400px] '>
                    <div className='lg:w-[817px] lg:h-[55px] w-[400px] h-[50px] mt-12 ml-12 bg-[#F9F1E7] lg:mt-20 lg:ml-20 '>
                        <div className='flex'>
                            <div className='flex '>
                            <h4 className='text-[16px] font-medium lg:pt-4 lg:pl-20 pt-3 pl-7'>Product</h4>
                            <h4 className='text-[16px] font-medium lg:pt-4 lg:pl-28 pt-3 pl-9'>Price</h4>
                            <h4 className='text-[16px] font-medium lg:pt-4 lg:pl-36 pt-3 pl-9'>Quantity</h4>
                            <h4 className='text-[16px] font-medium lg:pt-4 lg:pl-20 pt-3 pl-9'>Subtotal</h4>
                            </div>
                            <div className='lg:ml-48 ml-[90px]'>
                            <div className='lg:w-[393px] w-[240px] h-[240px] lg:h-[393px] bg-[#f9f1e7]   '>
                                <h6 className='font-semibold lg:text-[32px] text-xl pl-16 pt-3 lg:pl-28 lg:pt-4'>Cart Totals</h6>
                                <div className='flex lg:pt-20 lg:pl-20 pt-6 pl-7'>
                                    <p className='font-medium lg:text-[16px] ' >Subtotal</p>
                                    <p className='lg:pl-12 font-normal text-[#9f9f9f] lg:text-[16px] pl-4 '>Rs. 250,000.00</p>
                                </div>
                                <div className='flex lg:pt-10 lg:pl-20 pt-6 pl-7'>
                                    <p className='font-medium lg:text-[16px] ' >Total</p>
                                    <p className='lg:pl-12 font-normal text-[#b88e2f] lg:text-[20px] pl-4 '>Rs. 250,000.00</p>
                                </div>
                                <div className='lg:w-[222px] w-[180px] h-[40px] lg:h-[59px] rounded-[15px] border-[1px] border-black lg:ml-20 lg:mt-16 mt-7 ml-7'>
                                  <button className='lg:text-[20px] font-normal lg:px-14 lg:pt-3 px-11 pt-[7px] '><Link href="Checkout/">Check Out</Link></button>  
                                </div>
                            
                            </div>

                            </div>
                            
                        </div>
    <div className='flex'>
       <Link href="SingleProduct/"><Image className='relative lg:bottom-72 bottom-40 ' src="/sofa.png" alt='sofa' width={100} height={90}></Image></Link> 
        <p className='font-normal lg:text-[16px] text-xs relative lg:bottom-[250px] bottom-[120px] text-[#9f9f9f] lg:left-7  left-1'>Asgaard sofa</p>
        <p className='font-normal lg:text-[16px] text-xs relative lg:bottom-[250px] bottom-[120px] text-[#9f9f9f] lg:pl-20 pl-3'>Rs. 250,000.00</p>
        <form action="">
            <input className='w-[32px] h-[32px] rounded-[5px] border-[1px] border-[#9f9f9f] ml-2 relative bottom-[115px] lg:bottom-[256px] pl-[11px] lg:pl-[6px] lg:ml-14 text-black'  type="number" placeholder='1'/>
        </form>
        <p className='font-normal lg:text-[16px] text-xs relative lg:bottom-[250px] bottom-[120px] text-[#9f9f9f] lg:pl-20 pl-5 '>Rs. 250,000.00</p>

        <div className='relative bottom-28 ml-2 lg:bottom-64 lg:ml-20 text-[#b88e2f] fill-slate-400 '><Trash/></div>
    </div>


 </div>

</div>

    <div className='w-[770px] lg:w-[1440px] lg:h-[270px] h-[150px] relative bottom-20 lg:bottom-4 bg-[#faf3ea] '>
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