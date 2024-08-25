import React, { useState } from "react";
import "./Post.css";

const Post = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    minSalary: "",
    maxSalary: "",
    jobLocation: "",
    salaryType: "",
    experienceLevel: "",
    jobPostingDate: "",
    skills: "",
    companyLogo: "",
    experienceType: "",
    jobDescription: "",
    jobPostedBy: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Job posted successfully!");
        setFormData({
          jobTitle: "",
          companyName: "",
          minSalary: "",
          maxSalary: "",
          jobLocation: "",
          salaryType: "",
          experienceLevel: "",
          jobPostingDate: "",
          skills: "",
          companyLogo: "",
          experienceType: "",
          jobDescription: "",
          jobPostedBy: "",
        });
      } else {
        alert("Failed to post job.");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Error posting job.");
    }
  };

  return (
    <div className="job-form-container">
      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Web Developer"
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Ex: Microsoft"
          />
        </div>

        <div className="form-group">
          <label htmlFor="minSalary">Minimum Salary</label>
          <input
            type="text"
            id="minSalary"
            value={formData.minSalary}
            onChange={handleChange}
            placeholder="$20k"
          />
        </div>

        <div className="form-group">
          <label htmlFor="maxSalary">Maximum Salary</label>
          <input
            type="text"
            id="maxSalary"
            value={formData.maxSalary}
            onChange={handleChange}
            placeholder="$120k"
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobLocation">Job Location</label>
          <input
            type="text"
            id="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            placeholder="Ex: New York"
          />
        </div>

        <div className="form-group">
          <label htmlFor="salaryType">Salary Type</label>
          <select
            id="salaryType"
            value={formData.salaryType}
            onChange={handleChange}
          >
            <option value="">Choose your salary</option>
            <option value="Hourly">Hourly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="experienceLevel">Experience Level</label>
          <select
            id="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
          >
            <option value="">Choose your experience</option>
            <option value="NoExperience">No Experience</option>
            <option value="Internship">Internship</option>
            <option value="Work remotely">Work remotely</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="jobPostingDate">Job Posting Date</label>
          <input
            type="date"
            id="jobPostingDate"
            value={formData.jobPostingDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Required Skill Sets:</label>
          <select
            id="skills"
            value={formData.skills}
            onChange={handleChange}
          >
            <option value="Select">Select...</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Html">Html</option>
            <option value="Css">Css</option>
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Redux">Redux</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="companyLogo">Company Logo</label>
          <input
            type="text"
            id="companyLogo"
            value={formData.companyLogo}
            onChange={handleChange}
            placeholder="Paste your company logo URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="experienceType">Experience Type</label>
          <select
            id="experienceType"
            value={formData.experienceType}
            onChange={handleChange}
          >
            <option value="">Choose your experience</option>
            <option value="NoExperience">No Experience</option>
            <option value="Internship">Internship</option>
            <option value="Work remotely">Work remotely</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            placeholder="Mollit in laborum tempor Lorem incididunt irure..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobPostedBy">Job Posted By</label>
          <input
            type="email"
            id="jobPostedBy"
            value={formData.jobPostedBy}
            onChange={handleChange}
            placeholder="your email"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
