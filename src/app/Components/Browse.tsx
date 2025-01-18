import Image from 'next/image'
function browse() {
    let data=[{
        image1:<Image src="/image1.png" alt="image1" height={480} width={381}  />,
        image2:<Image src="/image2.png" alt="image1" height={480} width={381}   />,
        image3:<Image src="/image3.png" alt="image1" height={480} width={381}   />
    }]
  return (
    <div>
      <h1 className='lg:text-[32px] font-bold  text-2xl text-center lg:pt-6 pt-16'>Browse The Range</h1>
      <p className='lg:text-[20px] font-normal text-2xl text-[#666666]  text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>
          {
            data.map((img,index)=>{
              return(
                <div key={index}  >
                  <div className='ml-52 lg:ml-28 lg:flex lg:gap-3  '>
                 <div  >
                  <div className='pt-6'>
                    {img.image1}
                    <div className='px-36 pt-3 lg:px-36 font-semibold text-[24px]'>Dining</div>
                  </div>
                  </div> 
                 <div  > 
                  <div className='pt-6'>
                    {img.image2}
                    <div className='px-36 lg:px-36 pt-3 font-semibold text-[24px]'>Living</div>
                  </div>
                 </div>
                 <div className='pt-6' >
                  <div>
                    {img.image3}
                    <div className='px-36 lg:px-36 pt-3 font-semibold text-[24px]'>Bedroom</div>
                  </div>
                 </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default browse