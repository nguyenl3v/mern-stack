import {ADDSLIDESHOW, GETSLIDESHOW, DELETESLIDESHOW, EDITSLIDESHOW, UPLOAD } from "./constants";

const initialState = {
  data:[]
};

const slideShow = (state = initialState, action) =>{
  switch (action.type) {
    case ADDSLIDESHOW:
      return {...state, addSlideShow:action.payload}
    case GETSLIDESHOW:
      return {...state, data:action.payload.data}
    case DELETESLIDESHOW:
      return {...state, delete:action.payload}
    case EDITSLIDESHOW:
      return {...state, editSlideShow:action.payload}
    case UPLOAD:
      return {...state, upload:action.payload.image}
    default:
      return state;
  }
}
export default slideShow;