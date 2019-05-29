import React from "react";
import styles from "./styles.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck);

interface Props {
  data: any;
}
export default function ProfileAbout(props: Props) {
  const skills = props.data.skills.map((skill:string, index:number) => {
    return (
      <span key={index} className={styles.skill}>
        <FontAwesomeIcon icon="check" />
        <span>{skill}</span>
      </span>
    );
  });
  return (
    <div className={styles.ProfileAbout}>
      <h3>{props.data.user.username.trim().split(" ")[0]}个人简介</h3>
      <p>
        {props.data.bio
          ? props.data.bio
          : props.data.user.username + "没有填写介绍信息"}
      </p>
      <hr />
      <h3>个人技能</h3>
      <div>{skills}</div>
    </div>
  );
}
