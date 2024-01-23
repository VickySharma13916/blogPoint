import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getWebinarDetailBegin,
  getWebinarDetailFailure,
  getWebinarDetailSuccess,
  getWebinarListBegin,
  getWebinarListFailure,
  getWebinarListSuccess,
} from "../actions/webinarActions";

export function performGetWebinarList() {
  return async (dispatch) => {
    dispatch(getWebinarListBegin());
    try {
      const result = await axios.get(`${BASE_URL}webinar`);
      dispatch(getWebinarListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getWebinarListFailure());
      return false;
    }
  };
}

export function performGetWebinarDetail(id) {
  return async (dispatch) => {
    dispatch(getWebinarDetailBegin());
    try {
      const result = await axios.get(`${BASE_URL}webinar/${id}`);
      dispatch(getWebinarDetailSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getWebinarDetailFailure());
      return false;
    }
  };
}
