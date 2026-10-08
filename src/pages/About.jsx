function About() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "Express.js", "MongoDB", "MySQL", "REST APIs", "Git & GitHub"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>What I bring to a project</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>Practical development, without unnecessary complexity.</h3>
            <p>
              I’m a Computer Science graduate focused on full-stack web
              development. I enjoy taking an idea from a simple interface to
              a working application with a reliable backend and database.
            </p>
            <p>
              My approach is straightforward: understand the requirement,
              build the important parts well, keep the UI responsive, and
              write code that can be understood and improved later.
            </p>

            <div className="about-stats">
              <div><strong>10+</strong><span>Core technologies</span></div>
              <div><strong>3</strong><span>Featured projects</span></div>
              <div><strong>100%</strong><span>Responsive-first</span></div>
            </div>
          </div>

          <div className="skills">
            <div className="card-label">TECH STACK</div>
            <h3>Tools I work with</h3>
            <div className="skill-list">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
