import {
  getBlogListBegin,
  getBlogListSuccess,
  getBlogListFailure,
  getBlogByIdBegin,
  getBlogByIdSuccess,
  getBlogByIdFailure,
} from "../actions/blogActions";
import axios from "axios";
import { BASE_URL } from "../../services/constant";

export function performGetBlogList(params) {
  return async (dispatch) => {
    dispatch(getBlogListBegin());
    try {
      const result = await axios.get(`${BASE_URL}blogs${params}`);
      dispatch(getBlogListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getBlogListFailure());
      return false;
    }
  };
}
export function performGetBlogById(id) {
  return async (dispatch) => {
    dispatch(getBlogByIdBegin());
    try {
      const result = await axios.get(`${BASE_URL}blogs/${id}`);
      dispatch(getBlogByIdSuccess(result?.data?.docs));
      return result;
    } catch (error) {
      dispatch(getBlogByIdFailure());
      return false;
    }
  };
}
