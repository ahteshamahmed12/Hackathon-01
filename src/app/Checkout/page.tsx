import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Footer from '../Components/Footer';
function page() {
  return (
    <div>
       <div className="lg:w-[1440px]  lg:h-[316px] w-[770px] h-[300px] bg-[url('/bg.png')] bg-cover  ">
                <Image className='lg:ml-[685px] relative top-24 ml-[350px]' src="/icon.png" alt='icon' width={77} height={77}></Image>
               <h1 className='text-center font-medium lg:text-[48px] lg:pt-24 pt-24 text-5xl'>Checkout</h1>
               <div className='flex justify-center pl-4'>
               <p className='text-center font-medium lg:text-[16px] lg:top-[1px] top-1  lg:pr-2 pr-5 text-xl'><Link href="/">Home</Link></p>
               <div className='relative lg:right-2 lg:top-[3px] top-1 right-4 '><ChevronRight/></div>
               <p className='relative lg:right-1 font-light  lg:top-[1px] lg:text-[16px] text-xl right-5'>Checkout</p>
               </div>
        
                </div>

        <div className='lg:flex' >
            <div className='mt-14 lg:ml-48 ml-40' >
                <h5 className='font-semibold font-[poppins] text-[36px]'>Billing detail</h5>
                <div className='mt-8 '>
                    <form className='flex gap-6' action="">
                    <div>
                        <p className='font-[poppins] font-medium text-base '>First Name</p>
                        <input className='w-[211px] h-[75px] outline-none rounded-[10px] border border-[#9f9f9f] mt-3 pl-2 'type="text" />
                    </div>
                    <div>
                        <p className='font-[poppins] font-medium text-base '>Last Name</p>
                    <input className='w-[211px] h-[75px] outline-none rounded-[10px] border border-[#9f9f9f] mt-3 pl-2  ' type="text" />
                    </div>
                    </form>
                </div>

                <div className='mt-8'>
                    <p className='font-[poppins] font-medium text-base '>Company Name(Optional)</p>
                    <form action="">
                        <input className='w-[453px] h-[75px] rounded-[10px] outline-none border pl-2  border-[#9f9f9f]' type="text" />
                    </form>
                </div>

                <div className='mt-8'>
                    <p className='font-[poppins] font-medium text-base '>Country / Region</p>
                    <form className='w-[453px] h-[75px] rounded-[10px] border border-[#9f9f9f]' action="">
                        <select className='w-[453px] h-[75px] outline-none rounded-[10px] pl-2  border border-[#9f9f9f] text-[#9f9f9f]' name="" id="" >
                            <option  value="">Pakistan</option>
                            <option  value="">India</option>
                            <option  value="">Australia</option>
                            <option  value="">Srilanka</option>
                        </select>
                    </form>
                </div>

                <div className='mt-8'>
                    <p className='font-[poppins] font-medium text-base '>State / Address</p>
                    <form action="">
                        <input className='w-[453px] h-[75px] pl-2 outline-none  rounded-[10px] border border-[#9f9f9f]' type="text" />
                    </form>
                </div>

                <div className='mt-8'>
                    <p className='font-[poppins] font-medium text-base '>Town / City</p>
                    <form action="">
                        <input className='w-[453px] pl-2  h-[75px] outline-none rounded-[10px] border border-[#9f9f9f]' type="text" />
                    </form>
                </div>

                <div className='mt-8'>
                    <p className='font-[poppins] font-medium text-base '>Province</p>
                    <form className='w-[453px] h-[75px] rounded-[10px] border border-[#9f9f9f]' action="">
                        <select className='w-[453px] h-[75px] pl-2 outline-none  rounded-[10px] border border-[#9f9f9f] text-[#9f9f9f]' name="" id="" >
                            <option  value="">Western province </option>
                            <option  value="">Eastern province</option>
                            <option  value="">Southran province</option>
                            <option  value="">Northaran province</option>
                        </select>
                    </form>
                </div>

                <div className='mt-8'>
                    <p className='font-[poppins] font-medium text-base '>Zip Code</p>
                    <form action="">
                        <input className='w-[453px] h-[75px] outline-none rounded-[10px] pl-2  border border-[#9f9f9f]' type="text" />
                    </form>
                </div>

                <div className='mt-8'>
                    <p className='font-[poppins] font-medium text-base '>Phone Number</p>
                    <form action="">
                        <input className='w-[453px] h-[75px] outline-none rounded-[10px] pl-2  border border-[#9f9f9f]' type="text" />
                    </form>
                </div>

                <div className='mt-8'>
                    <p className='font-[poppins] font-medium text-base '>Email Address</p>
                    <form action="">
                        <input className='w-[453px] h-[75px] outline-none rounded-[10px] pl-2  border border-[#9f9f9f]' type="email" />
                    </form>
                </div>
                

                <div className='mt-8'>
                    
                    <form action="">
                        <input placeholder='Additional Information' className='w-[453px] h-[75px] rounded-[10px] border border-[#9f9f9f] pl-2 outline-none' type="text" />
                    </form>
                </div>
            </div>



            <main className='lg:ml-40 mt-32 md:ml-52 ml-28'>
            <div className='flex '>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-[poppins] font-medium text-2xl '>Product</h1>
                    <p className='font-[poppins] font-normal text-base text-[#9f9f9f]'>Asgaard Sofa x 1 </p>
                    <p className='font-[poppins] font-normal text-base '>Sub Total </p>
                    <p className='font-[poppins] font-normal text-base '>Total</p>
                </div >
               
                <div className='flex flex-col gap-5 ml-28'>
                <h1 className='font-[poppins] font-medium text-2xl '>Sub Total</h1>
                    <p className='font-[poppins] font-normal text-base text-[#9f9f9f]'>Rs 250,000.00 </p>
                    <p className='font-[poppins] font-normal text-base text-[#9f9f9f] '>Rs 250,000.00 </p>
                    <p className='font-[poppins] font-normal text-base text-[#b88e2f] '>Rs 250,000.00</p>
                </div>
              
            

            </div>

            <div className='mt-8 flex'>
                
            <div className='w-[14px] h-[14px] rounded-full bg-black mt-[10px]'></div>
            <p className='font-[poppins] font-medium text-2xl pl-3' >Direct Bank Transfer</p>
            </div>

            <p className='font-[poppins] font-light text-base text-justify'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

            <div className='flex'>
            <div className='w-[14px] h-[14px] rounded-full border border-black mt-[10px]'></div>
            <p className='font-[poppins] font-medium text-base pl-3 pt-1' >Direct Bank Transfer</p>
            </div>

            <div className='flex mt-1'>
            <div className='w-[14px] h-[14px] rounded-full border border-black mt-[10px]'></div>
            <p className='font-[poppins] font-medium text-base pl-3 pt-1' >Cash On Delivery</p>
            </div>

            <p className='font-[poppins] font-light text-base text-justify pt-3'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described is our <span className='font-[poppins] font-semibold text-base'>Privacy Policy .</span> </p>

            <button className='w-[318px] h-[64px] rounded-[15px] border  mt-4 ml-20 '><Link href="Contact/">Place Order</Link></button>
            </main>

        
           

        






        </div>
        <div className='w-[770px] lg:w-[1440px] lg:h-[270px] h-[150px] relative top-24 bg-[#faf3ea] '>
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

            <span className='relative top-20'><Footer/></span>
    </div>
  )
}

export default page