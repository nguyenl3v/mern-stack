import { put, takeEvery } from "redux-saga/effects";
import { ADDSLIDESHOW, DELETESLIDESHOW } from "./constants";
import { ToastifySuccess, ToastifyField } from "../../components/Toastify";
import axios from "axios";
import { API } from "../../config/Axios";
import { _getSlideShow } from "./action";

function* addSlideShow() {
  yield takeEvery(ADDSLIDESHOW, function* _addSlideShow({ payload }) {
    const { heading, title, button, buttonLink, image } = payload;
    try {
      const res = yield axios.post(
        `${API}/admin/slideshow/add`,
        image,
        { heading, title, button, buttonLink },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      ToastifySuccess(res.data.msg);
      setTimeout(() => (window.location.href = "/admin/slideshow"), 2001);
    } catch (error) {
      ToastifyField(error.response.data.msg);
    }
  });
}

function* getSlideShow() {
  const res = yield axios.get(`${API}/admin/slideshow`);
  yield put(_getSlideShow(res.data));
}

function* deleteSlideShow() {
  yield takeEvery(DELETESLIDESHOW, function* _deleteSlideShow({ payload }) {
    const { id } = payload;
    const res = yield axios.get(`${API}/admin/slideshow/delete/${id}`);
    ToastifySuccess(res.data.msg);
    setTimeout(() => (window.location.href = "/admin/slideshow"), 2001);
  });
}

const sagas = [addSlideShow, getSlideShow, deleteSlideShow];
export default sagas;
