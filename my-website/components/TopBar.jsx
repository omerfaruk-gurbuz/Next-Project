"use client"
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'

const TopBar = () => {

const [isOpen, setOpen] = useState(false)

  return (
    <nav className="flex justify-between p-5 bg-[#1B1B1B] bg-opacity-85">
      <div className="flex items-center ml-10 text-gray-200 text-3xl font-medium"><span class="text-teal-500 ml-1">My</span><span>Web Site</span></div>
      <div className=" hidden md:block">
        <ul className={`${isOpen ? 
          'block md:hidden text-gray-200 bg-red-500 '
           : 
          'flex  text-gray-200 text-xl gap-5 mt-5 mb-5 mr-10'}`}>
          <li class=" relative w-max one hover:opacity-75">
           <span>Tech Stack</span>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-green-400"></span>
           </li>
          <li class=" relative w-max one hover:opacity-75">
           <span>Projects</span>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-green-400"></span>
           </li>
          <li class=" relative w-max one hover:opacity-75">
           <span>Testimonials</span>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-green-400"></span>
           </li>
          <li class=" relative w-max one hover:opacity-75">
           <span>FAQs</span>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-green-400"></span>
           </li>
          <li class="relative w-max one hover:opacity-75">
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