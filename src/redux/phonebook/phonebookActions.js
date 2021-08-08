import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("phonebook/addRequest");
const addContactSuccess = createAction("phonebook/addSuccess");
const addContactError = createAction("phonebook/addError");

const fetchContactsRequest = createAction("phonebook/fetchRequest");
const fetchContactsSuccess = createAction("phonebook/fetchSuccess");
const fetchContactsError = createAction("phonebook/fetchError");

const removeContactRequest = createAction("phonebook/removeRequest");
const removeContactSuccess = createAction("phonebook/removeSuccess");
const removeContactError = createAction("phonebook/removeError");

const clearContactList = createAction("phonebook/clearContactList");

const filter = createAction("phonebook/filter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  filter,
  clearContactList,
};