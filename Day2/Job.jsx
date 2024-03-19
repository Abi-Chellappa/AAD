import React, { useState } from 'react';
import '../../assets/css/Job.css';
import UserHeader from '../../components/UserHeader';
import SoftwareEngineer from '../../assets/images/software-engineer.jpg';
import DataScientist from '../../assets/images/data-scientist.jpg';
import ProjectManager from '../../assets/images/project-manager.jpg';
import ProductManager from '../../assets/images/product-manager.jpg';
import SalesRepresentative from '../../assets/images/sales-representative.jpg';
import MarketingManager from '../../assets/images/marketing-manager.jpg';
import Footer from '../../components/Footer';

const jobs = [
  {
    title: "Software Engineer",
    image: SoftwareEngineer,
    details:
      "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "2",
    link: "#",
  },
  {
    title: "Data Scientist",
    image: DataScientist,
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "3",
    link: "details",
  },
  {
    title: "Project Manager",
    image: ProjectManager,
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "1",
    link: "#",
  },
  {
    title: "Product Manager",
    image: ProductManager,
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    link: "#",
  },
  {
    title: "Sales Representative",
    image: SalesRepresentative,
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    link: "#",
  },
  {
    title: "Marketing Manager",
    image: MarketingManager,
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "1",
    link: "#",
  },
];

const Job = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const createJobListingCards = () => {
    const filteredJobs = jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredJobs.length === 0 && searchTerm.trim() !== '') {
      return (
        <div className="no-results">
          No results found for "{searchTerm}"
        </div>
      );
    }

    return filteredJobs.map((job, index) => (
      <div key={index} className="job">
        <img src={job.image} alt={job.title} />
        <h3 className="job-title">{job.title}</h3>
        <div className="details">{job.details}</div>
        <a href={job.link} className="details-btn">More Details</a>
      </div>
    ));
  };
  return (
    <div>
      <UserHeader/><br/><br/><br/><br/><br/>
    <div className="jobs-list-container">
      <h2>{jobs.length} Jobs</h2>
      <input 
        className="job-search" 
        type="text" 
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="jobs">
        {createJobListingCards()}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Job;
