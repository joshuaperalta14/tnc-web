import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';
import logo from "../assets/TNC_2020_Logo_Landscape_Group_white.png";

const ContactPage = () => {
  return (
    <div className='background'>
    <div className='wrapper'>
        <form action="">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Contact Us</h1>
            <h3>Fill out the details below so that we can contact you</h3>
            <div className="input-box">
                <input type="text" placeholder='Name' required />
            </div>
            <div className="input-box">
                <input type="email" placeholder='Email' required />
            </div>
            <div className="input-box">
                <input type="phone" placeholder='Phone' required />
            </div>

            <Link to="/contactsubmit"> 
              <button type="submit">Submit</button>
            </Link>

            <div className="contact-link">
            <h3 className="back-to-home"><Link to="/" className="link">Back to Home</Link></h3>
            </div>
        </form>
    </div>
    </div>
  )
}

export default ContactPage;

