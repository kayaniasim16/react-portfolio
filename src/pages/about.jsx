import React from "react";

function About() {
  return (
    <main className="about-page">
      <section className="about-card">
        <h1>About Me</h1>

        <h2>Asim Kayani</h2>

        <p>
          I am a Software Engineering student with an interest in software
          development, web development, and artificial intelligence. I enjoy
          learning new technologies and building applications that solve
          real-world problems.
        </p>

        <h2>My Resume</h2>

        <p>
          You can view my resume to learn more about my education, skills,
          experience, and projects.
        </p>

        <a
          className="resume-button"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View My Resume
        </a>
      </section>
    </main>
  );
}

export default About;