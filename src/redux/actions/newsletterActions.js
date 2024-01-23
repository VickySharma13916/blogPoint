import NEWSLETTER_TYPES from "../types/newsletterTypes";

export const resetState = () => ({
  type: NEWSLETTER_TYPES.RESET_STATE,
});

export function setCurrentPage(page) {
  return {
    type: NEWSLETTER_TYPES.SET_CURRENT_PAGE,
    page, // Pass the page number as a payload
  };
}

export const getNewsletterListBegin = () => ({
  type: NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_BEGIN,
});

export const getNewsletterListSuccess = (data) => ({
  type: NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_SUCCESS,
  payload: data,
});

export const getNewsletterListFailure = (error) => ({
  type: NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_FAILURE,
  payload: error,
});

export const getNewsletterByIdBegin = () => ({
  type: NEWSLETTER_TYPES.GET_NEWSLETTER_BYID_BEGIN,
});

export const getNewsletterByIdSuccess = (data) => ({
  type: NEWSLETTER_TYPES.GET_NEWSLETTER_BYID_SUCCESS,
  payload: data,
});

export const getNewsletterByIdFailure = (error) => ({
  type: NEWSLETTER_TYPES.GET_NEWSLETTER_BYID_FAILURE,
  payload: error,
});
