import { useState } from "react";
import "../App.css";

const CommentsList = ({ comment }) => {
  return (
    <section className="comment-tile">
      <h5 className="comment-user">{comment.author}</h5>
      <p className="comment-body">{comment.body}</p>
    </section>
  );
};

export default CommentsList;
