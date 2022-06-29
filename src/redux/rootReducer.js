import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreameReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreameReducer,
  users: userReducer,
});
export default rootReducer;
