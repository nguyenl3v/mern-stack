import { put, takeLatest } from "redux-saga/effects";
import {
  ADDDATALISTMENU,
  DELETEMENU,
  EDITMENU
} from "./constants";
import { API } from "../../config/Axios";
import axios from "axios";
import { fetchListDataSuccess } from "./action";
import { ToastifySuccess, ToastifyField } from "../../components/Toastify";

function* getListData() {
  const res = yield axios.get(`${API}/admin/menu/list`);
  yield put(fetchListDataSuccess(res.data));
}

function* addListData() {
  yield takeLatest(ADDDATALISTMENU, function* _addListData({ payload }) {
    const { title, link } = payload;
    try {
      const res = yield axios.post(`${API}/admin/menu/list`, { title, link });
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/menu"), 2000);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}
function* deleteData() {
  yield takeLatest(DELETEMENU, function* _deleteData({ payload }) {
    const { id } = payload;
    try {
      const res = yield axios.get(`${API}/admin/menu/list/${id}`);
      setTimeout(() => (window.location.href = "/admin/menu"), 2000);
      ToastifySuccess(res.data.msg);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}
function* editData() {
  yield takeLatest(EDITMENU, function* _editData({ payload }) {
    const { title, link, id } = payload;
    try {
      const res = yield axios.post(`${API}/admin/menu/list/edit`, {
        title,
        link,
        id
      });
      setTimeout(() => (window.location.href = "/admin/menu"), 2000);
      ToastifySuccess(res.data.msg);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

const sagas = [getListData, addListData, deleteData, editData];
export default sagas;
