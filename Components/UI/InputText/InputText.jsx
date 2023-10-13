"use client";
import styles from "./InputText.module.scss";
export default function InputText({ title, name, ...props }) {
  return (
    <div className={`form-group ${styles.formItem}`}>
      <label htmlFor={name}>{title}</label>
      <input
        type="text"
        id={name}
        name={name}
        {...props}
        className="form-control"
      />
    </div>
  );
}
