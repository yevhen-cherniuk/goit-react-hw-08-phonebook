import axios from "axios";
import phonebookActions from "./phonebookActions";
import authActions from "../auth/authActions";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(phonebookActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(phonebookActions.addContactSuccess(data)))
    .catch((error) => dispatch(phonebookActions.addContactError(error)));
};

const fetchContact = () => (dispatch, getState) => {
  dispatch(phonebookActions.fetchContactsRequest());

  const {
    auth: { token: persistedToken },
  } = getState();

  axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

   axios
    .get("/contacts")
    .then(({ data }) => dispatch(phonebookActions.fetchContactsSuccess(data)))
    .catch((error) => {
      dispatch(authActions.clearUserToken());
      return dispatch(phonebookActions.fetchContactsError(error));
    });
};

const removeContact = (id) => (dispatch) => {
  dispatch(phonebookActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(phonebookActions.removeContactSuccess(id)))
    .catch((error) => dispatch(phonebookActions.removeContactError(error)));
};

export default {
  addContact,
  fetchContact,
  removeContact,
};