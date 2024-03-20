// Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import '../../assets/css/Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate('/signup');
  }
  const formHolder = (e) => {
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(email.length===0 || password.length===0)
    {
      alert("Enter all the fields");
    }
    else if(!regex.test(email))
    {
      alert("Enter a valid Email Address");
    }
    else if(password.length<8)
    {
      alert("Enter atleast 8 character in passeord");
    }
    else if(email=="admin@gmail.com" && password=="admin@123")
    {
      navigate('/dashboard');
    }
    else{
      navigate('/');
    }

  };

  return (
    <div className='container_login'>
      <div className='form-box'>
      <h1 id="title"> Sign in</h1>
       <form onSubmit={formHolder}>
         <div className="input-group">
              <div className='input-field' id="nameField">
                <div className='icon'>
                <MdEmail />
                </div>
                 <input type="email12" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div> 
              
              <div className='input-field'>
                <div className='icon'>
              <RiLockPasswordFill />
              </div>
               <input type="password12" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              </div> 
             {/* <p>Forget password<a href='#'> Click Here!</a></p>*/}
              <div className='btn-field'>
               <button type="submit" id="sibtn">Sign in</button>
               {/*<button type="button" id="subtn" className='disable' onClick={handleSignUpClick}>Sign up</button>*/}
              </div>
              <div className='para-field'>
                <p>Don't have an account?<span><Link to='/signup'> Sign up</Link></span></p>
              </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
