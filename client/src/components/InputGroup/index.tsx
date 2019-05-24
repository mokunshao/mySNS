import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: string;
  onChange: any;
  type?: string;
  errors: any;
  placeholder: string;
  icon: string;
}

export default function InputGroup({
  name,
  value,
  onChange,
  type = "text",
  errors,
  placeholder,
  icon
}: Props) {
  return (
    <div className={styles.inputArea}>
      <div className={styles.icon}></div>
      <input
        className={errors ? styles.invalid : ""}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {errors && <div className={styles.invalidFeedback}>{errors}</div>}
    </div>
  );
}
