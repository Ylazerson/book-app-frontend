// B''H //



// --------------------------------------------------------------------------------
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
/*
|| Note, using a nice little feature that comes with both Link and IndexLink:
||     - When the link is active based on the route, go ahead and apply a class for me.
||     - So this allows me to style the currently selected anchor up in the header.
||     - SEE src/styles/styles.css
 */

const Header = ({loading}) => {
    return (
        <nav>

            <IndexLink to = "/"        activeClassName = "active">Home</IndexLink>
            {" | "}
            <Link      to = "/courses" activeClassName = "active">Courses</Link>
            {" | "}
            <Link      to = "/about"   activeClassName = "active">About</Link>

            {/* ---------------------------------------------------------------------------- */}
            {/*This technique leans on the short-circuiting nature of the logical AND operator.
             The right-hand side over here will only evaluate if this left-hand side is true.
             So the loading dots component will only display if loading is true.*/}

            {/*Every 100 msec it should show a new dot, and it should show up to 20 dots.*/}
            {loading && <LoadingDots interval={100} dots={20}/>}
            {/* ---------------------------------------------------------------------------- */}

        </nav>
    );
};
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
// --------------------------------------------------------------------------------


