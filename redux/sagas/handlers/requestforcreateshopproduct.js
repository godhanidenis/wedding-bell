import { call, put } from "redux-saga/effects";
import {
  uploadshopProductError,
  uploadshopProductSuccess,
} from "../../ducks/shopproductupload";
import { uploadshopproduct } from "../requests/requestforcreateshopproduct";

export function* handleuploadShopProduct({ payload }) {
  try {
    const response = yield call(uploadshopproduct, payload);
    console.log("ressss", response)
    yield put(uploadshopProductSuccess(response.data.createProduct[0]
    ));
  } catch (error) {
    yield put(uploadshopProductError(error.message));
  }
}