import { combineReducers } from "redux";
// import { reducer as formReducer } from 'redux-form'
import inventorydetails from './Inventory/reducer'


const appReducer = combineReducers({
  inventorydetails
});

const rootReducer = (state, action) => {
//   if (action.type === "LOGOUT") {
//     state = undefined;
//   }
  return appReducer(state, action);
};

export default rootReducer;
