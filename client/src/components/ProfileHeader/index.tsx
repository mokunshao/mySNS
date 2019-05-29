import React from "react";
import styles from "./styles.module.scss";
import { withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeibo, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
library.add(faWeibo, faGithub, faGlobe);

interface Props {
  data: any;
}

function ProfileHeader(props: Props) {
  return (
    <div className={styles.ProfileHeader}>
      <div>
        <img src={props.data.user.avatar} alt="avatar" />
      </div>
      <div>
        <h1>{props.data.user.username}</h1>
        <p>
          {props.data.company ? props.data.company + " " : null}
          {props.data.status}
        </p>
        {props.data.location ? <p>{props.data.location}</p> : null}
        <p>
          {props.data.website ? (
            <a href={props.data.website} target="_blank">
              <FontAwesomeIcon icon="globe" />
            </a>
          ) : null}
          {props.data.social && props.data.social.weibo ? (
            <a
              href={`https://weibo.com/${props.data.social.weibo}`}
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "weibo"]} />
            </a>
          ) : null}
          {props.data.social && props.data.github ? (
            <a
              href={`https://www.github.com/${props.data.github}`}
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default withRouter(ProfileHeader);
