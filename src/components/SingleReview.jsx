import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReview } from "../utils/api";
import "../App.css";
import Comments from "./Comments";
import { patchReviewVotes } from "../utils/api";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [reviewVotes, setReviewVotes] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getReview(review_id)
      .then((review) => {
        setIsLoading(false);
        setReview(review);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [review_id]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error has occured...</p>;

  const handleVotes = (vote) => {
    const newVotes = review.votes + vote;
    setReview((currReview) => ({ ...currReview, votes: newVotes }));
    patchReviewVotes(review_id, vote)
      .then((patchedReview) => {
        setReviewVotes(patchedReview.votes);
      })
      .catch(() => {
        setReviewVotes(reviewVotes);
        setIsError(true);
      });
  };

  return (
    <section className="single-review">
      <img
        className="single-review-img"
        src={review.review_img_url}
        alt={review.title}
      ></img>
      <section className="review-details">
        <h2>{review.title}</h2>
        <p>{review.designer}</p>
        <p>{review.category}</p>
        <p>{review.owner}</p>
        <button onClick={() => handleVotes(1)} className="up-vote">
          ⬆️
        </button>
        <p className="vote-value">Votes: {review.votes}</p>
        <button onClick={() => handleVotes(-1)} className="down-vote">
          ⬇️
        </button>
      </section>
      <section className="review-body">
        <h3>Review</h3>
        <p>{review.review_body}</p>
      </section>
      <Comments review_id={review_id} />
    </section>
  );
};

export default SingleReview;
