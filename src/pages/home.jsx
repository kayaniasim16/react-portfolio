import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <p className="intro">Hello, I'm</p>

        <h1>Asim Kayani</h1>

        <h2>Software Engineering Student</h2>

        <p className="hero-text">
          Welcome to my personal portfolio. I am passionate about software
          development, web development, and artificial intelligence.
        </p>

        <Link to="/about">
          <button>Learn More About Me</button>
        </Link>
      </section>

      <section className="mission">
        <h2>My Mission</h2>

        <p>
          My goal is to continue developing my technical skills and create
          useful, creative, and meaningful technology solutions.
        </p>
      </section>
    </main>
  );
}

export default Home;