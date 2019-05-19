import React, { useState, SetStateAction } from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";

interface Props{
  registerUser:Function
}

function Register(props:Props): React.ReactElement {
  console.dir(props);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });
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
            className={errors.username ? styles.invalid : ""}
            name={"username"}
            value={username}
            onChange={handleChange}
            type="text"
            placeholder="用户名"
          />
          {errors.username && (
            <div className={styles.invalidFeedback}>{errors.username}</div>
          )}
        </div>
        <div className={styles.inputArea}>
          <input
            className={errors.email ? styles.invalid : ""}
            name={"email"}
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="邮箱"
          />
          {errors.email && (
            <div className={styles.invalidFeedback}>{errors.email}</div>
          )}
        </div>
        <div className={styles.inputArea}>
          <input
            className={errors.password ? styles.invalid : ""}
            name={"password"}
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="密码"
          />
          {errors.password && (
            <div className={styles.invalidFeedback}>{errors.password}</div>
          )}
        </div>
        <div className={styles.inputArea}>
          <input
            className={errors.password2 ? styles.invalid : ""}
            name={"password2"}
            value={password2}
            onChange={handleChange}
            type="password"
            placeholder="确认密码"
          />
          {errors.password2 && (
            <div className={styles.invalidFeedback}>{errors.password2}</div>
          )}
        </div>
        <button onSubmit={handleSubmit}>注册</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = { registerUser };

export default connect(
  null,
  mapDispatchToProps
)(Register);
