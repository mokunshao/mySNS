import React from "react";
import CommentItem from "../CommentItem";

interface Props {
  comments: any[];
  postId:string;
}

export default function CommentFeed(props: Props) {
  return (
    <div>
      {props.comments &&
        props.comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={props.postId}/>
        ))}
    </div>
  );
}
