import React from "react";
import "../styles/About.css";
import Footer from '../components/Footer';

const About = () => {
  return (
    <section className="about-page">
      <div className="container">
        {/* GIỚI THIỆU */}
        <h2 className="section-title">About Me</h2>
        <p className="intro-text">
          Driven <span className="highlight">Backend Developer</span> with foundational skills in 
          <strong> Java</strong>, <strong>C#</strong>, and <strong>Node.js</strong>, passionate about building 
          reliable software solutions. I seek to join a collaborative team where I can learn 
          advanced backend technologies and <strong>DevOps</strong> practices, contributing to 
          innovative projects and company success.
        </p>

        {/* EDUCATION */}
        <h3 className="sub-title">Education</h3>
        <div className="education-item">
          <h4>Ho Chi Minh City University of Industry and Trade</h4>
          <p className="education-date">September 2021 - October 2025</p>
          <p>Major: Bachelor of Information Technology</p>
        </div>

        {/* SKILLS */}
        <h3 className="sub-title">Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Backend</h4>
            <ul>
              <li>Java (Spring Boot, Servlet/JSP) - <span className="level expert">Expert</span></li>
              <li>C# (.NET Core) - <span className="level advanced">Advanced</span></li>
              <li>Node.js, Express.js - <span className="level advanced">Advanced</span></li>
              <li>RESTful API Design - <span className="level expert">Expert</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Database</h4>
            <ul>
              <li>MySQL, SQL Server, Oracle, MongoDB - <span className="level advanced">Advanced</span></li>
              <li>ERD Modeling, Normalization - <span className="level expert">Expert</span></li>
              <li>Stored Procedures, Triggers, Functions - <span className="level advanced">Advanced</span></li>
              <li>Performance Tuning, Indexing - <span className="level intermediate">Intermediate</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Frontend</h4>
            <ul>
              <li>HTML5, CSS3, JavaScript - <span className="level advanced">Advanced</span></li>
              <li>React.js, Next.js - <span className="level intermediate">Intermediate</span></li>
              <li>Bootstrap, Tailwind CSS - <span className="level advanced">Advanced</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Tools & DevOps</h4>
            <ul>
              <li>Git, GitHub/GitLab - <span className="level expert">Expert</span></li>
              <li>Postman, Swagger - <span className="level advanced">Advanced</span></li>
              <li>Docker (basic), VS Code, Visual Studio - <span className="level intermediate">Intermediate</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Soft Skills</h4>
            <ul>
              <li>Problem-solving & Critical Thinking - <span className="level advanced">Advanced</span></li>
              <li>Teamwork & Agile/Scrum - <span className="level intermediate">Intermediate</span></li>
              <li>Communication & Presentation - <span className="level advanced">Advanced</span></li>
              <li>Self-learning & Adaptability - <span className="level expert">Expert</span></li>
            </ul>
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <h3 className="sub-title">Work Experience</h3>
        <div className="experience-item">
          <h4>Linksoft Vietnam JSC</h4>
          <p className="experience-date">February 2025 - Present</p>
          <p className="position">Fullstack Developer</p>
          <ul className="responsibilities">
            <li>Build hospital management software (HIS) with Angular on the frontend and .NET (C#) on the backend.</li>
            <li>Develop features end-to-end: UI components, REST APIs, and SQL Server integration.</li>
            <li>Work with the team on requirements analysis, code review, and deployment.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>CyberSkill Software Solutions Company</h4>
          <p className="experience-date">August 2024 - February 2025</p>
          <p className="position">Internship Backend Developer</p>
          <ul className="responsibilities">
            <li>Assist in analyzing business requirements for assigned projects.</li>
            <li>Learn and apply Node.js and Next.js in backend development tasks.</li>
            <li>Contribute to building and testing project modules using Next.js.</li>
            <li>Participate in training sessions on soft skills and emerging technologies.</li>
          </ul>
        </div>
      </div>
          <Footer />
    </section>
    
  );
};

export default About;
