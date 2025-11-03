import React from "react";
import "../styles/ProjectsSection.css";
import { Link } from "react-router-dom";
import parmaImage from "../assets/images/parma.png"; 
import todoImage from "../assets/images/todo.png"; // ✅ import ảnh

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h3 className="section-title">
  <strong><em>My Coding Projects</em></strong>
</h3>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <img
              src={parmaImage}  
              alt="Pharmacy Management"
              className="project-img"
            />
            <h5 className="project-title">Pharmacy Management System</h5>
            <p className="project-desc">
              A web app built with ASP.NET Core and SQL Server for managing users,
              orders, and inventory in a pharmacy.
            </p>
            <p className="project-link">
              <Link to="/projects/pharmacy"><u>More info</u></Link>
            </p>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img
            src={todoImage} 
              alt="ToDo List"
              className="project-img"
            />
            <h5 className="project-title">To-Do List App</h5>
            <p className="project-desc">
              A JSP/Servlet-based task manager using MySQL stored procedures,
              with filtering and task completion tracking.
            </p>
            <p className="project-link">
              <Link to="/projects/todolist"><u>More info</u></Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
