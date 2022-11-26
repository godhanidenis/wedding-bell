import { call, put } from "redux-saga/effects";
import {
  loadMoreProductsError,
  loadMoreProductsSuccess,
  loadProductsError,
  loadProductsSuccess,
} from "../../ducks/product";
import { requestGetProducts } from "../requests/products";

export function* handleGetProducts({ payload }) {
  try {
    const response = yield call(requestGetProducts, payload);

    yield put(loadProductsSuccess(response.data.productList));
  } catch (error) {
    yield put(loadProductsError(error));
  }
}

export function* handleGetMoreProducts({ payload }) {
  try {
    const response = yield call(requestGetProducts, payload);

    yield put(loadMoreProductsSuccess(response.data.productList));
  } catch (error) {
    yield put(loadMoreProductsError(error.message));
  }
}
