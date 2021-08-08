import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import authOpetations from "../redux/auth/authOpetations";
import loaderSelectors from "../redux/loader/loaderSelectors";

import Loader from "../shared/Loader/Loader";

const RegisterPage = ({ registration, loader }) => {
  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            registration(values);
            // login(values);
            resetForm({});
          }}
        >
          <Form className="form">
            <label>Name</label>
            <Field type="text" name="name" />
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
  registration: authOpetations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);