import { put, takeEvery } from "redux-saga/effects";
import {
  ADDSLIDESHOW,
  DELETESLIDESHOW,
  EDITSLIDESHOW,
  UPLOAD
} from "./constants";
import { ToastifySuccess, ToastifyField } from "../../component/Toastify";
import axios from "axios";
import { API } from "../../config/Axios";
import { _getSlideShow } from "./action";

function* addSlideShow() {
  yield takeEvery(ADDSLIDESHOW, function* _addSlideShow({ payload }) {
    const { heading, title, button, buttonLink } = payload;
    try {
      const res = yield axios.post(`${API}/admin/slideshows/add`, {
        heading,
        title,
        button,
        buttonLink
      });
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/slideshows"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* getSlideShow() {
  const res = yield axios.get(`${API}/admin/slideshows`);
  yield put(_getSlideShow(res.data));
}

function* deleteSlideShow() {
  yield takeEvery(DELETESLIDESHOW, function* _deleteSlideShow({ payload }) {
    const { id, file } = payload;
    const res = yield axios.get(`${API}/admin/slideshows/delete/${id}/${file}`);
    ToastifySuccess(res.data.msg);
    setTimeout(() => (window.location.href = "/admin/slideshows"), 2001);
  });
}

function* editSlideShow() {
  yield takeEvery(EDITSLIDESHOW, function* _editSlideShow({ payload }) {
    const { heading, title, button, buttonLink,urlFile, id } = payload;
    try {
      const res = yield axios({
        url: `${API}/admin/slideshows/edit`,
        method: "post",
        data: { heading, title, button, buttonLink,urlFile, id }
      });
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/slideshows"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* upload() {
  yield takeEvery(UPLOAD, function* _upload({ payload }) {
    const { image } = payload;
    try {
      yield axios.post(
        `${API}/admin/slideshow/upload`,
         image ,
        { headers: { "Content-type": "multipart/form-data" } }
      );
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}
const sagas = [addSlideShow, getSlideShow, deleteSlideShow, editSlideShow, upload];
export default sagas;
