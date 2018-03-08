// B''H //



// --------------------------------------------------------------------------------
import React from 'react';
import {Link} from 'react-router'; // Handles the <Link> tag below.
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
/*
|| Note default export below:
||   When someone else imports this file, they will say import HomePage from HomePage,
||   and they will get a reference to the HomePage class.
||
||   That's possible because I exported HomePage as the default here.
 */
export default HomePage;
// --------------------------------------------------------------------------------

