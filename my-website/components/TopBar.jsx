"use client"
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'

const TopBar = () => {

const [isOpen, setOpen] = useState(false)

  return (
    <nav className="flex justify-between p-5 bg-[#1B1B1B] bg-opacity-85">
      <div className="flex items-center ml-10 text-gray-200 text-3xl font-medium"><span class="text-teal-500 ">My</span><span>Web Site</span></div>
      <div class="">
        <ul className={`${isOpen ? 
          'flex md:hidden  flex-col justify-center gap-4 p-5 text-gray-200 right-0 text-xl absolute top-1/2 -translate-y-1/2 bg-[#0e0e0e]  h-full  bg-opacity-80'
           : 
          'hidden md:flex text-gray-200 text-xl gap-5 mt-5 mb-5  right-0'}`}>
          <li class="relative w-max one hover:opacity-75 cursor-pointer">
           <span>Tech Stack</span>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-green-400"></span>
           </li>
          <li class=" relative w-max one hover:opacity-75 cursor-pointer">
           <span>Projects</span>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-green-400"></span>
           </li>
          <li class=" relative w-max one hover:opacity-75 cursor-pointer">
           <span>Testimonials</span>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-green-400"></span>
           </li>
          <li class=" relative w-max one hover:opacity-75 cursor-pointer">
           <span>FAQs</span>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-green-400"></span>
           </li>
          <li class="relative w-max one hover:opacity-75 cursor-pointer">
           <span>Get In Touch</span>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-green-400"></span>
           </li>
        </ul>
      </div>
        <div class="text-[#E5E7EB] mr-5 block md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen}/>
        </div>
    </nav>
  );
}

export default TopBar