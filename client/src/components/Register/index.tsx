import React, { useState, SetStateAction } from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";

interface Errors {
  username: "";
  email: "";
  password: "";
  password2: "";
}

interface Props {
  registerUser: Function;
  errors: Errors;
}

function Register(props: Props): React.ReactElement {
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
    props.registerUser(formData);
  }
  return (
    <div className={styles.register}>
      <h2>快速注册</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputArea}>
          <input
            className={props.errors.username ? styles.invalid : ""}
            name={"username"}
            value={username}
            onChange={handleChange}
            type="text"
            placeholder="用户名"
          />
          {props.errors.username && (
            <div className={styles.invalidFeedback}>
              {props.errors.username}
            </div>
          )}
        </div>
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
        <div className={styles.inputArea}>
          <input
            className={props.errors.password2 ? styles.invalid : ""}
            name={"password2"}
            value={password2}
            onChange={handleChange}
            type="password"
            placeholder="确认密码"
          />
          {props.errors.password2 && (
            <div className={styles.invalidFeedback}>
              {props.errors.password2}
            </div>
          )}
        </div>
        <button onSubmit={handleSubmit}>注册</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  errors: state.errors
});

const mapDispatchToProps = { registerUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
