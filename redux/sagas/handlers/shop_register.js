import { call, put } from "redux-saga/effects";
import { loadShopRegisterError, loadShopRegisterSuccess } from "../../ducks/shop_register";
import { requestPostShopRegister } from "../requests/shop_register";


export function* handlePostShopRegister( {payload} ) {
    console.log("099999999999999999999.;.;", payload);
    try {
      const response = yield call(requestPostShopRegister, payload);
  
      console.log(":::", response.data.productList);
      yield put(loadShopRegisterSuccess(response.data.productList));
    } catch (error) {
      yield put(loadShopRegisterError(error));
    }
  }