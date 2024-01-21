import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Profile from './section/profile/Profile'
import About from './section/about/About'
import Education from './section/education/Education'
import Skill from './section/skills/Skill'
// import Background from '../src/assets/images/background.svg'

const RouteLayout = () => {
  return (
    <section>
        <div className="container" style={{backgroundImage: `url("src/assets/images/background.svg")`}}>
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