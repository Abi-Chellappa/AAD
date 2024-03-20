import React, { useState } from 'react';
import '../assets/css/JobPost.css';
import AdminSidebar from '../components/AdminSidebar';

const JobPostForm = () => {
  const [jobRole, setJobRole] = useState('');
  const [company, setCompany] = useState('');
  const [salary, setSalary] = useState('');
  const [shift, setShift] = useState('');
  const [education, setEducation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or display it
    console.log('Submitted Data:', { jobRole, company, salary, shift, education });
  };

  return (
    <div>
        <AdminSidebar/>

        <div className='post_header'><br/><br/><br/>
        
            <div className='post_h'>
            <h2>Job Post</h2>
            </div>
    <div className="job-post-form-container">
     
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobRole">Job Role:</label>
          <input
            type="text"
            id="jobRole"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="shift">Shift:</label>
          <input
            type="text"
            id="shift"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <input
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
            />
        </div>
        <button className='post_but' type="submit">Submit</button>
      </form>
    </div>
    </div>
            </div>
  );
};

export default JobPostForm;
