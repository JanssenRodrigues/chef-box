import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

// SELECTORS
export const notificationSelector = (state) => state.notifications;

// ACTIONS
export const action = (type, payload = null) => ({ type, payload });

export const isOpenNotification = (state = false, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "SET_IS_OPEN_SNACKBAR":
      return payload;
    default:
      return state;
  }
};

export const snackbar = (state = false, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "SET_SNACKBAR":
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  snackbar,
  isOpenNotification,
});
