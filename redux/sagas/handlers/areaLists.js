import { call, put } from "redux-saga/effects";
import {
  loadAreaListsError,
  loadAreaListsSuccess,
} from "../../ducks/areaLists";
import { requestGetAreaLists } from "../requests/areaLists";

export function* handleGetAreaLists() {
  try {
    const response = yield call(requestGetAreaLists);

    yield put(loadAreaListsSuccess(response.data.areaList));
  } catch (error) {
    yield put(loadAreaListsError(error.message));
  }
}
