import React from "react";
import styles from "./styles.module.scss";
import { withRouter } from "react-router-dom";

interface Props {
  history: any;
}

function ProfileHeader(props: Props) {
  return (
    <div className={styles.ProfileHeader}>
      <div>
        <button
          className={styles.button}
          onClick={() => {
            props.history.go(-1);
          }}
        >
          返回
        </button>
      </div>
      <div>ProfileHeader</div>
    </div>
  );
}

export default withRouter(ProfileHeader);
