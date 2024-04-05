import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../pages/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const router = useNavigate();
  const handleSubmit = async (values, { setFieldError }) => {
    try {
      const res = await axios.post("http://localhost:8000/auth/register", {
        password: values.pass,
        email: values.email,
        name: values.name,
      });
      router("/login");
      console.log(res);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setFieldError("email", "Email taken");
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    pass: Yup.string().required("Password is required"),
  });

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register</div>
        <div className="form">
          <Formik
            initialValues={{ name: "", email: "", pass: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="input-container">
                  <label>Name</label>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <Field type="text" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-container">
                  <label>Password</label>
                  <Field type="password" name="pass" />
                  <ErrorMessage name="pass" component="div" className="error" />
                </div>
                <div className="button-container">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;
