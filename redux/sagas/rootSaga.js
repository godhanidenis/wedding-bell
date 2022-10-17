import { all, fork, takeLatest } from "redux-saga/effects";
import { LOAD_PRODUCT_START } from "../ducks/product";
import { LOAD_SHOP_START } from "../ducks/shop";
import { handleGetProducts, handleGetShops } from "./handlers/products";

function* onLoadProducts() {
  yield takeLatest(LOAD_PRODUCT_START, handleGetProducts);
}

function* onLoadShops() {
  yield takeLatest(LOAD_SHOP_START, handleGetShops);
}

const productSagas = [fork(onLoadProducts)];
const shopSagas = [fork(onLoadShops)];

export default function* watcherSaga() {
  yield all([...productSagas, ...shopSagas]);
}
