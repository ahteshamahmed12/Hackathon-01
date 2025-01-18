import Link from 'next/link'
import React from 'react'

function Contacts() {
  return (
    <div>
       <h5 className='text-center font-semibold text-4xl pl-80 pt-4 md:pl-0'>Address</h5>
       <p className='text-2xl font-medium text-center relative left-44 pt-4 md:left-0'>236 5th SE Avenue, New York NY10000, United  States</p>

       <h5 className='text-center font-semibold text-4xl pl-[320px]  pt-4 md:pl-0'>Phone</h5>
       <p className='text-2xl font-medium text-center relative left-44 pt-4 md:left-0'>Mobile: +(84) 546-6789 <br />
       Hotline: +(84) 456-6789</p>

       <h5 className='text-center font-semibold text-4xl pl-[320px]  pt-4 md:pl-0'>Working Time</h5>
       <p className='text-2xl font-medium text-center relative left-44 pt-4 md:left-0'>Monday-Friday: 9:00 - 22:00 <br />
       Saturday-Sunday: 9:00 - 21:00</p>

       <div>
        <p className='pl-10 font-medium text-3xl pt-4 md:pl-14 '>Your name</p>
        <form action="">
            <input className='w-[600px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] ml-10 mt-10 pl-4 md:ml-14 ' type="text" placeholder='ABC' />
        </form>
       </div>

       <div>
        <p className='pl-10 font-medium text-3xl pt-4 md:pl-14 '>Email address</p>
        <form action="">
            <input className='w-[600px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] ml-10 mt-10 pl-4 md:ml-14 ' type="email" placeholder='Abc@def.com' />
        </form>
       </div>


       <div>
        <p className='pl-10 font-medium text-3xl pt-4 md:pl-14 '>Subject</p>
        <form action="">
            <input className='w-[600px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] ml-10 mt-10 pl-4 md:ml-14 ' type="text" placeholder='This is an optional' />
        </form>
       </div>

       <div>
        <p className='pl-10 font-medium text-3xl pt-4 md:pl-14 '>Message</p>
        <form action="">
            <input className='w-[600px] h-[150px] rounded-[10px] border-[1px] border-[#9f9f9f] ml-10 mt-10 pl-4 md:ml-14 ' type="text" placeholder='Hi! i’d like to ask about' />
        </form>
       </div>

<button className='w-[600px] text-white h-[75px] font-normal pl-7 bg-[#b88e2f] rounded-[10px] border-[1px] border-[#b88e2f] mt-16 ml-10 md:ml-14'>
    <Link href="">Submit</Link>
</button>

 </div>
  )
}

export default Contacts