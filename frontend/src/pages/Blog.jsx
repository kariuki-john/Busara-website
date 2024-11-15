import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { NavLink } from "react-router-dom"

export const Blog = () => {
  return (
    <>
      <section className='courses '>
        <div className='w-4/5 m-auto'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>
              We Share <br />
              Our Thoughts On Design
            </h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-3 gap-5 md:grid-cols-1'>
            {courses.slice(0, 3).map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                </div>
                <div className='text p-3'>
                 
                  <NavLink to='/single-blog'>
                    <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
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
