import { all, fork, takeLatest } from "redux-saga/effects";
import { LOAD_AREA_LIST_START } from "../ducks/areaLists";
import { LOAD_CATEGORY_START } from "../ducks/categories";
import { LOAD_MORE_PRODUCT_START, LOAD_PRODUCT_START } from "../ducks/product";
import { LOAD_MORE_SHOP_START, LOAD_SHOP_START } from "../ducks/shop";
import { LOAD_USER_PROFILE_START } from "../ducks/userProfile";
import { UPLOAD_SHOP_PRODUCT_START } from "../ducks/shopproductupload"
import { handleGetAreaLists } from "./handlers/areaLists";
import { handleGetCategories } from "./handlers/categories";
import { handleGetMoreProducts, handleGetProducts } from "./handlers/products";
import { handleGetMoreShops, handleGetShops } from "./handlers/shops";
import { handleGetUserProfile } from "./handlers/userProfile";
import { handleuploadShopProduct } from "./handlers/requestforcreateshopproduct"
function* onLoadUserProfile() {
  yield takeLatest(LOAD_USER_PROFILE_START, handleGetUserProfile);
}

function* onLoadProducts() {
  yield takeLatest(LOAD_PRODUCT_START, handleGetProducts);
}

function* onLoadMoreProducts() {
  yield takeLatest(LOAD_MORE_PRODUCT_START, handleGetMoreProducts);
}

function* onLoadShops() {
  yield takeLatest(LOAD_SHOP_START, handleGetShops);
}

function* onLoadMoreShops() {
  yield takeLatest(LOAD_MORE_SHOP_START, handleGetMoreShops);
}

function* onLoadCategories() {
  yield takeLatest(LOAD_CATEGORY_START, handleGetCategories);
}

function* onLoadAreaLists() {
  yield takeLatest(LOAD_AREA_LIST_START, handleGetAreaLists);
}

function* onLoadUploadShopProduct() {
  yield takeLatest(UPLOAD_SHOP_PRODUCT_START, handleuploadShopProduct);
}

const userProfileSagas = [fork(onLoadUserProfile)];
const productSagas = [fork(onLoadProducts), fork(onLoadMoreProducts)];
const shopSagas = [fork(onLoadShops), fork(onLoadMoreShops)];
const categorySagas = [fork(onLoadCategories)];
const areaLists = [fork(onLoadAreaLists)];
const uploadshopProduct = [fork(onLoadUploadShopProduct)];
export default function* watcherSaga() {
  yield all([
    ...userProfileSagas,
    ...productSagas,
    ...shopSagas,
    ...categorySagas,
    ...areaLists,
    ...uploadshopProduct
  ]);
}
