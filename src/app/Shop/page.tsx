import React from 'react'
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '../Components/Footer';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

async function page() {
let querym=await client.fetch(`*[_type=="product"]{
  title,
  description,
  productImage,
    price,
    tags,
    discountpercentage,
    isnew,
    
}`);
      
  return (
    <main >
    
        <div className="lg:w-[1440px]  lg:h-[316px] w-[770px] h-[300px] bg-[url('/bg.png')] bg-cover  ">
       <h1 className='text-center font-medium lg:text-5xl lg:pt-40 pt-32 text-5xl'>Shop</h1>
       <div className='flex justify-center'>
       <p className='text-center font-medium lg:text-[16px] lg:top-[1px] top-1  lg:pr-2 pr-5 text-xl'>Home</p>
       <div className='relative lg:right-2 lg:top-[3px] top-1 right-4 '><ChevronRight/></div>
       <p className='relative lg:right-1 font-light  lg:top-[1px] lg:text-[16px] text-xl right-5'>Shop</p>
       </div>

        </div>
          <div className='grid lg:grid-cols-4  relative lg:left-12  left-16 md:left-12 gap-y-[300px] grid-cols-2 md:grid-cols-2 mt-20 gap-x-60 md:gap-x-6'>
                {
                 querym.map((prod:any,index:any)=>(
                     <div className='w-[285px] h-[285px] hover:scale-110' key={index}>
                          < Link href={`${prod._id}`}/>
                         {prod.productImage && (
                            <Image
                            width={285}
                            height={285}
                            src={urlFor(prod.productImage).width(285).url()}
                            alt='image'
                            
                            />
                         )}
                         <div className='w-[285px] h-[145px] bg-[#f4f5f7]'>
                         <h2 className='pl-6 pt-3 font-[poppins] font-semibold text-2xl text-[#3a3a3a]' >{prod.title}</h2>
                         <h2 className='pl-6 pt-1font-[poppins] font-medium text-base text-[#898989] ' >{prod.tags}</h2>
                         <h2 className='pl-6 pt-1 font-[poppins] font-semibold text-xl text-[#3a3a3a] ' >Rp : {prod.price} rs</h2>
                         <h2 className='pl-6 pt-1 font-[poppins]  ' >{prod.dicountPercentage}</h2>
                         <h2 className='pl-6 pt-1' >{prod.isnew}</h2>
                        
                         
                         
                         </div>
                         
                     </div>
                     
                 ))
                }
                
                         
             
             </div>
       

       
       
        <div className='flex lg:mt-40 lg:ml-32 relative right-40 lg:top-36 top-[270px] lg:right-0 '   >
            <div >
                <button className='text-white w-[60px] h-[60px] bg-[#b88e2f] rounded-[10px]  mt-10 ml-96   '><Link  href="" >1</Link></button>
            </div>

            <div className=' '>
                <button className='text-black w-[60px] h-[60px] bg-[#f9f1e7] rounded-[10px] mt-10 ml-8  hover:bg-[#b88e2f] hover:text-white '><Link href="">2</Link></button>
            </div> 

            <div className=' '>
                <button className='text-black w-[60px] h-[60px] bg-[#f9f1e7] rounded-[10px] mt-10 ml-8 hover:bg-[#b88e2f] hover:text-white   '><Link href="">3</Link></button>
            </div>

            <div className=' '>
            <button className='text-[#000000] w-[98px] h-[60px] bg-[#f9f1e7] rounded-[10px] mt-10 ml-8 hover:bg-[#b88e2f] hover:text-white  '><Link href="">Next</Link></button>
            </div>
        </div>

         <div className='w-[770px] lg:w-[1440px] lg:h-[270px] h-[150px] relative  lg:bottom-0 lg:mt-44 top-[290px] md:top-[330px] lg:top-0 bg-[#faf3ea]  '>
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
       
        <div className='relative top-72  md:top-[400px] lg:top-10 '> <Footer/> </div> 
         
    </main>
  )
}

export default page