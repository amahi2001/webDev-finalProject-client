/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function HomePageView() {
  return (
    <Container>
      <h1 className="text-center my-4 display-5">Home Page</h1>;
      <Row>
        <h2 className="text-center my-4 display-5">
          {" "}
          Welcome to the campus management system
        </h2>
      </Row>
      <Row md="auto" className="justify-content-md-center">
        <Col>
          <Button as={Link} to="/campuses" variant="outline-primary">
            View Campuses
          </Button>
        </Col>
        <Col>
          {" "}
          <Button as={Link} to="/students" variant="outline-primary">
            View Students
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
