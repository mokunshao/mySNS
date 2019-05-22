import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: string;
  onChange: any;
  type: string;
  errors: any
  placeholder:string;
}

export default function TextFieldGroup(props:Props) {
  return (
    <div className={styles.inputArea}>
      <input
        className={props.errors ? styles.invalid : ""}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.errors && (
        <div className={styles.invalidFeedback}>{props.errors}</div>
      )}
    </div>
  );
}
