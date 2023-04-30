/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
export default function StudentView(props) {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1 className='text-center my-4 display-5'>{student.firstname + " " + student.lastname}</h1>

      <h2 className='text-center my-4 display-6'>{student.campus.name}</h2>
    </div>
  );

}