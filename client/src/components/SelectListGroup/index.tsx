import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: string;
  onChange: any;
  error: any;
  options: Array<any>;
  info:string;
}

export default function SelectListGroup({
  name,
  value,
  onChange,
  error,
  options,
  info
}: Props) {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className={styles.SelectArea}>
      <select
        className={error ? styles.invalid : ""}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className={styles.info}>{info}</small>}
      {error && <div className={styles.invalidFeedback}>{error}</div>}
    </div>
  );
}
