import { combineReducers } from "redux";
import user from "../components/ducks/user/index";
import revenues from "../components/ducks/revenues/index";

export default combineReducers({ user, revenues });
