import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import OurProducts from '../Components/OurProduct'
import Image from 'next/image'
import Footer from '../Components/Footer'
async function page(props:any) {
    let query=await client.fetch(`
       *[_type == "product" && _id == "${props.params.id}"]`) 
  return (
    <div >
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

      {
        query.map((prod:any,index:any)=>(
            <div className='mt-20  relative left-3 ' key={index}>
            <div className='lg:flex '>
                {prod.productImage && (
                   <Image
                   className='ml-16 lg:ml-0'
                   width={305}
                   height={285}
                   src={urlFor(prod.productImage).width(305).url()}
                   alt='image'
                   
                   />
                )}
                <div className='ml-4 mt-4 flex flex-col gap-y-4'>
                <h2 className='font-[poppins] font-normal text-5xl pt-3 '>{prod.title}</h2>
                <h2 className='font-[poppins] font-medium text-2xl text-[#9f9f9f]'>Rp : {prod.price} $</h2>
                <h2 className='font-[poppins] font-normal text-[13px] text-justify '>{prod.description}</h2>
                <h2 className='font-[poppins] font-normal text-base' >{prod.tags}</h2>
                
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
                            <p className='w-[400] text-[16px] text-[#9f9f9f] pt-3 pl-2'>Category <span className='pl-7'>:Serene seat</span></p>
                            <p className='w-[400] text-[16px] text-[#9f9f9f] pt-3 pl-2'>Tags  <span className='pl-[58px]'>:serene ,seat, comfort ,relaxing ,furniture</span></p>
                            <p className='w-[400] text-[16px] text-[#9f9f9f] pt-3 pl-2'>Share  <span className='pl-14'>:SS001</span></p>
                        </div>
                    </div>

             
                
                
                </div>
              
            </div>
            </div>
        ))
      }
<span className='relative top-9'> <hr /></span>

<div className='mt-10'>
        <h1 className='text-center font-medium text-[36px] lg:mt-5 mt-7 '>Related Products</h1>
       <OurProducts/>

      
       </div> 

    <div className='realtive left-60'>
        <button className='relative top-48 left-[250px] lg:left-[500px] text-[#b88e2f] border-[1px] border-[#b88e2f] w-[245px] h-12 hover:bg-[#b88e2f] hover:text-white'><Link href="">Show More</Link></button>
        </div>

    <span className='relative top-52 lg:top-44'><Footer/></span> 
    </div>
  )
}

export default page