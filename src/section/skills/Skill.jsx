import React from 'react'
import './skill.css'

const Skill = () => {
  return (
    <section>
        <div className="skils">
            <div className="section_heading">
                <h2>Skills</h2>
                <p className='skill_title'>I am mentioning  my conception of the following topics</p>
            </div>
            
            <div className="skill_description">
                <ul className='skill_list'>
                    <li className="skill_item">HTML</li>
                    <li className="skill_item">JavaScript</li>
                    <li className="skill_item">ReactJs</li>
                    <li className="skill_item">ReduxJs</li>
                </ul>
                <ul className='skill_list'>
                    <li className="skill_item">CSS</li>
                    <li className="skill_item">Bootstrap</li>
                    <li className="skill_item">TailwindCss</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Skill