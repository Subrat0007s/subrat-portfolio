import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Subrat Mantry</span> from{" "}
            <span className="purple">Odisha, India</span>.
            <br />
            I'm a results-driven{" "}
            <span className="purple">Full Stack Developer</span> with expertise
            in enterprise-grade application development and microservices
            architecture.
            <br />I build robust, scalable systems using{" "}
            <span className="purple">Spring Boot</span>,{" "}
            <span className="purple">Hibernate ORM</span>, and{" "}
            <span className="purple">React</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Subrat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
