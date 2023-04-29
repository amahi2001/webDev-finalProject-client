/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
// Import "material" library for building UI with React components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

// Header component, displayed on every page
// Links to every other page
export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>Campus Management System</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
          <Nav.Link as={Link} to={'/campuses'}>All Campuses</Nav.Link>
          <Nav.Link as={Link} to={'/students'}>All Students</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}