import { call, put } from "redux-saga/effects";
import {
  loadMoreShopsError,
  loadMoreShopsSuccess,
  loadShopsError,
  loadShopsSuccess,
} from "../../ducks/shop";
import { requestGetShops } from "../requests/shops";

export function* handleGetShops({ payload }) {
  try {
    const response = yield call(requestGetShops, payload);

    yield put(loadShopsSuccess(response.data.shopList));
  } catch (error) {
    yield put(loadShopsError(error));
  }
}

export function* handleGetMoreShops({ payload }) {
  try {
    const response = yield call(requestGetShops, payload);

    yield put(loadMoreShopsSuccess(response.data.shopList));
  } catch (error) {
    yield put(loadMoreShopsError(error.message));
  }
}
