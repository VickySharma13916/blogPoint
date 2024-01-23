import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  getHeaderAddListBegin,
  getHeaderAddListFailure,
  getHeaderAddListSuccess,
} from "../actions/headerActions";

export function performGetHeaderAddList() {
  return async (dispatch) => {
    dispatch(getHeaderAddListBegin());
    try {
      const result = await axios.get(`${BASE_URL}headerAdd`);
      dispatch(getHeaderAddListSuccess(result?.data?.docs?.data));
      return result;
    } catch (error) {
      dispatch(getHeaderAddListFailure());
      return false;
    }
  };
}
