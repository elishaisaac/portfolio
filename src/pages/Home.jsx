function Home() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="eyebrow">HELLO, I'M ELISHA</p>
          <h1>Full Stack <span>Developer</span></h1>
          <p className="hero-description">
            I build clean, responsive web applications with React, Node.js,
            Express, and MongoDB. I care about simple interfaces, useful
            features, and code that is easy to maintain.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Let's Talk</a>
          </div>

          <div className="hero-meta">
            <span><b>Based in</b> Lahore, Pakistan</span>
            <span><b>Focus</b> MERN Stack</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-frame">
             <div className="avatar-initials">EI</div>
          </div>
          <div>
            <p className="status"><span /> Available for opportunities</p>
            <h2>Elisha Isaac</h2>
            <p>Full Stack Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
