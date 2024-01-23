import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getWhitepaperByIdBegin,
  getWhitepaperByIdFailure,
  getWhitepaperByIdSuccess,
  getWhitepaperListBegin,
  getWhitepaperListFailure,
  getWhitepaperListSuccess,
} from "../actions/whitepaperActions";

export function performGetWhitepaperList(params) {
  return async (dispatch) => {
    dispatch(getWhitepaperListBegin());
    try {
      const result = await axios.get(`${BASE_URL}whitepapers${params}`);
      dispatch(getWhitepaperListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getWhitepaperListFailure());
      return false;
    }
  };
}
export function performGetWhitepaperById(id) {
  return async (dispatch) => {
    dispatch(getWhitepaperByIdBegin());
    try {
      const result = await axios.get(`${BASE_URL}whitepapers/${id}`);
      dispatch(getWhitepaperByIdSuccess(result?.data?.docs));
      return result;
    } catch (error) {
      dispatch(getWhitepaperByIdFailure());
      return false;
    }
  };
}
