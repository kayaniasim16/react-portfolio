import React from "react";

function Education() {
  return (
    <main className="education-page">
      <h1>Education</h1>

      <p className="education-intro">
        My educational background and qualifications.
      </p>

      <section className="education-card">
        <h2>Centennial College</h2>

        <p>
          <strong>Program:</strong> Software Engineering
        </p>

        <p>
          <strong>Location:</strong> Toronto, Ontario
        </p>

        <p>
          <strong>Years:</strong> 2025 - Present
        </p>
      </section>

      <section className="education-card">
        <h2>Markham District High School</h2>

        <p>
          <strong>Qualification:</strong> Ontario Secondary School Diploma
        </p>

        <p>
          <strong>Location:</strong> Markham, Ontario
        </p>

        <p>
          <strong>Years:</strong> Completed
        </p>
      </section>
    </main>
  );
}

export default Education;