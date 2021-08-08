import React from "react";

import { connect } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import { Route, Redirect } from "react-router-dom";

const PrivatePage = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isAuth ? <Component {...props} /> : <Redirect to="/login" />;
    }}
  />
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(PrivatePage);