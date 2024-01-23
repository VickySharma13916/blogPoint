import CONTACT_TYPES from "../types/contactTypes";

export const resetState = () => ({
  type: CONTACT_TYPES.RESET_STATE,
});

export const postContactBegin = () => ({
  type: CONTACT_TYPES.POST_CONTACT_BEGIN,
});

export const postContactSuccess = (data) => ({
  type: CONTACT_TYPES.POST_CONTACT_SUCCESS,
  payload: data,
});

export const postContactFailure = (error) => ({
  type: CONTACT_TYPES.POST_CONTACT_FAILURE,
  payload: error,
});
