// B''H //




// --------------------------------------------------------------------------------
import * as types from '../actions/actionTypes';
import initialState from './initialState';
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// Reducers are simple!
// A reducer is just a function that accepts a state and an action and then returns a new state.
//
// REMEMBER: state must be immutable.
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
export default function courseReducer(state = initialState.courses, action) {

    switch (action.type) {

        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            // For some reason, perhaps due to the bundling process, the below debugger statement is
            // removed before starting up the server.
            //
            // debugger;
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}
// --------------------------------------------------------------------------------

