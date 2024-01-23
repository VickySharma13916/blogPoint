import USER_TYPES from "../types/userTypes";

export const resetState = () => ({
  type: USER_TYPES.RESET_STATE,
});
export const postUserDetailByIdBegin = () => ({
  type: USER_TYPES.POST_USERDETAILS_BEGIN,
});

export const postUserDetailByIdSuccess = (data) => ({
  type: USER_TYPES.POST_USERDETAILS_SUCCESS,
  payload: data,
});

export const postUserDetailByIdFailure = (error) => ({
  type: USER_TYPES.POST_USERDETAILS_FAILURE,
  payload: error,
});
export const postNewsletterUserDetailByIdBegin = () => ({
  type: USER_TYPES.POST_NEWSLETTER_USERDETAILS_BEGIN,
});

export const postNewsletterUserDetailByIdSuccess = (data) => ({
  type: USER_TYPES.POST_NEWSLETTER_USERDETAILS_SUCCESS,
  payload: data,
});

export const postNewsletterUserDetailByIdFailure = (error) => ({
  type: USER_TYPES.POST_NEWSLETTER_USERDETAILS_FAILURE,
  payload: error,
});
