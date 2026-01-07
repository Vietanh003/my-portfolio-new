import React from "react";
import "../styles/ProjectsSection.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import parmaImage from "../assets/images/parma.png";
import todoImage from "../assets/images/todo.png";

const projects = [
  {
    id: "pharmacy",
    title: "Pharmacy Management System",
    desc: "Web app với ASP.NET Core + SQL Server để quản lý người dùng, đơn hàng và tồn kho.",
    image: parmaImage,
    tags: ["ASP.NET Core", "SQL Server", "CRUD", "Auth"],
  },
  {
    id: "todolist",
    title: "To-Do List App",
    desc: "JSP/Servlet + MySQL Stored Procedures, có lọc trạng thái và theo dõi hoàn thành.",
    image: todoImage,
    tags: ["JSP/Servlet", "MySQL", "Stored Proc", "Filter"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__head">
          <div>
            <p className="projects__kicker">Selected work</p>
            <h3 className="projects__title">Projects</h3>
            <p className="projects__sub">
              Một vài sản phẩm mình đã làm — tập trung vào clean UI, logic rõ ràng và dễ mở rộng.
            </p>
          </div>

          <Link to="/projects" className="projects__all">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.id} className="pCard">
              <Link to={`/projects/${p.id}`} className="pCard__media" aria-label={p.title}>
                <img src={p.image} alt={p.title} loading="lazy" />
              </Link>

              <div className="pCard__body">
                <h5 className="pCard__title">{p.title}</h5>
                <p className="pCard__desc">{p.desc}</p>

                <div className="pCard__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pCard__footer">
                  <Link to={`/projects/${p.id}`} className="pCard__cta">
                    More info <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
