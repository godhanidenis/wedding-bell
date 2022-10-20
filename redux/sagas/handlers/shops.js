import { call, put } from "redux-saga/effects";
import { loadShopsError, loadShopsSuccess } from "../../ducks/shop";
import { requestGetShops } from "../requests/shops";

export function* handleGetShops() {
  try {
    const response = yield call(requestGetShops);

    yield put(loadShopsSuccess(response.data.shopList));
  } catch (error) {
    yield put(loadShopsError(error));
  }
}
