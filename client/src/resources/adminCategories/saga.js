import { put, takeLatest } from "redux-saga/effects";
import { ADDCATEGORIES, DELETECATEGORIES, EDITCATEGORIES } from "./constants";
import { API } from "../../config/Axios";
import axios from "axios";
import { ToastifySuccess, ToastifyField } from "../../component/Toastify";
import { _getCategories } from "./action";

function* getCategories() {
  const res = yield axios.get(`${API}/admin/categories`);
  yield put(_getCategories(res.data));
}

function* addCategories() {
  yield takeLatest(ADDCATEGORIES, function* _addCategories({ payload }) {
    const { name } = payload;
    try {
      const res = yield axios.post(`${API}/admin/categories/add`, { name });
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/categories"), 2000);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* deleteCategories() {
  yield takeLatest(DELETECATEGORIES, function* _deleteCategories({ payload }) {
    const { id } = payload;
    try {
      const res = yield axios.get(`${API}/admin/categories/delete/${id}`);
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/categories"), 2000);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* editCategories() {
  yield takeLatest(EDITCATEGORIES, function* _editCategories({ payload }) {
    const { name, id } = payload;
    try {
      const res = yield axios.post(`${API}/admin/categories/edit`,{name, id});
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/categories"), 2000);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}
const sagas = [addCategories, getCategories, deleteCategories, editCategories];
export default sagas;
