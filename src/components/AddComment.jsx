import { useState } from "react";
import { postComment } from "../utils/api";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ review_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const { user } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, user.username, newComment).then((data) => {
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
