import React, { Component } from "react";
import Contacts from "./Contacts";
import { connect } from "react-redux";
import phonebookSelectors from "../redux/phonebook/phonebookSelectors";
import phonebookOperation from "../redux/phonebook/phonebookOperations";

class ContactsContainer extends Component {
  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  render() {
    const { contacts } = this.props;
    return <Contacts contacts={contacts} />;
  }
}

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  fetchContacts: phonebookOperation.fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);