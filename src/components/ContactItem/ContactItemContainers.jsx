import { connect } from "react-redux";
import phonebookOperation from "../../redux/phonebook/phonebookOperations";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import ContactItem from "./ContactItem";

const mapStateToProps = (state, { id }) => ({
  ...phonebookSelectors.getContactById(state, id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  handleClick: () => dispatch(phonebookOperation.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);