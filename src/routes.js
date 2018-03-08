// B''H //



// --------------------------------------------------------------------------------
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------

/*
|| IndexRoute is what we will use when there is just a root path that we want to expose.
|| So IndexRoute here will reference our HomePage, which is effectively saying if somebody just
|| goes to /, we will load the HomePage.
 */

/*
|| NOTICE we reference our App component, which will always be loaded.
|| By placing it here at the top, we're saying always load the App component and
|| then nest these other items, pass them as children based on our routing.
 */

export default (
  <Route path = "/" component = {App}>

    <IndexRoute                component = {HomePage} />
    <Route path = "courses"    component = {CoursesPage} />
    <Route path = "course"     component = {ManageCoursePage} />
    <Route path = "course/:id" component = {ManageCoursePage} />
    <Route path = "about"      component = {AboutPage} />

  </Route>
);
// --------------------------------------------------------------------------------


