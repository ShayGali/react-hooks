import { Offcanvas, Stack } from "react-bootstrap";

export default function Sidebar({ isOpen, setIsOpen, changeExample }) {
  return (
    <Offcanvas
      show={isOpen}
      onHide={setIsOpen}
      style={{ width: "240px", backgroundColor: "#fbfbfd" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Hooks</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={1} onClick={(e) => changeExample(e.target.innerHTML)}>
          <span className="text-btn">useState</span>
          <span className="text-btn">useEffect</span>
          <span className="text-btn">useMemo</span>
          <span className="text-btn">useRef</span>
          <span className="text-btn">useContext</span>
          <span className="text-btn">useReducer</span>
          <span className="text-btn">useCallback</span>
          <span className="text-btn">useCallback</span>
          <span className="text-btn">useTransition</span>
          <span className="text-btn">useDeferredValue</span>
          <span className="text-btn">useImperativeHandle</span>
          <span className="text-btn">useId</span>
          <span className="text-btn">custom-hooks</span>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
