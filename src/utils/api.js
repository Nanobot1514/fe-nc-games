import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-w79g.onrender.com/api",
});

export const getReviews = async (category) => {
  if (!category) {
    const { data } = await gamesApi.get("/reviews");
    return data.reviews;
  }
  if (category) {
    const { data } = await gamesApi.get(`/reviews?category=${category}`);
    return data.reviews;
  }
};

export const getSortedReviews = async (sort_by, order, category) => {
  if (category === "all") {
    const { data } = await gamesApi.get("/reviews", {
      params: { sort_by, order },
    });
    return data.reviews;
  }
  const { data } = await gamesApi.get("/reviews", {
    params: { sort_by, order, category },
  });
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

export const postComment = async (review_id, author, newComment) => {
  const { data } = await gamesApi.post(`/reviews/${review_id}/comments`, {
    username: author,
    body: newComment,
  });
  return data;
};

export const deleteCommentById = async (comment_id) => {
  const { data } = await gamesApi.delete(`/comments/${comment_id}`);
  return data;
};

export const getUsers = async () => {
  const { data } = await gamesApi.get(`/users`);
  return data.users;
};

export const getUsersByUsername = async (user_name) => {
  const { data } = await gamesApi.get(`/users/${user_name}`);
  return data.user;
};
