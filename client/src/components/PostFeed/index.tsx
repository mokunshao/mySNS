import React from "react";
import PostItem from "../PostItem";

interface Props {
  posts: any[];
}

export default function PostFeed(props: Props) {
  return (
    <div>
      {props.posts.map(post => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}
