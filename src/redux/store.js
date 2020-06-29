import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./rootReducer";

const logger = store => next => action => {
  console.log("store", store.getState());
  console.log('type', action.type);
  console.log('payload', action.payload);
  return next(action);
};

let store = createStore(rootReducer, applyMiddleware(logger));
export default store;