import React from "react";
import styles from "./form.module.csss";

export const form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form__group}>
        <label htmlFor="" className={styles.form__label}>
          First Name
        </label>
        <input type="text" className={styles.form__input} />
      </div>

      <div className={styles.form__group}>
        <label htmlFor="" className={styles.form__label}>
          Last Name
        </label>
        <input type="text" className={styles.form__input} />
      </div>

      <div className={styles.form__group}>
        <label htmlFor="" className={styles.form__label}>
          Gender
        </label>
        <select></select>
      </div>
    </form>
  );
};
