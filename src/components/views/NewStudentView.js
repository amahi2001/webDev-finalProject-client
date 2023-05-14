import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function NewStudentView(props) {
  const { handleChange, handleSubmit, campuses } = props;

  // Render a New Student view with an input form
  return (
    <Container>
      <h1 className="text-center my-4 display-5">Add New Student</h1>
      <Card className="p-2">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="c_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstname"
              required
              placeholder="John"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastname"
              required
              placeholder="Doe"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Campus ID</Form.Label>
            <Form.Select
              name="campusId"
              required
              placeholder="Enter a Campus ID"
              onChange={handleChange}
            >
              <option value={null}>No Campus</option>
              {campuses.map((campus) => (
                <option
                  value={campus.id}
                >{`${campus.id}) ${campus.name}`}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="imageURL"
              required
              placeholder="https://example.com/image.jpg"
              type="text"
              onChange={handleChange}
              pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
            />
            <Form.Text muted>
              Please enter a valid URL starting with http:// or https://
            </Form.Text>
          </Form.Group>
          <Button type="submit">Add Student</Button>
        </Form>
      </Card>
    </Container>
  );
}
