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
                {/* ====================Agency======================== */}
                <div className="project_wrapper">
                    <div className="project_image_wrapper">
                        <div className="projectImage">
                            <img src={Agency} alt="Agency Picture"/>
                        </div>
                        <div className="liveDemo">
                            <div className="links">
                                <Link to="https://agencybts.netlify.app/">Live Demo</Link>
                                <Link to="https://github.com/mnosumon/agency">Github</Link>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h4>Agency project build with HTML CSS Bootstrap Responsive</h4>
                    </div>
                </div>
                {/* ====================Blog======================== */}
                <div className="project_wrapper">
                    <div className="project_image_wrapper">
                        <div className="projectImage">
                            <img src={Blog} alt="Blog Picture"/>
                        </div>
                        <div className="liveDemo">
                            <div className="links">
                                <Link to="https://mnosumon.github.io/menualResponsive/">Live Demo</Link>
                                <Link to="https://github.com/mnosumon/menualResponsive">Github</Link>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h4>Blog project build with HTML CSS Responsive</h4>
                    </div>
                </div>
                {/* ====================Finsweet======================== */}
                <div className="project_wrapper">
                    <div className="project_image_wrapper">
                        <div className="projectImage">
                            <img src={Finsweet} alt="Finsweet Picture"/>
                        </div>
                        <div className="liveDemo">
                            <div className="links">
                                <Link to="https://mnosumon.github.io/finsweet/">Live Demo</Link>
                                <Link to="https://github.com/mnosumon/finsweet">Github</Link>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h4>Finsweet project build with HTML CSS </h4>
                    </div>
                </div>
                {/* ====================Foodtime======================== */}
                <div className="project_wrapper">
                    <div className="project_image_wrapper">
                        <div className="projectImage">
                            <img src={Foodtime} alt="FoodTime Picture"/>
                        </div>
                        <div className="liveDemo">
                            <div className="links">
                                <Link to="https://mnosumon.github.io/FoodTime/">Live Demo</Link>
                                <Link to="https://github.com/mnosumon/FoodTime">Github</Link>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h4>FoodTime project build with HTML CSS Bootstrap Responsive</h4>
                    </div>
                </div>
                {/* ====================Resturent======================== */}
                <div className="project_wrapper">
                    <div className="project_image_wrapper">
                        <div className="projectImage">
                            <img src={Resturent} alt="Resturent Picture"/>
                        </div>
                        <div className="liveDemo">
                            <div className="links">
                                <Link to="https://mnosumon.github.io/Resturent/">Live Demo</Link>
                                <Link to="https://github.com/mnosumon/Resturent">Github</Link>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h4>Resturent project build with HTML CSS Responsive</h4>
                    </div>
                </div>
                {/* ====================Orebi======================== */}
                <div className="project_wrapper">
                    <div className="project_image_wrapper">
                        <div className="projectImage">
                            <img src={Orebi} alt="Orebi Picture"/>
                        </div>
                        <div className="liveDemo">
                            <div className="links">
                                <Link to="https://orebie.netlify.app/">Live Demo</Link>
                                <Link to="https://github.com/mnosumon/orebi">Github</Link>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h4>Orebi project build with HTML React.Js JavaScript tailwindCss Responsive</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects