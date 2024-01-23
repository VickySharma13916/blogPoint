import HOME_TYPES from "../types/homeTypes";

export const resetState = () => ({
  type: HOME_TYPES.RESET_STATE,
});

export const getHomeBannerListBegin = () => ({
  type: HOME_TYPES.GET_HOME_BANNER_LIST_BEGIN,
});

export const getHomeBannerListSuccess = (data) => ({
  type: HOME_TYPES.GET_HOME_BANNER_LIST_SUCCESS,
  payload: data,
});

export const getHomeBannerListFailure = (error) => ({
  type: HOME_TYPES.GET_HOME_BANNER_LIST_FAILURE,
  payload: error,
});

export const getClientListBegin = () => ({
  type: HOME_TYPES.GET_CLIENT_LIST_BEGIN,
});

export const getClientListSuccess = (data) => ({
  type: HOME_TYPES.GET_CLIENT_LIST_SUCCESS,
  payload: data,
});

export const getClientListFailure = (error) => ({
  type: HOME_TYPES.GET_CLIENT_LIST_FAILURE,
  payload: error,
});
