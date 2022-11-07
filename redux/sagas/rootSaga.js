import { all, fork, takeLatest } from "redux-saga/effects";
import { SHOP_REGISTER_START } from "../ducks/shop_register";
import { handlePostShopRegister } from "./handlers/shop_register";

// import { LOAD_PRODUCT_START } from "../ducks/product";
// import { LOAD_SHOP_START } from "../ducks/shop";
// import { handleGetProducts, handleGetShops } from "./handlers/products";

// function* onLoadProducts() {
//   yield takeLatest(LOAD_PRODUCT_START, handleGetProducts);
// }

// function* onLoadShops() {
//   yield takeLatest(LOAD_SHOP_START, handleGetShops);
// }
function* onLoadShopsRegister() {
  yield takeLatest(SHOP_REGISTER_START, handlePostShopRegister);
}

const shopRegisterSagas = [fork(onLoadShopsRegister)];
// const shopSagas = [fork(onLoadShops)];

export default function* watcherSaga() {
  yield all([...shopRegisterSagas,]);
}
