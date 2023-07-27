import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Add.css"; 
import axios from "axios";
import { NavLink } from "react-router-dom";

const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    project: "",
    technologies: "",
    discription: "",
    ProjectUrl: "",
    skills: "",
    college: "",
    cgpa: "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("You need to log in to perform this action.");
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:8181/api/v1/demo/addcontacts",
        formData,
        config
      );
      console.log(response.data);
      setFormData({
        name: "",
        phoneNo: "",
        email: "",
        project: "",
        technologies: "",
        discription: "",
        ProjectUrl: "",
        skills: "",
        college: "",
        cgpa: "",
       
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="imgs">
        <Navbar />
        <div>
          <div></div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text1"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Project</label>
                <input
                  type="text1"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>technologies</label>
                <input
                  type="text1"
                  name="technologies"
                  value={formData.tecnologies}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text1"
                  name="discription"
                  value={formData.discription}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>ProjectUrl</label>
                <input
                  type="text1"
                  name="ProjectUrl"
                  value={formData.ProjectUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Skills</label>
                <input
                  type="text1"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>College</label>
                <input
                  type="text1"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>CGPA</label>
                <input
                  type="text1"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>

              

              
              <NavLink to="/page"><button type="submit">Get Template</button></NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;