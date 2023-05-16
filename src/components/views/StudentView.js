/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function StudentView(props) {
  const { student } = props;

  // Render a single Student view
  return (
    <Container>
      <h1 className="text-center my-4 display-5">
        {student?.firstname + " " + student?.lastname}
      </h1>
      <h2 className="text-center my-4 display-6">
        Campus:{" "}
        <span className={`${!student.campus?.name && "text-danger"}`}>
          {student.campus?.name || "No Campus"}
        </span>
      </h2>

      <h3 className="text-center my-4 display-7">
        GPA:{" "}
        <span className={`${!student.GPA && "text-danger"}`}>
          {student.GPA || "No Campus"}
        </span>
      </h3>
      <Image
        className="d-block mx-auto my-4"
        alt="image unable to load"
        fluid
        rounded
        src={student?.imageURL}
      />
    </Container>
  );
}
