import React, { Component } from "react";
import { connect } from "react-redux";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import FormAddContacts from "./FormAddContacts";

class FormAddContactsContainer extends Component {
  state = {
    name: "",
    number: "",
    isAdded: false,
    message: "",
  };

  handleChangeName = (name) => {
    this.setState({ name });
  };

  handleChangeNumber = (number) => {
    this.setState({ number });
  };

  handleClearForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (!name || !number) {
      this.setState({ isAdded: true, message: "Fill in all the fields" });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 2000);
      return;
    }

    if (contacts.find((el) => el.name === name)) {
      this.setState({ isAdded: true, message: "Contact already exist" });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 2000);
    } else {
      this.props.addContact({ name, number });
      this.setState({ isAdded: true, message: "Contact added successfully" });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 2000);
    }
    this.handleClearForm();
  };

  render() {
    return (
      <FormAddContacts
        {...this.state}
        handleChangeName={this.handleChangeName}
        handleChangeNumber={this.handleChangeNumber}
        handlesubmit={this.handlesubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToprops = {
  addContact: phonebookOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToprops)(FormAddContactsContainer);