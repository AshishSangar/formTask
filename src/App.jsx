import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const label = {
    firstName: "",
    lastName: "",
    objective: "",
    education: "",
    skills: "",
    project: ""
  };

  const [data, setData] = useState(label);
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('data', JSON.stringify(data));
    setSubmit(true);
    setData(label);
  };

  return (
    <div className="container">
      {submit && <p className="success-message">Data Submitted Successfully 👍</p>}

      <h1 className="title">Fill the Details</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" required value={data.firstName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" required value={data.lastName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Objective</label>
          <textarea name="objective" required value={data.objective} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>Education</label>
          <textarea name="education" required value={data.education} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <textarea name="skills" required value={data.skills} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>Project</label>
          <textarea name="project" required value={data.project} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default App;
