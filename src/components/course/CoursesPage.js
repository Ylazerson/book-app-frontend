// B''H //


// --------------------------------------------------------------------------------
// Container Component.
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
class CoursesPage extends React.Component {


  // ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___
  // CONTAINER COMPONENT MAJOR PIECE 1 OF 5: in the constructor, initialize state and also call our bind functions.
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }
  // ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___


  // ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___
  // CONTAINER COMPONENT MAJOR PIECE 2 OF 5: our child functions, which are called by render.
  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }
  // ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___


  // ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___
  // CONTAINER COMPONENT MAJOR PIECE 3 OF 5: our render function where we typically call child components.
  render() {
    const {courses} = this.props;
    //debugger;

    return (
      <div>
        <h1>Courses</h1>

        <input
          type      = "submit"
          value     = "Add Course"
          className = "btn btn-primary"
          onClick   = {this.redirectToAddCoursePage}/>

        <CourseList courses={courses}/>
      </div>
    );
  }
  // ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___   ___

}
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
// CONTAINER COMPONENT MAJOR PIECE 4 OF 5: our propTypes that provide our prop type validation.
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
// --------------------------------------------------------------------------------






// --------------------------------------------------------------------------------
// CONTAINER COMPONENT MAJOR PIECE 5 OF 5: our Redux Connect and related functions.
// I.e. Connect, mapStateToProps, and mapDispatchToProps
//
//
// --------------------------------------------------------------------------------
// mapStateToProps takes two parameters:
//   1: state
//   2: ownProps - this lets us access props that are being attached to this component.
//
// --    --    --    --    --    --    --    --    --    --    --    --    --    --
//
// Inside this function, we're going to define an object that returns the properties
// that we'd like to see exposed on our component.
//
// For example in below, means I would like to be able to access my courses by
// saying this.props.courses in this component.
//
// --    --    --    --    --    --    --    --    --    --    --    --    --    --
//
// When course data changes, mapStateToProps will receive that new state and
// end up passing that state as this.props.courses to our component. This will THEN call
// the render() function above. Cool!
//
// So for example, when user clicks Save in CourseForm.js:
//   Step 1: onSave is called
//   Step 2: ... which calls saveCourse in ManageCoursePage.js (which rendered the form)
//   Step 3: ... which calls this.props.actions.saveCourse
//   Step 4: ... which calls saveCourse in courseActions.js
//   Step 5: ... which dispatches an action createCourseSuccess
//   Step 6: ... which is picked up by the courseReducer function in courseReducer.js
//   Step 7: ... The switch statement then handles the type and returns a new state.
//   Step 8: ... which is picked up by the mapStateToProps function below
//   Step 9: ... which calls render() above again
//
// --    --    --    --    --    --    --    --    --    --    --    --    --    --
// Note this function does not need to be named mapStateToProps.
//
function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    // I am accessing the course data that's within our Redux store.
    //
    // SEE src/reducers/index.js where we aliased courseReducer to courses
    // That's how we now refer to it here: state.courses
    courses: state.courses
  };
}
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// mapDispatchToProps is for deciding what actions you want to expose on your component.
//
// mapDispatchToProps is optional. If you don't define it then you'll need to dispatch
// actions by using the this.props.dispatch function directly. Not recommended.
//
// --    --    --    --    --    --    --    --    --    --    --    --    --    --
// Note this function does not need to be named mapDispatchToProps.
//
function mapDispatchToProps(dispatch) {
  return {
    // bindActionCreators will go through my courseActions (src/actions/courseActions.js) and
    // find all the actions in that file and then wrap them in a call to dispatch.
    actions: bindActionCreators(courseActions, dispatch)
  };
}
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// Instead of exporting a plain component, we're going to export a component that's
// decorated by the React-Redux Connect function.
//
// The Connect function is what we use to create components that can interact with Redux.
//
// I'm going to refer to these components as container components.
//
// --    --    --    --    --    --    --    --    --    --    --    --    --    --
//
// NOTE the two parentheses side by side right here. This is just two function calls.
// The Connect function ends up returning a function, and that function immediately calls
// our container component (CoursesPage) with the result of the first function.
//
// I.e. functional programming.
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// --------------------------------------------------------------------------------

