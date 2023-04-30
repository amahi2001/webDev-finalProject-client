/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";
//react bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function AllStudentsView(props) {
  const { students, deleteStudent } = props;

  const AddStudent = () => (
    <Button as={Link} to={`/newstudent/`} variant='outline-dark' className="my-2">
      + Add Student
    </Button>
  )
  // If there is no student, display a message
  if (!students.length) {
    return (
      <Container>
        <h1 className='text-center my-4 display-5'>There are No Students</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <AddStudent />
          </Col>
        </Row>
      </Container>
    );
  }

  // If there is at least one student, render All Students view 
  return (
    <Container>
      <h1 className='text-center my-4 display-5'>All Students</h1>
      <AddStudent />

      <ListGroup as="ol">
        {students.map((student) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={student.id}
          >
            <span className="ms-2 me-auto">
              <div className="fw-bold">{student.firstname + " " + student.lastname}</div>
              <div>{`ID: ${student.id}`}</div>
            </span>
            <ButtonGroup aria-label="Basic example">
              <Button as={Link} to={`/student/${student.id}`} variant='outline-dark'>
                View
              </Button>
              <Button variant='outline-danger' onClick={() => deleteStudent(student.id)}>
                Delete
              </Button>
            </ButtonGroup>
          </ListGroup.Item>

        ))}
      </ListGroup>
    </Container>
  );
}
