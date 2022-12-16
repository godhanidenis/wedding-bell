import { call, put } from "redux-saga/effects";
import {
  loadUserProfileError,
  loadUserProfileSuccess,
} from "../../ducks/userProfile";
import { requestGetUserProfile } from "../requests/userProfile";

export function* handleGetUserProfile() {
  try {
    const response = yield call(requestGetUserProfile);

    console.log("::re", response);
    localStorage.setItem("userHaveAnyShop", response.data.user.userHaveAnyShop);
    yield put(loadUserProfileSuccess(response.data.user));
  } catch (error) {
    yield put(loadUserProfileError(error.message));
  }
}
