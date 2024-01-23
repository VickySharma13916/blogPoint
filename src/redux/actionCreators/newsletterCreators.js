import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getNewsletterByIdBegin,
  getNewsletterByIdFailure,
  getNewsletterByIdSuccess,
  getNewsletterListBegin,
  getNewsletterListFailure,
  getNewsletterListSuccess,
} from "../actions/newsletterActions";

export function performGetNewsletterList(params) {
  return async (dispatch) => {
    dispatch(getNewsletterListBegin());
    try {
      const result = await axios.get(`${BASE_URL}newsletter${params}`);
      dispatch(getNewsletterListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getNewsletterListFailure());
      return false;
    }
  };
}
export function performGetNewsletterById(id) {
  return async (dispatch) => {
    dispatch(getNewsletterByIdBegin());
    try {
      const result = await axios.get(`${BASE_URL}newsletter/${id}`);
      dispatch(getNewsletterByIdSuccess(result?.data?.docs));
      return result;
    } catch (error) {
      dispatch(getNewsletterByIdFailure());
      return false;
    }
  };
}
