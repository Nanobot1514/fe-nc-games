import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import "../App.css";
import ReviewTile from "./ReviewTile";
import ReviewSort from "./ReviewSort";
import NotFoundErr from "./NotFoundErr";

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
        setIsError(404);
      });
  }, [category]);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <>
      {isError === 404 ? (
        <NotFoundErr />
      ) : (
        <main>
          <div>
            <ReviewSort reviews={reviews} setReviews={setReviews} />
            <ul className="reviews-list">
              {reviews.map((review) => {
                return <ReviewTile key={review.review_id} {...review} />;
              })}
            </ul>
          </div>
        </main>
      )}
    </>
  );
};

export default ReviewsList;
