import { createStore } from 'redux';
import infoReducer from "./reducers";

let store = createStore(infoReducer);
export default store;