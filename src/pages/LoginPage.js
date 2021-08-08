import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import authOpetations from "../redux/auth/authOpetations";
import loaderSelectors from "../redux/loader/loaderSelectors";
import Loader from "../shared/Loader/Loader";

const LoginPage = ({ login, loader }) => {
  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            login(values);
            resetForm({});
          }}
        >
          <Form className="form">
            <label>Email</label>
            <Field type="email" name="email" />
            <label>Password</label>
            <Field type="password" name="password" />
            <button type="submit">Login</button>
          </Form>
        </Formik>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loader: loaderSelectors.getLoader(state),
});

const mapDispatchToProps = {
  login: authOpetations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);