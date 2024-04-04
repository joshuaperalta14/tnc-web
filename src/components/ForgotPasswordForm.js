import React, { useState } from 'react';
import './ForgotPasswordForm.css';
import { Link } from 'react-router-dom';
import logo from "../assets/TNC_2020_Logo_Landscape_Group_white.png";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle forgot password submission (e.g., sending reset email)
    console.log('Forgot password email sent to: ${email}');
    // Clear email input after submission
    setEmail('');
  };

  return (
    <div className='background'>
    <div className='wrapper'>
      <form onSubmit={handleSubmit} >
            <img src={logo} alt="Logo" className="logo" />
            <h2>Forgot Password?</h2>
            <h4>Enter your email and we'll send you a link to reset your password</h4>
            <div className="input-box">
                <input type="email" placeholder='Email' required value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </div>

            <Link to="/emailsubmit"> 
              <button type="submit">Submit</button>
            </Link>

            <div className="form-group">
                    <Link to="/login" className="left-link">Back to Login</Link>
                    <Link to="/register" className="right-link">Register Account</Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default ForgotPasswordForm;
