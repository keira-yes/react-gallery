import {combineReducers} from "redux";
import dataReducer from "./data/data.reducer";
import usersReducer from "./users/users.reducer";

export default combineReducers({
  data: dataReducer,
  users: usersReducer
})