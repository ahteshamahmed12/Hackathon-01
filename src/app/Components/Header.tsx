import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  import { Menu } from 'lucide-react';
  import { User } from 'lucide-react';

import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
function Header() {
  return (
    <header>
         <div className='lg:w-[1286px] lg:h-[41px] w-[700px] h-[38px] md:[900px] md:h-10  mt-[29px] ml-[54px] flex'>
            <Image className='mt-1' src="/icon.png" alt="house logo" width={50} height={32} />
            <h3 className='font-bold lg:text-[34px] md:text-[28px] text-[28px] py-[5px] px-1 md:py-1 lg:py-0'>Furniro</h3>
          <div className="lg:hidden flex  ml-[500px] md:ml-[520px] lg:justify-end">

            <DropdownMenu>
  <DropdownMenuTrigger> <Menu/> </DropdownMenuTrigger>
  <DropdownMenuContent className='hover:text-[#b88e2f]'>
    <DropdownMenuLabel className='text-[#b88e2f]'>Home</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Shop</DropdownMenuItem>
    <DropdownMenuItem>Blog</DropdownMenuItem>
    <DropdownMenuItem>Contact</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

</div>

    <div className="hidden lg:block  py-4 px-52 ">
        <Link className="text-[16px] font-medium px-6 text-[#b88e2f] " href="/" >Home</Link>
        <Link className="text-[16px] font-medium px-6 hover:text-[#b88e2f] hover:ease-linear duration-100  " href="Shop/" >Shop</Link>
        <Link className="text-[16px] font-medium px-6 hover:text-[#b88e2f] hover:ease-linear duration-100 " href="Blog/" >Blog</Link>
        <Link className="text-[16px] font-medium px-6 hover:text-[#b88e2f] hover:ease-linear duration-100  " href="Contact/" >Contact</Link>
    </div>
<div className="py-4   hidden lg:block  ">
<div className='lg:flex gap-12'>
  <Link href=""> <User/></Link> 
   <Link href="" > <Search/></Link> 
   <Link href="" ><Heart/></Link> 
   <Link href="Cart/"> <ShoppingCart/></Link> 
</div>
</div>

</div> 


    </header>
  )
}

export default Header