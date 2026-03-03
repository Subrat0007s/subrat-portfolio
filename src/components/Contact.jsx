import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "./Particle";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={9} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get In <strong className="purple">Touch</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <p style={{ textAlign: "justify" }}>
                  I’m actively seeking opportunities to contribute to innovative
                  projects and collaborate with forward-thinking teams. Whether
                  you’re looking for a Full Stack Developer, need consultation
                  on enterprise applications, or want to discuss potential
                  partnerships, I’m available to explore how my technical
                  expertise can add value to your organization.
                </p>

                <div style={{ textAlign: "left" }}>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:subratmantry2@gmail.com">
                      subratmantry2@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Mobile:</strong> +91 8249780007
                  </p>
                  <p>
                    <strong>Location:</strong> India (Available for remote
                    opportunities)
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
