import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pdfUrl = "/Subrat_Resume.pdf";
  return (
    <div>
      <Container fluid className="resume-section">
        <Container>
          <Row
            style={{
              justifyContent: "center",
              position: "relative",
              paddingTop: "50px",
            }}
          >
            <Button
              variant="primary"
              href={pdfUrl}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>

          <Row
            className="resume"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          >
            <Col md={12} style={{ textAlign: "left" }}>
              <h2
                className="purple"
                style={{
                  textAlign: "center",
                  paddingBottom: "30px",
                }}
              >
                SUBRAT MANTRY
              </h2>

              <h3 className="purple" style={{ marginBottom: "20px" }}>
                OBJECTIVE:
              </h3>
              <p
                style={{
                  fontSize: "1.1em",
                  marginBottom: "30px",
                  textAlign: "justify",
                }}
              >
                Results-driven Computer Science graduate aspiring to begin my
                career as a Java Backend Developer. Proficient in Java, Spring
                Boot, RESTful API development, and database management, with
                practical experience in building real-world full-stack
                applications. Committed to developing scalable, secure, and
                high-performance backend systems while continuously enhancing
                technical expertise.
              </p>

              <h3 className="purple" style={{ marginBottom: "20px" }}>
                SKILLS:
              </h3>

              <h4 className="purple" style={{ marginBottom: "15px" }}>
                Programming Languages:
              </h4>
              <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>
                Proficient in Core Java. Basic knowledge of C and Python
                (learned in college).
              </p>

              <h4 className="purple" style={{ marginBottom: "15px" }}>
                Frameworks & Technologies:
              </h4>
              <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>
                Advanced knowledge of Spring Boot; intermediate understanding of
                Hibernate and Spring MVC.
              </p>

              <h4 className="purple" style={{ marginBottom: "15px" }}>
                Front-End Development:
              </h4>
              <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>
                Skilled in HTML5, CSS3, and JavaScript.
              </p>

              <h4 className="purple" style={{ marginBottom: "15px" }}>
                Database Management:
              </h4>
              <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>
                Proficient in various SQL statements and RDBMS.
              </p>

              <h4 className="purple" style={{ marginBottom: "15px" }}>
                Tools & Platforms:
              </h4>
              <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>
                Competent in using Git, Maven, and Eclipse IDE, STS.
              </p>

              <h4 className="purple" style={{ marginBottom: "15px" }}>
                Operating Systems:
              </h4>
              <p style={{ fontSize: "1.1em", marginBottom: "30px" }}>
                Comfortable working with Windows.
              </p>

              <h3 className="purple" style={{ marginBottom: "20px" }}>
                LANGUAGES:
              </h3>
              <p style={{ fontSize: "1.1em", marginBottom: "30px" }}>
                Odia: Native proficiency.
                <br />
                Hindi: Fluent.
                <br />
                English: Fluent
              </p>

              <h3 className="purple" style={{ marginBottom: "20px" }}>
                PERSONAL SKILLS:
              </h3>
              <p style={{ fontSize: "1.1em", marginBottom: "30px" }}>
                Ability to complete tasks before the deadline.
                <br />
                Willingness to work under senior professionals.
                <br />
                Ability to communicate and collaborate with diverse teams.
                <br />
                Eagerness to learn new programming languages and technologies.
                <br />
                Participating in social activities.
              </p>

              <h3 className="purple" style={{ marginBottom: "20px" }}>
                EDUCATION:
              </h3>

              <div style={{ marginBottom: "25px" }}>
                <h4 style={{ marginBottom: "10px" }}>
                  Master of Computer Application (MCA)
                </h4>
                <p style={{ fontSize: "1.1em", marginBottom: "5px" }}>
                  Institute of Management and Information Technology, Cuttack.
                  Odisha
                </p>
                <p
                  className="purple"
                  style={{ fontSize: "1em", marginBottom: "5px" }}
                >
                  8.5 CGPA
                </p>
                <p className="purple" style={{ fontSize: "1em" }}>
                  2021-2023
                </p>
              </div>

              <div style={{ marginBottom: "25px" }}>
                <h4 style={{ marginBottom: "10px" }}>
                  Bachlor Of Science (Physics Hon's)
                </h4>
                <p style={{ fontSize: "1.1em", marginBottom: "5px" }}>
                  Gandhi Mahavidyalaya, Rourkela, Odisha
                </p>
                <p className="purple" style={{ fontSize: "1em" }}>
                  2016-2019
                </p>
              </div>

              <div style={{ marginBottom: "25px" }}>
                <h4 style={{ marginBottom: "10px" }}>Intermideate(+2)</h4>
                <p style={{ fontSize: "1.1em", marginBottom: "5px" }}>
                  Municipal College, Rourkela, Odisha
                </p>
                <p className="purple" style={{ fontSize: "1em" }}>
                  2014-2016
                </p>
              </div>

              <h3 className="purple" style={{ marginBottom: "20px" }}>
                PROJECTS:
              </h3>

              <div style={{ marginBottom: "25px" }}>
                <h4 style={{ marginBottom: "10px" }}>
                  1. EVENT BOOKING SYSTEM:
                </h4>
                <p
                  style={{
                    fontSize: "1.1em",
                    marginBottom: "10px",
                    textAlign: "justify",
                  }}
                >
                  A full-stack web application developed to manage events, user
                  registrations, and bookings efficiently. I designed and
                  implemented both frontend and backend functionalities
                  including authentication, event CRUD operations, and REST API
                  integration using React.js, Spring Boot, and MySQL.
                </p>
                <p
                  className="purple"
                  style={{ fontSize: "1em", marginBottom: "10px" }}
                >
                  Technologies Used: React.js, Spring Boot, Spring Data JPA,
                  MySQL, RESTful APIs, Axios, HTML, CSS, JavaScript.
                </p>
              </div>

              <div style={{ marginBottom: "25px" }}>
                <h4 style={{ marginBottom: "10px" }}>
                  2. ONLINE BUS BOOKING SYSTEM:
                </h4>
                <p
                  style={{
                    fontSize: "1.1em",
                    marginBottom: "10px",
                    textAlign: "justify",
                  }}
                >
                  A full-stack bus reservation web application that allows users
                  to view, book, and manage bus journeys. I worked on both
                  frontend and backend features using modern web technologies to
                  deliver a seamless booking experience.
                </p>
                <p
                  className="purple"
                  style={{ fontSize: "1em", marginBottom: "10px" }}
                >
                  Technologies Used: React.js, Axios, CSS (Frontend), Spring
                  Boot, Java, Maven (Backend), REST APIs, MySQL).
                </p>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "20px",
                }}
              >
                <p style={{ fontSize: "1.1em", marginBottom: "10px" }}>
                  <strong>Contact:</strong> +91-8249780007 |
                  subratmantry2@gmail.com
                </p>
                <p style={{ fontSize: "1.1em", marginBottom: "10px" }}>
                  <strong>LinkedIn:</strong> www.linkedin.com/in/subrat-mantry
                </p>
                <p style={{ fontSize: "1.1em", marginBottom: "10px" }}>
                  <strong>GitHub:</strong> https://github.com/Subrat0007s
                </p>
                <p style={{ fontSize: "1.1em" }}>
                  <strong>Location:</strong> Bengaluru, Karnataka
                </p>
              </div>
            </Col>
          </Row>

          <Row
            style={{
              justifyContent: "center",
              position: "relative",
              paddingBottom: "50px",
            }}
          >
            <Button
              variant="primary"
              href={pdfUrl}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
