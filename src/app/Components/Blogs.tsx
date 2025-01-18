import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react';
function Blogs() {
  return (
    <main className='w-[770px] h-[300px] flex ' >
    <div>
        <div className='mt-[50px] ml-16 '>
                <Image  src="/blog1.png" alt="blog" width={400} height={300} ></Image>
                <div className='flex'>
                <Image className='mt-3' src="/user.png" alt="blog" width={20} height={20} ></Image>
                <p className='font-normal pt-3 text-[16px] pl-2 text-[#9f9f9f]'>Admin</p>
        
                <Image className='mt-3 ml-10' src="/date.png" alt="blog" width={20} height={20} ></Image>
                <p className='font-normal pt-3 text-[16px] pl-2 text-[#9f9f9f]'>14 Oct 2022</p>
        
                <Image className='mt-3 ml-10' src="/wood.png" alt="blog" width={20} height={20} ></Image>
                <p className='font-normal pt-3 text-[16px] pl-2 text-[#9f9f9f]'>Wood</p>
                </div>
                <h2 className='font-medium md:text-[24px] text-[18px] pt-2'>Going all-in with millennial design</h2>
                <p className='font-normal text-[15px] text-[#9f9f9f] pt-2 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, s <span className='hidden md:block'></span>ed do eiusmod tempor incididunt ut labore et  dolore mag <span className='hidden md:block'></span>na  aliqua. Mus mauris vitae ultricies leo integer malesuaa <span className='hidden md:block'></span>da nunc. In nulla posuere sollicitudin aliquam ultrices. Mo <span className='hidden md:block'></span>rbi bla  ndit cursus risus at ultrices mi tempus imperdiet. L <span className='hidden md:block'></span>ibero enim sed faucibus turpis in. Cursus mattis molestie <span className='hidden md:block'></span> a iaculisq  at erat. Nibh cras pulvinar mattis nunc sed bland <span className='hidden md:block'></span>it libero. Pellentesque elit ullamcorper dignissim cras tincid <span className='hidden md:block'></span>unt. Phare tra et ultrices neque ornare aenean euismod ele <span className='hidden md:block'></span>mentum.</p>
        
                <div className='w-[89px] h-[36px] underline decoration-gray-400 decoration-[3px] underline-offset-[12px] mt-4 '> <p className='font-normal text-[16px] '>Read more</p></div>
                 </div>
                 <div className='mt-[50px] ml-16 '>
                         <Image  src="/blog2.png" alt="blog" width={400} height={300} ></Image>
                         <div className='flex'>
                         <Image className='mt-3' src="/user.png" alt="blog" width={20} height={20} ></Image>
                         <p className='font-normal pt-3 text-[16px] pl-2 text-[#9f9f9f]'>Admin</p>
                 
                         <Image className='mt-3 ml-10' src="/date.png" alt="blog" width={20} height={20} ></Image>
                         <p className='font-normal pt-3 text-[16px] pl-2 text-[#9f9f9f]'>14 Oct 2022</p>
                 
                         <Image className='mt-3 ml-10' src="/wood.png" alt="blog" width={20} height={20} ></Image>
                         <p className='font-normal pt-3 text-[16px] pl-2 text-[#9f9f9f]'>Wood</p>
                         </div>
                         <h2 className='font-medium md:text-[24px] text-[18px] pt-2'>Exploring new ways of decorating</h2>
                         <p className='font-normal text-[15px]  text-[#9f9f9f] pt-2 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className='hidden md:block'></span> sed do eiusmod tempor incididunt ut labore et  dolore m <span className='hidden md:block'></span> agna  aliqua. Mus mauris vitae ultricies leo integer males <span className='hidden md:block'></span>uada nunc. In nulla posuere sollicitudin aliquam ultrices.<span className='hidden md:block'></span> Morbi bla  ndit cursus risus at ultrices mi tempus imperdie <span className='hidden md:block'></span>t. Libero enim sed faucibus turpis in. Cursus mattis molesti <span className='hidden md:block'></span>e a iaculisq  at erat. Nibh cras pulvinar mattis nunc sed blan <span className='hidden md:block'></span>dit libero. Pellentesque elit ullamcorper dignissim cras tinci <span className='hidden md:block'></span>dunt. Pharetra et ultrices neque ornare aenean euismod ele <span className='hidden md:block'></span>mentum.</p>
                 
                         <div className='w-[89px] h-[36px] underline decoration-gray-400 decoration-[3px] underline-offset-[12px] mt-4 '> <p className='text-base font-normal'>Read more</p></div>
                          </div>

     <div className='mt-[50px] ml-16 '>
        <Image  src="/blog3.png" alt="blog" width={400} height={300} ></Image>
        <div className='flex'>
        <Image className='mt-3' src="/user.png" alt="blog" width={20} height={20} ></Image>
        <p className='font-normal pt-3 text-[16px] pl-2 text-[#9f9f9f]'>Admin</p>

        <Image className='mt-3 ml-10' src="/date.png" alt="blog" width={20} height={20} ></Image>
        <p className='font-normal pt-3 text-[16px] pl-2 text-[#9f9f9f]'>14 Oct 2022</p>

        <Image className='mt-3 ml-10' src="/wood.png" alt="blog" width={20} height={20} ></Image>
        <p className='font-normal pt-3 text-[16px] pl-2 text-[#9f9f9f]'>Wood</p>
        </div>
        <h2 className='font-medium text-[18px] mdLtext-[24px] pt-2'>Handmade pieces that took time to make</h2>
        <p className='font-normal text-[15px] text-justify  text-[#9f9f9f] pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className='hidden md:block'></span> sed do eiusmod tempor incididunt ut labore et  dolore m <span className='hidden md:block'></span> agna  aliqua. Mus mauris vitae ultricies leo integer males <span className='hidden md:block'></span>uada nunc. In nulla posuere sollicitudin aliquam ultrices.<span className='hidden md:block'></span> Morbi bla  ndit cursus risus at ultrices mi tempus imperdie <span className='hidden md:block'></span>t. Libero enim sed faucibus turpis in. Cursus mattis molesti <span className='hidden md:block'></span>e a iaculisq  at erat. Nibh cras pulvinar mattis nunc sed blan <span className='hidden md:block'></span>dit libero. Pellentesque elit ullamcorper dignissim cras tinci <span className='hidden md:block'></span>dunt. Pharetra et ultrices neque ornare aenean euismod ele <span className='hidden md:block'></span>mentum.</p>
        <div className='w-[89px] h-[36px] underline decoration-gray-400 decoration-[3px] underline-offset-[12px] mt-4 '> <p className='text-base font-normal'>Read more</p></div>

        <div className='flex' >
            <div className='w-[60px] h-[60px] bg-[#b88e2f] rounded-[10px] mt-10 ml-24  '>
                <button className='text-white pt-4 pl-6'><Link href="">1</Link></button>
            </div>

            <div className='w-[60px] h-[60px] bg-[#f9f1e7] rounded-[10px] mt-10 ml-8  '>
                <button className='text-black pt-4 pl-6'><Link href="">2</Link></button>
            </div>

            <div className='w-[60px] h-[60px] bg-[#f9f1e7] rounded-[10px] mt-10 ml-8  '>
                <button className='text-black pt-4 pl-6'><Link href="">3</Link></button>
            </div>

            <div className='w-[98px] h-[60px] bg-[#f9f1e7] rounded-[10px] mt-10 ml-8  '>
                <button className='text-[#000000] pt-4 font-light text-[20px] pl-6'><Link href="">Next</Link></button>
            </div>
        </div>
         </div>
         </div>
         <div>
                     <div className='w-[200px] h-[50px] border-[1px] border-[#9f9f9f] mt-24 rounded-[10px]  '>
                         <div className='pl-[150px] pt-4 '><Search/></div> 
                        
                     </div>
                     <div>
                         <h6 className='text-2xl font-medium pt-5 pl-10'>Categories</h6>
                         <div className='flex'>
                             <div className='ml-8 mt-8'>
                                 <p className='font-normal text-[16px] text-[#9f9f9f]'>Craft</p>
                                 <p className='font-normal text-[16px] text-[#9f9f9f] pt-11'>Design</p>
                                 <p className='font-normal text-[16px] text-[#9f9f9f] pt-11'>Handmade</p>
                                 <p className='font-normal text-[16px] text-[#9f9f9f] pt-11'>Interior</p>
                                 <p className='font-normal text-[16px] text-[#9f9f9f] pt-11'>Wood</p>
                             </div>
         
                             <div className='ml-8 mt-8'>
                                 <p className='font-normal text-[16px] text-[#9f9f9f]'>2</p>
                                 <p className='font-normal text-[16px] text-[#9f9f9f] pt-11'>8</p>
                                 <p className='font-normal text-[16px] text-[#9f9f9f] pt-11'>7</p>
                                 <p className='font-normal text-[16px] text-[#9f9f9f] pt-11'>1</p>
                                 <p className='font-normal text-[16px] text-[#9f9f9f] pt-11'>6</p>
                             </div>
                             
                             
                         </div>
         
                         <div className='ml-8 mt-20'>
                             <p className='font-medium text-2xl'>Recent Posts</p>
                         </div>
                         <div className='ml-8 mt-8'>
                             <div className='flex'>
                                 <Image src="/post1.png" alt="post" width={80} height={80}></Image>
                                 <div>
                                     <h6 className='pl-2 font-normal text-[14px] '>Exploring new ways <br /> of decorating</h6>
                                     <p className='pl-2 font-normal text-[12px] text-[#9f9f9f] pt-2'>03 Aug 2022</p>
                                 </div>
                                 
                             </div>
                             
                         </div>
         
                         <div className='ml-8 mt-8'>
                             <div className='flex'>
                                 <Image src="/post2.png" alt="post" width={80} height={80}></Image>
                                 <div>
                                     <h6 className='pl-2 font-normal text-[14px] '>Going all-in with <br /> millennial design</h6>
                                     <p className='pl-2 font-normal text-[12px] text-[#9f9f9f] pt-2'>03 Aug 2022</p>
                                 </div>
                                 
                             </div>
                             
                         </div>
         
                         <div className='ml-8 mt-8'>
                             <div className='flex'>
                                 <Image src="/post3.png" alt="post" width={80} height={80}></Image>
                                 <div>
                                     <h6 className='pl-2 font-normal text-[14px] '>Handmade pieces <br /> that took time to make</h6>
                                     <p className='pl-2 font-normal text-[12px] text-[#9f9f9f] pt-2'>03 Aug 2022</p>
                                 </div>
                                 
                             </div>
                             
                         </div>
         
         
                         <div className='ml-8 mt-8'>
                             <div className='flex'>
                                 <Image src="/post4.png" alt="post" width={80} height={80}></Image>
                                 <div>
                                     <h6 className='pl-2 font-normal text-[14px] '>Modern home in <br /> Milan</h6>
                                     <p className='pl-2 font-normal text-[12px] text-[#9f9f9f] pt-2'>03 Aug 2022</p>
                                 </div>
                                 
                             </div>
                             
                         </div>
         
         
         
                         <div className='ml-8 mt-8'>
                             <div className='flex'>
                                 <Image src="/post4.png" alt="post" width={80} height={80}></Image>
                                 <div>
                                     <h6 className='pl-2 font-normal text-[14px] '>Colorful office <br /> redesign</h6>
                                     <p className='pl-2 font-normal text-[12px] text-[#9f9f9f] pt-2'>03 Aug 2022</p>
                                 </div>
                                 
                             </div>
                             
                         </div>
                         
                         
                         
         
                         
                     </div>
                  </div> 
         
    </main>
  )
}

export default Blogs