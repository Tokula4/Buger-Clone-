import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { AiOutlineStar } from 'react-icons/ai'

function Aboutpage() {
  return (
    <section  className='items-center  justify-between mx-auto sticky px-8 h-screen max-w-[1350px] flex' >
    {/* Used frame motion for the the transition */}

    <div className="relative mx-5 hidden h-[400px] w-[400px] transition-all  duration-500 md:inline lg:h-[650px] lg:w-[600px]"> 
<div > <Image src="/images/burger-baner.png" layout="fill" objectFit="contain"    /></div>



</div> 


    <div className='space-y-3' >


      <h1 className="text-white text-[40px] " >STEP INTO BURGER HEAVEN</h1>
      <p className="text-white " >Video files are files that store digital video data on a computer system.<br></br>
       Video is almost always stored using lossy compression to reduce the file size.<br></br>
       Video is almost always stored using lossy compression to reduce the file size.</p>
       <div class=" grid grid-cols-3 space-y-2 text-white font-bold  gap-4 content-center ...">
  <div className="flex " > <h1 className="text-[#e2cc24] text-[30px]" ><AiOutlineStar/></h1> <h1 className="mx-2 " >BEST PRICE</h1></div>
  <div className="flex " > <h1 className="text-[#e2cc24] text-[30px]" ><AiOutlineStar/></h1> <h1 className="mx-2 " ></h1>BEST SERVICE</div>
  <div className="flex " > <h1 className="text-[#e2cc24] text-[30px]" ><AiOutlineStar/></h1> <h1 className="mx-2 " ></h1>FRESH INGREDIENT</div>
  <div className="flex " > <h1 className="text-[#e2cc24] text-[30px]" ><AiOutlineStar/></h1> <h1 className="mx-2 " >BACKED BUNS</h1></div>
  <div className="flex " > <h1 className="text-[#e2cc24] text-[30px]" ><AiOutlineStar/></h1> <h1 className="mx-2 " ></h1>NATURAL CHEESE</div>
  <div className="flex " > <h1 className="text-[#e2cc24] text-[30px]" ><AiOutlineStar/></h1> <h1 className="mx-2 " > VEG & NON-VEG</h1></div>
  
</div>
        <div className="" >
            <Button title="Read More " /> 
            
        </div>
    </div>
 
  

   
  
</section>
  )
}

export default Aboutpage
