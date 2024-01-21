import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Profile from './section/profile/Profile'
import About from './section/about/About'
import Education from './section/education/Education'
import Skill from './section/skills/Skill'

const RouteLayout = () => {
  return (
    <section>
        <div className="container">
            <Navbar/>
            <Profile/>
            <About/>
            <Education/>
            <Skill/>
        </div>
    </section>
  )
}

export default RouteLayout