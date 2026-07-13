function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Ad Click Fraud Detection System</h3>
          <p>
            A Machine Learning and Deep Learning based system that detects
            fraudulent advertisement clicks by analyzing user click patterns.
          </p>

          <p>
            Technologies:
            Python, Machine Learning, Deep Learning, Data Processing
          </p>
        </div>


        <div className="project-card">
          <h3>React Portfolio Website</h3>
          <p>
            A responsive personal portfolio website built using React.js
            to showcase my skills, projects, and experience.
          </p>

          <p>
            Technologies:
            React.js, JavaScript, CSS
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;