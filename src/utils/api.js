import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-w79g.onrender.com/api",
});

export const getReviews = async () => {
  const { data } = await gamesApi.get("/reviews");
  return data.reviews;
};

export const getReview = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}`);
  return data.review;
};

export const getCommentsByReviewId = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}/comments`);
  return data;
};

export const patchReviewVotes = async (review_id, vote) => {
  const { data } = await gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: vote,
  });

  return data.patchedReview;
};
