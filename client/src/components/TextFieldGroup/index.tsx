import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: string;
  onChange: any;
  type: string;
  error: any;
  placeholder?: string;
  info?: String;
  disable?: boolean;
}

export default function TextFieldGroup(props: Props) {
  return (
    <div className={styles.inputArea}>
      <input
        className={props.error ? styles.invalid : ""}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disable}
      />
      {props.info && <small className={styles.info}>{props.info}</small>}
      {props.error && (
        <div className={styles.invalidFeedback}>{props.error}</div>
      )}
    </div>
  );
}
