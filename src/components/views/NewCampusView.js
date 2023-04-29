/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { formStyles } from '../../styles/globalStyles';

const NewStudentView = (props) => {
    const { handleChange, handleSubmit } = props;
    const classes = formStyles();

    // Render a New Student view with an input form
    return (
        <div>
            <h1>New Campus</h1>

            <div className={classes.root}>
                <div className={classes.formContainer}>
                    <div className={classes.formTitle}>
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                            Add a Campus
                        </Typography>
                    </div>
                    <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Name: </label>
                        <input type="text" name="campusName" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>address: </label>
                        <input type="text" name="address" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>description: </label>
                        <input type="text" name="description" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewStudentView;