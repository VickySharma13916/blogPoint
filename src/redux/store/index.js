import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const pReducer = persistReducer(persistConfig, rootReducer);
// for developement
// export const store = createStore(pReducer, applyMiddleware(thunk, logger));
//for production
export const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
