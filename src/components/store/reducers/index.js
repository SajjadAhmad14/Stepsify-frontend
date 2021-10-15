import { combineReducers  } from "redux";
import signUpReducer from "./signUpReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  signUpReducer,
  loginReducer,
});

export default rootReducer
