import "./Projects.css";

const projects = [
  {
    title: "Portfolio",
    description: "A sleek personal site with dark/light mode, typing animation, and responsive design.",
    tech: "React, Vite, CSS",
    link: "#",
  },
  {
    title: "Marketing Reports Tracker",
    description: "A full-stack dashboard system for logging and managing marketing visits.",
    tech: "React, Node.js, Mysql",
    link: "#",
  },
  {
    title: "Rental Listing App",
    description: "A platform to manage property listings, bookings, and history with admin and owner dashboards.",
    tech: "React, Express, mysql",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <p className="tech">Tech: {project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
