import React from 'react'
import '../assets/css/UserHeader.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/job_logos.png'


function UserHeader() {
  return (
    <nav>
     
      <img src={logo} height="81.2px" width="91px"></img>
      <div className='menu'>
      <ul>
      <li><Link to='/#'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/#'>Contact</Link></li>
      <li><Link to='/job'>&nbsp;&nbsp;Jobs</Link></li>
      <li><Link to='/login'>Logout</Link></li>
     
      
      </ul>
      </div>
      <div className='auth'>
          <p><Link to='/login'>Login</Link></p>
          <div className='signupbtn'>
          <button><Link to='/signup'>Register</Link></button>
          </div>
         </div>
     
      </nav>
  )
}

export default UserHeader
