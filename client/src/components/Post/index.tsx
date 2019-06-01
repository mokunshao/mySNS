import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { getPost } from "../../redux/actions/postActions";
import Loading from "../Loading";
import PostItem from "../PostItem";

interface Props {
  history: any;
  match: any;
  getPost: Function;
  post: any;
}

function Post(props: Props) {
  useEffect(() => {
    props.getPost(props.match.params.id);
  }, []);
  let postContent;
  if (props.post.loading && Object.keys(props.post.post).length === 0) {
    postContent = <Loading />;
  }
  if (props.post.post) {
    postContent = <PostItem post={props.post.post} showActions={false} />;
  }
  return (
    <div className={styles.Post}>
      <div>
        <button
          className={styles.button}
          onClick={() => {
            props.history.go(-1);
          }}
        >
          返回
        </button>
      </div>
      {postContent}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    post: state.post
  };
};

const mapDispatchToProps = {
  getPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
