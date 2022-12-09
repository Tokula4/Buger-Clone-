import React from 'react'
import Button from './Button'
import Image from 'next/image'

function Landing() {
  return (
    <div className="flex items-center justify-center h-screen bg-[url(/images/home-bg.png)] " >
      

    <div className="text-center  " >
        <div>
        <Image src="/images/burger-baner.png" layout="fill" objectFit="contain" alt={''} />
        </div>
        <h1  className="md:text-[260px] sm:text-[40px]  font-bold text-[#fff]  "  >Wel <span className="x-15" >come,</span> </h1>
        
         <Button title="Order Now " /> 
    </div>
  
</div>
  )
}

export default Landing
