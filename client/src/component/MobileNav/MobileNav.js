import React, { useState } from 'react'
import './mobileNav.css';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import MobileMenu from '../MobileMenu/MobileMenu';
function MobileNav() {
    
    const [toggle, setToggle] = useState(false);
    const handleToggle = () =>{
        setToggle(!toggle)
    }

  return (
    <>
        <div className='mobile-navbar'>
            <div className='mobile-navbar-arrow' onClick={handleToggle}>
                {
                    toggle?<MdKeyboardDoubleArrowLeft size={70} color='white'/>: <MdKeyboardDoubleArrowRight size={70} color='white'/>
                }
            </div>
            <div className='mobile-menu-container'>
                <MobileMenu toggle={toggle}/>
            </div>
        </div>
    </>
  )
}

export default MobileNav