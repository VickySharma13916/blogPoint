import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  postContactBegin,
  postContactFailure,
  postContactSuccess,
} from "../actions/contactActions";

export function performPostContact(data) {
  return async (dispatch) => {
    dispatch(postContactBegin());
    try {
      const result = await axios.post(`${BASE_URL}contact`, data);
      dispatch(postContactSuccess(result?.data));
      return result;
    } catch (error) {
      dispatch(postContactFailure());
      return false;
    }
  };
}
