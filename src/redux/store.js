import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
// import cakeReducer from "./cake/cakeReducer";
const persistConfig = {
  key: "persist-key",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export const persistor = persistStore(store);

export default store;
