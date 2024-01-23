import COURSE_TYPES from "../types/courseTypes";

export const resetState = () => ({
  type: COURSE_TYPES.RESET_STATE,
});

export const getCourseListBegin = () => ({
  type: COURSE_TYPES.GET_ALL_COURSE_LIST_BEGIN,
});

export const getCourseListSuccess = (data) => ({
  type: COURSE_TYPES.GET_ALL_COURSE_LIST_SUCCESS,
  payload: data,
});

export const getCourseListFailure = (error) => ({
  type: COURSE_TYPES.GET_ALL_COURSE_LIST_SUCCESS,
  payload: error,
});

export const getCourseDetailBegin = () => ({
  type: COURSE_TYPES.GET_COURSE_DETAIL_BEGIN,
});

export const getCourseDetailSuccess = (data) => ({
  type: COURSE_TYPES.GET_COURSE_DETAIL_SUCCESS,
  payload: data,
});

export const getCourseDetailFailure = (error) => ({
  type: COURSE_TYPES.GET_COURSE_DETAIL_FAILURE,
  payload: error,
});
