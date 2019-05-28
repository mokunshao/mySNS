import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck);

interface Props {
  data: any;
}

function ProfileItem(props: Props) {
  return (
    <div className={styles.profileItem}>
      <div className={styles.avatar}>
        <img src={props.data.user.avatar} alt="avatar" />
      </div>
      <div className={styles.info}>
        <h3>{props.data.user.username}</h3>
        <p>{props.data.status}</p>
        <p>{props.data.location ? props.data.location : null}</p>
        <Link to={`/profile/${props.data.handle}`}>更多信息</Link>
      </div>
      <div className={styles.skills}>
        <h4>技能</h4>
        <ul>
          {props.data.skills.slice(0, 4).map((skill: any, index: number) => (
            <li key={index}>
              <FontAwesomeIcon icon="check"/>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileItem;
