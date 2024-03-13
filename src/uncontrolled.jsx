import { useForm } from "react-hook-form";
import { Button } from "./components/button/button";
import { Agreement } from "./components/agreement/agreement";
import { Input } from "./components/input/input";
import { FormCard } from "./components/formcard/formcard";
import { Checkbox } from "./components/checkbox/checkbox";
import styles from "./components/input/styles.module.css";
import "./App.css";

const UncontrolledForm = () => {
  const { register, getValues } = useForm();

  const togglePassVisible = (inputRef) => {
    const input = inputRef.current;
    input.type = input.type === "password" ? "text" : "password";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(getValues());
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormCard
      handleSubmit={handleFormSubmit}
      label="Uncontrolled Components"
      className="uncontrolled"
    >
      <Input
        label="Username*"
        placeholder="Enter your username"
        name="username"
        required
        {...register("username")}
      />

      <Input
        label="Email*"
        placeholder="Enter your email"
        name="email"
        required
        {...register("email")}
      />

      <p className={styles["inp-names"]}>Password*</p>
      <div className="pass-container">
        <input
          {...register("password")}
          type="password"
          name="password"
          className={styles["inputs"]}
          placeholder="Enter your password"
          required
        />
        <Checkbox
          id="unshowPass"
          className="toggle-pass"
          onChange={() => togglePassVisible(passwordRef)}
        />
        <label htmlFor="unshowPass" className="pass-icon">
          <img className="eye-icon" src="/src/assets/closed-eye.png" />
        </label>
      </div>
      <p className="line"></p>

      <p className={styles["inp-names"]}>Confirm password*</p>
      <div className="pass-container">
        <input
          {...register("confirmPassword")}
          type="password"
          name="confirmPassword"
          className={styles["inputs"]}
          placeholder="Enter your password"
          required
        />
        <Checkbox
          id="unshowConfPass"
          className="toggle-pass"
          onChange={() => togglePassVisible(ConfPasswordRef)}
        />
        <label htmlFor="unshowConfPass" className="pass-icon">
          <img className="eye-icon" src="/src/assets/closed-eye.png" />
        </label>
      </div>
      <p className="line"></p>

      <Agreement
        idSuffix="1"
        name="agreement"
        required
        {...register("agreement")}
      />

      <Button />
    </FormCard>
  );
};

export default UncontrolledForm;
