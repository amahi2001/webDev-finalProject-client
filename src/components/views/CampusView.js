/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
//react bootstrap
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// Take in props data to construct the component
const CampusView = (props) => {
  const { campus } = props;

  // Render a single Campus view with list of its students
  return (
    <Container>
      <h1 className='text-center my-4 display-5'>{campus.name}</h1>
      <Image
        className="d-block mx-auto my-4"
        alt="image unable to load"
        fluid
        rounded
        src={campus.imageURL}
      />
      <p className='text-center my-2 text-lead'>{campus.address}</p>
      <p className='text-center my-2 text-lead'>{campus.description}</p>

      <ListGroup as="ol">
        {campus.students.map(student => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={campus.id}
          >
            <span className="ms-2 me-auto">
              <div className="fw-bold">{student.firstname + " " + student.lastname}</div>
            </span>

            <Button as={Link} to={`/student/${student.id}`} variant='outline-dark'>
              View
            </Button>
          </ListGroup.Item>

        ))}
      </ListGroup>

    </Container>
  );
};

export default CampusView;