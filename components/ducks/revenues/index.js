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
    console.log("data: ", data);
    dispatch(action("SET_REVENUES_LIST", data.revenues));
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

export default combineReducers({
  list,
});
