import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getAnnouncementByIdBegin,
  getAnnouncementByIdFailure,
  getAnnouncementByIdSuccess,
  getAnnouncementListBegin,
  getAnnouncementListFailure,
  getAnnouncementListSuccess,
  getPressReleaseListFailure,
  getPressReleaseListSuccess,
  getPressReleasetListBegin,
} from "../actions/newsandmediaActions";

export function performGetAnnouncementList(params) {
  return async (dispatch) => {
    dispatch(getAnnouncementListBegin());
    try {
      const result = await axios.get(`${BASE_URL}announcement${params}`);
      dispatch(getAnnouncementListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getAnnouncementListFailure());
      return false;
    }
  };
}

export function performGetPressReleaseList(params) {
  return async (dispatch) => {
    dispatch(getPressReleasetListBegin());
    try {
      const result = await axios.get(`${BASE_URL}pressRelease${params}`);
      dispatch(getPressReleaseListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getPressReleaseListFailure());
      return false;
    }
  };
}

export function performGetAnnouncementById(id) {
  return async (dispatch) => {
    dispatch(getAnnouncementByIdBegin());
    try {
      const result = await axios.get(`${BASE_URL}announcement/${id}`);
      dispatch(getAnnouncementByIdSuccess(result?.data?.docs));
      return result;
    } catch (error) {
      dispatch(getAnnouncementByIdFailure());
      return false;
    }
  };
}
