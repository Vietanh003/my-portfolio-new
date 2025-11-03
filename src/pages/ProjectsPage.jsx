// src/pages/ProjectsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectsPage.css";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  const projects = [
    {
      id: "pharmacy",
      title: "Pharmacy Management System",
      shortDesc:
        "A full-stack ASP.NET Core web app for managing users, orders, and inventory in a pharmacy.",
      tech: "ASP.NET Core 6, EF Core, SQL Server, Bootstrap",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920340.png",
    },
    {
      id: "todolist",
      title: "To-Do List Application",
      shortDesc:
        "A JSP/Servlet web app to manage daily tasks with CRUD, filters, and progress charts.",
      tech: "JSP, Servlet, JDBC, MySQL, Bootstrap",
      image: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h2 className="page-title">My Projects</h2>
        <p className="page-subtitle">
          Here are some of my featured projects that showcase my skills and experience.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="short-desc">{project.shortDesc}</p>
                <p className="tech-stack">
                  <strong>Tech:</strong> {project.tech}
                </p>
                <Link to={`/projects/${project.id}`} className="more-btn">
                  More Info →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
