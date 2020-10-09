import { createAction } from "redux-actions";
import constants from "./constants";

export const getInventoryRequest = createAction(constants.GET_INVENTORY_REQUEST);
export const getInventorySuccess = createAction(constants.GET_INVENTORY_SUCCESS);
export const getInventoryError = createAction(constants.GET_INVENTORY_ERROR);