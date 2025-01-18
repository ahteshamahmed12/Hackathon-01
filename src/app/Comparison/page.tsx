import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '../Components/Footer';
function page() {
  return (
    <main>
     <div className="lg:w-[1440px]  lg:h-[316px] w-[770px] h-[300px] bg-[url('/bg.png')] bg-cover  ">
                <Image className='lg:ml-[685px] relative top-24 ml-[350px]' src="/icon.png" alt='icon' width={77} height={77}></Image>
               <h1 className='text-center font-medium lg:text-[48px] lg:pt-24 pt-24 text-5xl'>Product Comparison</h1>
               <div className='flex justify-center pl-4'>
               <p className='text-center font-medium lg:text-[16px] lg:top-[1px] top-1  lg:pr-2 pr-5 text-xl'>Home</p>
               <div className='relative lg:right-2 lg:top-[3px] top-1 right-4 '><ChevronRight/></div>
               <p className='relative lg:right-1 font-light  lg:top-[1px] lg:text-[16px] text-xl right-5'>Comparison</p>
               </div>
        
                </div>

<div className='flex'>
    <div>
    <h5 className='font-medium lg:text-[28px] lg:pl-20 pl-10 lg:pt-10 pt-10 '>Go to Product <br /> page for more <br /> Products</h5>
    <p className='font-medium pt-2 lg:pl-20 pl-10 lg:text-[20px] text-[15px] text-[#727272] underline decoration-[3px] decoration-[#727272] underline-offset-8'>View More</p>
    </div>
    <div className='hidden lg:block ml-40 mt-8 w-[280px] h-[177px] bg-[#f9f1e7]'>
        <Image src="/sofain1.png" alt='sofa' width={280} height={177}></Image>
        <p className='font-medium text-[24px] pt-12 '>Asgaard Sofa</p>
        <p className='font-medium text-[18px] pt-1 '>Rs. 250,000.00</p>
        <div className='flex'>
        <p className='font-medium text-[18px] pt-1 '>4.7</p>
        <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
        <Image className='ml-1' src="/starh.png" alt="star" width={18} height={18}></Image>

        <p className=' ml-3 mt-2 w-[80px] h-[20px] text-[13px] font-normal text-[#9f9f9f]  border-l-[1px] border-l-black pl-1'>204 Review</p>
        </div>
    </div>

    <div className='hidden lg:block ml-12 mt-8 w-[280px] h-[177px] bg-[#f9f1e7]'>
        <Image className='relative bottom-6' src="/sofaout1.png" alt='sofa' width={280} height={177}></Image>
        <p className='font-medium text-[24px] '>Outdoor Sofa Set</p>
        <p className='font-medium text-[18px] pt-1 '>Rs. 250,000.00</p>
        <div className='flex'>
        <p className='font-medium text-[18px] pt-1 '>4.2</p>
        <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={18} height={18}></Image>
        <Image className='ml-1' src="/starh.png" alt="star" width={18} height={18}></Image>

        <p className=' ml-3 mt-2 w-[80px] h-[20px] text-[13px] font-normal text-[#9f9f9f]  border-l-[1px] border-l-black pl-1'>145 Review</p>
        </div>
    </div>
    <div className='hidden lg:block '>
        <h6 className='font-semibold text-[24px] pl-12 pt-20' >Add A Product</h6>
        <form className='ml-12 mt-4  ' action="">
            <select className='bg-[#b88e2f] outline-none text-white w-[242px] h-[39px] pl-5' name="" id="">
                <option value="">Choose a product</option>
                <option value="">Choose a product</option>
                <option value="">Choose a product</option>
            </select>
        </form>
    </div>

   
    <div className=' lg:hidden ml-10 mt-8 w-[160px] h-[120px] bg-[#f9f1e7]'>
        <Image className='pt-6' src="/sofain1.png" alt='sofa' width={160} height={120}></Image>
        <p className='font-medium text-[18px] pt-10 '>Asgaard Sofa</p>
        <p className='font-medium text-[15px] pt-1 '>Rs. 250,000.00</p>
        <div className='flex'>
        <p className='font-medium text-[15px] pt-1 '>4.7</p>
        <Image className='ml-1' src="/star.png" alt="star" width={8} height={8}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={8} height={8}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={8} height={8}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={8} height={8}></Image>
        <Image className='ml-1' src="/starh.png" alt="star"width={8} height={8}></Image>

    <p className=' ml-3 mt-2 w-[80px] h-[20px] text-[10px] font-normal text-[#9f9f9f]  border-l-[1px] border-l-black pl-1'>204 Review</p>
        </div>

        
    </div>
    
    <div className=' lg:hidden ml-10 mt-8 w-[160px] h-[120px] bg-[#f9f1e7]'>
        <Image src="/sofaout1.png" alt='sofa' width={160} height={120}></Image>
        <p className='font-medium text-[18px] pt-10 '>Asgaard Sofa</p>
        <p className='font-medium text-[15px] pt-1 '>Rs. 250,000.00</p>
        <div className='flex'>
        <p className='font-medium text-[15px] pt-1 '>4.7</p>
        <Image className='ml-1' src="/star.png" alt="star" width={8} height={8}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={8} height={8}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={8} height={8}></Image>
        <Image className='ml-1' src="/star.png" alt="star" width={8} height={8}></Image>
        <Image className='ml-1' src="/starh.png" alt="star"width={8} height={8}></Image>

    <p className=' ml-3 mt-2 w-[80px] h-[20px] text-[10px] font-normal text-[#9f9f9f]  border-l-[1px] border-l-black pl-1'>204 Review</p>
        </div>

        
    </div>

    <div className='lg:hidden'>
        <h6 className='font-semibold text-[18px] pl-12 pt-20' >Add A Product</h6>
        <form className='ml-12 mt-3  ' action="">
            <select className='bg-[#b88e2f] outline-none text-white w-[200px] h-[39px] pl-5' name="" id="">
                <option value="">Choose a product</option>
                <option value="">Choose a product</option>
                <option value="">Choose a product</option>
            </select>
        </form>
    </div>
</div>

        <div className='flex border-t-[1px] border-t-[#e8e8e8] lg:w-[1330px] w-[700px] lg:mt-44 ml-10 mt-28   '>
            <div className='border-r-[1px] border-r-[#e8e8e8 lg:w-[280px] w-[170px] ml-3 lg:ml-6 '>
                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-3 pt-2'>General </h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Sales Package</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Model Number</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Secondary Material</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Configuration</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Upholstery Material</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Upholstery Color</p>

                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-14 pt-8'>Product</h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Filling Material</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Finsish Type</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Adjustable Headrest</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Maximum Load <br /> Capacity</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Origin of Manufacture</p>
                

                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-14 pt-8'>Dimension</h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Width</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Height</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Depth</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Weight</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Seat Height</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Leg Height</p>


                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-14 pt-8'>Warranty</h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Warranty Summary</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-[54px] lg:pt-[70px] '>Warranty Service <br /> Type</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-20 lg:pt-[100px] '>Covered in Warranty</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-[68px] lg:pt-24 '> Not Covered in <br /> Warranty</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-[150px] lg:pt-[165px] '>Domestic Warranty</p>
                
                
            </div>

            <div className='border-r-[1px] border-r-[#e8e8e8 lg:w-[320px] w-[230px] ml-3 lg:ml-9 '>
                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-12 pt-[38px]'> </h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>1 Sectional Sofa</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>TFCBLIGRBL6SRHS</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Solid Wood</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>L-shaped</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Fabric + Cotton</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Bright Grey & Lion</p>

                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-[100px] pt-[66px]'></h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Foam</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Bright Grey & Lion</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>No</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>280 KG</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-10 lg:pt-14 '>India</p>
                

                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-24 pt-[62px]'></h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>265.32 cm</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>76 cm</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>167.76 cm</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>45 KG</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>41.52 cm</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>5.46 cm</p>


                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-[100px] pt-[58px]'></h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>1 Year Manufacturing <br /> Warranty</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-7 lg:pt-10 '>For Warranty Claims or <br />any Product Related <br /> Issues Please Email at <br />operations@trevifurniture.com</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-8 lg:pt-10 '>Warranty Against <br /> Manufacturing Defect</p>
                <p className='font-normal text-justify lg:text-[20px] text-[16px] pt-11 lg:pt-16 '>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-14 lg:pt-20 '> 1 Year</p>

                <button className='text-white bg-[#b88e2f] lg:w-[215px] lg:h-[64px] w-[150px] h-[50px] lg:mt-10 mt-6 font-normal lg:text-[20px] text-[14px]'><Link href="" >Add to Cart</Link></button>
                
                
            </div>

            <div className='border-r-[1px] border-r-[#e8e8e8 lg:w-[320px] w-[230px] ml-3 lg:ml-9 '>
                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-12 pt-[36px]'> </h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>1 Three Seater, 2 Single <br /> Seater</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>DTUBLIGRBL568</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Solid Wood</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>L-shaped</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Fabric + Cotton</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Bright Grey & Lion</p>

                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-[60px] pt-[40px]'></h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Mate</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Bright Grey & Lion</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>Yes</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>300 KG</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-10 lg:pt-14 '>India</p>
                

                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-24 pt-[62px]'></h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>265.32 cm</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>76 cm</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>167.76 cm</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>65 KG</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>41.52 cm</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>5.46 cm</p>


                <h5 className='font-500 lg:text-[28px] text-[20px] lg:pt-[100px] pt-[58px]'></h5>
                <p className='font-normal lg:text-[20px] text-[16px] pt-4 lg:pt-6 '>1 Year Manufacturing <br /> Warranty</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-7 lg:pt-10 '>For Warranty Claims or <br />any Product Related <br /> Issues Please Email at <br />operations@trevifurniture.com</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-8 lg:pt-10 '>Warranty Against <br /> Manufacturing Defect</p>
                <p className='font-normal text-justify lg:text-[20px] text-[16px] pt-11 lg:pt-16 '>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</p>
                <p className='font-normal lg:text-[20px] text-[16px] pt-14 lg:pt-20 '>3 Month</p>

                <button className='text-white bg-[#b88e2f] lg:w-[215px] lg:h-[64px] w-[150px] h-[50px] lg:mt-[50px] mt-6 font-normal lg:text-[20px] text-[14px]'><Link href="" >Add to Cart</Link></button>
                
                
            </div>
        </div>
 <div className='w-[770px] lg:w-[1440px] lg:h-[270px] h-[150px] relative bottom-20 lg:bottom-4 lg:mt-2 top-[1640px] md:top-[1800px] lg:top-0 bg-[#faf3ea] '>
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

    <div className='relative top-[1640px] md:top-[1790px] lg:top-0 '> <Footer/> </div> 
    
        
    </main>
    
  )
}

export default page