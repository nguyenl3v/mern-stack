import { FETCHDATALISTSUCCESS, ADDDATALISTMENU, DELETEMENU, EDITMENU} from "./constants";
const intialState = {
  error:{},
  dataListMenu:[]
};

const adminMenu = (state = intialState, action)=>{
  switch (action.type) {
    case FETCHDATALISTSUCCESS:
      return{...state, dataListMenu:action.payload}
    case ADDDATALISTMENU:
      return{...state, dataListMenu:action.payload}
    case DELETEMENU:
      return{...state, id:action.payload.id}
    case EDITMENU:
      return{...state, data:action.payload}
    default:
      return state;
  }
}
export default adminMenu