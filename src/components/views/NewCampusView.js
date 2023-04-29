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
            <h1>New Campus</h1>

            <div >
                Add a Campus
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label >Campus Name: </label>
                <input type="text" name="campusName" onChange={(e) => handleChange(e)} />
                <br />
                <br />

                <label>address: </label>
                <input type="text" name="address" onChange={(e) => handleChange(e)} />
                <br />
                <br />

                <label >description: </label>
                <input type="text" name="description" onChange={(e) => handleChange(e)} />
                <br />
                <br />

                <button type="submit">
                    Submit
                </button>
                <br />
                <br />
            </form>
        </div>

    )
}

export default NewStudentView;