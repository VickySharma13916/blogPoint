import WORKSHOP_TYPES from "../types/workshopTypes";

export const resetState = () => ({
  type: WORKSHOP_TYPES.RESET_STATE,
});

export const getWorkshopListBegin = () => ({
  type: WORKSHOP_TYPES.GET_ALL_WORKSHOP_LIST_BEGIN,
});

export const getWorkshopListSuccess = (data) => ({
  type: WORKSHOP_TYPES.GET_ALL_WORKSHOP_LIST_SUCCESS,
  payload: data,
});

export const getWorkshopListFailure = (error) => ({
  type: WORKSHOP_TYPES.GET_ALL_WORKSHOP_LIST_FAILURE,
  payload: error,
});

export const getWorkshopDetailBegin = () => ({
  type: WORKSHOP_TYPES.GET_WORKSHOP_DETAIL_BEGIN,
});

export const getWorkshopDetailSuccess = (data) => ({
  type: WORKSHOP_TYPES.GET_WORKSHOP_DETAIL_SUCCESS,
  payload: data,
});

export const getWorkshopDetailFailure = (error) => ({
  type: WORKSHOP_TYPES.GET_WORKSHOP_DETAIL_FAILURE,
  payload: error,
});
