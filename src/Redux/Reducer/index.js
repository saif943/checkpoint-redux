import { combineReducers } from "redux";
import TaskReducer from "./listTasks";

const rootReducer = combineReducers({ TaskReducer });

export default rootReducer;
