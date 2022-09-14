import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  productList: productReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;