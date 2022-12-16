import React from 'react'
import Image from 'next/image'
import { AiOutlineStar } from 'react-icons/ai'

function Testimonialpage() {
  return (
    <>
    <div className="mb-8 text-center">
        <div  className="items-center justify-center " >
        <img src="/images/title-img.png"  objectFit="contain"    />

        </div>
        <h1  className="font-bold text-white text-[40px] " >Testimonial</h1>
         
         
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                  <div className="mb-2">

                      <div className="flex flex-col items-center justify-center">
                        
                  <div className="w-20 h-20 overflow-hidden border-2 rounded-full">
                  <img src="/images/pick-1.JPG" layout="fill" alt="img"
                        className="object-cover object-center w-full h-full" />
                </div>
                          
                          <h5 className="p-5 font-bold text-white uppercase ">FREE DELIVERY</h5>
                          <p className="text-sm text-white "> how to draw a burger. A burger is a delicious dish that is a 
                          <br></br> great idea for a drawing.</p>
                                   
                <div className="flex mx-2 text-[#e2cc24] text-[30px]  " >
                             <AiOutlineStar/>
                          
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                          </div>

                      </div>

                      
                  </div>

                  
              </div>

              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                  <div className="mb-2">

                      <div className="flex flex-col items-center justify-center">
                        
                  <div className="w-20 h-20 overflow-hidden bg-[#e2cc24] border-2 rounded-full">
                  <img src="/images/pick-3.JPG" layout="fill" alt="img"
                        className="object-cover object-center w-full h-full" />
                </div>
                          
                          <h5 className="p-5 font-bold text-white uppercase ">BEST QUALITY</h5>
                          <p className="text-sm text-white "> how to draw a burger. A burger is a delicious dish that is a 
                          <br></br> great idea for a drawing.</p>
                                   
                <div className="flex mx-2 text-[#e2cc24] text-[30px]  " >
                             <AiOutlineStar/>
                          
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                          </div>

                      </div>

                      
                  </div>

                  
              </div>

              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                  <div className="mb-2">

                      <div className="flex flex-col items-center justify-center">
                        
                  <div className="w-20 h-20 overflow-hidden bg-[#e2cc24] border-2 rounded-full">
                  <img src="/images/pick-2.JPG" layout="fill" alt="img"
                        className="object-cover object-center w-full h-full" />
                </div>
                          
                          <h5 className="p-5 font-bold text-white uppercase ">24/7 SUPPORT</h5>
                          <p className="text-sm text-white "> how to draw a burger. A burger is a delicious dish that is a 
                          <br></br> <span  className="mx-5 text-center" >great idea for a drawing.</span></p>

                                   
                <div className="flex mx-2 text-[#e2cc24] text-[30px]  " >
                             <AiOutlineStar/>
                          
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                          </div>

                      </div>

                      
                  </div>

                  
              </div>
             
        
          </div></>
  )
}

export default Testimonialpage
