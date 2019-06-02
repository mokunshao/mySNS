import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import TextFieldGroup from "../TextFieldGroup";
import {
  loginUser,
  registerUser,
  resetErrors
} from "../../redux/actions/authActions";

interface Props {
  auth: any;
  history: any;
  errors: any;
  loginUser: Function;
  registerUser: Function;
  resetErrors: Function;
}

function Welcome(props: Props) {
  useEffect(() => {
    props.resetErrors();
  }, []);
  if (props.auth.isAuthenticated) {
    props.history.push("/dashboard");
  }
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [username, setUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [password2, setPassword2] = useState("");
  function handleLogin(e: FormEvent) {
    e.preventDefault();
    const loginData = {
      email: loginEmail,
      password: loginPassword
    };
    props.loginUser(loginData);
  }
  function handleRegister(e: FormEvent) {
    e.preventDefault();
    const registerData = {
      username,
      email: registerEmail,
      password: registerPassword,
      password2
    };
    props.registerUser(registerData, props.history);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "loginEmail":
        setLoginEmail(e.target.value);
        break;
      case "loginPassword":
        setLoginPassword(e.target.value);
        break;
      case "username":
        setUsername(e.target.value);
        break;
      case "registerEmail":
        setRegisterEmail(e.target.value);
        break;
      case "registerPassword":
        setRegisterPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  }
  return (
    <div className={styles.Welcome}>
      <div className={styles.right}>
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <TextFieldGroup
              name={"loginEmail"}
              value={loginEmail}
              onChange={handleChange}
              type="email"
              placeholder="邮箱"
              error={props.errors.loginEmail}
            />
            <TextFieldGroup
              name={"loginPassword"}
              value={loginPassword}
              onChange={handleChange}
              type="password"
              placeholder="密码"
              error={props.errors.loginPassword}
            />
            <button onSubmit={handleLogin}>登录</button>
          </form>
        </div>
        <div className={styles.register}>
          <h2>第一次用 mySNS?</h2>
          <div>快速注册</div>
          <form onSubmit={handleRegister}>
            <TextFieldGroup
              name={"username"}
              value={username}
              onChange={handleChange}
              type="text"
              placeholder="用户名"
              error={props.errors.username}
            />
            <TextFieldGroup
              name={"registerEmail"}
              value={registerEmail}
              onChange={handleChange}
              type="email"
              placeholder="邮箱"
              error={props.errors.registerEmail}
            />
            <TextFieldGroup
              name={"registerPassword"}
              value={registerPassword}
              onChange={handleChange}
              type="password"
              placeholder="密码"
              error={props.errors.registerPassword}
            />
            <TextFieldGroup
              name={"password2"}
              value={password2}
              onChange={handleChange}
              type="password"
              placeholder="确认密码"
              error={props.errors.password2}
            />
            <button onSubmit={handleRegister}>注册</button>
          </form>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.mobileHeader}>mySNS 手机客户端</div>
        <div className={styles.mobileInfo}>
          安装 mySNS 手机客户端，随时随地和您的好友保持联络。
        </div>
        <div className={styles.mobilePromote}>
          <div className={styles.android}><span>Android 客户端</span></div>
          <div className={styles.iphone}><span>iPhone 客户端</span></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {
  loginUser,
  registerUser,
  resetErrors
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
