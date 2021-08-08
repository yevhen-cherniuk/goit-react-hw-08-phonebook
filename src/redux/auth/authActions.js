import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const logOutRequest = createAction("auth/logOutRequest");
const logOutSuccess = createAction("auth/logOutSuccess");
const logOutError = createAction("auth/logOutError");

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

const clearUserToken = createAction("auth/clearUserToken");

const setErrorNull = createAction("error/setErrorNull");

export default {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  setErrorNull,
  clearUserToken
};