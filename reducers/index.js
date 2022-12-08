import { combineReducers } from "redux";
import user from "../components/ducks/user/index";
import revenues from "../components/ducks/revenues/index";
import orders from "../components/ducks/orders/index";
import notifications from "../components/ducks/notifications/index";

export default combineReducers({ user, revenues, orders, notifications });
