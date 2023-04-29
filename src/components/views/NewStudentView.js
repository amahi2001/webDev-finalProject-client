/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;

  // Render a New Student view with an input form
  return (
    <div>
      <h1>New Student</h1>

      <div >
        <div >
          <div >

            Add a Student
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
            <input type="text" name="firstname" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
            <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Id: </label>
            <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
            <br />
            <br />

            <button variant="contained" color="primary" type="submit">
              Submit
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewStudentView;