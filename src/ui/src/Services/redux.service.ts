import { createStore, combineReducers } from "redux";

import { MDTReducer } from "../Apps";

const store = createStore(
    combineReducers({
        MDT: MDTReducer,
    })
);
export default store;
