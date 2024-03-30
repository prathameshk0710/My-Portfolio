import React, { useState } from 'react'
import profilePic from "../../assets/images/profile.png";
import { Link } from 'react-scroll';
import { FaComments } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaGraduationCap, FaPhoneVolume } from "react-icons/fa6";
import { MdWork, MdAssignment } from "react-icons/md";
import { HiServerStack } from "react-icons/hi2";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';

import './menus.css'

function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
const Menus = ({toggle}) => {
    console.log(toggle)
    console.log(2)
  return (
    <>
    {toggle? (
        <>
        <div>
            <div className='navbar-profile-pic'>
                <p>
                    <Zoom>
                        <img src={profilePic} alt="profile picture"/>
                    </Zoom>
                </p>
            </div>
            
            <div className='nav-items'>
            <Fade left> 
                <div className="nav-link" onClick={() => scrollToElement('home')} >
                        <IoIosHome size={25}/>
                        <p>Home</p>
                </div>
            {/* </Fade>
            <Fade> */}
                <div className="nav-link" onClick={() => scrollToElement('about')} >
                    <FaComments size={25}/>
                    <p>About</p>
                </div>
                <div className="nav-link" onClick={() => scrollToElement('education')}>
                    <FaGraduationCap size={25}/>
                    <p>Education</p>
                </div>
                <div className="nav-link" onClick={() => scrollToElement('experience')}>
                    <MdWork size={25}/>
                    <p>Experience</p>
                </div>
                <div className="nav-link" onClick={() => scrollToElement('ads')}>
                    <MdAssignment size={25}/>
                    <p>Projects</p>
                </div>
                <div className="nav-link" onClick={() => scrollToElement('techstack')} >
                    <HiServerStack size={25}/>
                    <p>Tech Stack</p>
                </div>
                <div className="nav-link" onClick={() => scrollToElement('contact')}>
                        <FaPhoneVolume size={25}/>
                        <p>Contact Me</p>
                </div>
            </Fade>
            </div>
        </div>
        </>
        
    ):(
        <>
            <div className='nav-items nav-items-toggle'>
                <Fade left>
                <div className="nav-link">
                    <IoIosHome size={28} title='Home'/>
                </div>

                <div className="nav-link">
                    <FaComments size={28} title='About'/>
                </div>

                <div className="nav-link">
                    <FaGraduationCap size={28} title='Education'/>
                </div>

                <div className="nav-link">
                    <MdWork size={28} title='Work Experience'/>
                </div>

                <div className="nav-link">
                    <MdAssignment size={28} title='Projects'/>
                </div>

                <div className="nav-link">
                    <HiServerStack size={28} title='Tech Stack'/>
                </div>

                <div className="nav-link">
                    <FaPhoneVolume size={28} title='Contact Me'/>
                </div>
                </Fade>
            </div>
        </>
    )}
        
    </>
  )
}
export default Menus