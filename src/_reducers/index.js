import { combineReducers } from "redux";

import { users } from "./users.reducer";
import { playList } from "./playlist.reducer";

const rootReducer = combineReducers({
  users,
  playList,
});

export default rootReducer;
