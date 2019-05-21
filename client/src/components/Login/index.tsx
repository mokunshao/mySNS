import React, { useState, SetStateAction, useEffect } from "react";
import styles from "./styles.module.scss";
import { loginUser, resetErrors } from "../../redux/actions/authActions";
import { connect } from "react-redux";

interface Iinput {
  target: {
    name: String;
    value: SetStateAction<string>;
  };
}

interface Errors {
  email: string;
  password: string;
}

interface Props {
  errors: Errors;
  loginUser: Function;
  dispatch: Function;
  resetErrors: Function;
  auth: any;
  history: any;
}

function Login(props: Props): React.ReactElement {
  useEffect(() => {
    props.resetErrors();
    if (props.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [props.auth.isAuthenticated]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleChange(e: React.ChangeEvent & Iinput): void {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  }
  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const formData = {
      email,
      password
    };
    props.loginUser(formData);
  }
  return (
    <div className={styles.login}>
      <h2>登录</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputArea}>
          <input
            className={props.errors.email ? styles.invalid : ""}
            name={"email"}
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="邮箱"
          />
          {props.errors.email && (
            <div className={styles.invalidFeedback}>{props.errors.email}</div>
          )}
        </div>
        <div className={styles.inputArea}>
          <input
            className={props.errors.password ? styles.invalid : ""}
            name={"password"}
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="密码"
          />
          {props.errors.password && (
            <div className={styles.invalidFeedback}>
              {props.errors.password}
            </div>
          )}
        </div>
        <button onSubmit={handleSubmit}>登录</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  errors: state.errors,
  auth: state.auth
});

const mapDispatchToProps = {
  loginUser,
  resetErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
