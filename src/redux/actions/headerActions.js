import HEADER_ADD_TYPES from "../types/headerAddTypes";

export const resetState = () => ({
  type: HEADER_ADD_TYPES.RESET_STATE,
});

export const getHeaderAddListBegin = () => ({
  type: HEADER_ADD_TYPES.GET_HEADER_ADD_LIST_BEGIN,
});

export const getHeaderAddListSuccess = (data) => ({
  type: HEADER_ADD_TYPES.GET_HEADER_ADD_LIST_SUCCESS,
  payload: data,
});

export const getHeaderAddListFailure = (error) => ({
  type: HEADER_ADD_TYPES.GET_HEADER_ADD_LIST_FAILURE,
  payload: error,
});
