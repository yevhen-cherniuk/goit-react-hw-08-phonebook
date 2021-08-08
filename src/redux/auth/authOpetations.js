import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("users/signup", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registerSuccess(data));
    })
    .catch((error) => dispatch(authActions.registerError(error)))
    .finally(() =>
      setTimeout(() => {
        dispatch(authActions.setErrorNull());
      }, 1000)
    );
};

const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("users/login", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch((error) => dispatch(authActions.loginError(error)))
    .finally(() =>
      setTimeout(() => {
        dispatch(authActions.setErrorNull());
      }, 1000)
    );
};

const logOut = (credentials) => (dispatch) => {
  dispatch(authActions.logOutRequest());

  axios
    .post("users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logOutSuccess());
    })
    .catch((error) => dispatch(authActions.logOutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("users/current")
    .then(({ data }) => {
      dispatch(authActions.getCurrentUserSuccess(data));
    })
    .catch((error) => dispatch(authActions.getCurrentUserError(error)));
};

export default { register, login, logOut, getCurrentUser };