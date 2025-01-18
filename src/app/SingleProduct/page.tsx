import React from 'react'
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import OurProducts from '../Components/OurProduct';
import Footer from '../Components/Footer';
function page() {
  return (
    <div>
        <div className='w-[770px] lg:w-[1440px] h-[60px] lg:h-[100px] bg-[#f9f1e7] lg:mt-3 mt-5'>
            <div className='flex'>
                <p className='font-normal lg:text-[16px] text-[15px] text-[#9f9f9f] lg:pl-20 lg:pt-9 pl-16 pt-5'>Home</p>
                <div className='lg:w-[20px] lg:h-[20px] w-[10px] h-[10px] lg:pl-2 lg:pt-9 pt-5 pl-1'><ChevronRight/></div>

                <p className='font-normal lg:text-[16px] text-[15px] text-[#9f9f9f] lg:pl-20 lg:pt-9 pl-16 pt-5'>Shop</p>
                <div className='lg:w-[20px] lg:h-[20px] w-[10px] h-[10px] lg:pl-2 lg:pt-9 pt-5 pl-1'><ChevronRight/></div>

                <div className='lg:w-[142px] lg:h-[37px] w-[130px] h-[27px] lg:mt-8 lg:py-1 lg:ml-8 ml-10 mt-[18px] border-l-[2px] border-l-gray-300'>
                    <p className='lg:pl-10 pl-5  lg:pt-0'>Asgaard sofa</p>
                </div>
            </div>
        </div>

        <div className='flex'>
        <div>
            <div className='bg-[#f9f1e7] w-[76px] h-20 mt-4 lg:mt-8 lg:ml-20 ml-12'>
                <Image src="/set1.png" alt="set" width={76} height={55}></Image>
            </div>

            <div className='bg-[#f9f1e7] w-[76px] h-20 mt-4 lg:mt-8 lg:ml-20 ml-12'>
                <Image src="/set2.png" alt="set" width={76} height={55}></Image>
            </div>

            <div className='bg-[#f9f1e7] w-[76px] h-20 mt-4 lg:mt-8 lg:ml-20 ml-12'>
                <Image src="/set3.png" alt="set" width={76} height={55}></Image>
            </div>

            <div className='bg-[#f9f1e7] w-[76px] h-20 mt-4 lg:mt-8 lg:ml-20 ml-12'>
                <Image src="/set4.png" alt="set" width={76} height={55}></Image>
            </div>
        </div>

        <div className='lg:w-[423px] lg:h-[500px] h-[350px] w-[400px] bg-[#f9f1e7] ml-3 mt-4 lg:mt-8 lg:ml-5 '>
        <Image className='pt-20 lg:pt:28' src="/sofaout2.png" alt="set" width={481} height={391}></Image>
        </div>
        <div className='lg:mt-8 lg:ml-24 ml-12 mt-4'>
            <h4 className='lg:text-[42px] font-normal text-[26px] pl-2 '>Asgaard sofa</h4>
            <p className='text-[16px] lg:text-[24px] font-medium text-[#9f9f9f] pl-2 lg:pl-3 '>Rs. 250,000.00</p>

            <div className='flex '>
                    <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
                    <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
                    <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
                    <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
                    <Image className='ml-1' src="/starh.png" alt="star" width={18} height={18}></Image>
            
                    <p className=' ml-3 mt-2 w-[130px]  h-[20px] lg:text-[13px] text-[6px] font-normal text-[#9f9f9f]  border-l-[1px] border-l-black pl-1'>5 Customer Review</p>

                   
                    </div>

                    <p className='font-normal text-[9px] lg:text-[13px] pl-2 lg:pl-3 pt-3 lg:pt-5'>
                    Setting the  bar as one of the loudest speakers in its class, the <span className=''></span>  Kilburn is a compact, stout-hearted hero with a well-balanced <span className=''></span>    audio which boasts a clear midrange and extended highs for a <span className=''></span>  sound.</p>
                    <div>
                        <p className='lg:text-[14px] text-[12px] font-normal pt-3 lg:pt-5 pl-2 lg:pl-3 text-[#9f9f9f]'>size</p>
                    </div>

                    <div className='flex'>
                        <div className='w-[30px] h-[30px] bg-[#b88e2f] rounded-[5px] mt-4 ml-3'>
                            <p className='pl-2 lg:pl-3 text-white pt-1'>L</p>

                        </div>

                        <div className='w-[30px] h-[30px] bg-[#f9f1e7] rounded-[5px] mt-4 ml-3'>
                            <p className='pl-2 lg:pl-2 pt-1'>XL</p>

                        </div>

                        <div className='w-[30px] h-[30px] bg-[#f9f1e7] rounded-[5px] mt-4 ml-3'>
                            <p className='pl-2 lg:pl-2  pt-1'>XS</p>

                        </div>
                    </div>

                    <div>
                    <p className='lg:text-[14px] text-[12px] font-normal pt-3 lg:pt-5 pl-2 lg:pl-3 text-[#9f9f9f]'>Color</p>
                    <div className='flex'>
                        <div className='w-[30px] h-[30px] rounded-[50px] ml-3 mt-3 bg-[#816dfa]'> </div>
                        <div className='w-[30px] h-[30px] rounded-[50px] ml-3 mt-3 bg-[#000000]'> </div>
                        <div className='w-[30px] h-[30px] rounded-[50px] ml-3 mt-3 bg-[#b88e2f]'> </div>
                    </div>
                    </div>

                    <div className='flex' >
                        <div className='lg:w-[123px] lg:h-[64px] w-[90px] h-[50px] rounded-[10px] border-[1px] border-[#9f9f9f] mt-3 ml-2'>
                            <p className='pl-3 pt-3 lg:pl-5 lg:pt-5'>- <span className='px-4 lg:px-6 font-medium'>1</span> +</p>
                        </div>

                        <div className='lg:w-[215px] lg:h-[64px] rounded-[15px] w-[150px] h-[50px] mt-3 ml-3 border-[1px] border-black '>
                         <button className='font-medium lg:text-xl pl-8 pt-3'><Link  href="Cart/">Add To Cart</Link></button>   
                        </div>

                        <div className='lg:w-[215px] lg:h-[64px] rounded-[15px] w-[150px] h-[50px] mt-3 ml-3 border-[1px] border-black '>
                         <button className='font-medium lg:text-xl pl-8 pt-3'><Link  href="Comparison/">+ Compare</Link></button>   
                        </div>

                    </div>
                    <div>
                        <div>
                            <p className='w-[400] text-[16px] text-[#9f9f9f] pt-3 pl-2'>SKU  <span className='pl-16'>:SS001</span></p>
                            <p className='w-[400] text-[16px] text-[#9f9f9f] pt-3 pl-2'>Category <span className='pl-7'>:Sofas</span></p>
                            <p className='w-[400] text-[16px] text-[#9f9f9f] pt-3 pl-2'>Tags  <span className='pl-[58px]'>:Sofa, Chair, Home, Shop</span></p>
                            <p className='w-[400] text-[16px] text-[#9f9f9f] pt-3 pl-2'>Share  <span className='pl-14'>:SS001</span></p>
                        </div>
                    </div>
        </div>
        <hr />

        
        </div>

       <div className='mt-5'>
        <h1 className='text-center font-medium text-[36px] mt-5'>Related Products</h1>
       <OurProducts/>

      
       </div> 

    <div className='realtive left-60'>
        <button className='relative top-48 left-[500px] text-[#b88e2f] border-[1px] border-[#b88e2f] w-[245px] h-12'><Link href="">Show More</Link></button>
        </div>   

        <div className='relative top-[1660px] md:top-[10px] lg:top-40 '> <Footer/> </div> 
    </div>
  )
}

export default page