import HEADER_TYPES from "../types/headerTypes";

export const resetState = () => ({
  type: HEADER_TYPES.RESET_STATE,
});

export const getHeaderBegin = () => ({
  type: HEADER_TYPES.GET_HEADER_BEGIN,
});

export const getHeaderSuccess = (data) => ({
  type: HEADER_TYPES.GET_HEADER_SUCCESS,
  payload: data,
});

export const getHeaderFailure = (error) => ({
  type: HEADER_TYPES.GET_HEADER_FAILURE,
  payload: error,
});
