import FOOTER_TYPES from "../types/footerTypes";

export const resetState = () => ({
  type: FOOTER_TYPES.RESET_STATE,
});

export const getFooterBegin = () => ({
  type: FOOTER_TYPES.GET_FOOTER_LIST_BEGIN,
});

export const getFooterSuccess = (data) => ({
  type: FOOTER_TYPES.GET_FOOTER_LIST_SUCCESS,
  payload: data,
});

export const getFooterFailure = (error) => ({
  type: FOOTER_TYPES.GET_FOOTER_LIST_FAILURE,
  payload: error,
});
