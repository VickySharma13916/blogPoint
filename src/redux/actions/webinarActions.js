import WEBINAR_TYPES from "../types/webinarTypes";

export const resetState = () => ({
  type: WEBINAR_TYPES.RESET_STATE,
});

export const getWebinarListBegin = () => ({
  type: WEBINAR_TYPES.GET_ALL_WEBINAR_LIST_BEGIN,
});

export const getWebinarListSuccess = (data) => ({
  type: WEBINAR_TYPES.GET_ALL_WEBINAR_LIST_SUCCESS,
  payload: data,
});

export const getWebinarListFailure = (error) => ({
  type: WEBINAR_TYPES.GET_ALL_WEBINAR_LIST_SUCCESS,
  payload: error,
});

export const getWebinarDetailBegin = () => ({
  type: WEBINAR_TYPES.GET_WEBINAR_DETAIL_BEGIN,
});

export const getWebinarDetailSuccess = (data) => ({
  type: WEBINAR_TYPES.GET_WEBINAR_DETAIL_SUCCESS,
  payload: data,
});

export const getWebinarDetailFailure = (error) => ({
  type: WEBINAR_TYPES.GET_WEBINAR_DETAIL_FAILURE,
  payload: error,
});
