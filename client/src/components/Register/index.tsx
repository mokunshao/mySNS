import React, { useState, SetStateAction } from "react";
import styles from "./styles.module.scss";

export default function Register(): React.ReactElement {
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
  function handleChange(e: React.ChangeEvent & Iinput):void {
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
    const data = {
      username,
      email,
      password,
      password2
    };
    console.log(data);
  }
  return (
    <div className={styles.register}>
      <h2>快速注册</h2>
      <form onSubmit={handleSubmit}>
        <input
          name={"username"}
          value={username}
          onChange={handleChange}
          type="text"
          placeholder="用户名"
        />
        <input
          name={"email"}
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="邮箱"
        />
        <input
          name={"password"}
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="密码"
        />
        <input
          name={"password2"}
          value={password2}
          onChange={handleChange}
          type="password"
          placeholder="确认密码"
        />
        <button onSubmit={handleSubmit}>注册</button>
      </form>
    </div>
  );
}
