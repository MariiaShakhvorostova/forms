import React, { useState } from "react";
import { Button } from "./components/button/button";
import { Agreement } from "./components/agreement/agreement";
import { Input } from "./components/input/input";
import { FormCard } from "./components/formcard/formcard";
import { Checkbox } from "./components/checkbox/checkbox";
import styles from "./components/input/styles.module.css";
import "./App.css";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreement: "true",
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const togglePassVisible = () => {
    setShowPass((prev) => !prev);
  };

  const toggleConfPass = () => {
    setShowConfPass((prev) => !prev);
  };

  return (
    <FormCard
      handleSubmit={handleSubmit}
      label="Controlled Components"
      className="controlled"
    >
      <Input
        label="Username*"
        placeholder="Enter your username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <Input
        label="Email*"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <p className={styles["inp-names"]}>Password*</p>
      <div className="pass-container">
        <input
          type={showPass ? "text" : "password"}
          className={styles["inputs"]}
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <Checkbox
          id="showPass"
          className="toggle-pass"
          onChange={togglePassVisible}
        />
        <label htmlFor="showPass" className="pass-icon">
          <img className="eye-icon" src="/src/assets/closed-eye.png" />
        </label>
      </div>
      <p className="line"></p>
      <p className={styles["inp-names"]}>Confirm password*</p>
      <div className="pass-container">
        <input
          type={showConfPass ? "text" : "password"}
          className={styles["inputs"]}
          placeholder="Enter your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <Checkbox
          id="showConfPass"
          className="toggle-pass"
          onChange={toggleConfPass}
        />
        <label htmlFor="showConfPass" className="pass-icon">
          <img className="eye-icon" src="/src/assets/closed-eye.png" />
        </label>
      </div>
      <p className="line"></p>

      <Agreement
        idSuffix="2"
        name="agreement"
        value={formData.agreement}
        onChange={handleChange}
        required
      />

      <Button />
    </FormCard>
  );
};

export default ControlledForm;
