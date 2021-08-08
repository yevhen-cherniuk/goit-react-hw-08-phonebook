import { createReducer } from "@reduxjs/toolkit";
import authActions from "../auth/authActions";
import phonebookActions from "../phonebook/phonebookActions";

const loader = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.loginRequest]: () => true,
  [authActions.logOutRequest]: () => true,
  [phonebookActions.fetchContactsRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.loginSuccess]: () => false,
  [authActions.logOutSuccess]: () => false,
  [phonebookActions.fetchContactsSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logOutError]: () => false,
  [phonebookActions.fetchContactsError]: () => false,
});

export default loader;