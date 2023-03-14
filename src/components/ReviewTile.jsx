const ReviewTile = ({
  review_id,
  review_img_url,
  title,
  designer,
  category,
  owner,
}) => {
  return (
    <li className="review-tile" key={review_id}>
      <img className="review-img" src={review_img_url} alt={title} />
      <h4>
        Title:
        <p>{title}</p>
      </h4>
      <h4>
        Designer:
        <p>{designer}</p>
      </h4>
      <h4>
        Category:
        <p>{category}</p>
      </h4>
      <h4>
        Owner:
        <p>{owner}</p>
      </h4>
    </li>
  );
};

export default ReviewTile;
