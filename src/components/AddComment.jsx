import { useState } from "react";
import { postComment } from "../utils/api";

const AddComment = ({ review_id, setComments, user }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, user, newComment).then((data) => {
      setComments((currentComments) => {
        return [data.postedComment, ...currentComments];
      });
      setNewComment("");
    });
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add a comment</label>
      <textarea
        id="newComment"
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        required
      />
      <button type="submit">Post comment</button>
    </form>
  );
};

export default AddComment;
