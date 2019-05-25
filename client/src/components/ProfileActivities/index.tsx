import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUserTie,faBriefcase,faGraduationCap);

export default function ProfileActivities() {
  return (
    <div className={styles.ProfileActivities}>
      <Link to="/edit-profile" className="btn btn-light">
        <FontAwesomeIcon icon={"user-tie"} />
        编辑个人信息
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <FontAwesomeIcon icon={"briefcase"} />
        添加个人经历
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <FontAwesomeIcon icon={"graduation-cap"} />
        添加教育经历
      </Link>
    </div>
  );
}
