import React from "react";
import styles from "./styles.module.scss";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQq, faWeixin, faWeibo } from "@fortawesome/free-brands-svg-icons";
library.add(faQq, faWeixin, faWeibo);

interface Props {
  name: string;
  value: string;
  onChange: any;
  type?: string;
  error: any;
  placeholder: string;
  icon: string;
}

export default function InputGroup({
  name,
  value,
  onChange,
  type = "text",
  error,
  placeholder,
  icon
}: Props) {
  return (
    <div className={styles.inputArea}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={["fab", icon as IconName]} />
      </div>
      <input
        className={error ? styles.invalid : ""}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {error && <div className={styles.invalidFeedback}>{error}</div>}
    </div>
  );
}
