import "../App.css";
import { deleteCommentById } from "../utils/api";

const CommentsTile = ({ comment, setComments, comments, user }) => {
  const handleDeleteComment = (event) => {
    deleteCommentById(event.target.value).then(() => {
      const updatedComments = comments.filter(
        (currComment) => currComment.comment_id !== comment.comment_id
      );
      setComments(updatedComments);
    });
  };

  return (
    <section className="comment-tile">
      <h5 className="comment-user">{comment.author}</h5>
      <p className="comment-body">{comment.body}</p>
      <p className="time-stamp">
        posted on {new Date(comment.created_at).toLocaleDateString()} at{" "}
        {new Date(comment.created_at).toLocaleTimeString()}
      </p>
      {user === comment.author && (
        <button
          onClick={handleDeleteComment}
          className="delete-comment-button"
          value={comment.comment_id}
        >
          Delete Comment
        </button>
      )}
    </section>
  );
};

export default CommentsTile;
