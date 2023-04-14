import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSortedReviews } from "../utils/api";

const ReviewSort = ({ setReviews }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const handleSortBy = (event) => {
    searchParams.set("sort_by", event.target.value);
    setSearchParams(searchParams);
  };

  const handleOrder = (event) => {
    searchParams.set("order", event.target.value);
    setSearchParams(searchParams);
  };

  const handleCategory = (event) => {
    searchParams.set("category", event.target.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setIsLoading(true);
    getSortedReviews(
      searchParams.get("sort_by") || "title",
      searchParams.get("order") || "asc",
      searchParams.get("category")
    ).then((reviews) => {
      setIsLoading(false);
      setReviews(reviews);
    });
  }, [searchParams, setReviews]);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <section className="sorting-dropdowns">
      <label className="review-sort" htmlFor="sort_by-option">
        Sort By:{" "}
        <select
          onChange={handleSortBy}
          value={searchParams.get("sort_by") || "Title"}
          name="sortby"
          id="sort_by-option"
          className="sort-dropdown"
        >
          <option value="title">Title</option>
          <option value="designer">Designer</option>

          <option value="votes">Votes</option>
          <option value="comment_count">Comment Count</option>
        </select>
      </label>
      <label className="review-order" htmlFor="order-option">
        Order By:{" "}
        <select
          onChange={handleOrder}
          value={searchParams.get("order") || "asc"}
          name="order"
          id="order-option"
          className="order-dropdown"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
      <label className="category-sort" htmlFor="category-option">
        Category:{" "}
        <select
          onChange={handleCategory}
          value={searchParams.get("category") || "all"}
          name="category"
          id="category-option"
          className="category-dropdown"
        >
          <option value="all">All</option>
          <option value="dexterity">Dexterity</option>
          <option value="strategy">Strategy</option>
          <option value="hidden-roles">Hidden Roles</option>
          <option value="push-your-luck">Push Your Luck</option>
          <option value="roll-and-write">Roll and Write</option>
          <option value="deck-building">Deck Building</option>
          <option value="engine-building">Engine Building</option>
        </select>
      </label>
    </section>
  );
};

export default ReviewSort;
