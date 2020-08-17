import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import directotyReducer from "./directory/directory.reduce";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directotyReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
