import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Agreement = forwardRef(
  ({ idSuffix, value, onChange, required, name, ...rest }, ref) => {
    const uniqueId = `agreeCheckbox_${idSuffix}`;

    return (
      <div className={styles["agreement"]}>
        <input
          type="checkbox"
          id={uniqueId}
          className={styles["checkbox"]}
          value={value}
          onChange={onChange}
          required={required}
          name={name}
          ref={ref}
          {...rest}
        />
        <label htmlFor={uniqueId}>
          <img src="/src/assets/Checkbox.png" />
          <p>I agree to the terms and conditions.</p>
        </label>
      </div>
    );
  }
);
Agreement.propTypes = {
  idSuffix: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
};
Agreement.defaultProps = {
  onChange: () => {},
};
