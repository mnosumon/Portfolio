import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'

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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, delectus ab deserunt voluptatibus porro modi sequi possimus vel dicta aspernatur ducimus ipsa ratione eum perspiciatis provident assumenda iste aut! Quae enim inventore expedita iure ducimus dolorum maiores delectus, incidunt placeat.</p>
                  <Link>View my projects</Link>
                </div>
            </div>
            <div className="profile_pictue">
                <div className="profile_images">
                  <img src="src/assets/images/Nuruddin Standerd.png" alt="picture" />
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