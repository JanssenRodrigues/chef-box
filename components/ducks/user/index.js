import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

// SELECTORS
export const userSelector = (state) => state.user;

// ACTIONS
export const action = (type, payload = null) => ({ type, payload });

export const fetchLogin = (login, password) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3003/login?username=${login}&password=${password}`
    );
    const data = await response.json();

    if (data.user.message || data.user.error) {
      dispatch(action("IS_LOGGED", false));
    }

    dispatch(action("VALIDADE_LOGIN_USERNAME_PASSWORD", data.user));
    dispatch(action("IS_LOGGED", true));
  } catch (err) {
    console.log(err);
  }
};

export const fetchPreferences = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3003/user-preferences?userId=${id}`
    );
    const data = await response.json();
    if (data.preferences) {
      console.log("DATA: ", data);
      dispatch(action("USER_PREFERENCES", JSON.parse(data.preferences)));
    } else {
      dispatch(action("USER_PREFERENCES"));
    }
  } catch (err) {
    console.log(err);
  }
};

export const savePreferences =
  ({ userId, preferences, firstAccess }) =>
  async (dispatch) => {
    const method = firstAccess ? "POST" : "PATCH";
    try {
      const response = await fetch(
        `http://localhost:3003/user-preferences?userId=${userId}&preferences=${preferences}`,
        {
          method,
        }
      );
      const data = await response.json();
      console.log("SAVED");
    } catch (err) {
      console.log(err);
    }
  };

// REDUCERS
export const userData = (
  state = { username: "", id: null },
  { type, payload }
) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "VALIDADE_LOGIN_USERNAME_PASSWORD":
      return payload;
    default:
      return state;
  }
};

export const isLogged = (state = false, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "IS_LOGGED":
      return payload;
    default:
      return state;
  }
};

export const preferences = (state = null, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "USER_PREFERENCES":
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  userData,
  isLogged,
  preferences,
});
