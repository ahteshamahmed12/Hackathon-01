import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
async function OurProducts() {
    let query=await client.fetch(`*[_type=="product"][0..7]{
        title,
        description,
        productImage,
          price,
          tags,
          discountPercentage,
          isNew,
          _id,
      }`);
      
    
  return (
    <div className='grid lg:grid-cols-4 relative lg:left-6 lg:mr-20 left-16 md:left-12 gap-y-40 grid-cols-2 md:grid-cols-2 gap-x-56 md:gap-x-4 '>
       {
        query.map((prod:any,index:any)=>(
            <div className='w-[285px] h-[446px] hover:scale-110 ' key={index}>
               <Link  href={`${prod._id}`}>
                {prod.productImage && (
                   <Image
                   width={285}
                   height={285}
                   src={urlFor(prod.productImage).width(285).url()}
                   alt='image'
                   
                   />
                )}
                <div className='w-[285px] h-[145px] bg-[#f4f5f7]'>
                <h2 className='pl-6 pt-3' >{prod.title}</h2>
                <h2 className='pl-6 pt-1' >{prod.tags}</h2>
                <h2 className='pl-6 pt-1' >Rp : {prod.price} $</h2>
                
                
               
                
                
                </div>
                </Link>
            </div>
          
        ))
       }
       
                
    
    </div>
  )
}

export default OurProducts