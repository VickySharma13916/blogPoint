import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getFooterBegin,
  getFooterFailure,
  getFooterSuccess,
} from "../actions/footerActions";

export function performGetFooter() {
  return async (dispatch) => {
    dispatch(getFooterBegin());
    try {
      const result = await axios.get(`${BASE_URL}footer`);
      dispatch(getFooterSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getFooterFailure());
      return false;
    }
  };
}
