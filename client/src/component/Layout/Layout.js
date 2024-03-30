import React, {useState} from "react";
import Home from "../../pages/Home/Home.js"
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ScrollToTop from "react-scroll-to-top";
import './layout.css'
import Menus from "../Menus/Menus.js";
import About from "../../pages/About/About.js";
import TechStack from "../../pages/TechStack/TechStack.js";
import Projects from "../../pages/Projects/Projects.js";
import Education from "../../pages/Education/Education.js";
import WorkExp from "../../pages/WorkExp/WorkExp.js";
import ContactMe from "../../pages/ContactMe/ContactMe.js";
import MobileNav from "../MobileNav/MobileNav.js";
import { linkedinIcon, gitHubIcon, instagramIcon, facebookIcon, whatsappIcon } from "../../assets/icons/icons.js";
import Fade from 'react-reveal/Fade';

const Layout = ()=>{
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }
    return(
        <>
            <div className="sidebar-section">
                <div className={ toggle ? "sidebar-toggle sidebar":"sidebar"}>
                    <div className="sidebar-toggle-icons">
                        <p onClick={handleToggle}>
                            {
                                toggle?(<MdOutlineKeyboardDoubleArrowLeft size={40}/>):(<MdOutlineKeyboardDoubleArrowRight size={40}/>)
                            }
                        </p>
                        <Menus toggle = {toggle}/>
                    </div>
                </div>

                <div className="all-container">
                    <MobileNav/>
                    <div className="Container">
                        <Fade top>
                        <div className="social-icons">
                            <a className="linkedIn" href="www.linkedin.com/in/prathamesh-kondawale-b90462244" target="_blank">
                                <img src={linkedinIcon} alt="linkedIn"></img>
                            </a>
                            <a className="whatsApp" href="https://api.whatsapp.com/send?phone=7263801972" target="_blank">
                                <img src={whatsappIcon} alt="whatsapp"></img>
                            </a>
                            <a className="gitHub" href="https://github.com/prathameshk0710" target="_blank">
                                <img src={gitHubIcon} alt="gitHub"></img>

                            </a>
                            <a className="instagram" href="https://www.instagram.com/prathamesh.k0710?igsh=MWthZXdvbmtycmZzZQ%3D%3D&utm_source=qr" target="blank">
                                <img src={instagramIcon} alt="instagram"></img>

                            </a>
                            <a className="facebook" href="https://www.facebook.com/prathamesh.kondawale624" target="_blank">
                                <img src={facebookIcon} alt="faacebook"></img>

                            </a>
                        </div>
                        </Fade>
                        <Home/>
                        <About/>
                    </div>
                    <div className={toggle ? "other-container-toggle other-container":"other-container"}>
                        <Education/>
                        <WorkExp/>
                        <Projects/>
                        <TechStack/>
                        <ContactMe/>
                    <hr/>
                    <div className="footer">
                        <h6 className="text-center">
                            Designed & developed by Prathamesh Kondawale ©️ 2024
                        </h6>
                    </div>
                    </div>
                </div>
                <ScrollToTop smooth color="#fff" style={{backgroundColor: '#1e1e2c', boxShadow:'0 7px 10px rgba(0, 0, 0, 0.8)'}}/>
            </div>
        </>
    )
}

export default Layout