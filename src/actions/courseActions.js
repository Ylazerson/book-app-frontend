// B''H //




// --------------------------------------------------------------------------------
import * as types from './actionTypes';

// If we want to hit a real API, we only have to change this import to point to a real API instead.
import courseApi from '../api/courseApi';

import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
// The only requirement of an action is that it has a type property.
// The rest of its shape can be whatever works best for you.
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
/*
Action Naming Conventions.

Here we're using success suffix for 3 reasons:
    1: We already have a function called loadCourses, our thunk.

    2: This action doesn't fire until all authors have been successfully returned by our API call.
       So the suffix helps clarify that our async request was successful.

    3: People often create a corresponding failure action type called loadCoursesFailure or loadCoursesError.
       In this course, I'm not going to create a corresponding error action for each thunk.
       But you might want to do so in a real app when you need to treat the failures of different async calls uniquely.
*/

export function loadCoursesSuccess(courses) {
  // Below is ES6 short way of saying courses: courses
  // In ES6, we can omit the right-hand side if it matches the left-hand side.
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  // For some reason, perhaps due to the bundling process, the below debugger statement is
  // removed before starting up the server.
  //
  // debugger;
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}
// --------------------------------------------------------------------------------




// --------------------------------------------------------------------------------
/*
   Thunks Section
   --------------

   - A thunk is a function that returns a function.

   - A thunk is a function that wraps an expression in order to delay its evaluation.

   - For redux/react cases a thunk always returns a function that accepts a dispatch.
       - I.e. return function (dispatch) ......

   - So in this case, the loadCourses function is wrapping our dispatch function so that dispatch can run later.

   - I like to put my thunks at the bottom of the actions file.
*/

// --    --    --    --    --    --    --    --    --    --    --    --    --    --
export function loadCourses() {

    return function (dispatch) {

        dispatch(beginAjaxCall());

        return courseApi.getCourses()
            .then(courses => {dispatch(loadCoursesSuccess(courses));})
            .catch(error => {throw(error);});
    };
}
// --    --    --    --    --    --    --    --    --    --    --    --    --    --


// --    --    --    --    --    --    --    --    --    --    --    --    --    --
export function saveCourse(course) {

    // Can also do:
    //     return function (dispatch, getState)
    // getState is an optional parameter for cases where you want to access the Redux store and
    // get particular pieces of state out of it directly without having to pass it in as a parameter.
    return function (dispatch) {

        dispatch(beginAjaxCall());

        return courseApi.saveCourse(course)
            .then(
                course => {
                    // If ID passed in then update course, otherwise create a new one.
                    course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
                }
            )
            .catch(
                error => {
                    dispatch(ajaxCallError(error));
                    throw(error);
                }
            );
    };
}
// --    --    --    --    --    --    --    --    --    --    --    --    --    --


// --------------------------------------------------------------------------------


