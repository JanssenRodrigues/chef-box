import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import reducers from "../reducers";

const makeStore = (context) => {
  // Create store
  return createStore(reducers, applyMiddleware(thunk));
};

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false });
