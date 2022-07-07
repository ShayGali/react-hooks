import { Col, Row } from "react-bootstrap";
import "./Navbar.css";
export default function Navbar({ changeExample }) {
  return (
    <>
      <Row xs={2} sm={3} md={3} lg={4} xl={5} className="g-1 mt-1 me-3 ms-3">
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useState
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useEffect
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useMemo
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useRef
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useContext
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useReducer
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useCallback
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useLayoutEffect
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useTransition
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useDeferredValue
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useImperativeHandle
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          useId
        </Col>
        <Col
          className="item"
          onClick={(e) => changeExample(e.target.innerHTML)}
        >
          custom-hooks
        </Col>
      </Row>
    </>
  );
}
