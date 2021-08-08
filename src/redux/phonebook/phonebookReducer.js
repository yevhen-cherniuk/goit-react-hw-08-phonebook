import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./phonebookActions";

const fetchContact = (state, { payload }) => payload;
const addContact = (state, { payload }) => [...state, payload];
const removeContact = (state, { payload }) => state.filter((item) => item.id !== payload);
const onFilter = (state, { payload }) => payload;

const items = createReducer([], {
  [phonebookActions.fetchContactsSuccess]: fetchContact,
  [phonebookActions.addContactSuccess]: addContact,
  [phonebookActions.removeContactSuccess]: removeContact,
  [phonebookActions.clearContactList]: () => [],
});

const filter = createReducer("", {
  [phonebookActions.filter]: onFilter,
});

export default combineReducers({ items, filter });