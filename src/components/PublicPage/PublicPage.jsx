import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";

const PublicPage = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) => (isAuth && routeProps.restricted ? <Redirect to="/contacts" /> : <Component {...props} />)}
  />
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.isAuth(state),
});

export default connect(mapStateToProps)(PublicPage);