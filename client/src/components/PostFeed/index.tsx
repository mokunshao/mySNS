import React from "react";
import styles from "./styles.module.scss";
import PostItem from "../PostItem";

interface Props {
  posts: any[];
}

export default function PostFeed(props: Props) {
  return (
    <div className={styles.PostFeed}>
      {props.posts.map(post => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}
