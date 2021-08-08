import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import Filter from './Filter'


const mapStateToProps = (state) => ({
  filterState: phonebookSelectors.getFilter(state),
});

const mapDispatchToprops = {
  handleChange: phonebookActions.filter,
};

export default connect(mapStateToProps, mapDispatchToprops)(Filter);
