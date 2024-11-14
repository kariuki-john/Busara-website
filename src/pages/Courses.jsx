import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { NavLink } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export const Courses = () => {
  return (
    <>
      <section className='courses bg-headercolor py-16 '>
        <div className='w-4/5 m-auto animate-slide-in-from-right'>
          <div className='heading mb-16 '>
            <h1 className='text-3xl text-white font-extrabold flex align-center justify-center '>
           ALL OUR QUALIFICATIONS ARE ACCREDITED
            </h1>
            <span className='text-sm text-white mt-2 block flex align-center justify-center'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
            {courses.map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                 
                </div>
                <div className='text p-3'>
                  <div className='flex justify-between items-center'>
                   
                  </div>
                  <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
                  
                </div>
                <div to='/' className='flex items-center justify-between border-t border-gray-200 p-3'>
                  <span className='text-sm text-primary'>Based on Duration</span>
                  <NavLink className='text-[14px] ml-2 flex items-center'>
                    See more <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
