/*==================================================
EditCampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from "./Header";
import EditCampusView from "../views/EditCampusView";
import ErrorPage from "../ErrorComponent";
import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
//redux
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";

class EditCampusContainer extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      campusName: "",
      address: "",
      description: "",
      imageURL: "",
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
    let campus = {
      id: this.props.match.params.id,
      name: this.state.campusName,
      address: this.state.address,
      description: this.state.description || null,
      imageURL: this.state.imageURL || null,
    };

    await this.props.editCampus(campus);

    // reset all states except redirect=true and redirectId
    this.setState({
      campusName: "",
      address: "",
      description: "",
      imageURL: "",
      redirect: true,
      redirectId: this,
    });
  };

  async componentDidMount() {
    await this.props.fetchCampus(this.props.match.params.id);
    this.setState({
      campusName: this.props.campus?.name || "",
      address: this.props.campus?.address || "",
      description: this.props.campus?.description || "",
      imageURL: this.props.campus?.imageURL || "",
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
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        {!!this.props.campus.id ? (
          <EditCampusView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            campus={this.state}
          />
        ) : (
          <ErrorPage>
            Campus with ID "{this.props.match.params.id}" does not exist.
          </ErrorPage>
        )}
      </div>
    );
  }
}

function mapState(state) {
  return {
    campus: state.campus,
  };
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
function mapDispatch(dispatch) {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (id) => dispatch(editCampusThunk(id)),
  };
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store
// (and re-read the values when the Store State updates).
export default withRouter(connect(mapState, mapDispatch)(EditCampusContainer));
