import WHITEPAPER_TYPES from "../types/whitepaperTypes";

export const resetState = () => ({
  type: WHITEPAPER_TYPES.RESET_STATE,
});

export function setCurrentPage(page) {
  return {
    type: WHITEPAPER_TYPES.SET_CURRENT_PAGE,
    page, // Pass the page number as a payload
  };
}

export const getWhitepaperListBegin = () => ({
  type: WHITEPAPER_TYPES.GET_WHITEPAPER_LIST_BEGIN,
});

export const getWhitepaperListSuccess = (data) => ({
  type: WHITEPAPER_TYPES.GET_WHITEPAPER_LIST_SUCCESS,
  payload: data,
});

export const getWhitepaperListFailure = (error) => ({
  type: WHITEPAPER_TYPES.GET_WHITEPAPER_LIST_FAILURE,
  payload: error,
});

export const getWhitepaperByIdBegin = () => ({
  type: WHITEPAPER_TYPES.GET_WHITEPAPER_BYID_BEGIN,
});

export const getWhitepaperByIdSuccess = (data) => ({
  type: WHITEPAPER_TYPES.GET_WHITEPAPER_BYID_SUCCESS,
  payload: data,
});

export const getWhitepaperByIdFailure = (error) => ({
  type: WHITEPAPER_TYPES.GET_WHITEPAPER_BYID_FAILURE,
  payload: error,
});
