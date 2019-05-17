import React, { useState, SetStateAction } from "react";
import styles from "./styles.module.scss";

export default function Login(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  interface Iinput {
    target: {
      name: String;
      value: SetStateAction<string>;
    };
  }
  function handleChange(e: React.ChangeEvent & Iinput):void {
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
    const data = {
      email,
      password,
    };
    console.log(data);
  }
  return (
    <div className={styles.login}>
      <h2>登录</h2>
      <form onSubmit={handleSubmit}>
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
        <button onSubmit={handleSubmit}>登录</button>
      </form>
    </div>
  );
}
