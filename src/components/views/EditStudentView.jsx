import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditStudent(props) {
  const { handleChange, handleSubmit, student } = props;
  return (
    <Container>
      <h1 className="text-center my-4 display-5">
        Edit Student: {student.redirectId}
      </h1>
      <Card className="p-2">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="f_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstname"
              required
              placeholder="John"
              type="text"
              onChange={handleChange}
              value={student.firstname}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="l_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastname"
              required
              placeholder="Doe"
              type="text"
              onChange={handleChange}
              value={student.lastname}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              required
              placeholder="example@example.com"
              type="email"
              title="Please provide a valid email address in the form of <example>@<example>.<example>"
              pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
              onChange={handleChange}
              value={student.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="c_id">
            <Form.Label>Campus ID</Form.Label>
            <Form.Select
              name="campusId"
              required
              placeholder="Enter a Campus ID"
              onChange={handleChange}
              value={student.campusId}
            >
              <option value={null}>No Campus</option>
              {student.campuses.map((campus) => (
                <option
                  key={campus.id}
                  value={campus.id}
                >{`${campus.id}) ${campus.name}`}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="gpa">
            <Form.Label>GPA</Form.Label>
            <Form.Control
              name="GPA"
              placeholder="3.97"
              type="number"
              min={0}
              max={4}
              step={0.01}
              onChange={handleChange}
              value={student.GPA}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL (Optional)</Form.Label>
            <Form.Control
              name="imageURL"
              placeholder="https://example.com/image.jpg"
              type="text"
              onChange={handleChange}
              pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)"
              title="Please provide a valid URL starting with http:// or https://. Example: https://example.com/image.jpg"
              value={student.imageURL}
            />
            <Form.Text muted>
              Please enter a valid URL starting with http:// or https://
            </Form.Text>
          </Form.Group>
          <Button type="submit">Edit Student</Button>
        </Form>
      </Card>
    </Container>
  );
}
