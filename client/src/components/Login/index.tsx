import React, { useState, SetStateAction } from "react";
import styles from "./styles.module.scss";
import axios from "axios";

export default function Login(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  interface Iinput {
    target: {
      name: String;
      value: SetStateAction<string>;
    };
  }
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
    console.log(formData);
    axios
      .post("/api/test", formData)
      .then(res => console.log(res))
      .catch(err => {
        // setErrors(err.response.data)
        setErrors({ ...errors, email: "邮箱错误" });
      });
  }
  return (
    <div className={styles.login}>
      <h2>登录</h2>
      <form onSubmit={handleSubmit}>
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
        <button onSubmit={handleSubmit}>登录</button>
      </form>
    </div>
  );
}
