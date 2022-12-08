import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

// SELECTORS
export const ordersSelector = (state) => state.orders;

// ACTIONS
export const action = (type, payload = null) => ({ type, payload });

export const getOrders = (userId) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3003/orders?userId=${userId}`
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const createOrder = (order, userId) => async (dispatch) => {
  try {
    const parsedOrder = JSON.stringify(order);
    const response = await fetch(
      `http://localhost:3003/orders?userId=${userId}&data=${parsedOrder}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();

    if (data.order) {
      dispatch(
        action("SET_SNACKBAR", {
          message: "Pedido realizado com sucesso.",
          type: "success",
        })
      );
    } else {
      dispatch(
        action("SET_SNACKBAR", { message: data.message, type: "error" })
      );
    }
  } catch (err) {
    console.log(err);

    dispatch(
      action("SET_SNACKBAR", {
        message: "Houve um erro ao realizar seu pedido.",
        type: "error",
      })
    );
  } finally {
    dispatch(action("SET_IS_OPEN_SNACKBAR", true));
  }
};

export const orders = (state = null, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.settings };
    case "SET_ORDERS":
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  orders,
});
