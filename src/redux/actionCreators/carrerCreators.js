import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getCarrerListBegin,
  getCarrerListFailure,
  getCarrerListSuccess,
  postCarrerImageBegin,
  postCarrerImageFailure,
  postCarrerImageSuccess,
} from "../actions/carrerActions";

export function performGetCarrerList() {
  return async (dispatch) => {
    dispatch(getCarrerListBegin());
    try {
      const result = await axios.get(`${BASE_URL}carrer`);
      dispatch(getCarrerListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getCarrerListFailure());
      return false;
    }
  };
}
export function performPostCarrerFile(data) {
  return async (dispatch) => {
    dispatch(postCarrerImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}carrer/uploads`, data);
      dispatch(postCarrerImageSuccess(result?.data));
      return result;
    } catch (error) {
      dispatch(postCarrerImageFailure());
      return false;
    }
  };
}

export function performPostCarrer(data) {
  return async (dispatch) => {
    dispatch(postCarrerImageBegin());
    try {
      const id = data?.id;
      const result = await axios.post(
        `${BASE_URL}carrer/${id}/userdetails`,
        data
      );
      dispatch(postCarrerImageSuccess(result?.data));
      return result;
    } catch (error) {
      dispatch(postCarrerImageFailure());
      return false;
    }
  };
}
