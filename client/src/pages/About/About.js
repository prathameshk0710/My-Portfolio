import React from 'react'
import profilePic from "../../assets/images/aboutImg.png";
import './about.css'

const About = () => {
  return (
    <>
        <div className='about-page about-page-toggle' id='about'>
                <div className='personal-info'>
                    <div className='content'>
                        <p>
                        In a world of bits and bytes, I'm the architect, coding the future and shaping tomorrow's possibilities.
                        </p>
                    </div>
                    <img src={profilePic} alt="picture"/>
                </div>
        </div>
    </>
  )
}

export default About