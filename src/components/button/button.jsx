import styles from "./styles.module.css";

export const Button = () => {
  return (
    <div>
      <button className={styles["register-btn"]} type="submit">
        Register
      </button>

      <span className={styles["req-field"]}>*Required field</span>
    </div>
  );
};
