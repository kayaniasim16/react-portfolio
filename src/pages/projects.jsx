import React from "react";

function Projects() {
  return (
    <main className="projects-page">
      <h1>My Projects</h1>

      <p className="projects-intro">
        Here are some of the projects I have worked on while developing my
        software engineering skills.
      </p>

      <section className="project-grid">

        <article className="project-card">
          <h2>AI House Price Prediction</h2>

          <img
            src="/images/house-price.jpg"
            alt="AI House Price Prediction"
          />

          <h3>My Role</h3>
          <p>
            I worked on designing and developing a machine learning application
            for predicting house prices using Python.
          </p>

          <h3>Project Description</h3>
          <p>
            The project uses housing data to prepare information, train a
            machine learning model, evaluate the model, and make predictions.
          </p>

          <h3>Outcome</h3>
          <p>
            I gained experience with data preprocessing, machine learning,
            model training, and software architecture.
          </p>
        </article>

        <article className="project-card">
          <h2>React Portfolio Website</h2>

          <img
            src="/images/react-portfolio.jpg"
            alt="React Portfolio Website"
          />

          <h3>My Role</h3>
          <p>
            I am designing and developing this personal portfolio website
            using React.
          </p>

          <h3>Project Description</h3>
          <p>
            This website showcases my education, projects, services, technical
            interests, and contact information.
          </p>

          <h3>Outcome</h3>
          <p>
            This project demonstrates my understanding of React components,
            routing, CSS, and web application development.
          </p>
        </article>

        <article className="project-card">
          <h2>Que Cards Study Application</h2>

          <img
            src="/images/que-cards.jpg"
            alt="Que Cards Study Application"
          />

          <h3>My Role</h3>
          <p>
            I worked on designing an AI-based study and revision application
            for students.
          </p>

          <h3>Project Description</h3>
          <p>
            Que Cards is designed to help students study and review information
            using digital study cards and AI-based features.
          </p>

          <h3>Outcome</h3>
          <p>
            This project provided experience with software requirements,
            application design, and creating solutions for students.
          </p>
        </article>

      </section>
    </main>
  );
}

export default Projects;