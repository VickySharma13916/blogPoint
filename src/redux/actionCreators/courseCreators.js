import axios from "axios";
import {
  getCourseDetailBegin,
  getCourseDetailFailure,
  getCourseDetailSuccess,
  getCourseListBegin,
  getCourseListFailure,
  getCourseListSuccess,
} from "../actions/courseActions";
import { BASE_URL } from "../../services/constant";

export function performGetCourseList() {
  return async (dispatch) => {
    dispatch(getCourseListBegin());
    try {
      const result = await axios.get(`${BASE_URL}course`);
      dispatch(getCourseListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getCourseListFailure());
      return false;
    }
  };
}
export function performGetCourseDetail(id) {
  return async (dispatch) => {
    dispatch(getCourseDetailBegin());
    try {
      const result = await axios.get(`${BASE_URL}course/${id}`);
      dispatch(getCourseDetailSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getCourseDetailFailure());
      return false;
    }
  };
}
