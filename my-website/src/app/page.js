import React from 'react'
import "@/app/globals.css"

import TopBar from "../../components/TopBar"
import Portfolio from "../../components/Portfolio"
import Technologies from "../../components/Technologies"
import Projects from "../../components/Projects"
const page = () => {
  return (
    <div class="bg-[#1B1B1B]">
      <TopBar/>
      <Portfolio/>
      <Technologies/>
      <Projects/>
    </div>
    
  )
}

export default page