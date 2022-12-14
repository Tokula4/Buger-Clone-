import React from 'react'
import Image from 'next/image'
import {MdOutlineFastfood} from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'
import Button from './Button'

function Menupage() {
  return (
    <>
    <div className="mb-8 text-center ">
    <div  className="items-center justify-center " >
        <img src="/images/title-img.png"  objectFit="contain"    />

        </div>
        <h1 className=" text-white text-[40px]   font-bold " >
        <Button title="  Our Menu   " /> 

        </h1>
         
         
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                  <div className="mb-2">

                      <div className="flex flex-col items-center justify-center">
                        
                  
                  <img src="/images/product-2.png" alt="img"
                        className="object-cover object-center w-full h-full" />
                
                     
                <div className="flex mx-2 text-[#e2cc24] text-[30px]  " >
                             <AiOutlineStar/>
                          
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                          </div>
                          <h5 className="p-5 font-bold text-white uppercase ">Cheeze Buger </h5>
                          <p className="text-sm text-gray-600 ">$50.00</p>
                          <Button title="Add to Cart  " /> 

                      </div>

                      
                  </div>

                  
              </div>

              <div className="p-2 text-gray-800 rounded-lg shadow-md">
                  <div className="">

                      <div className="flex flex-col items-center justify-center">
                        
               
                  <img src="images/product-3.png" alt="img"
                        className="object-cover object-center w-full h-full" />
               
                          
                          <div className="flex mx-2 text-[#e2cc24] text-[30px]  " >
                             <AiOutlineStar/>
                          
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                          </div>
                          <h5 className="p-5 font-bold text-white uppercase ">Cheeze Buger </h5>
                          <p className="text-sm text-gray-600 ">$50.00</p>
                          <Button title="Add to Cart  " /> 

                      </div>

                      
                  </div>

                  
              </div>

              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                  <div className="mb-2">

                      <div className="flex flex-col items-center justify-center">
                        
              
                  <img src="/images/product-6.png" alt="img"
                        className="object-cover object-center w-full h-full" />
                
                           
                <div className="flex mx-2 text-[#e2cc24] text-[30px]  " >
                             <AiOutlineStar/>
                          
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                          </div>
                          <h5 className="p-5 font-bold text-white uppercase ">Cheeze Buger </h5>
                          <p className="text-sm text-gray-600 ">$50.00</p>
                          <Button title="Add to Cart  " /> 

                      </div>

                      
                  </div>

                  
              </div>
             
        
          </div></>

  )
}

export default Menupage
