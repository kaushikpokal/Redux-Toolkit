import { combineReducers } from "redux";
import counterReducer from './counter/counterSlice'

const RootReducer = combineReducers({
    counter: counterReducer,
});

export default RootReducer;
