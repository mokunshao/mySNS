import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: string;
  onChange: any;
  errors: any;
  placeholder: string;
  info: string;
}

export default function TextAreaFieldGroup({
  name,
  value,
  onChange,
  errors,
  placeholder,
  info
}: Props) {
  return (
    <div className={styles.TextArea}>
      <textarea
        className={errors ? styles.invalid : ""}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {info && <small className={styles.info}>{info}</small>}
      {errors && <div className={styles.invalidFeedback}>{errors}</div>}
    </div>
  );
}
