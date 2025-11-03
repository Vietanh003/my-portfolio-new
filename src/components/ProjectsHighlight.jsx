import React from "react";
import "../styles/ProjectsHighlight.css";

const ProjectsHighlight = () => {
  return (
    <section className="project-highlight">
      <div className="container">
        <div className="highlight-content">
          <img
            src="https://lh3.googleusercontent.com/_YIq6uSog0F5fAUK0vMlCEp7XBgmIbV292QbLIZJz7SkzSiiatV2veLwEhYmRT4K-Q-I_VwxEnil7z3VguM6-fwRMaGJyAY=rw-w1632"
            alt="Studio Space"
            className="highlight-img"
          />

          <h6 className="highlight-title">
            <strong>
              <em>Studio Space</em>
            </strong>
          </h6>

          <div className="highlight-button">
            <a href="/projects">
              <button className="see-all-btn">
                <p>See all Project</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;
