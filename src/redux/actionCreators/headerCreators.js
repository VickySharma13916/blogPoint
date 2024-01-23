import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getHeaderBegin,
  getHeaderFailure,
  getHeaderSuccess,
} from "../actions/headerlinkActions";

export function performGetHeader() {
  return async (dispatch) => {
    dispatch(getHeaderBegin());
    try {
      const result = await axios.get(`${BASE_URL}header`);
      dispatch(getHeaderSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getHeaderFailure());
      return false;
    }
  };
}
