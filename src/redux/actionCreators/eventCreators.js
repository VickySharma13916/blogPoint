import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getEventConferenceByIdBegin,
  getEventConferenceByIdFailure,
  getEventConferenceByIdSuccess,
  getEventConferenceListBegin,
  getEventConferenceListFailure,
  getEventConferenceListSuccess,
  getWebinarConferenceByIdBegin,
  getWebinarConferenceByIdFailure,
  getWebinarConferenceByIdSuccess,
  getWebinarConferenceListFailure,
  getWebinarConferenceListSuccess,
  getWebinarConferencetListBegin,
} from "../actions/eventActions";

export function performGetEventConferenceList(params) {
  return async (dispatch) => {
    dispatch(getEventConferenceListBegin());
    try {
      const result = await axios.get(`${BASE_URL}eventConference${params}`);
      dispatch(getEventConferenceListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getEventConferenceListFailure());
      return false;
    }
  };
}

export function performGetWebinarConferenceList(params) {
  return async (dispatch) => {
    dispatch(getWebinarConferencetListBegin());
    try {
      const result = await axios.get(`${BASE_URL}webinarConference${params}`);
      dispatch(getWebinarConferenceListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getWebinarConferenceListFailure());
      return false;
    }
  };
}

export function performGetEventConferenceById(id) {
  return async (dispatch) => {
    dispatch(getEventConferenceByIdBegin());
    try {
      const result = await axios.get(`${BASE_URL}eventConference/${id}`);
      dispatch(getEventConferenceByIdSuccess(result?.data?.docs));
      return result;
    } catch (error) {
      dispatch(getEventConferenceByIdFailure());
      return false;
    }
  };
}

export function performGetWebinarConferenceById(id) {
  return async (dispatch) => {
    dispatch(getWebinarConferenceByIdBegin());
    try {
      const result = await axios.get(`${BASE_URL}webinarConference/${id}`);
      dispatch(getWebinarConferenceByIdSuccess(result?.data?.docs));
      return result;
    } catch (error) {
      dispatch(getWebinarConferenceByIdFailure());
      return false;
    }
  };
}
