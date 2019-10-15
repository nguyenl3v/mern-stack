import { ADDCATEGORIES, GETCATEGORIES, DELETECATEGORIES, EDITCATEGORIES } from "./constants";

export const addCategories = name => ({
  type: ADDCATEGORIES,
  payload: {
    name
  }
});
export const _getCategories = data => ({
  type: GETCATEGORIES,
  payload: {
    data
  }
});
export const _deleteCategories = id => ({
  type: DELETECATEGORIES,
  payload: {
    id
  }
});
export const _editCategories = (name, id) => ({
  type: EDITCATEGORIES,
  payload: {
    name,
    id
  }
});
