import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "./Particle";

function Blog() {
  const [expanded, setExpanded] = useState(null);

  const posts = [
    {
      id: "bussathi",
      title: "Building BusSathi: Scalable Backend + Clean UI",
      excerpt:
        "How I approached a full-stack online bus booking system using Spring Boot, React, and MySQL.",
      body:
        "In BusSathi I focused on clean REST API design, modular service layers, authentication, and a responsive React UI. I paid attention to database schema design, query efficiency, and separation of concerns so the system stays maintainable as features grow.",
    },
    {
      id: "spring",
      title: "Spring Boot Patterns I Use in Real Projects",
      excerpt:
        "A short collection of practical patterns I rely on to keep enterprise apps maintainable.",
      body:
        "I use layered architecture, DTO mapping, validation at boundaries, consistent error handling, and logging that helps debugging in production. I also like designing APIs with clear contracts and versioning strategies when needed.",
    },
    {
      id: "devops",
      title: "From Local to Production: What I Care About",
      excerpt:
        "A checklist mindset: reliability, observability, and repeatable deployments.",
      body:
        "Even for smaller projects, I think about environment configs, build pipelines, containerization basics, and monitoring. Small discipline early prevents big pain later.",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog</strong>
        </h1>
        <p style={{ color: "white" }}>
          Notes on backend engineering, Spring Boot, and building real-world
          projects.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {posts.map((p) => {
            const isOpen = expanded === p.id;
            return (
              <Col key={p.id} md={4} className="project-card">
                <Card className="project-card-view">
                  <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                      {isOpen ? p.body : p.excerpt}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => setExpanded(isOpen ? null : p.id)}
                    >
                      {isOpen ? "Show Less" : "Read More"}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
