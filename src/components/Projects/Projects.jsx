import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import {
  generateProjectCards,
  triggerProjectUpdate,
} from "../../utils/projectUpdater";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const projectCards = await generateProjectCards();
        setProjects(projectCards);
      } catch (error) {
        console.error("Error loading projects:", error);
        // Fallback to static projects if automation fails
        setProjects([
          {
            imgPath: chatify,
            isBlog: false,
            title: "BusSathi – Online Bus Booking System",
            description:
              "A full-stack bus reservation system built with Spring Boot, React, and MySQL. Features include route search, schedule viewing, and ticket booking. Implemented secure authentication and responsive UI.",
            ghLink: "https://github.com/Subrat0007s/BusSathi",
          },
          {
            imgPath: leaf,
            isBlog: false,
            title: "Event Management System",
            description:
              "A full-stack web application for event management with user authentication, event CRUD operations, and registration management. Built with React.js frontend and Spring Boot backend, featuring REST APIs and MySQL database integration.",
            ghLink: "https://github.com/Subrat0007s/event-management-system",
          },
          {
            imgPath: editor,
            isBlog: false,
            title: "Other Projects",
            description:
              "Explore more small projects and experiments, including REST APIs, UI prototypes, and automation scripts, on my GitHub profile.",
            ghLink: "https://github.com/Subrat0007s",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Manual trigger function for development
  const refreshProjects = async () => {
    setLoading(true);
    const projectCards = await triggerProjectUpdate();
    if (projectCards) {
      setProjects(projectCards);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading projects...</span>
            </div>
            <p style={{ marginTop: "20px" }}>Syncing projects from GitHub...</p>
          </div>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <button
            onClick={refreshProjects}
            style={{
              background: "#c95bf5",
              border: "none",
              color: "white",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            🔄 Refresh Projects
          </button>
        </div>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
              />
              {project.githubFound && (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    fontSize: "12px",
                    color: "#c95bf5",
                  }}
                >
                  ⭐ {project.stars} stars | {project.language}
                </div>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
