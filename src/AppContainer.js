import React, { Component } from "react";
import { connect } from "react-redux";
import phonebookSelectors from "./redux/phonebook/phonebookSelectors";
import authSelectors from "./redux/auth/authSelectors";
import phonbookOperation from "./redux/phonebook/phonebookOperations";
import authOpetations from "./redux/auth/authOpetations";
import App from "./App";

class AppContainer extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getContacts(state),
  error: authSelectors.getError(state),
});

const mapDispatchToProps = {
  fetchContact: phonbookOperation.fetchContact,
  getCurrentUser: authOpetations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);