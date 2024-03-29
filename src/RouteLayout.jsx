import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Profile from './section/profile/Profile'
import About from './section/about/About'
import Education from './section/education/Education'
import Skill from './section/skills/Skill'
import Background from '../src/assets/images/background.svg'
import Projects from './section/projects/projects'
import Contact from './section/contacts/Contact'
import Footer from './section/footer/Footer'

const RouteLayout = () => {
  return (
    <section>
        <div className="container" style={{ backgroundImage: `url(${Background})` }}>
            <Navbar/>
            <Profile/>
            <About/>
            <Education/>
            <Skill/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    </section>
  )
}

export default RouteLayout