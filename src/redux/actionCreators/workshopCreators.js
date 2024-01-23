import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getWorkshopDetailBegin,
  getWorkshopDetailFailure,
  getWorkshopDetailSuccess,
  getWorkshopListBegin,
  getWorkshopListFailure,
  getWorkshopListSuccess,
} from "../actions/workshopActions";

export function performGetWorkshopList() {
  return async (dispatch) => {
    dispatch(getWorkshopListBegin());
    try {
      const result = await axios.get(`${BASE_URL}workshop`);
      dispatch(getWorkshopListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getWorkshopListFailure());
      return false;
    }
  };
}

export function performGetWorkshopDetail(id) {
  return async (dispatch) => {
    dispatch(getWorkshopDetailBegin());
    try {
      const result = await axios.get(`${BASE_URL}workshop/${id}`);
      dispatch(getWorkshopDetailSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getWorkshopDetailFailure());
      return false;
    }
  };
}
