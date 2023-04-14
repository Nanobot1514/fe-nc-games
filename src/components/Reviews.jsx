import "../App.css";
import { useParams } from "react-router-dom";
import ReviewsList from "./ReviewsList";

const Reviews = () => {
  const { category } = useParams();
  return (
    <section>
      <ReviewsList category={category} />
    </section>
  );
};

export default Reviews;
