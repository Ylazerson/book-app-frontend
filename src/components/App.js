// B''H //



// --------------------------------------------------------------------------------
// This component handles the App template used on every page; such as a header or a footer.
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
// React Router will be passing child components as properties onto our app component.
// They then will be composed right here on the page.
// See src/routes.js

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">

                {/*loading is the parameter for the Header react component*/}
                <Header loading={this.props.loading} />

                {this.props.children}

            </div>
        );
    }
}
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// We're expecting to receive child components.
// So we need to add the children as a required PropType on this component.
App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
// --------------------------------------------------------------------------------


