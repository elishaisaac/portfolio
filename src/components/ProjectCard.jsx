function ProjectCard({ title, type, description, technologies, number }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">{number}</span>
        <span className="project-type">{type}</span>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
