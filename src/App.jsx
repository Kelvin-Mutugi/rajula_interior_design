import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/nav_bar"
import Hero from "./components/hero_section"
import Services from "./components/services_section"
import RecentProjects from "./components/recent_projects"
import AboutUs from "./components/about_us"


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <RecentProjects />
      <AboutUs />




    </>
  )
}

export default App
