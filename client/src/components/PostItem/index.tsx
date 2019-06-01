import React from "react";
import styles from "./styles.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
library.add(faThumbsUp, faThumbsDown);

interface Props {
  post: any;
  auth: any;
}

function PostItem(props: Props) {
  return (
    <div className={styles.PostItem}>
      <div className={styles.left}>
        <img src={props.post.avatar} alt="avatar" />
        <br />
        <p>{props.post.username}</p>
      </div>
      <div className={styles.right}>
        <p>{props.post.text}</p>
        <button type="button" className={styles.thumbs}>
          <FontAwesomeIcon icon="thumbs-up" />
          <span>{props.post.likes.length}</span>
        </button>
        <button type="button" className={styles.thumbs}>
          <FontAwesomeIcon icon="thumbs-down" />
        </button>
        <button type="button" className={styles.comment}>
          <span>鼓励留言</span>
        </button>
        {props.post.user === props.auth.user.id ? (
          <button type="button" className={styles.delete}>
            <span>删除</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PostItem);
