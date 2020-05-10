import React from "react";
import {  Route, Redirect} from "react-router-dom";
import {isAuthenticated} from '../helpers/authenticationHelpers';

const PrivateRoute = ({ component, ...rest }) => {
    return (
      <Route
        {...rest}
          render={({ location }) => isAuthenticated() ? component() : (<Redirect to={{pathname: "/LogIn", state: { from: location }}}/>)}
      />
    );
  }

  export default PrivateRoute;