import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import "../App.css";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);
  return (
    <main>
      <div>
        <ul className="reviews-list">
          {reviews.map((review) => {
            return (
              <li className="review-tile" key={review.review_id}>
                <img
                  className="review-img"
                  src={review.review_img_url}
                  alt={review.title}
                />
                <h4>
                  Title:
                  <p>{review.title}</p>
                </h4>
                <h4>
                  Designer:
                  <p>{review.designer}</p>
                </h4>
                <h4>
                  Category:
                  <p>{review.category}</p>
                </h4>
                <h4>
                  Owner:
                  <p>{review.owner}</p>
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ReviewsList;
