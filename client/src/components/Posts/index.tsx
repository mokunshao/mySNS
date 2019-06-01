import React, { useEffect } from "react";
import PostForm from "../PostForm";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/postActions";
import Loading from "../Loading";
import PostFeed from "../PostFeed";

interface Props {
  getPosts: Function;
  post: any;
}
function Posts(props: Props) {
  useEffect(() => {
    props.getPosts();
  }, []);
  let content;
  if (props.post.loading) {
    content = <Loading />;
  } else {
    content = <PostFeed posts={props.post.posts}/>;
  }
  return (
    <div>
      <PostForm />
      {content}
    </div>
  );
}

const mapStateToProps = (state: any) => ({ post: state.post });

const mapDispatchToProps = {
  getPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
