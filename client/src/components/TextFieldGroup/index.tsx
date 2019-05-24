import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: string;
  onChange: any;
  type: string;
  errors: any;
  placeholder: string;
  info?: String;
}

export default function TextFieldGroup(props: Props) {
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
      {props.info && (
        <small className={styles.info}>{props.info}</small>
      )}
      {props.errors && (
        <div className={styles.invalidFeedback}>{props.errors}</div>
      )}
    </div>
  );
}
