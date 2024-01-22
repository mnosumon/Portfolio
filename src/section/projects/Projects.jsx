import React from 'react'
import './projects.css'
import Agency from '../../../src/assets/images/projectGallary/agency.png'
import Blog from '../../../src/assets/images/projectGallary/blog.png'
import Finsweet from '../../../src/assets/images/projectGallary/finsweet.png'
import Foodtime from '../../../src/assets/images/projectGallary/foodTime.png'
import Resturent from '../../../src/assets/images/projectGallary/resturent.png'
import Orebi from '../../../src/assets/images/projectGallary/orebi.png'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section id='project'>
        <div className="projects">
            <h2 className='section_heading'>my projects</h2>
            <div className="project">
                <div className="agency_wrapper">
                    <div className="agency">
                        <div className="agencyImage">
                            <img src={Agency} alt="AgencyPicture"/>
                        </div>
                        <div className="liveDemo">
                            <Link >Live Demo</Link>
                        </div>
                    </div>
                    <div className="description">
                        <h4>Agency project build with HTML CSS Bootstrap Responsive</h4>
                    </div>
                </div>
                <div className="agency_wrapper">
                    <div className="agency">
                        <img src={Agency} alt="AgencyPicture" />
                    </div>
                    <div className="description">
                        <h4>Agency project build with HTML CSS Bootstrap Responsive</h4>
                    </div>
                </div>
                <div className="agency_wrapper">
                    <div className="agency">
                        <img src={Agency} alt="AgencyPicture" />
                    </div>
                    <div className="description">
                        <h4>Agency project build with HTML CSS Bootstrap Responsive</h4>
                    </div>
                </div>
                {/* <div className="agency">
                    <img src={Blog} alt="BlogPicture" />
                </div>
                <div className="agency">
                    <img src={Finsweet} alt="FisweetPicture" />
                </div>
                <div className="agency">
                    <img src={Foodtime} alt="foodtimePicture" />
                </div>
                <div className="agency">
                    <img src={Resturent} alt="ResturentPicture" />
                </div>
                <div className="agency">
                    <img src={Orebi} alt="OrebiPicture" />
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Projects