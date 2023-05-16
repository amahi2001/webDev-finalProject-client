import React from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";

export default function ErrorPage({ children }) {
  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col md={6}>
          <Alert variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <hr />
            <p className="text-center">{children}</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
