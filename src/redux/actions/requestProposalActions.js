import REQUEST_PROPOSAL_TYPES from "../types/requestProposalTypes";

export const resetState = () => ({
  type: REQUEST_PROPOSAL_TYPES.RESET_STATE,
});

export const postRequestProposalBegin = () => ({
  type: REQUEST_PROPOSAL_TYPES.POST_REQUEST_PROPOSAL_BEGIN,
});

export const postRequestProposalSuccess = (data) => ({
  type: REQUEST_PROPOSAL_TYPES.POST_REQUEST_PROPOSAL_SUCCESS,
  payload: data,
});

export const postRequestProposalFailure = (error) => ({
  type: REQUEST_PROPOSAL_TYPES.POST_REQUEST_PROPOSAL_FAILURE,
  payload: error,
});
