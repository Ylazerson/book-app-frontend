// B''H //


// This is our application's entry point.

// --------------------------------------------------------------------------------
/*eslint-disable import/default */

// Some ES6 features Babel cannot transpile. So for those, you need to use a polyfill.
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

//  browserHistory gives us nice clean URLs (not hash-based URLs).
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
// Create an instance of our store.
// In this case, I'm not going to pass initial state to the store.
// But that is an optional parameter that I could pass right here.
// If you were creating a server-rendered app, you might choose to do so.
const store = configureStore();


// To fetch the course data when our app loads we can go ahead and dispatch actions against the store.
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
// Provider is is a higher-order component that attaches our store to our React container components.
// So let's wrap our Router component within the Provider component.
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
// --------------------------------------------------------------------------------


