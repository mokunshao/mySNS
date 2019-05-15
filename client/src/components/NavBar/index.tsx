import React from "react";
import styles from "./styles.module.scss";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.logo}>mySNS</div>
        <div className={styles.actions}>
          <span className={styles.button}>注册</span>
          <span className={styles.button}>登录</span>
        </div>
      </div>
    </div>
  );
}
