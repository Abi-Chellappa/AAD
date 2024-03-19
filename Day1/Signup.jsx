import React, { useState } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";



import '../../assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
   const navigate=useNavigate();
  const handleSignUpClick= () => {
        navigate("/login");
  }
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[phoneno,setPhoneno]=useState('');
  const formHolder = (e) =>{
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(name.length===0 || email.length===0 || password.length===0 || phoneno===0)
    {
      alert("Enter all the fields");
    }
    if(!regex.test(email))
    {
      alert("Enter a valid Email Address");
    }
    if(password.length<8)
    {
      alert("Enter atleast 8 character in passeord");
    }
    else{
      navigate('/');
    }
  }
  return (
    <div className='container_signup'>
    <div className='form-box2'>
    <h1 id="title2"> Sign Up</h1>
     <form onSubmit={formHolder}>
       <div className="input-group2">
            <div className='input-field2' id="nameField2">
              <div className='icon2'>
              <FaUserAlt/>
              </div>
               <input type="username" placeholder='Enter UserName'  value={name} onChange={(e) => setName(e.target.value)}/>
            </div> 
            
            <div className='input-field2' id="nameField2">
              <div className='icon2'>
              <MdEmail />
              </div>
               <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div> 
            
            <div className='input-field2'>
              <div className='icon2'>
            <RiLockPasswordFill />
            </div>
             <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            </div> 
            <div className='input-field2'>
              <div className='icon2'>
              <FaPhoneAlt />

            </div>
             <input type="tel" placeholder='Enter PhoneNo' value={phoneno} onChange={(e) => setPhoneno(e.target.value)} /><br />
            </div> 
          
            <div className='btn-field2'>
            <button type="submit" id="subtn2">Sign up</button>
            <button type="button" id="sibtn2" className='disable2' onClick={handleSignUpClick}>Sign in</button>
             
            </div>
      
      </div>
    </form>
    </div>
  </div>
  )
}

export default Signup
