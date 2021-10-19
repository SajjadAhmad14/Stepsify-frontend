import { combineReducers  } from "redux";
import signUpReducer from "./signUpReducer";
import loginReducer from "./loginReducer";
import activityReducer from './activityReducer';

const rootReducer = combineReducers({
  signUpReducer,
  loginReducer,
  activityReducer,
});

export default rootReducer
