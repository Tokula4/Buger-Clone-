import React from 'react'
import Image from 'next/image'
import Button from './Button'

function Homepage() {
  return (
    <section>
    <div className="flex items-center justify-center h-screen bg-[url(/images/home-bg.png)] " >
      

    <div className="text-center  " >
        <div>
        <Image src="/images/burger-baner.png" layout="fill" objectFit="contain" alt={''} />
        </div>

   
        
    </div>
  
</div>
<div  className=" text-center text-[#fff] " >
        <h1   className=" font-bold text-[40px] " > SO MEATY YOU'LL GO CRAZY </h1>
        <p>Buger is a village in Armand Rural District, in the Central District <br></br>
            of Lordegan County, Chaharmahal and Bakhtiari Province, Iran. At the 2006 census, ...</p>
<div  className="p-4" >
    <Button title="Our Menu " /> 
</div>
            
            </div>
            
</section>
  )
}

export default Homepage
