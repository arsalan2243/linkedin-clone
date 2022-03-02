import { combineReducers } from "redux";
import userReducer from "./useReducer.js";

const rootReducer = combineReducers({
    userState: userReducer
})


export default rootReducer
