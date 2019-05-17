import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.logo}>mySNS</div>
        <div className={styles.actions}>
          <Link to={"/register"} className={styles.button}>
            注册
          </Link>
          <Link to={"/login"} className={styles.button}>
            登录
          </Link>
        </div>
      </div>
    </div>
  );
}
