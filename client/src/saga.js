import { fork, all } from "redux-saga/effects";
import adminMenu from "./resources/adminMenu/saga";
import adminCategories from "./resources/adminCategories/saga";
import slideShow from "./resources/slideshow/saga";
const sagas = [...adminMenu, ...adminCategories, ...slideShow];
function* rootSaga() {
  const globalFork = sagas.map(saga => fork(saga));
  yield all([...globalFork]);
}
export default rootSaga;
