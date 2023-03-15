import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../utils/api";
import CommentsTile from "./CommentsTile";
import AddComment from "./AddComment";

const Comments = ({ review_id, comments, setComments, user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getCommentsByReviewId(review_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [review_id]);

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return <p>An error has occured while trying to load comments...</p>;

  return (
    <section className="comments-section">
      <h4>Comments</h4>
      <AddComment
        review_id={review_id}
        setComments={setComments}
        comments={comments}
        user={user}
      />
      <ul className="comments-list">
        {comments.map((comment) => (
          <CommentsTile key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </section>
  );
};

export default Comments;
