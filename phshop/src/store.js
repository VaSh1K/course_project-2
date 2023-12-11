import { createStore, combineReducers } from "redux";
import cartReducer from "./cartReducer";
import phoneReducer from "./PhoneReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  phones: phoneReducer,
});

const store = createStore(rootReducer);

export default store;
