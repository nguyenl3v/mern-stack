import {ADDSLIDESHOW, GETSLIDESHOW, DELETESLIDESHOW} from "./constants";

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
      return {...state, delete:action.payload.id}
    default:
      return state;
  }
}
export default slideShow;