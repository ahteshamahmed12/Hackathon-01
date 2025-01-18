import Image from 'next/image'
import Link from 'next/link'
function Contactl() {
  return (
    <div>
        <div className='flex'>
            <Image className='ml-20 mt-20' src="/address.png" alt="address" width={22} height={27.59}></Image>
            <div>
                <h6 className='text-[24px] font-medium pt-20 pl-4 '>Address</h6>
                <p className='pl-4 font-normal text-[16px] '>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
            </div>
            <div className='pl-80 mt-20'>
                <p>Your name</p>
                <form action="">
                    <input className='w-[528.75px]  h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] pl-6' type="text" placeholder='Abc' />
                </form>
            </div>
        </div>

        <div className='flex'>
            <Image className='ml-20 mt-20' src="/phone.png" alt="address" width={22.27} height={22.27}></Image>
            <div>
                <h6 className='text-[24px] font-medium pt-20 pl-4 '>Phone</h6>
                <p className='pl-4 font-normal text-[16px] '>Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789</p>
            </div>
            <div className='pl-80 mt-20'>
                <p>Email address</p>
                <form action="">
                    <input className='w-[528.75px]  h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] pl-6' type="email" placeholder='Abc@def.com' />
                </form>
            </div>
        </div>
        <div className='flex'>
            <Image className='ml-20 mt-20' src="/clock.png" alt="address" width={23} height={23}></Image>
            <div>
                <h6 className='text-[24px] font-medium pt-20 pl-4 '>Working Time</h6>
                <p className='pl-4 font-normal text-[16px] '>Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00</p>
            </div>
            <div className='pl-80 mt-20'>
                <p className='relative right-12'>Subject</p>
                <form action="">
                    <input className='w-[528.75px] relative right-12 h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] pl-6' type="email" placeholder='This is optional' />
                   
                   <div className='relative top-12'>
                    <p className='relative right-12 '>Message</p>
                    

                    <button><Link href=""></Link></button>
                    </div>
                </form>

            </div>
            
        </div>
        <form className='relative' action="
                    ">
                        <input className='w-[528.75px]  relative right-12 h-[120px] rounded-[10px] border-[1px] border-[#9f9f9f] pl-6  top-7 left-[620px]' type="email" placeholder='Hi! i’d like to ask about' />

                    </form>

                    <button className='w-[237px] h-[55px] bg-[#b88e2f] text-white mt-20 relative left-[620px] rounded-[5px] hover:text-[#b88e2f] hover:bg-white hover:border-[1px] hover:border-[#b88e2f]'><Link href="">Submit</Link></button>
        
    </div>
  )
}

export default Contactl