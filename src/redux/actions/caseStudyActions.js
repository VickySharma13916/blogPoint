import CASESTUDIES_TYPES from "../types/caseStudyTypes";

export const resetState = () => ({
  type: CASESTUDIES_TYPES.RESET_STATE,
});

export function setCurrentPage(page) {
  return {
    type: CASESTUDIES_TYPES.SET_CURRENT_PAGE,
    page, // Pass the page number as a payload
  };
}

export const getCaseStudiesListBegin = () => ({
  type: CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_BEGIN,
});

export const getCaseStudiesListSuccess = (data) => ({
  type: CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_SUCCESS,
  payload: data,
});

export const getCaseStudiesListFailure = (error) => ({
  type: CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_FAILURE,
  payload: error,
});

export const getCaseStudiesByIdBegin = () => ({
  type: CASESTUDIES_TYPES.GET_CASESTUDIES_BYID_BEGIN,
});

export const getCaseStudiesByIdSuccess = (data) => ({
  type: CASESTUDIES_TYPES.GET_CASESTUDIES_BYID_SUCCESS,
  payload: data,
});

export const getCaseStudiesByIdFailure = (error) => ({
  type: CASESTUDIES_TYPES.GET_CASESTUDIES_BYID_FAILURE,
  payload: error,
});
