import CARRER_TYPES from "../types/carrerTypes";

export const resetState = () => ({
  type: CARRER_TYPES.RESET_STATE,
});

export const getCarrerListBegin = () => ({
  type: CARRER_TYPES.GET_CARRER_LIST_BEGIN,
});

export const getCarrerListSuccess = (data) => ({
  type: CARRER_TYPES.GET_CARRER_LIST_SUCCESS,
  payload: data,
});

export const getCarrerListFailure = (error) => ({
  type: CARRER_TYPES.POST_CARRER_IMAGE_BEGIN,
  payload: error,
});
export const postCarrerImageBegin = () => ({
  type: CARRER_TYPES.POST_CARRER_IMAGE_BEGIN,
});

export const postCarrerImageSuccess = (data) => ({
  type: CARRER_TYPES.POST_CARRER_IMAGE_SUCCESS,
  payload: data,
});

export const postCarrerImageFailure = (error) => ({
  type: CARRER_TYPES.GET_CARRER_LIST_FAILURE,
  payload: error,
});
