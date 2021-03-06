import React, { useState, SetStateAction, useEffect, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { registerUser, resetErrors } from "../../redux/actions/authActions";
import TextFieldGroup from "../TextFieldGroup";

interface Props {
  registerUser: Function;
  errors: any;
  history: Object;
  resetErrors: Function;
}

function Register(props: Props): React.ReactElement {
  useEffect(() => {
    props.resetErrors()
  }, []);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
        break;
    }
  }
  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const formData = {
      username,
      email,
      password,
      password2
    };
    props.registerUser(formData, props.history);
  }
  return (
    <div className={styles.register}>
      <h2>快速注册</h2>
      <form onSubmit={handleSubmit}>
        <TextFieldGroup
          name={"username"}
          value={username}
          onChange={handleChange}
          type="text"
          placeholder="用户名"
          error={props.errors.username}
        />
        <TextFieldGroup
          name={"email"}
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="邮箱"
          error={props.errors.registerEmail}
        />
        <TextFieldGroup
          name={"password"}
          value={password}
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
        <button onSubmit={handleSubmit}>注册</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  errors: state.errors
});

const mapDispatchToProps = { registerUser, resetErrors };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
