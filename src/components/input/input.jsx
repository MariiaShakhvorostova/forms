import React from "react";
import styles from "./styles.module.css";
import { forwardRef } from "react";

export const Input = forwardRef(
  ({ label, placeholder, value, onChange, required, name, ...rest }, ref) => {
    return (
      <div>
        <p className={styles["inp-names"]}>{label}</p>
        <input
          type="text"
          className={styles["inputs"]}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          name={name}
          ref={ref}
          {...rest}
        />
        <p className={styles["line"]}></p>
      </div>
    );
  }
);
