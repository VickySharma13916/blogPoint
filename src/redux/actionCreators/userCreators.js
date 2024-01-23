import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  postNewsletterUserDetailByIdBegin,
  postNewsletterUserDetailByIdFailure,
  postNewsletterUserDetailByIdSuccess,
  postUserDetailByIdBegin,
  postUserDetailByIdFailure,
  postUserDetailByIdSuccess,
  resetState,
} from "../actions/userActions";

export function performResetState() {
  return async (dispatch) => {
    dispatch(resetState());
  };
}

export function performUpdateUserDetail(newData) {
  return async (dispatch) => {
    dispatch(postUserDetailByIdBegin());
    const id = newData?.categoryId;
    const name = newData?.categoryName;
    try {
      const result = await axios.post(
        `${BASE_URL}${name}/${id}/userdetails`,
        newData
      );
      dispatch(postUserDetailByIdSuccess(result?.data));
      return result;
    } catch (error) {
      dispatch(postUserDetailByIdFailure());
      return false;
    }
  };
}
export function performUpdateNewsletterUserDetail(data) {
  return async (dispatch) => {
    dispatch(postNewsletterUserDetailByIdBegin());
    try {
      const result = await axios.post(`${BASE_URL}userDetail`, data);
      dispatch(postNewsletterUserDetailByIdSuccess(result?.data));
      return result;
    } catch (error) {
      dispatch(postNewsletterUserDetailByIdFailure());
      return false;
    }
  };
}
