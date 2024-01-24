import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
import BannerImage from '../../../src/assets/images/banner.png'

const Profile = () => {
  return (
    <section id='profile'>
        <div className="profile">
            <div className="prifile_content">
                <div className="profile_heading">
                  <span>hi, I'm </span>
                  <h4>md nuruddin osman,</h4>
                </div>
                <div className="profile_title">
                  <h3>i'm a junior web developer</h3>
                </div>
                <div className="profile_description">
                  <p>To establish myself as a Front-end Developer in different local, and international by offering the value/benefit of Brand, Visualization, and Promotion. Eager to contribute creativity and technical skills to dynamic projects through responsive and visually appealing web interfaces. Want to establish myself as a Sr. Web Developer within 4-5 years.
                  </p>
                  <Link>View my projects</Link>
                </div>
            </div>
            <div className="profile_pictue">
                <div className="profile_images">
                  <img src={BannerImage} alt="picture" />
                </div>
            </div>
        </div>
        <div className="profile_cv">
          <Link>Download CV</Link>
        </div>
    </section>
  )
}

export default Profile