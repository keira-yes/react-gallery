import {combineReducers} from "redux";
import infoReducer from "./info/info.reducer";

export default combineReducers({
  info: infoReducer
})