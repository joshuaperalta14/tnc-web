import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import logo from "../assets/TNC_2020_Logo_Landscape_Group_white.png";
import { FaUser, FaLock } from "react-icons/fa"

const LoginForm = () => {
  return (
    <div className='background'>
    <div className='wrapper'>
        <form action="">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <Link to="/forgotpassword">Forgot password?</Link>
            </div>

            <Link to="/dashboard"> 
              <button type="submit">Login</button>
            </Link>

            <div className="register-link">
                <p>Don't have an account?&nbsp;
                    <Link to="/register">Register now</Link>
                </p>
                <h3 style={{ marginTop: '30px'}}><Link to="/">Back to Home</Link>
                </h3>
            </div>
        </form>
    </div>
    </div>
  )
}

export default LoginForm;
