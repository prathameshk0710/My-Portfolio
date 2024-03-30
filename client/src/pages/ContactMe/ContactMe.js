import React, { useState } from 'react'
import './contactMe.css'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import RubberBand from "react-reveal/RubberBand";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function ContactMe() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e)=>{
        var button = document.getElementById('form_button');
        button.classList.add('clicked');
        setTimeout(function() {
            button.classList.remove('clicked');
        }, 400);

        e.preventDefault();
        try{
            if(!firstname || !lastname || !email || !phone || !message)
                toast.error("Provide all fields...")
            else{
                const response = await axios.post('/sendEmailRouter/sendEmailController',{
                    firstname, lastname, email, phone, message
                })
                if(response.data.success){
                    toast.success("Let's Connect")
                    setFirstname('');
                    setLastname('');
                    setEmail('');
                    setMessage('');
                    setPhone('');
                }else{
                    toast.error("Failed to connect")
                }
            }
        }catch(err){
            console.log(err);
        }
    }
  return (
    <>
        <div className='capsule' id='contact'>
            <div className='title'>
                <RubberBand>
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Connect Me
                    </h2>
                    <hr />
                    <p className="text-center">
                    Connect with me and let's turn your ideas into reality!
                    </p>
                </RubberBand>
            </div>
            <div className='contactMe-container'>
                <div className='contact-info'>
                    <div className='method-intro'>
                        <h2>Contact Information</h2>
                        <h5>Fill up the form and I will get back to you.</h5>
                    </div>

                    <div className='method'>
                        <div className='mobile'>
                            <FaPhone size={35}/>
                            <p>Mobile: +91 7263801972 </p>
                        </div>
                        <div className='email'>
                            <IoIosMail size={35}/>
                            <p>Personal: prathamesh.k0710@gmail.com</p>
                        </div>
                        <div className='domain'>
                            <MdMarkEmailUnread size={35}/>
                            <p>Domain: kondawale_1201360@nitkkr.ac.in</p>
                        </div>
                    </div>
                </div>
                <div className='contactMe'>
                    <div className='msg-title'>
                        <h3>Send me a message</h3>
                    </div>
                    <div className='form-container'>
                    <form className='contact-form'>
                        <div className='form-name'>
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} required />
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} required />
                        </div>
                        <div className='form-contact'>
                            <input type="tel" id="phone" name="phone" placeholder="Phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" />
                            <input id="email" name="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address" />
                        </div>
                        <div className='form-message'>
                            <textarea id="message" name="message" rows="4" placeholder="Message" value={message} onChange={(e)=>{setMessage(e.target.value)}} required></textarea>
                        </div>
                        <button className='form-button' id='form_button' type="submit" onClick={handleSubmit}>Send Message</button>
                        <ToastContainer/>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactMe