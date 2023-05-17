/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
//react bootstrap
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// Take in props data to construct the component
const CampusView = (props) => {
  const { campus, deleteStudent, deleteCampus } = props;
  // Render a single Campus view with list of its students
  return (
    <Container>
      <Row md="auto" className="justify-content-md-center">
        <Col>
          <h1 className="text-center my-4 display-5">
            {campus.id}. {campus.name}
          </h1>
        </Col>
        {/* Edit and Delete Buttons */}
        <Col className="d-flex align-items-center">
          <ButtonGroup className="">
            <Button
              variant="outline-primary"
              // onClick={() => history.push(`/edit-student/${student.id}`)}
            >
              Edit
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => deleteCampus(campus.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Image
        className="d-block mx-auto my-4"
        alt="image unable to load"
        fluid
        rounded
        src={campus.imageURL}
      />
      <p className="text-center my-2 text-lead">{campus.address}</p>
      <p className="text-center my-2 text-lead">{campus.description}</p>
      {!campus.students.length && (
        <h2 className="text-center my-4 display-6 text-danger">
          No Students Enrolled
        </h2>
      )}
      <ListGroup as="ol">
        {campus.students.map((student) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={student.id}
          >
            <Image
              height={100}
              width={100}
              rounded
              alt="image unable to load"
              src={student.imageURL}
            />
            <span className="ms-3 me-auto">
              <div className="fw-bold">
                {student.firstname + " " + student.lastname}
              </div>
              <div>{`ID: ${student.id}`}</div>
              <div>
                Email: <a href={`mailto: ${student.email}`}>{student.email}</a>
              </div>
              {!!student.GPA ? (
                `GPA: ${student.GPA}`
              ) : (
                <span className="text-danger">No GPA available</span>
              )}
            </span>
            <ButtonGroup aria-label="Basic example">
              <Button
                as={Link}
                to={`/student/${student.id}`}
                variant="outline-primary"
              >
                View
              </Button>
              <Button
                as={Link}
                to={`/edit-student/${student.id}`}
                variant="outline-dark"
              >
                Edit
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CampusView;
