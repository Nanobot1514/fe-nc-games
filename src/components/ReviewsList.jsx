import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import "../App.css";
import ReviewTile from "./ReviewTile";

const ReviewsList = ({ category }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getReviews(category)
      .then((reviews) => {
        setIsLoading(false);
        setReviews(reviews);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>An error has occured</p>;

  return (
    <main>
      <div>
        <ul className="reviews-list">
          {reviews.map((review) => {
            return <ReviewTile key={review.review_id} {...review} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default ReviewsList;
