import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../utils/api";
import CommentsTile from "./CommentsTile";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
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
      <ul className="comments-list">
        {comments.map((comment) => (
          <CommentsTile key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </section>
  );
};

export default Comments;
