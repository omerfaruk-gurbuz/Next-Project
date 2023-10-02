"use client"
import React from 'react'

const Portfolio = () => {
  return (
    <div class="flex flex-col mt-40 bg-[#1B1B1B] text-white  items-center">
      <div class="flex w-1/2 sm:w-1/4 h-1/4 justify-center items-center m-auto mb-10">
        <img class="rounded-full" src="new-my-website/components/About/photo-profil.jpg" alt="" />
      </div>
      <div class="text-3xl md:text-5xl text-center mx-3 mb-10">I'm a web-mobile developer based in React and Django</div>
      <div class="mb-10">Scroll down</div>
      <div class="scroll"></div>
    </div>
  )
}

export default Portfolio