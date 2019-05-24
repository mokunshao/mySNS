import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: string;
  onChange: any;
  errors: any;
  options: Array<any>;
  info:string;
}

export default function SelectListGroup({
  name,
  value,
  onChange,
  errors,
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
        className={errors ? styles.invalid : ""}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className={styles.info}>{info}</small>}
      {errors && <div className={styles.invalidFeedback}>{errors}</div>}
    </div>
  );
}
