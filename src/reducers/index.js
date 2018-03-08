// B''H //



// --------------------------------------------------------------------------------
// Traditionally the rootReducer in Redux is called index.js.
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
import {combineReducers} from 'redux';

// NOTE: since the courseReducer function is the default export, I can go ahead and alias it however I want.
//
// I'm calling it courses here. This is important because the property that I supply here will impact the
// way that I access this state throughout my application.
//
// So in my container components, I'll be saying state.courses.
//
// If I had called this instead courseReducer, then I would have to say state.courseReducer, which doesn't read as well.
import courses from './courseReducer';

import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
const rootReducer = combineReducers({
  // Below is ES6 short way of saying courses: courses
  // I.e. ES6 shorthand property naming.
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
// --------------------------------------------------------------------------------

