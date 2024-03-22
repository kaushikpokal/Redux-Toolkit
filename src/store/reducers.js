import { combineReducers } from "redux";
import counterReducer from './counter/counterSlice'
import authReducer from "./auth/authSlice";

const RootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
});

export default RootReducer;
