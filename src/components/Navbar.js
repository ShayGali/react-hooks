import { useState, useEffect } from "react";

import { Container, Navbar as NavbarBs, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ setIsOpen, subjectSummaryUrl, subject }) {
  const [isDisabled, setIsDisabled] = useState(subject === "");
  useEffect(() => {
    setIsDisabled(subject === "");
  }, [subject]);
  return (
    <NavbarBs bg="light" expand="lg">
      <Container fluid>
        <NavbarBs.Brand href="#">React-Hooks</NavbarBs.Brand>
        <Nav className="me-auto" navbarScroll>
          <Nav.Link
            href="https://github.com/ShayGali/react-hooks"
            target="_blank"
          >
            Repository
          </Nav.Link>
          <Nav.Link onClick={() => setIsOpen((prev) => !prev)}>
            Select Subject
          </Nav.Link>
          <Nav.Link
            href={subjectSummaryUrl}
            target="_blank"
            disabled={isDisabled}
          >
            Subject Summary
          </Nav.Link>

          <Nav.Link href="https://github.com/ShayGali" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon-btn" />
          </Nav.Link>
          <Nav.Link href="https://linkedin.com/in/shay-gali" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="icon-btn" />
          </Nav.Link>
        </Nav>
        <FontAwesomeIcon
          icon={faBars}
          className="icon-btn"
          style={{
            cursor: "pointer",
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </Container>
    </NavbarBs>
  );
}
