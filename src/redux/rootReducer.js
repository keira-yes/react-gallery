import {combineReducers} from "redux";
import usersReducer from "./users/users.reducer";
import albumsReducer from "./albums/albums.reducer";
import photosReducer from "./photos/photos.reducer";

export default combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer
})