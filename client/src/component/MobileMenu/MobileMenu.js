import React from 'react'
import './mobilemMenu.css'
import { FaComments } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaGraduationCap, FaPhoneVolume } from "react-icons/fa6";
import { MdWork, MdAssignment } from "react-icons/md";
import { HiServerStack } from "react-icons/hi2";
import Fade from 'react-reveal/Fade';

function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

function MobileMenu({toggle}) {
    return (
    <>
        {toggle ? (
            <>
                <div className={"mobile-menu-toggle"}>
                    <Fade left>
                    <div className="menu-item" onClick={() => scrollToElement('home')} >
                            <IoIosHome size={25}/>
                            <p>Home</p>
                    </div>
                    <div className="menu-item" onClick={() => scrollToElement('about')} >
                        <FaComments size={25}/>
                        <p>About</p>
                    </div>
                    <div className="menu-item" onClick={() => scrollToElement('education')}>
                        <FaGraduationCap size={25}/>
                        <p>Education</p>
                    </div>
                    <div className="menu-item" onClick={() => scrollToElement('experience')}>
                        <MdWork size={25}/>
                        <p>Experience</p>
                    </div>
                    <div className="menu-item" onClick={() => scrollToElement('ads')}>
                        <MdAssignment size={25}/>
                        <p>Projects</p>
                    </div>
                    <div className="menu-item" onClick={() => scrollToElement('techstack')} >
                        <HiServerStack size={25}/>
                        <p>Tech Stack</p>
                    </div>
                    <div className="menu-item" onClick={() => scrollToElement('contact')}>
                            <FaPhoneVolume size={25}/>
                            <p>Contact Me</p>
                    </div>
                    </Fade>
                </div>
            </>
        ):(
            <>
                <div className='mobile-menu'>
                </div>
            </>
        )}
    </>
  )
}

export default MobileMenu