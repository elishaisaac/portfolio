import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Smart Wallet",
      type: "Personal finance",
      description:
        "A simple web app for tracking income and expenses, organizing transactions, and giving users a clearer view of their spending.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      number: "01"
    },
    {
      title: "HexaShop E-Commerce",
      type: "Full-stack application",
      description:
        "An online shopping platform with product management, CRUD operations, REST APIs, and a database-backed catalog.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      number: "02"
    },
    {
      title: "Student Management System",
      type: "Management system",
      description:
        "A practical system for managing student records with CRUD operations, REST endpoints, and MongoDB integration.",
      technologies: ["Node.js", "Express", "MongoDB", "REST API"],
      number: "03"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p>SELECTED WORK</p>
            <h2>Projects I’ve built</h2>
          </div>
          <span className="project-count">03 projects</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.number} {...project} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
