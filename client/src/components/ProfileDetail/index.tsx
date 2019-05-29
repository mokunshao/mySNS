import React from "react";
import styles from "./styles.module.scss";

interface Props {
  data: any;
}
export default function ProfileDetail(props: Props) {
  const experienceItems = props.data.experience.map((item: any, index: any) => {
    return (
      <li key={index}>
        <h4>{item.company}</h4>
        <p>
          {" "}
          {item.from} 至 {item.to === "" ? "至今" : item.to}
        </p>
        <p>
          <strong>职位: </strong>
          {item.title}
        </p>
        {item.description === "" ? null : (
          <p>
            <strong>职位描述: </strong> {item.description}
          </p>
        )}
      </li>
    );
  });
  const educationItems = props.data.education.map((item: any, index: any) => {
    return (
      <li key={index}>
        <h4>{item.school}</h4>
        <p>
          {item.from} 至 {item.to === "" ? "至今" : item.to}
        </p>
        <p>
          <strong>学历: </strong>
          {item.degree}
        </p>
        <p>
          <strong>专业: </strong>
          {item.fieldofstudy}
        </p>
        {item.description === "" ? null : (
          <p>
            <strong>在校表现: </strong> {item.description}
          </p>
        )}
      </li>
    );
  });
  return (
    <div className={styles.ProfileDetail}>
      <div className={styles.part}>
        <div>
          <h3>经验</h3>
          <ul>
            {props.data.experience.length ? experienceItems : <p>meiyou</p>}
          </ul>
        </div>
      </div>
      <div className={styles.part}>
        <div>
          <h3>教育</h3>
          <ul>{educationItems}</ul>
        </div>
      </div>
    </div>
  );
}
