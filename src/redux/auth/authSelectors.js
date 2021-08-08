const getEmail = (state) => state.auth.user.email;
const getError = (state) => Boolean(state.auth.error);
const isAuth = (state) => state.auth.token;

export default { getEmail, getError, isAuth };