import React, { useState, SetStateAction, useEffect } from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { registerUser, resetErrors } from "../../redux/actions/authActions";
import TextFieldGroup from "../TextFieldGroup";

interface Errors {
  username: "";
  email: "";
  password: "";
  password2: "";
}

interface Props {
  registerUser: Function;
  errors: Errors;
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
  interface Iinput {
    target: {
      name: String;
      value: SetStateAction<string>;
    };
  }
  function handleChange(e: React.ChangeEvent & Iinput): void {
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
