import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

// SELECTORS
export const revenuesSelector = (state) => state.revenues;

// ACTIONS
export const action = (type, payload = null) => ({ type, payload });

export const getAllRevenues = () => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3003/articles`);
    const data = await response.json();

    dispatch(action("SET_REVENUES_LIST", data.revenues));
  } catch (err) {
    console.log(err);
  }
};

export const getRevenueByUrl = (url) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3003/articles/${url}`);
    const data = await response.json();

    dispatch(action("SET_REVENUE_ARTICLE", data.revenue));
  } catch (err) {
    console.log(err);
  }
};

export const saveReview =
  ({ rate, comment, articleId, username }) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:3003/articles/review?rate=${rate}&comment=${comment}&articleId=${articleId}&username=${username}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      //   console.log("DATA", data);
      console.log("REVIEW SAVED");
      //   dispatch(action("SAVE_REVIEW_SUCCESS", data.review));
    } catch (err) {
      console.log(err);
    }
  };
export const getUserReview =
  ({ articleId, username }) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:3003/articles/review/user?articleId=${articleId}&username=${username}`
      );
      const data = await response.json();
      console.log("DATA", data);
      dispatch(action("SET_USER_REVIEW", data.review));
    } catch (err) {
      console.log(err);
    }
  };

// REDUCERS
export const list = (state = [], { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "SET_REVENUES_LIST":
      return payload;
    default:
      return state;
  }
};

export const article = (state = null, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "SET_REVENUE_ARTICLE":
      return payload;
    default:
      return state;
  }
};

export const reviews = (state = null, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "SET_REVENUE_REVIEWS":
      return payload;
    default:
      return state;
  }
};

export const userReview = (state = null, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "SET_USER_REVIEW":
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  list,
  article,
});
