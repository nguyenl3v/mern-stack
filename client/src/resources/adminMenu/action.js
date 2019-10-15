import {
  FETCHDATALISTSUCCESS,
  ADDDATALISTMENU,
  DELETEMENU,
  EDITMENU
} from "./constants";

export const fetchListDataSuccess = data => ({
  type: FETCHDATALISTSUCCESS,
  payload: {
    data
  }
});
export const addListDataSuccess = (title, link) => ({
  type: ADDDATALISTMENU,
  payload: {
    title,
    link
  }
});
export const deleteListDataSuccess = id => ({
  type: DELETEMENU,
  payload: {
    id
  }
});
export const editListDataSuccess = (title, link, id) => ({
  type: EDITMENU,
  payload: {
    title,
    link,
    id
  }
});
