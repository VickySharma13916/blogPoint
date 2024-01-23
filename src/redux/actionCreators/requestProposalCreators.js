import axios from "axios";
import { BASE_URL } from "../../services/constant";
import {
  postRequestProposalBegin,
  postRequestProposalFailure,
  postRequestProposalSuccess,
} from "../actions/requestProposalActions";

export function performPostRequestProposalFile(data) {
  return async (dispatch) => {
    dispatch(postRequestProposalBegin());
    try {
      const result = await axios.post(
        `${BASE_URL}requestProposal/uploads`,
        data
      );
      dispatch(postRequestProposalSuccess(result?.data));
      return result;
    } catch (error) {
      dispatch(postRequestProposalFailure());
      return false;
    }
  };
}

export function performPostRequestProposal(data) {
  return async (dispatch) => {
    dispatch(postRequestProposalBegin());
    try {
      const result = await axios.post(`${BASE_URL}requestProposal`, data);
      dispatch(postRequestProposalSuccess(result?.data));
      return result;
    } catch (error) {
      dispatch(postRequestProposalFailure());
      return false;
    }
  };
}
