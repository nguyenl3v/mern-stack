import { ADDCATEGORIES, GETCATEGORIES, DELETECATEGORIES, EDITCATEGORIES } from "./constants";
const intialState = {
  data:[]
};

const adminCategories = (state = intialState, action)=>{
  switch (action.type) {
    case ADDCATEGORIES:
      return{...state, addCate:action.payload}
    case GETCATEGORIES:
      return{...state, data:action.payload.data}
    case DELETECATEGORIES:
      return{...state, id:action.payload.id}
    case EDITCATEGORIES:
      return{...state, editData:action.payload}
    default:
      return state;
  }
}
export default adminCategories