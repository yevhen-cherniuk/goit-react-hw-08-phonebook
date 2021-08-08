import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialUserState = { name: null, email: null };
const createUser = (_, { payload }) => payload.user;
const addToken = (_, { payload }) => payload.token;
const logoutUser = () => initialUserState;
const getUser = (_, { payload }) => payload;

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: createUser,
  [authActions.loginSuccess]: createUser,
  [authActions.logOutSuccess]: logoutUser,
  [authActions.getCurrentUserSuccess]: getUser,
});

const token = createReducer("", {
  [authActions.registerSuccess]: addToken,
  [authActions.loginSuccess]: addToken,
  [authActions.logOutSuccess]: () => "",
  [authActions.clearUserToken]: () => "",
});

const error = createReducer("", {
  [authActions.registerRequest]: () => "",
  [authActions.loginRequest]: () => "",
  [authActions.registerError]: (_, { payload }) => payload.message,
  [authActions.loginError]: (_, { payload }) => payload.message,
  [authActions.setErrorNull]: () => "",
});

export default combineReducers({
  user,
  token,
  error,
});