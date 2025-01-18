import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <footer>
    <div className='lg:w-[1440px] lg:h-[400px]  w-[770px] h-[650px] md:w-[770px] lg:flex  border-t-[2px] border-t-gray-200 mt-3 lg:mt-12     '>
        <div>
            <h1 className='font-bold lg:text-[24px] text-3xl  text-center lg:text-start pt-10 lg:pt-12 lg:pl-[100px]'>FUNIRO.</h1>
            <p className='text-[#9f9f9f] lg:text-[16px] text-2xl pt-8 pl-20 font-normal lg:pl-[100px] lg:text-start text-center'>400 University Drive Suite 200 Coral <span className='hidden lg:block pt-0'></span> Gables, <br />
            FL 33134 USA </p> 
        </div>
        <div className='flex '>
        <div className='pt-7 lg:pt-12 ml-52'>
            <h4 className='font-medium lg:text-[16px] text-2xl text-[#9f9f9f]'>Links</h4>
            <ul>
                <li className='font-medium lg:text-[16px] text-2xl pt-6 lg:pt-9 ' > <Link href="/"> Home</Link> </li>
                <li className='font-medium lg:text-[16px] text-2xl pt-6 lg:pt-9' > <Link href="Shop/"> Shop</Link> </li>
                <li className='font-medium lg:text-[16px] text-2xl pt-6 lg:pt-9' > <Link href=""> About</Link> </li>
                <li className='font-medium lg:text-[16px] text-2xl pt-6 lg:pt-9' > <Link href="Contact/"> Contact</Link> </li>
            </ul>
        </div>
        
    
        <div className='pt-7 lg:pt-12 ml-40 mr-10 md:ml-32'>
            <h4 className='font-medium lg:text-[16px] text-2xl text-[#9f9f9f]'>Help</h4>
            <ul>
                <li className='font-medium lg:text-[16px] text-2xl pt-6 lg:pt-9 ' > <Link href=""> PAyment options</Link> </li>
                <li className='font-medium lg:text-[16px] text-2xl pt-6 lg:pt-9' > <Link href=""> Returns</Link> </li>
                <li className='font-medium lg:text-[16px] text-2xl pt-6 lg:pt-9' > <Link href=""> Privacy policies</Link> </li>
            </ul>
        </div>
        </div>
        <div className='mt-0 lg:ml-7 ' >
            <h1 className='font-medium lg:text-[16px] text-2xl text-center text-[#9f9f9f] pt-10 lg:mr-40 lg:pt-12  '>Newsletter</h1>
            <div className='flex lg:mt-9 '>
            <form >
                <input  className='w-[200px] border-b-[1px] pb-1 outline-none text-sm lg:text-[16px] border-b-black  ml-60 lg:ml-0  ' type="text" placeholder='Enter youe email address' />
            </form>
            <Link href=""><button className='w-[75.01px] text-sm lg:text-[16px] border-b-[1px] pb-1  mb-12   border-b-black   ml-2 lg:ml-4  outline-none' >Subscribe</button></Link>
            
        </div>
       
        </div>
        </div>
<hr className='lg:w-[1240px] w-[620px] md:w-[650px] via-gray-300 h-px  ml-20' />

<h6 className='py-9 px-20 lg:text-[16px] font-normal'>2023 furniro. All right reverved</h6>

</footer>
  )
}

export default Footer