import { connect } from "react-redux";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import ContactList from './ContactList';


const mapStateToProps = (state) => ({
  visibleContacts: phonebookSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);