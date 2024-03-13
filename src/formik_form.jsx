import React from "react";
import { Formik, Field } from "formik";
import { Button } from "./components/button/button";
import { Agreement } from "./components/agreement/agreement";
import { Input } from "./components/input/input";
import { FormCard } from "./components/formcard/formcard";
import { Checkbox } from "./components/checkbox/checkbox";
import styles from "./components/input/styles.module.css";
import "./App.css";

const FormikForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const handleCheckboxChange = (e, field) => {
    const input = e.target.previousSibling;
    const type = input.getAttribute("type");
    if (type === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
    field.onChange(e);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreement: "true",
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <FormCard
          handleSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          label="Formik Form"
          className="formik-form"
        >
          <Field name="username">
            {({ field }) => (
              <>
                <Input
                  label="Username*"
                  placeholder="Enter your username"
                  required
                  {...field}
                />
              </>
            )}
          </Field>
          <Field name="email">
            {({ field }) => (
              <>
                <Input
                  label="Email*"
                  placeholder="Enter your email"
                  required
                  {...field}
                />
              </>
            )}
          </Field>

          <p className={styles["inp-names"]}>Password*</p>
          <div className="pass-container">
            <Field name="password">
              {({ field }) => (
                <>
                  <input
                    {...field}
                    type="password"
                    className={styles["inputs"]}
                    placeholder="Enter your password"
                    required
                  />
                  <Checkbox
                    id="fkshowPass"
                    className="toggle-pass"
                    onChange={(e) => handleCheckboxChange(e, field)}
                  />
                  <label htmlFor="fkshowPass" className="pass-icon">
                    <img
                      className="eye-icon"
                      src="/src/assets/closed-eye.png"
                    />
                  </label>
                </>
              )}
            </Field>
          </div>
          <p className="line"></p>

          <p className={styles["inp-names"]}>Confirm password*</p>
          <div className="pass-container">
            <Field name="confirmPassword">
              {({ field }) => (
                <>
                  <input
                    {...field}
                    type="password"
                    className={styles["inputs"]}
                    placeholder="Enter your password"
                    required
                  />
                  <Checkbox
                    id="fkshowConfPass"
                    className="toggle-pass"
                    onChange={(e) => handleCheckboxChange(e, field)}
                  />
                  <label htmlFor="fkshowConfPass" className="pass-icon">
                    <img
                      className="eye-icon"
                      src="/src/assets/closed-eye.png"
                    />
                  </label>
                </>
              )}
            </Field>
          </div>
          <p className="line"></p>

          <Field name="username">
            {({ field }) => (
              <>
                <Agreement idSuffix="3" required {...field} />
              </>
            )}
          </Field>

          <Button onChange={handleSubmit} />
        </FormCard>
      )}
    </Formik>
  );
};

export default FormikForm;
