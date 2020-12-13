import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import names from "./name";

export default combineReducers({ names, reduxFormReducer });
