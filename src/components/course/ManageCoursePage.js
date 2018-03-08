// B''H //


// --------------------------------------------------------------------------------
// Container component.
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
export class ManageCoursePage extends React.Component {


    // ------------------------------------------------------------------------------
    constructor(props, context) {

        super(props, context);

        // We need to pass down mutable state to our form (see render below), so let's set
        // up some local state on this container component.
        //
        // Taking the course props that are coming in and just use Object.assign so
        // that we don't end up holding that reference and passing it around.
        //
        /*
        NOTE:
        Being that we're not passing the courses prop down to the case form; but instead, passing state down.
        State right here is set based on the constructor.
        So when the page is first constructed, it takes the course off of props and then sets it to state.
        So the problem is once our page is initialized, any changes to props.course aren't going to be reflected within state.
        For example, if once on the form page you refresh page, it won't have the course info you were working on.
        Because props.course would be empty. And that's what gets set to state.

        To fix: add some code in componentWillReceiveProps.
        This React lifecycle function is called anytime that props have changed, as well as anytime that React thinks that props might have changed.
         */
        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

        // ----------------------------------------------------------------------------
        // React doesn't autobind in ES6 classes, so we have to handle binding ourselves.
        //
        // For performance, it's best to place your bind calls here in the constructor.
        //
        // For example, every time a change event occurs in the input (see CourseForm.js), it is passing
        // the 'this' context of the input over to our change handler updateCourseState, and that's
        // why 'this' is not the 'this' that we're expecting.
        //
        // It needs to be bound to the instance of our component. So to fix this, let's bind the 'this'
        // context up in our constructor.
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse        = this.saveCourse.bind(this);
        // ----------------------------------------------------------------------------

    }

    // ------------------------------------------------------------------------------


    // ------------------------------------------------------------------------------
    /*
    This React lifecycle function is called anytime that props have changed, or anytime that React THINKS that props might have changed.
    This function may run sometimes even when props haven't changed.
    Hence: (this.props.course.id != nextProps.course.id)

    Remember course/:id holds the string name for the course.
        - http://localhost:3000/course/clean-code
        - http://localhost:3000/course/architecture

    I.e. Has the course's Id changed? And if it hasn't changed, then don't run reset the state.
    We only want to update state with our props when we have ended up requesting a new course.
    I should be able to refresh this form now. Or enter a new course-id directly into URL to get other form etc.
    */
    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            // Necessary to populate form when existing course is loaded directly.
            this.setState(
                {course: Object.assign({}, nextProps.course)}
            );
        }
    }

    // ------------------------------------------------------------------------------


    // ------------------------------------------------------------------------------
    /*
    The updateCourseState function will be the onChange handler for ALL of our form fields.
    By convention, each form field has a name, and that name allows me to update the corresponding value here in state with a single function.
    AWESOME

    Make sure to bind 'this' in constructor above.
    */
    updateCourseState(event) {

        const field = event.target.name;

        let course = Object.assign({}, this.state.course);

        course[field] = event.target.value;

        return this.setState({course});

    }

    // ------------------------------------------------------------------------------


    // ------------------------------------------------------------------------------
    courseFormIsValid() {
        let formIsValid = true;
        let errors      = {};

        if (this.state.course.title.length < 5) {
            errors.title = 'Title must be at least 5 characters.';
            formIsValid  = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    // ------------------------------------------------------------------------------


    // ------------------------------------------------------------------------------
    // Make sure to bind 'this' in constructor above.
    saveCourse(event) {

        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        // This will cause the Save button to re-render as 'Saving...'
        // SEE CourseFrom.js
        this.setState({saving: true});

        // Only after the save AJAX call completes redirect to courses page.
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    // ------------------------------------------------------------------------------


    // ------------------------------------------------------------------------------
    // To set up React Router's context, you have to declare that you want it.
    // See ManageCoursePage.contextTypes above.
    //
    redirect() {

        // __   __   __   __   __   __   __   __   __   __   __   __   __   __   __
        /*
        One of the common questions in Redux is when to use local state.
        In this case, local state is useful because this is fleeting data that the rest of the app will not care about.
        I could run this interaction through the Redux flow, but in this case, I feel it would just be unnecessary overhead.
        */
        this.setState({saving: false});
        // __   __   __   __   __   __   __   __   __   __   __   __   __   __   __


        toastr.success('Course saved');

        this.context.router.push('/courses');
    }

    // ------------------------------------------------------------------------------


    // ------------------------------------------------------------------------------
    // Notice we're using this.state (local defined state) and this.props (props passed in).
    render() {
        return (
            <CourseForm
                allAuthors = {this.props.authors}
                onChange   = {this.updateCourseState}
                onSave     = {this.saveCourse}
                course     = {this.state.course}
                errors     = {this.state.errors}
                saving     = {this.state.saving}
            />
        );
    }

    // ------------------------------------------------------------------------------

}
// --------------------------------------------------------------------------------





// ________________________________________________________________________________
//                     propTypes and contextTypes section

// --------------------------------------------------------------------------------
ManageCoursePage.propTypes = {
    course : PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// Pull in the React Router context so router is available on this.context.router.
//
// Since contextTypes is a static property, it has to be done after the class definition.
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};
// --------------------------------------------------------------------------------
// ________________________________________________________________________________







// --------------------------------------------------------------------------------
function getCourseById(courses, id) {

    const course = courses.filter(course => course.id == id);

    if (course.length) return course[0]; //since filter returns an array, have to grab the first.

    return null;
}
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
function mapStateToProps(state, ownProps) {

    // Read the course id from the URL path `/course/:id`
    //
    // See routes.js where we defined the placeholder as id
    //    <Route path = "course/:id" component = {ManageCoursePage} />
    //
    // Note you set the debugger here to inspect all the different information that's available on ownProps.
    const courseId = ownProps.params.id;

    let course = {id: '', watch_url: '', title: '', author_id: '', length: '', category: ''};


    // On load, there're no courses yet. It needs to wait for the AJAX call to come back, but this is running immediately on page load.
    // So we need to add  logic to make sure that we don't try getting courses (getCourseById) when no courses are available yet.
    // We can fix this by adding: state.courses.length > 0.
    // Otherwise, if we hit F5 to refresh the page no data from the store would show. The form would be blank.
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    /*
     The SelectInput component needs an object that has a value property and a text property.
     But the author data that's coming down from our store is going to have an author with an Id, a first name, and a last name.
     So what we need to do is translate the shape that came from the API into something useful for populating the drop-down.
     See: authorsFormattedForDropdown function in src/selectors/selectors
     The place to do such data transformations is the mapStateToProps function.
     */
    return {
        course : course,
        authors: authorsFormattedForDropdown(state.authors)
    };
}
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
// --------------------------------------------------------------------------------


