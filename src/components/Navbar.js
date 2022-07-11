import { useState, useEffect } from "react";

import {
  Container,
  Navbar as NavbarBs,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({
  setIsOpen,
  subjectSummaryUrl,
  subject,
  setExample,
}) {
  const [isDisabled] = useState(subject === "");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <NavbarBs bg="light" expand="lg">
      <Container fluid>
        <Nav className="me-auto" navbarScroll>
          <Nav.Link onClick={() => setIsOpen((prev) => !prev)}>
            Select Subject
          </Nav.Link>
          <NavDropdown title="State Management Hooks">
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useState
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useReducer
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useContext
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Improving Performance Hooks">
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useEffect
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useMemo
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useCallback
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useLayoutEffect
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useTransition
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useDeferredValue
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useImperativeHandle
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Other Hooks">
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useEffect
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useRef
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              useId
            </NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => setExample(e.target.innerText)}>
              custom-hooks
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <div
            className={`${
              windowWidth > 970 ? "d-flex flex-wrap order-1" : "order-2"
            } gap`}
          >
            <Nav.Link
              href="https://github.com/ShayGali/react-hooks"
              target="_blank"
            >
              Repository Link
            </Nav.Link>

            <Nav.Link
              href={subjectSummaryUrl}
              target="_blank"
              disabled={isDisabled}
            >
              Subject Summary Link
            </Nav.Link>
          </div>
          <div
            className={`d-flex flex-nowrap ${
              windowWidth > 970 ? "order-2" : "order-1"
            } justify-content-end`}
          >
            <Nav.Link href="https://github.com/ShayGali" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon-btn" />
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/shay-gali" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="icon-btn" />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon
                icon={faBars}
                className="icon-btn"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setIsOpen((prev) => !prev)}
              />
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
