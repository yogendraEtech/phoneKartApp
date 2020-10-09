import constants from "./constants";
import { takeLatest, takeEvery, all } from "redux-saga/effects";

import {getInventoryRequest} from './Inventory/action';

function* watchActions() {
    console.log("getInventoryRequest");
    
    yield takeLatest(constants.GET_INVENTORY_REQUEST, getInventoryRequest);
}

export default function* rootSaga() {
    yield all([watchActions()]);
  }