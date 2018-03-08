// B''H //



// --------------------------------------------------------------------------------
/*
 || You could totally use a stateless component here, but because of some current limitations in hot reloading,
 || it's useful to have a class somewhere at the top of your component structure.
 */
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;
// --------------------------------------------------------------------------------


