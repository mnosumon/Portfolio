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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, delectu al;dfjs d;lasfjkldasf</p>
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