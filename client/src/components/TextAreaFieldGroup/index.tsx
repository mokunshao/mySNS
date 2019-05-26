import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: string;
  onChange: any;
  error: any;
  placeholder: string;
  info: string;
}

export default function TextAreaFieldGroup({
  name,
  value,
  onChange,
  error,
  placeholder,
  info
}: Props) {
  return (
    <div className={styles.TextArea}>
      <textarea
        className={error ? styles.invalid : ""}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {info && <small className={styles.info}>{info}</small>}
      {error && <div className={styles.invalidFeedback}>{error}</div>}
    </div>
  );
}
