import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  deletePost,
  addLike,
  removeLike
} from "../../redux/actions/postActions";
import { Link } from "react-router-dom";

library.add(faThumbsUp, faThumbsDown);

interface Props {
  post: any;
  auth: any;
  deletePost: Function;
  addLike: Function;
  removeLike: Function;
  showActions?: boolean;
}

function PostItem(props: Props) {
  const [isLike, setIsLike] = useState(false);
  useEffect(() => {
    if (props.post.likes) {
      if (
        props.post.likes.filter((item: any) => item.user === props.auth.user.id)
          .length > 0
      ) {
        return setIsLike(true);
      }
      return setIsLike(false);
    }
  }, [props.post.likes]);
  function handleAddLike() {
    if (!isLike) {
      props.addLike(props.post._id);
    }
  }
  function handleRemoveLike() {
    if (isLike) {
      props.removeLike(props.post._id);
    }
  }
  return (
    <div className={styles.PostItem}>
      <div className={styles.left}>
        <img src={props.post.avatar} alt="avatar" />
        <br />
        <p>{props.post.username}</p>
      </div>
      <div className={styles.right}>
        <p>{props.post.text}</p>
        {props.showActions ? (
          <span>
            <button
              type="button"
              className={isLike ? styles.checked : styles.thumbs}
              onClick={handleAddLike}
            >
              <FontAwesomeIcon icon="thumbs-up" />
              {props.post.likes ? <span>{props.post.likes.length}</span> : null}
            </button>
            <button
              type="button"
              className={styles.thumbs}
              onClick={handleRemoveLike}
            >
              <FontAwesomeIcon icon="thumbs-down" />
            </button>
            <Link to={`/post/${props.post._id}`}>
              <button type="button" className={styles.comment}>
                <span>回复</span>
              </button>
            </Link>
            {props.post.user === props.auth.user.id ? (
              <button
                type="button"
                className={styles.delete}
                onClick={() => {
                  props.deletePost(props.post._id);
                }}
              >
                <span>删除</span>
              </button>
            ) : null}
          </span>
        ) : null}
      </div>
    </div>
  );
}

PostItem.defaultProps = {
  showActions: true
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  deletePost,
  addLike,
  removeLike
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
