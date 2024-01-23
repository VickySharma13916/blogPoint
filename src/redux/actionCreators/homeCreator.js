import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getClientListBegin,
  getClientListFailure,
  getClientListSuccess,
  getHomeBannerListBegin,
  getHomeBannerListFailure,
  getHomeBannerListSuccess,
} from "../actions/homeActions";

export function performGetHomeBannerList() {
  return async (dispatch) => {
    dispatch(getHomeBannerListBegin());
    try {
      const result = await axios.get(`${BASE_URL}homepage`);
      dispatch(getHomeBannerListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getHomeBannerListFailure());
      return false;
    }
  };
}

export function performGetClientList() {
  return async (dispatch) => {
    dispatch(getClientListBegin());
    try {
      const result = await axios.get(`${BASE_URL}client`);
      dispatch(getClientListSuccess(result.data));
      return result;
    } catch (error) {
      dispatch(getClientListFailure());
      return false;
    }
  };
}
