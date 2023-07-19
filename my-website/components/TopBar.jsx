"use client"
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'

const TopBar = () => {

const [isOpen, setOpen] = useState(false)

  return (
    <nav className="flex justify-between p-5 bg-[#1B1B1B] bg-opacity-25 fixed top-0 left-0 w-full backdrop-blur">
      <div className="flex items-center ml-10 text-gray-200 text-3xl font-medium"><span class="text-teal-500 ">My</span><span>Web Site</span></div>
      <div class="">
        <ul className={`${isOpen ? 
          'flex md:hidden flex-col justify-center gap-4 p-9 text-gray-200 right-0 font-medium text-2xl absolute bg-teal-500 top-0 h-screen'
           : 
          'hidden md:flex text-gray-200 text-xl gap-5 mt-5 mb-5  right-0'}`}>
          <li class="relative w-max one hover:scale-110 font-semibold cursor-pointer">
           <a href="#Tecnologies">Tech Stack</a>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-red-400"></span>
           </li>
          <li class=" relative w-max one hover:scale-110 font-semibold cursor-pointer">
          <a href="#Projects">Projects</a>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-red-400"></span>
           </li>
          <li class=" relative w-max one hover:scale-110 font-semibold cursor-pointer">
          <a href="#FAQs">FAQs</a>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-red-400"></span>
           </li>
          <li class=" relative w-max one hover:scale-110 font-semibold cursor-pointer">
          <a href="#Getintouch">Get In Touch</a>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-red-400"></span>
           </li>
          {/* <li class="relative w-max one hover:scale-110 font-semibold cursor-pointer">
          <a href="#Tecnologies">Tech Stack</a>
           <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-red-400"></span>
           </li> */}
        </ul>
      </div>
        <div class="text-[#E5E7EB] mr-5 block md:hidden"
        // class={`${isOpen ?"text-red-600 mr-5 block md:hidden":"text-teal-300"}`}
        >
        <Hamburger toggled={isOpen} toggle={setOpen}/>
        </div>
    </nav>
  );
}

export default TopBar