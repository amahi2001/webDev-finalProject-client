/*==================================================
EditStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from "./Header";
import EditStudent from "../views/EditStudentView";
import ErrorPage from "../ErrorComponent";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
//redux
import {
  fetchStudentThunk,
  fetchAllCampusesThunk,
  editStudentThunk,
} from "../../store/thunks";

class EditStudentContainer extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      //states for student info
      firstname: "",
      lastname: "",
      email: "",
      imageURL: "",
      GPA: "",
      campusId: "",
      //states for available campuses
      campuses: [],
      //states for redirect
      redirect: false,
      redirectId: null,
    };
  }

  // Capture input data when it is entered
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Take action after user click the submit button
  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent browser reload/refresh after submit.

    //update student in back-end database
    let student = {
      id: this.props.match.params.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      // Only add imageURL and GPA if they are not empty
      imageURL: this.state.imageURL || null,
      GPA: this.state.GPA || null,
      campusId: this.state.campusId || null,
    };

    await this.props.editStudent(student);

    // reset all states except redirect=true and redirectId
    this.setState({
      //states for student info
      firstname: "",
      lastname: "",
      email: "",
      imageURL: "",
      GPA: "",
      campusId: "",
      //states for available campuses
      campuses: [],
      //states for redirect
      redirect: true,
      redirectId: this.props.student?.id,
    });
  };

  async componentDidMount() {
    await this.props.fetchStudent(this.props.match.params.id);
    await this.props.fetchAllCampuses();

    this.setState({
      //states for student info
      firstname: this.props.student?.firstname || "",
      lastname: this.props.student?.lastname || "",
      email: this.props.student?.email || "",
      imageURL: this.props.student?.imageURL || "",
      GPA: this.props.student?.GPA || "",
      campusId: this.props.student?.campus?.id || "",
      //states for available campuses
      campuses: this.props.allCampuses || [],
      //states for redirect
      redirect: false,
      redirectId: this.props.match.params.id,
    });
  }

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  // Render new student input form
  render() {
    // Redirect to new student's page after submit
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        {!!this.props.student?.id ? (
          <EditStudent
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            student={this.state}
          />
        ) : (
          <ErrorPage>
            Student with ID "{this.props.match.params.id}" does not exist.
          </ErrorPage>
        )}
      </div>
    );
  }
}

function mapState(state) {
  return {
    student: state.student, // Get the State object from Reducer "student"
    allCampuses: state.allCampuses, // Get the State object from Reducer "allCampuses"
  };
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
function mapDispatch(dispatch) {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    editStudent: (id) => dispatch(editStudentThunk(id)),
  };
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store
// (and re-read the values when the Store State updates).
export default withRouter(connect(mapState, mapDispatch)(EditStudentContainer));
