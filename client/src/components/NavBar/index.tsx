import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { ActionCreator } from "redux";

interface Props {
  logoutUser: ActionCreator<any>;
  auth: any;
}

function NavBar(props: Props) {
  const authUserActions = (
    <div className={styles.actions}>
      <Link to={"/register"} className={styles.button}>
        注册
      </Link>
      <Link to={"/login"} className={styles.button}>
        登录
      </Link>
    </div>
  );
  const guestUserActions = (
    <div className={styles.actions}>
      <img
        className={styles.avatar}
        src={props.auth.user.avatar}
        alt="avatar"
      />
      <span className={styles.button} onClick={props.logoutUser}>
        退出
      </span>
    </div>
  );
  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.logo}>mySNS</div>
        {props.auth.isAuthenticated ? guestUserActions : authUserActions}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
