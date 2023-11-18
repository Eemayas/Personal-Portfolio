// src/store.js

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "@/lib/reducers/index";

const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;
