import React from "react";

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Us</h1>
        <p>
          This is the about page. Here you can learn more about our company and
          mission.
        </p>
        <div
          style={{ maxWidth: "600px", textAlign: "left", lineHeight: "1.6" }}
        >
          <h2>Our Mission</h2>
          <p>
            We are dedicated to creating amazing React applications that provide
            excellent user experiences and solve real-world problems.
          </p>
          <h2>Our Team</h2>
          <p>
            Our team consists of passionate developers who love building
            innovative solutions using modern web technologies.
          </p>
        </div>
      </header>
    </div>
  );
}

export default About;
