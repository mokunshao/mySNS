import React, { useState, SetStateAction, useEffect } from "react";
import styles from "./styles.module.scss";
import { loginUser, resetErrors } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import TextFieldGroup from "../TextFieldGroup";

interface Errors {
  email: string;
  password: string;
}

interface Props {
  errors: Errors;
  loginUser: Function;
  resetErrors: Function;
  auth: any;
  history: { push: Function };
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
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
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
        <TextFieldGroup
          name={"email"}
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="邮箱"
          error={props.errors.email}
        />
        <TextFieldGroup
          name={"password"}
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="密码"
          error={props.errors.password}
        />
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
