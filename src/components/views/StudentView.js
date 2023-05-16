/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
//react bootstrap
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
//react-router
import { useHistory } from "react-router-dom";

export default function StudentView(props) {
  const { student, deleteStudent } = props;

  const history = useHistory();

  // Render a single Student view
  return (
    <Container>
      <Row md="auto" className="justify-content-md-center">
        <Col>
          <h1 className="text-center my-4 display-5">
            {`${student?.id}. ${student?.firstname}  ${student?.lastname}`}
          </h1>
        </Col>
        {/* Edit and Delete Buttons */}
        <Col className="d-flex align-items-center">
          <ButtonGroup className="">
            <Button
              variant="outline-primary"
              onClick={() => history.push(`/edit-student/${student.id}`)}
            >
              Edit
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => deleteStudent(student.id, history)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <h2 className="text-center my-4 display-6">
        email:{" "}
          <a href={`mailto:${student.email}`}>{student.email}</a>
      </h2>

      <h2 className="text-center my-4 display-6">
        Campus:{" "}
        {!!student?.campus?.name ? (
          <Button
            variant="link"
            onClick={() => history.push(`/campus/${student?.campus.id}`)}
          >
            {student.campus.name}
          </Button>
        ) : (
          <span className="text-danger">No Campus</span>
        )}
      </h2>

      <h3 className="text-center my-4 display-7">
        GPA:{" "}
        <span className={`${!student?.GPA && "text-danger"}`}>
          {student?.GPA || "No Campus"}
        </span>
      </h3>
      <Image
        className="d-block mx-auto my-4"
        alt="image unable to load"
        fluid
        rounded
        src={student?.imageURL}
      />
    </Container>
  );
}
