import { combineReducers } from "redux";
import alert from "./alert";
import {Signup} from "./auth";

const rootReducer = combineReducers({
    alert , Signup
})

export default rootReducer