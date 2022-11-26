import { call, put } from "redux-saga/effects";
import {
  loadCategoriesError,
  loadCategoriesSuccess,
} from "../../ducks/categories";
import { requestGetCategories } from "../requests/categories";

export function* handleGetCategories() {
  try {
    const response = yield call(requestGetCategories);

    yield put(loadCategoriesSuccess(response.data.categoryList));
  } catch (error) {
    yield put(loadCategoriesError(error.message));
  }
}
