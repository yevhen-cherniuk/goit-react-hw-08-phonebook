import FormAddContactsContainer from "../components/FormAddContacts/FormAddContactsContainer";
import FilterContainer from "../components/Filter/FilterContainer";
import ContactListContainer from "../components/ContactList/ContactListContainer";
import { CSSTransition } from "react-transition-group";

const styles = {
  wrapper: {
    margin: "0 auto",
    width: "420px",
  },
};

const Contacts = ({ contacts }) => (
  <div style={styles.wrapper}>
    <FormAddContactsContainer />
        <h2>Contacts</h2>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade-filter" unmountOnExit>
            <FilterContainer />
          </CSSTransition>
        <ContactListContainer />
  </div>
);

export default Contacts;