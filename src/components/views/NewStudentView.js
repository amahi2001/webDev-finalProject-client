import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function NewStudentView(props) {
  const { handleChange, handleSubmit } = props;

  // Render a New Student view with an input form
  return (
    <Container>
      <h1 className='text-center my-4 display-6'>Add New Student</h1>
      <Card className='p-2'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='c_name'>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="John" required placeholder='Example University' type="text" onChange={handleChange} />
          </Form.Group>

          <Form.Group className='mb-3' controlId=''>
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="lastname" required placeholder='Doe' type="text" onChange={handleChange} />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Campus ID</Form.Label>
            <Form.Control min={0} type="number" name="campusId" required placeholder='Enter a description' onChange={handleChange} />
          </Form.Group>
          <Button type="submit">
            Add Campus
          </Button>
        </Form>
      </Card>
    </Container>
  );
}