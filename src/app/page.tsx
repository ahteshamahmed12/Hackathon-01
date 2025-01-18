import Browse from "./Components/Browse";
import Rooms from "./Components/Rooms";
import Link from "next/link";
import FurniroFunt from "./Components/FurniroFunt";
import Furniture from "./Components/Furniture";
import Footer from "./Components/Footer";
import OurProducts from "./Components/OurProduct";
export default function Home() {
  return (
    <main className="w-[750px] h-[400px] md:w-[768px] md:h-[400px] bg-black lg:w-[1440px] lg:h-[717px]   ">
    <title>Furniro</title>
          <div className=" lg:h-[717px] lg:w-full md:h-[350px] md:w-[768px] w-[750px] h-[350px] " >
            <div className="bg-[url('/ff.png')] lg:bg-fixed bg-cover lg:w-[1440px] lg:h-[717px] w-[770px] h-[400px] md:w-[768px] md:h-[400px] mt-3">
                <div className="lg:w-[620px] lg:h-[420px] md:w-[570px] md:h-[300px] md:ml-[110px] w-[600px] h-[320px] bg-[#fff3e3]  lg:ml-[700px]  absolute lg:top-[300px] top-32 md:top-32 ml-20">
                  
                    <h6 className=" par lg:px-9 lg:pt-10 lg:text-base font-semibold md:py-6 md:px-6 md:text pt-14 px-4 leading-[3px]">New Arrival</h6>
                    <h3 className="text-[#B88E2F] lg:text-[52px] font-bold lg:px-8 lg:pt-0  md:px-6 md:pt-3 pt-10 px-4">Discover Our  <br /><span className="md:mt-3 " >New Collection</span> </h3>
                  <p className="lg:text-[18px] font-medium lg:py-1 md:px-6 text-[#333333] lg:px-8 py-5 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                  <Link className="lg:w-[222px] lg:h-[74px] md:w-[150px] md:h-[40px] md:ml-6 lg:ml-8 absolute md:mt-3 bg-[#b88e2f] lg:py-[28px] lg:px-[72px] text-white md:text-sm md:py-3 md:px-[42px] w-[100px] h-[40px] ml-4 mt-2 py-[7px] px-[8px] hover:bg-white hover:border-2 hover:border-[#b88e2f] hover:text-[#b88e2f] tracking-wide md:hover:text-sm   " href="" ><button>BUYNOW</button></Link>
                  
                  </div>
                  
                  </div>
                  
                  </div>
        <Browse/>   

        <div>
          <div>
            <h1 className='lg:text-[40px] font-bold text-[#3a3a3a] text-center text-[30px] py-5'>Our Products</h1>
            
             
                <div>
                  <OurProducts/>
                </div>
                
              
          
          </div>
          </div>  
        <div className="mt-40"> <Rooms/></div> 

         <div className="pt-20 lg:hidden "><FurniroFunt/>   </div> 
         <div className="pt-20 hidden lg:block "><Furniture/>   </div> 

        <div className="lg:mt-[440px] mt-20"><Footer/></div> 
    </main>
  );
}