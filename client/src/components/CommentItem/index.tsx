import React from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import {
  deleteComment
} from "../../redux/actions/postActions";

interface Props {
  comment: any;
  auth: any;
  deleteComment: Function;
  postId: string;
}

function CommentItem(props: Props) {
  return (
    <div className={styles.CommentItem}>
      <div className={styles.left}>
        <img src={props.comment.avatar} alt="avatar" />
        <br />
        <p>{props.comment.username}</p>
      </div>
      <div className={styles.right}>
        <p>{props.comment.text}</p>
        {props.comment.user === props.auth.user.id ? (
          <button className={styles.delete} onClick={()=>props.deleteComment(props.postId,props.comment._id)}>删除</button>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  deleteComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentItem);
