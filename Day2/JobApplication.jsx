// JobApplicationForm.js

import React, { useState } from 'react';
import '../assets/css/Form.css'
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const JobApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    city: '',
    year: '',
    tenthMarks: '',
    twelfthMarks: '',
    collegeCGPA: '',
    resume: '',
    link: '',
    coverLetter: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting form data
    console.log(formData);
    // Reset form fields
    setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        dateOfBirth: '',
        address: '',
        city: '',
        year: '',
        tenthMarks: '',
        twelfthMarks: '',
        collegeCGPA: '',
        resume: '',
        link: '',
        coverLetter: ''
    });
    navigate('/sucess');
  };

  return (
    <div>
        <UserHeader/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="job-application-form">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="year">Graduate Year:</label>
          <select id="year" name="year" value={formData.year} onChange={handleChange} required>
          <option value="">Select</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tenthMarks">SSLC %:</label>
          <input type="text" id="tenthMarks" name="tenthMarks" value={formData.tenthMarks} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="twelfthMarks">HSC %:</label>
          <input type="text" id="twelfthMarks" name="twelfthMarks" value={formData.twelfthMarks} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="collegeCGPA">College CGPA:</label>
          <input type="text" id="collegeCGPA" name="collegeCGPA" value={formData.collegeCGPA} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="link">Resume Drive Link:</label>
          <input type="text" id="link" name="link" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <button type="submit">Submit Application</button>
          <button type="button"><Link to='/details'>Cancel</Link></button>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default JobApplication;
