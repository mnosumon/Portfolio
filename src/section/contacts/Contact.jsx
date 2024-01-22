import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { PiTelegramLogoLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id='contact'>
        <div className="contact">
            <h2 className='section_heading'>contact me</h2>
            <div className="contacts">
                <div className="contact_form">
                    <form action="communication" className='form'>
                        <input className='inputField' type="text" name='name' placeholder='Type your name' required />
                        <input className='inputField' type="email" name='email' placeholder='Type your email' required />
                        <input className='inputField' type="text" name='subject' placeholder='Subject'/>
                        <textarea className='inputField' name="message" id="areaField" spellCheck="false"  placeholder='Comments' rows="7"></textarea>
                        <button type='submit' className='sandBtn'>Sand message</button>
                    </form>
                </div>
                <div className="contact_icon">
                    <div className="email">
                        <div className="email_wrapper">
                            <Link className='email_icons'>
                                <MdOutlineMail className='email_icon'/>
                            </Link>
                        </div>
                        <h3>Email</h3>
                        <h5>emnos124@gmail.com</h5>
                    </div>
                    <div className="email">
                        <div className="email_wrapper">
                            <Link className='email_icons'>
                                <RiMessengerLine className='email_icon'/>
                            </Link>
                        </div>
                        <h3>Messenger</h3>
                        <h5>Md Nuruddin Osman Sumon</h5>
                    </div>
                    <div className="email">
                        <div className="email_wrapper">
                            <Link className='email_icons'>
                                <PiTelegramLogoLight className='email_icon'/>
                            </Link>
                        </div>
                        <h3>Telegram</h3>
                        <h5>@Sumon2121</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact