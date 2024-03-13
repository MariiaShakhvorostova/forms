import React from "react";
import ReactDOM from "react-dom/client";
import ControlledForm from "./controlled.jsx";
import UncontrolledForm from "./uncontrolled.jsx";
import FormikForm from "./formik_form.jsx";

const Forms = () => {
  return (
    <div className="root">
      <UncontrolledForm />
      <ControlledForm />
      <FormikForm />
    </div>
  );
};

export default Forms;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Forms />
  </React.StrictMode>
);
