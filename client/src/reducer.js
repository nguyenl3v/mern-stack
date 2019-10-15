import { combineReducers } from "redux";
import adminMenu from "./resources/adminMenu/reducer";
import adminCategories from "./resources/adminCategories/reducer";
import slideShow from "./resources/slideshow/reducer";
const rootReducer = combineReducers({
  adminMenu,
  adminCategories,
  slideShow
});
export default rootReducer;
