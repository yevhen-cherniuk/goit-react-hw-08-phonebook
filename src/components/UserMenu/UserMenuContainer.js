import UserMenu from "./UserMenu";
import React, { Component } from "react";
import { connect } from "react-redux";
import authOpetations from "../../redux/auth/authOpetations";
import authSelectors from "../../redux/auth/authSelectors";
import phonebookActions from "../../redux/phonebook/phonebookActions";

class userMenuContainer extends Component {
  handleLogOut = () => {
    const { logOut, clearContactList } = this.props;
    logOut();
    clearContactList();
  };

  render() {
    return <UserMenu {...this.props} handleLogOut={this.handleLogOut} />;
  }
}

const mapStateToProps = (state) => ({
  email: authSelectors.getEmail(state),
  isAuth: authSelectors.isAuth(state),
});

const mapDispatchToProps = {
  logOut: authOpetations.logOut,
  clearContactList: phonebookActions.clearContactList,
};

export default connect(mapStateToProps, mapDispatchToProps)(userMenuContainer);