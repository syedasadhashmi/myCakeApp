import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreameReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreameReducer,
});
export default rootReducer;
