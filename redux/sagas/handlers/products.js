import { call, put } from "redux-saga/effects";
import { loadProductsError, loadProductsSuccess } from "../../ducks/product";
import { loadShopsError, loadShopsSuccess } from "../../ducks/shop";
import { requestGetProducts, requestGetShops } from "../requests/products";

export function* handleGetProducts({ payload }) {
  console.log(".;.;", payload);
  try {
    const response = yield call(requestGetProducts, payload);

    console.log(":::", response.data.productList);
    yield put(loadProductsSuccess(response.data.productList));
  } catch (error) {
    yield put(loadProductsError(error));
  }
}

export function* handleGetShops() {
  try {
    const response = yield call(requestGetShops);

    console.log(":::", response.data.shopList);
    yield put(loadShopsSuccess(response.data.shopList));
  } catch (error) {
    yield put(loadShopsError(error));
  }
}
