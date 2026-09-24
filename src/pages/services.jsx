import React from "react";

function Services() {
  return (
    <main className="services-page">
      <h1>My Services</h1>

      <p className="services-intro">
        Here are some of the technical services and areas I am developing
        experience in.
      </p>

      <section className="services-grid">
        <article className="service-card">
          <h2>Web Development</h2>
          <p>
            I can create responsive and user-friendly websites using modern
            web development technologies.
          </p>
        </article>

        <article className="service-card">
          <h2>Software Development</h2>
          <p>
            I can develop software applications and work with programming
            languages to create useful solutions.
          </p>
        </article>

        <article className="service-card">
          <h2>AI and Machine Learning</h2>
          <p>
            I am developing skills in artificial intelligence and machine
            learning, including data preparation, model training, and
            prediction.
          </p>
        </article>

        <article className="service-card">
          <h2>Application Design</h2>
          <p>
            I can help design application structures and create simple,
            organized user experiences.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Services;