import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProjectDetail.css";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = {
    pharmacy: {
      title: "Pharmacy Management System",
      intro: `
        A full-stack web application for pharmacy operations management.
        It includes role-based authentication, CRUD operations for users and products,
        order handling, and encryption for order statuses.
      `,
      work: `
        I designed and implemented the Admin and Customer modules, integrated
        SQL stored procedures for secure data handling, and built a responsive UI
        using Bootstrap and JavaScript validations.
      `,
      tech: "ASP.NET Core 6, Entity Framework Core, SQL Server, Bootstrap, JavaScript",
      github: "https://github.com/yourusername/pharmacy-management-system",
      video: "https://www.youtube.com/watch?v=your-demo-video-id",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920340.png",
    },
    todolist: {
      title: "To-Do List Application",
      intro: `
        A JSP/Servlet-based To-Do List system for managing personal tasks
        with filtering, completion tracking, and statistics visualization.
      `,
      work: `
        I developed the CRUD functionalities using JDBC with MySQL stored procedures,
        implemented a chart for monthly progress, and ensured a responsive interface
        with Bootstrap and CSS.
      `,
      tech: "JSP, Servlet, JDBC, MySQL, HTML, CSS, Bootstrap, Chart.js",
      github: "https://github.com/yourusername/todolist-jsp-servlet",
      video: "https://www.youtube.com/watch?v=your-demo-video-id",
      image: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
    },
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found 😢</h2>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        {/* Left Column */}
        <div className="detail-left">
          <img src={project.image} alt={project.title} className="detail-image" />
          {project.video && (
            <div className="video-container">
              <iframe
                src={project.video}
                title="Project Demo"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="detail-right">
          <h2 className="detail-title">{project.title}</h2>

          <div className="detail-section">
            <h4>Project Introduction</h4>
            <p>{project.intro}</p>
          </div>

          <div className="detail-section">
            <h4>My Work</h4>
            <p>{project.work}</p>
          </div>

          <div className="detail-section">
            <h4>Technologies Used</h4>
            <p>{project.tech}</p>
          </div>

          <div className="detail-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link github"
            >
              🔗 View Source on GitHub
            </a>

            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link demo"
              >
                ▶ Watch Demo Video
              </a>
            )}
          </div>

          <Link to="/projects" className="detail-back">
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default ProjectDetail;
