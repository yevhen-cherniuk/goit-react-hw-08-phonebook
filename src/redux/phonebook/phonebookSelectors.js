import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  return contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
});

const getContactById = createSelector([(_, taskId) => taskId, getContacts], (id, contacts) =>
  contacts.find((contact) => contact.id === id)
);

export default {
  getContacts,
  getFilter,
  getVisibleContacts,
  getContactById,
};