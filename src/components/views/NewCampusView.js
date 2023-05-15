import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function NewCampusView(props) {
  const { handleChange, handleSubmit } = props;

  // Render a New Student view with an input form
  return (
    <Container>
      <h1 className="text-center my-4 display-5">Add New Campus</h1>
      <Card className="p-2">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="c_name">
            <Form.Label>Campus Name</Form.Label>
            <Form.Control
              name="campusName"
              required
              placeholder="Example University"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              required
              placeholder="1234 Main St"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description (optional)</Form.Label>
            <Form.Control
              name="description"
              placeholder="Enter a description"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL (optional)</Form.Label>
            <Form.Control
              name="imageURL"
              placeholder="https://example.com/image.jpg"
              type="text"
              onChange={handleChange}
              pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
            />
            <Form.Text muted>
              Please enter a valid URL starting with http:// or https://
            </Form.Text>
          </Form.Group>

          <Button type="submit">Add Campus</Button>
        </Form>
      </Card>
    </Container>
  );
}
