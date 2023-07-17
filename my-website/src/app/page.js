import React from 'react'
import "@/app/globals.css"

import TopBar from "../../components/TopBar"
import Portfolio from "../../components/Portfolio"
const page = () => {
  return (
    <div class="bg-black scroll-smooth">
      <TopBar/>
      <Portfolio/>
    </div>
    
  )
}

export default page