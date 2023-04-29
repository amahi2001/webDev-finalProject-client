/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//react bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
export default function AllCampusesView(props) {
  // If there is no campus, display a message.
  const AddCampus = () => (
    <Button as={Link} to={`/newcampus/`} variant='outline-dark' className="my-2">
      + Add Campus
    </Button>
  )
  // If there is no student, display a message
  if (!props.allCampuses.length) {
    return (
      <Container>
        <h1 className='text-center my-4 display-6'>There are No Students</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <AddCampus />
          </Col>
        </Row>
      </Container>
    );
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <Container>
      <h1 className='text-center my-4 display-6'>All Campuses</h1>
      <AddCampus />
      <ListGroup as="ol">
        {props.allCampuses.map((campus) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={campus.id}
          >
            <span className="ms-2 me-auto">
              <div className="fw-bold">{campus.name}</div>
              {campus.description}
            </span>
            <ButtonGroup aria-label="Basic example">
              <Button as={Link} to={`/newcampus/`} variant='outline-dark'>
                {`ID: ${campus.id}`}
              </Button>
              <Button variant='outline-danger'>
                Delete
              </Button>
            </ButtonGroup>
          </ListGroup.Item>

        ))}
      </ListGroup>
    </Container>
  );
}

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};
